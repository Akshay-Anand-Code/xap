import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import LoreSection from './components/LoreSection';
import TokenomicsSection from './components/TokenomicsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-retro">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TokenomicsSection />
        <LoreSection />
        <InfoSection />

        {/* Additional CTA Section */}
        <div className="bg-meme-sky py-20 px-4 border-t-8 border-black text-center relative overflow-hidden">
          {/* Animated clouds */}
          <div className="absolute top-10 left-10 animate-pulse opacity-70">
            <div className="text-8xl">☁️</div>
          </div>
          <div className="absolute bottom-10 right-20 animate-pulse opacity-70" style={{ animationDelay: '1s' }}>
            <div className="text-8xl">☁️</div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Heading */}
            <h2 className="font-pixel text-4xl md:text-6xl text-meme-dark mb-12 drop-shadow-[4px_4px_0_rgba(255,255,255,0.5)]">
              READY TO MEME?
            </h2>

            {/* Centered GIF */}
            <div className="flex justify-center mb-8">
              <img
                src="/foot.gif"
                alt="Meme Animation"
                className="w-56 h-56 md:w-72 md:h-72 object-contain border-4 border-black shadow-[8px_8px_0px_#000] bg-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Tagline */}
            <p className="font-retro text-2xl md:text-3xl text-meme-dark mb-12 max-w-2xl mx-auto">
              Join the most useless token in crypto history
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="pixel-btn bg-meme-yellow hover:bg-yellow-400 text-black text-xl border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                GET STARTED
              </button>
              <button className="pixel-btn bg-meme-dark hover:bg-gray-800 text-white text-xl border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
