
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'How it works', href: '#how' },
    { name: 'Privacy', href: '#privacy' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fdfaf6]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#dbe9d8] to-[#fce4d8]"></div>
          Biograph
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2.5 bg-[#2d2d2d] text-white rounded-full text-xs font-semibold hover:bg-black transition-all shadow-lg shadow-black/10">
            Get Started
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#fdfaf6] border-b border-black/5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-600 hover:text-black py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-[#2d2d2d] text-white rounded-2xl text-sm font-semibold shadow-lg shadow-black/10">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
