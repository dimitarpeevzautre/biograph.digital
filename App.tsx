
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import DataFlow from './components/DataFlow';
import FeatureGrid from './components/FeatureGrid';
import TechnicalSection from './components/TechnicalSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <main className="w-full max-w-7xl px-6 md:px-12 space-y-16 py-20 overflow-x-hidden">
        <Hero />
        <ProblemSolution />
        <DataFlow />

        <FeatureGrid />
        <TechnicalSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
