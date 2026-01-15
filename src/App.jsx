import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ManifestoSection from './components/ManifestoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-retro">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ManifestoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
