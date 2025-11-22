import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team1 from './components/Team1';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team1 />
      <Contact />
      <Footer />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
