import React from 'react';

const LoreSection = () => {
    return (
        <div id="lore" className="bg-gradient-to-b from-amber-900 via-yellow-800 to-amber-950 py-20 px-4 border-t-8 border-black relative overflow-hidden">
            {/* Glowing particles effect */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    animation: 'float 20s infinite linear'
                }}>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Main Heading */}
                <h2 className="font-pixel text-4xl md:text-6xl text-center text-meme-yellow mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
                    THE LORE OF PUMPITE
                </h2>

                <p className="font-pixel text-center text-amber-200 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
                    EXTRACTED FROM THE DEEPEST TRENCHES. FORGED IN MEME MAGIC.
                </p>

                {/* Story Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Card 1: The Origin */}
                    <div className="bg-gradient-to-br from-yellow-600/30 to-amber-900/50 border-4 border-meme-yellow p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="text-6xl mb-4 text-center">⛏️</div>
                        <h3 className="font-pixel text-meme-yellow text-2xl mb-4 text-center">THE EXTRACTION</h3>
                        <p className="font-retro text-amber-100 text-xl leading-relaxed">
                            Deep in the digital trenches, a new commodity was discovered. <span className="text-meme-yellow font-bold">PUMPITE ($XAP)</span> -
                            the newest precious memerock, extracted straight from the mines of internet culture.
                        </p>
                    </div>

                    {/* Card 2: The Competition */}
                    <div className="bg-gradient-to-br from-yellow-600/30 to-amber-900/50 border-4 border-meme-yellow p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="text-6xl mb-4 text-center">🥇</div>
                        <h3 className="font-pixel text-meme-yellow text-2xl mb-4 text-center">GOLD'S RIVAL</h3>
                        <p className="font-retro text-amber-100 text-xl leading-relaxed">
                            While <span className="text-yellow-300">SPX6900</span> memes the stock market,
                            <span className="text-meme-yellow font-bold"> PUMPITE</span> is here to meme the entire commodity market.
                            Gold, Silver, Platinum - they all bow to the new king.
                        </p>
                    </div>

                    {/* Card 3: The Boomer Problem */}
                    <div className="bg-gradient-to-br from-yellow-600/30 to-amber-900/50 border-4 border-meme-yellow p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="text-6xl mb-4 text-center">👴</div>
                        <h3 className="font-pixel text-meme-yellow text-2xl mb-4 text-center">NEWGEN GOLD</h3>
                        <p className="font-retro text-amber-100 text-xl leading-relaxed">
                            Boomers hoard precious metals, hoping to dump on the next generation.
                            But we've got something better. <span className="text-meme-yellow font-bold">PUMPITE is the new generation's gold</span> -
                            digital, memeable, and unstoppable.
                        </p>
                    </div>

                    {/* Card 4: The Pump */}
                    <div className="bg-gradient-to-br from-yellow-600/30 to-amber-900/50 border-4 border-meme-yellow p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="text-6xl mb-4 text-center">🚀</div>
                        <h3 className="font-pixel text-meme-yellow text-2xl mb-4 text-center">THE COMMODITY BET</h3>
                        <p className="font-retro text-amber-100 text-xl leading-relaxed">
                            Metals are pumping. Commodities are soaring. And <span className="text-meme-yellow font-bold">PUMPITE</span> is
                            your ticket to ride the wave. The ultimate memerock bet on the commodity market's euphoric rise.
                        </p>
                    </div>
                </div>

                {/* The Manifesto */}
                <div className="bg-black/60 border-4 border-meme-yellow p-10 md:p-16 backdrop-blur-md shadow-[12px_12px_0px_rgba(251,191,36,0.4)]">
                    <h3 className="font-pixel text-3xl md:text-4xl text-meme-yellow mb-8 text-center uppercase">
                        The Pumpite Manifesto
                    </h3>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="text-meme-yellow text-3xl flex-shrink-0">💎</span>
                            <p className="font-retro text-2xl text-amber-100 leading-relaxed">
                                <span className="text-meme-yellow font-bold">SPX6900</span> is the meme version of the stock market (S&P500).
                                <span className="text-meme-yellow font-bold"> PUMPITE ($XAP)</span> is the meme version of the commodity/precious metals market.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="text-meme-yellow text-3xl flex-shrink-0">⚡</span>
                            <p className="font-retro text-2xl text-amber-100 leading-relaxed">
                                A <span className="text-meme-yellow font-bold">memerock</span> designed to compete with Gold ($XAU), Silver, and every precious metal.
                                Extracted from the trenches, refined by the community.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="text-meme-yellow text-3xl flex-shrink-0">🌟</span>
                            <p className="font-retro text-2xl text-amber-100 leading-relaxed">
                                The commodity markets are <span className="text-meme-yellow font-bold">pumping like never before</span>.
                                PUMPITE is your dreamy, euphoric bet on the metals that move the world.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="text-meme-yellow text-3xl flex-shrink-0">🔥</span>
                            <p className="font-retro text-2xl text-amber-100 leading-relaxed">
                                <span className="text-meme-yellow font-bold">$XAP is the best memecoin bet on the commodity market.</span> Period.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="font-pixel text-meme-yellow text-2xl md:text-3xl uppercase leading-loose">
                            Welcome to the future of meme commodities.
                        </p>
                        <p className="font-pixel text-amber-300 text-xl md:text-2xl uppercase mt-4">
                            Welcome to Pumpite.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-meme-yellow/20 border-4 border-meme-yellow px-8 py-6 backdrop-blur-sm">
                        <p className="font-pixel text-amber-100 text-lg md:text-xl">
                            🏆 THE MEMEROCK REVOLUTION HAS BEGUN 🏆
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
};

export default LoreSection;
