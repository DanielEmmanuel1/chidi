declare module 'split-type' {
    export default class SplitType {
        constructor(target: HTMLElement | NodeList | string, options?: any);
        chars: HTMLElement[] | null;
        words: HTMLElement[] | null;
        lines: HTMLElement[] | null;
        revert(): void;
    }
}
