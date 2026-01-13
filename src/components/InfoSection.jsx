import React from 'react';

const InfoSection = () => {
    const milestones = [
        { date: 'NOV 9', title: 'WAITLIST OPENS', description: 'Sign up for early access' },
        { date: 'DEC 1', title: 'FIRE SALE', description: 'Limited allocation available' },
        { date: 'JAN 15', title: 'AIRDROPS BEGIN', description: 'Claim your tokens' },
        { date: 'FEB 1', title: 'OFFICIAL LAUNCH', description: 'Trading goes live' },
    ];

    return (
        <div className="bg-meme-dark py-20 px-4 border-t-8 border-black relative overflow-hidden">
            {/* Space background */}
            <div className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: 'radial-gradient(2px 2px at 20% 30%, white, transparent), radial-gradient(2px 2px at 60% 70%, white, transparent), radial-gradient(1px 1px at 50% 50%, white, transparent)',
                    backgroundSize: '200px 200px, 300px 300px, 150px 150px'
                }}>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="font-pixel text-4xl md:text-5xl text-center text-white mb-16 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                    THE TIMELINE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="bg-blue-900/50 border-4 border-blue-500 p-6 hover:border-meme-yellow transition-all hover:scale-105 hover:shadow-[8px_8px_0px_rgba(251,188,5,0.5)]"
                            style={{ imageRendering: 'pixelated' }}
                        >
                            <div className="font-pixel text-meme-yellow text-sm mb-4">{milestone.date}</div>
                            <h3 className="font-pixel text-white text-lg mb-3 leading-relaxed">{milestone.title}</h3>
                            <p className="font-retro text-blue-200 text-xl">{milestone.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="bg-meme-dark border-4 border-meme-yellow p-8 max-w-3xl mx-auto shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
                        <p className="font-pixel text-white text-2xl md:text-3xl leading-loose uppercase">
                            WE DON'T NEED MORE MEME COINS.
                        </p>
                        <p className="font-pixel text-meme-yellow text-3xl md:text-4xl leading-loose uppercase mt-4">
                            WE ONLY NEED ONE.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
