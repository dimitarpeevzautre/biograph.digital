
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#fdfaf6] border-t border-black/5 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="text-2xl font-bold tracking-tight text-[#2d2d2d] mb-4 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#dbe9d8]"></div>
            Biograph
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Building a gentler, more private way to remember our lives. Owned by you, forever.
          </p>
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
            Handcrafted in 2026
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#2d2d2d] uppercase tracking-widest">Product</span>
            <a href="#how" className="text-gray-400 text-sm hover:text-[#88a088] transition-colors">Our Method</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[#88a088] transition-colors">Documentation</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[#88a088] transition-colors">Join Discord</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#2d2d2d] uppercase tracking-widest">Ethics</span>
            <a href="#privacy" className="text-gray-400 text-sm hover:text-[#88a088] transition-colors">Privacy Promise</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[#88a088] transition-colors">Open Source</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[#88a088] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
