import { useState, useEffect } from "react";
import './styles.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from './components/Stats';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default App;