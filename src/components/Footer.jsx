import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-meme-dark border-t-8 border-black py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-8">

                <div className="space-y-4">
                    <h2 className="font-pixel text-2xl text-white">PUMPITE</h2>
                    <p className="font-retro text-gray-400 max-w-lg mx-auto text-lg">
                        Literal meme coin. Do not buy. Do not expect financial return.
                        This is purely for entertainment.
                    </p>
                </div>

                <div className="flex space-x-8">
                    <a href="#" className="text-white hover:text-meme-yellow transition-transform hover:scale-110">TWITTER</a>
                    <a href="#" className="text-white hover:text-meme-yellow transition-transform hover:scale-110">DISCORD</a>
                    <a href="#" className="text-white hover:text-meme-yellow transition-transform hover:scale-110">TELEGRAM</a>
                </div>

                <div className="text-sm font-retro text-gray-600 pt-8 border-t-2 border-gray-800 w-full">
                    &copy; 2024 MEMELAND. ALL RIGHTS RESERVED (OR NOT).
                </div>
            </div>
        </footer>
    );
};

export default Footer;
