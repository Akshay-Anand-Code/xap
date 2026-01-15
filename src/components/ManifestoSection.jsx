import React from 'react';

const ManifestoSection = () => {
    return (
        <div id="manifesto" className="bg-gradient-to-b from-amber-900 via-yellow-800 to-amber-950 py-20 px-4 border-t-8 border-black relative overflow-hidden">
            {/* Glowing particles effect */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    animation: 'float 20s infinite linear'
                }}>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* The Manifesto */}
                <div className="bg-black/60 border-4 border-meme-yellow p-10 md:p-16 backdrop-blur-md shadow-[12px_12px_0px_rgba(251,191,36,0.4)]">
                    <h3 className="font-pixel text-3xl md:text-5xl text-meme-yellow mb-12 text-center uppercase tracking-widest drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                        The Pumpite Manifesto
                    </h3>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                            <span className="text-meme-yellow text-4xl flex-shrink-0">👑</span>
                            <p className="font-retro text-2xl md:text-3xl text-amber-100 leading-relaxed">
                                <span className="text-meme-yellow font-bold">PUMPITE</span> is here to meme the entire commodity market. Gold, Silver, Platinum — they all <span className="text-meme-yellow font-bold italic">bow to the new king</span>.
                            </p>
                        </div>

                        <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                            <span className="text-meme-yellow text-4xl flex-shrink-0">⛓️</span>
                            <p className="font-retro text-2xl md:text-3xl text-amber-100 leading-relaxed">
                                Traditional metals are relics of a bygone era. <span className="text-meme-yellow font-bold">PUMPITE ($XAP)</span> is the sovereign memerock, shattering the chains of boomer wealth.
                            </p>
                        </div>

                        <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                            <span className="text-meme-yellow text-4xl flex-shrink-0">🌋</span>
                            <p className="font-retro text-2xl md:text-3xl text-amber-100 leading-relaxed">
                                While gold gathers dust in vaults, <span className="text-meme-yellow font-bold">PUMPITE</span> flows through the trenches, powered by the euphoria of the new generation.
                            </p>
                        </div>

                        <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                            <span className="text-meme-yellow text-4xl flex-shrink-0">🏆</span>
                            <p className="font-retro text-2xl md:text-3xl text-amber-100 leading-relaxed">
                                <span className="text-meme-yellow font-bold">$XAP is the ultimate commodity bet.</span> The era of precious metals is over; the era of the memerock has begun.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="font-pixel text-meme-yellow text-2xl md:text-4xl uppercase leading-loose border-t-4 border-meme-yellow/30 pt-8">
                            Welcome to the future of Commodities.
                        </p>
                        <p className="font-pixel text-amber-300 text-xl md:text-2xl uppercase mt-4 opacity-80">
                            Welcome to Pumpite.
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

export default ManifestoSection;
