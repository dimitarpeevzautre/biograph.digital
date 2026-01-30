
import React, { useEffect, useState } from 'react';

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-[#2d2d2d] bg-[#dbe9d8]/40 px-1 rounded-sm">{children}</span>
);

const Hero: React.FC = () => {
  const [activeNote, setActiveNote] = useState(0);
  const memories = [
    "Exploring the rainy streets of Kyoto...",
    "The first day we moved into the cottage.",
    "Reading stories by the fireplace in 2021."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNote((prev) => (prev + 1) % memories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-16 pb-16 flex flex-col items-center text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#dbe9d8]/40 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#fce4d8]/40 blur-[120px]"></div>
      </div>

      <div className="space-y-8 max-w-4xl px-4">
        <div className="inline-block px-4 py-1.5 bg-white border border-black/5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
          A home for your memories
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#2d2d2d] leading-[1.1]">
          The private library for <br/> 
          <span className="text-[#88a088]">your life story.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
          Your photos, messages, and journals deserve a home that belongs only to you. <Highlight>Biograph</Highlight> helps you collect the fragments of your digital life and turn them into a beautiful, private biography.
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
        <a href="#join" className="px-10 py-4 bg-[#2d2d2d] text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-black/10 text-center">
          Start Your Archive ($600)
        </a>
        <a href="#how" className="px-10 py-4 bg-white border border-black/5 text-gray-600 font-bold rounded-full hover:bg-gray-50 transition-colors text-center">
          How it Works
        </a>
      </div>

      <div className="mt-24 w-full max-w-2xl bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-black/5 border border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dbe9d8]/20 rounded-bl-full"></div>
        <div className="text-left space-y-8 relative">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#fce4d8] flex items-center justify-center">
              ✨
            </div>
            <div>
              <h3 className="font-bold text-[#2d2d2d]"><Highlight>Biograph</Highlight> Assistant</h3>
              <p className="text-xs text-gray-400 italic">"I've organized 12 years of your history..."</p>
            </div>
          </div>
          
          <div className="bg-[#fdfaf6] p-6 rounded-2xl border border-black/[0.03]">
            <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest font-bold">Memory Spotlight</p>
            <p className="text-xl text-[#2d2d2d] font-medium leading-relaxed transition-opacity duration-1000">
              "{memories[activeNote]}"
            </p>
          </div>

          <div className="flex gap-2">
            {[0, 1, 2].map(i => (
              <div key={i} className={`h-1 rounded-full transition-all duration-500 ${activeNote === i ? 'w-8 bg-[#88a088]' : 'w-2 bg-gray-200'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
