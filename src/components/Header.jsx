import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'MANIFESTO', href: '#manifesto' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-meme-dark border-b-4 border-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logo.GIF" alt="PUMPITE Logo" className="w-12 h-16" />
                        <span className="font-pixel text- white text-2xl tracking-widest text-white">PUMPITE</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="font-pixel text-sm text-white hover:text-meme-yellow transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-meme-yellow transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-meme-yellow p-2"
                        >
                            <div className="space-y-1.5 cursor-pointer">
                                <div className={`w-8 h-1 bg-white border border-black transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                                <div className={`w-8 h-1 bg-white border border-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-8 h-1 bg-white border border-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-meme-dark/95 backdrop-blur-sm border-b-4 border-black absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-4 font-pixel text-white hover:text-meme-yellow text-center border-b-2 border-white/10"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
