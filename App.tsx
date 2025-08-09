
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Companies from './components/ForYourEveryday'; // Repurposed for "Companies"
import Innovation from './components/FindUs'; // Repurposed for "Innovation"
import Contact from './components/Media'; // Repurposed for "Contact"
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Companies />
        <Innovation />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
