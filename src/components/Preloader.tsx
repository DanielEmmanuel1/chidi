import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

export default function Preloader() {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!canvasRef.current || !textContainerRef.current) return;

        const container = textContainerRef.current;
        const rect = container.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Get exact font size from computed styles for perfect match
        const computedStyle = window.getComputedStyle(container);
        const fontSizePx = parseFloat(computedStyle.fontSize);

        // Create high-resolution text mask canvas - EXACT size match
        const textCanvas = document.createElement('canvas');
        const textCtx = textCanvas.getContext('2d')!;
        const scale = 4; // Higher DPI for crisp mask
        textCanvas.width = width * scale;
        textCanvas.height = height * scale;

        // Clear and draw text mask with EXACT font matching
        textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
        textCtx.fillStyle = 'white';
        textCtx.font = `bold ${fontSizePx * scale}px Arial Black, sans-serif`;
        textCtx.textAlign = 'center';
        textCtx.textBaseline = 'middle';
        // @ts-ignore - letterSpacing is supported in modern browsers
        textCtx.letterSpacing = '-0.02em';
        textCtx.fillText('0xChidi', textCanvas.width / 2, textCanvas.height / 2);

        // Create texture from text canvas
        const textTexture = new THREE.CanvasTexture(textCanvas);
        textTexture.needsUpdate = true;

        // Three.js setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // DRAMATICALLY enhanced liquid shader with MUCH MORE visible wave movement
        const liquidMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uProgress: { value: 0 },
                uColor: { value: new THREE.Color(0xFFD700) }, // Standard bright yellow
                uTextMask: { value: textTexture },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform float uProgress;
                uniform vec3 uColor;
                uniform sampler2D uTextMask;
                varying vec2 vUv;

                // Improved noise for organic movement
                vec2 hash(vec2 p) {
                    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
                    return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
                }

                float noise(vec2 p) {
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    
                    float a = dot(hash(i), f);
                    float b = dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
                    float c = dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
                    float d = dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
                    
                    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
                }

                float fbm(vec2 p) {
                    float value = 0.0;
                    float amplitude = 0.5;
                    for(int i = 0; i < 6; i++) {
                        value += amplitude * noise(p);
                        p *= 2.0;
                        amplitude *= 0.5;
                    }
                    return value;
                }

                void main() {
                    vec2 uv = vUv;
                    
                    // Sample text mask
                    vec4 textMask = texture2D(uTextMask, uv);
                    float maskAlpha = textMask.r;
                    
                    // Discard pixels outside text
                    if (maskAlpha < 0.1) {
                        discard;
                    }
                    
                    // Base outline color (Gray)
                    vec3 finalColor = vec3(1.0, 1.0, 1.0) * 0.1; // rgba(255, 255, 255, 0.1)
                    
                    // --- Liquid Logic ---
                    
                    // DAMPING: Reduce wave amplitude as we reach the top (progress > 0.9)
                    // This ensures the liquid stops moving when full so it doesn't dip below the top
                    float waveDamping = 1.0 - smoothstep(0.9, 1.0, uProgress);
                    
                    // MUCH WAVIER: Significantly increased frequency for more "up and down" cycles
                    float wave1 = sin(uv.x * 20.0 + uTime * 5.0) * 0.12; // Increased freq from 12.0 to 20.0
                    float wave2 = sin(uv.x * 25.0 - uTime * 4.0) * 0.10; // Increased freq from 18.0 to 25.0
                    float wave3 = cos(uv.x * 15.0 + uTime * 6.0) * 0.12; // Increased freq from 10.0 to 15.0
                    
                    // More active turbulence
                    float turb1 = fbm(vec2(uv.x * 8.0 + uTime * 1.5, uTime * 1.5)) * 0.08;
                    float turb2 = fbm(vec2(uv.x * 12.0 - uTime * 1.2, uTime * 1.2)) * 0.06;
                    
                    // Apply damping to the total wave surface
                    float waveSurface = (wave1 + wave2 + wave3 + turb1 + turb2) * waveDamping;
                    
                    // Fill from BOTTOM to TOP
                    float fillLevel = uProgress + waveSurface;
                    float yPosition = uv.y; // 0 at bottom, 1 at top
                    
                    // Liquid mask
                    float liquidAlpha = smoothstep(fillLevel + 0.03, fillLevel - 0.03, yPosition);
                    
                    if (liquidAlpha > 0.01) {
                        // Liquid Color Gradient (Standard Yellow)
                        vec3 topColor = uColor * 0.9;     // Slightly darker at top
                        vec3 bottomColor = uColor * 1.2;  // Brighter at bottom
                        vec3 liquidColor = mix(bottomColor, topColor, yPosition);
                        
                        // Surface Glow
                        float edgeDistance = abs(yPosition - fillLevel);
                        float surfaceGlow = smoothstep(0.12, 0.0, edgeDistance);
                        liquidColor += vec3(1.0, 1.0, 0.8) * surfaceGlow * 0.8; // White/Yellow glow
                        
                        // Shimmer
                        float shimmer = fbm(vec2(uv.x * 15.0, uv.y * 15.0 + uTime * 1.0)) * 0.15;
                        liquidColor += shimmer;
                        
                        // Blend liquid on top of outline
                        finalColor = mix(finalColor, liquidColor, liquidAlpha);
                    }
                    
                    gl_FragColor = vec4(finalColor, maskAlpha);
                }
            `,
            transparent: true,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, liquidMaterial);
        scene.add(mesh);

        // Animation loop
        let animationId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            liquidMaterial.uniforms.uTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };
        animate();

        // Progress simulation - 3 seconds for smoother UX
        const duration = 3000;
        const startTime = Date.now();

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(Math.floor(newProgress));
            liquidMaterial.uniforms.uProgress.value = newProgress / 100;

            if (newProgress < 100) {
                requestAnimationFrame(updateProgress);
            } else {
                // Wait a bit to ensure liquid is fully settled/filled before transitioning
                setTimeout(() => {
                    const tl = gsap.timeline();

                    // Ensure clicks pass through during fade out
                    if (preloaderRef.current) {
                        preloaderRef.current.style.pointerEvents = 'none';
                    }

                    tl.to('.preloader-text', {
                        scale: 8,
                        duration: 1.2,
                        ease: 'power2.inOut',
                    });
                    tl.to(preloaderRef.current, {
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            if (preloaderRef.current) {
                                preloaderRef.current.style.display = 'none';
                            }
                        },
                    }, '-=0.5');
                }, 500);
            }
        };

        requestAnimationFrame(updateProgress);

        return () => {
            cancelAnimationFrame(animationId);
            geometry.dispose();
            liquidMaterial.dispose();
            textTexture.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-near-black overflow-hidden"
        >
            <div
                ref={textContainerRef}
                className="preloader-text relative"
                style={{ fontSize: 'clamp(80px, 15vw, 200px)', width: '100%', height: '1em' }}
            >
                {/* Three.js liquid canvas (renders BOTH outline and liquid) */}
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            {/* Progress counter */}
            <div
                className="mt-8 text-white/30 text-xs tracking-[0.3em]"
                style={{ fontFamily: 'monospace' }}
            >
                {progress}%
            </div>
        </div>
    );
}
