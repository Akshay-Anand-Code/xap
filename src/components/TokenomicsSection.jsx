import React from 'react';

const TokenomicsSection = () => {
    return (
        <div id="about" className="bg-gradient-to-b from-meme-dark to-blue-950 py-20 px-4 border-t-8 border-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-pixel text-4xl md:text-5xl text-center text-white mb-16 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                    ABOUT $XAP
                </h2>

                <div className="space-y-12">
                    {/* Main description */}
                    <div className="bg-blue-900/50 border-4 border-blue-500 p-8 md:p-12">
                        <p className="font-retro text-2xl md:text-3xl text-blue-100 leading-relaxed">
                            PUMPITE ($XAP) IS A DIGITAL TOKEN COMPATIBLE WITH THE ERC-20 TOKEN STANDARD.
                        </p>
                        <p className="font-retro text-2xl md:text-3xl text-blue-100 leading-relaxed mt-6">
                            $XAP HAS NO FUNCTIONS, NO UTILITY AND NO INTRINSIC VALUE, NO PROMISE OR EXPECTATION
                            OF ANY FINANCIAL RETURN, PROFIT, INTEREST OR DIVIDEND.
                        </p>
                    </div>

                    {/* Warning box */}
                    <div className="bg-red-900/70 border-4 border-red-500 p-8 md:p-12">
                        <h3 className="font-pixel text-2xl text-red-200 mb-6 uppercase">⚠️ WARNING ⚠️</h3>
                        <p className="font-retro text-xl md:text-2xl text-red-100 leading-relaxed">
                            THIS IS LITERALLY JUST A MEME COIN. DO NOT BUY THIS TOKEN.
                            DO NOT EXPECT ANY FINANCIAL RETURN. THIS IS PURELY FOR ENTERTAINMENT PURPOSES.
                        </p>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-meme-dark border-4 border-white p-6 text-center hover:border-meme-yellow transition-colors">
                            <div className="text-6xl mb-4">🚫</div>
                            <h3 className="font-pixel text-white text-lg mb-3">NO UTILITY</h3>
                            <p className="font-retro text-gray-400 text-xl">Does absolutely nothing</p>
                        </div>

                        <div className="bg-meme-dark border-4 border-white p-6 text-center hover:border-meme-yellow transition-colors">
                            <div className="text-6xl mb-4">🗺️</div>
                            <h3 className="font-pixel text-white text-lg mb-3">NO ROADMAP</h3>
                            <p className="font-retro text-gray-400 text-xl">We have no plans</p>
                        </div>

                        <div className="bg-meme-dark border-4 border-white p-6 text-center hover:border-meme-yellow transition-colors">
                            <div className="text-6xl mb-4">🤝</div>
                            <h3 className="font-pixel text-white text-lg mb-3">NO PROMISES</h3>
                            <p className="font-retro text-gray-400 text-xl">Zero guarantees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenomicsSection;
