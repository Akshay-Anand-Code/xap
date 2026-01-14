import React from 'react';
import heroBg from '../assets/hero-bg.png'; // Make sure this path is correct

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#8EE1FF]">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pixelated"
                style={{ backgroundImage: `url(${heroBg})`, imageRendering: 'pixelated' }}
            ></div>

            {/* Overlay Gradient for readability if needed, though pixel art usually pops */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-300/20 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">

                {/* Floating elements animation */}
                <div className="absolute top-0 left-10 animate-pulse hidden lg:block">
                    <div className="text-6xl">☁️</div>
                </div>
                <div className="absolute top-20 right-20 animate-bounce hidden lg:block" style={{ animationDuration: '3s' }}>
                    <div className="text-6xl">☁️</div>
                </div>

                <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-[4px_4px_0_#000] mb-8 leading-tight">
                    ONE $XAP <br /> TO RULE THEM ALL
                </h1>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 scale-110">
                    <button className="pixel-btn bg-meme-yellow hover:bg-yellow-400 text-black text-lg md:text-xl border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        TWITTER
                    </button>

                    <button className="pixel-btn bg-white hover:bg-gray-100 text-black text-lg md:text-xl border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3">
                        <span className="text-2xl">💊</span>
                        PUMPFUN
                    </button>
                </div>

                <p className="font-retro text-xl md:text-2xl text-meme-dark mt-12 bg-white/80 p-4 border-4 border-black inline-block shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
                    ANTI - BOOMER COIN . NO UTILITY. NO ROADMAP. NO PROMISES.
                </p>
            </div>

            {/* Foreground decoration - could be more coins/ground if not in image */}
            <div className="absolute bottom-0 w-full h-24 bg-repeat-x z-20"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, transparent 0%, #4FA332 20%, #4FA332 100%)',
                    borderTop: '4px solid black'
                }}>
            </div>
        </div>
    );
};

export default Hero;
