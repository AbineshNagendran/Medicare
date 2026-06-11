import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Consultants from './components/Consultants';
import AdditionalFeatures from './components/AdditionalFeatures';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

/**
 * App Component (Medsteps Landing Page Root)
 * 
 * Orchestrates:
 * 1. Global state for Dark/Light theme toggling.
 * 2. Root assembly of responsive sectional components.
 */
function App() {
  // Theme state: default is light mode (false)
  const [darkMode, setDarkMode] = useState(false);

  // Sync state with HTML root element so Tailwind's 'dark:' selectors work
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-primary/20 selection:text-primary-dark">
      {/* Header Navigation with theme controls passed down as props */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Main Sections */}
      <main>
        <Hero />
        <Partners />
        <Features />
        <Consultants />
        <AdditionalFeatures />
        <CtaBanner />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;

