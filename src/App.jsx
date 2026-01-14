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
            <div className="mb-12">
              <p className="font-pixel text-xl md:text-2xl text-meme-dark/80 mb-2 uppercase tracking-tighter">
                Anti-Boomer Coin • No Utility • No Roadmap • No Promises
              </p>
              <p className="font-retro text-2xl md:text-4xl text-meme-dark leading-tight max-w-2xl mx-auto">
                Join the most useless token in crypto history
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="pixel-btn bg-meme-yellow hover:bg-yellow-400 text-black text-xl border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                TWITTER
              </button>
              <button className="pixel-btn bg-white hover:bg-gray-100 text-black text-xl border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3">
                <span className="text-2xl">💊</span>
                PUMPFUN
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
