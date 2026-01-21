import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
// import Community from './components/Community';
import ProfessionalExperience from './components/ProfessionalExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <ProfessionalExperience />
      {/* <Community /> */}
      <Contact />
      <Footer />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Preloader />
      {/* <SmoothScroll> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* </SmoothScroll> */}
    </Router>
  );
}

export default App;
