
import React from 'react';

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-[#2d2d2d] bg-[#dbe9d8]/40 px-1 rounded-sm">{children}</span>
);

const DataFlow: React.FC = () => {
  const steps = [
    {
      title: "Private Foundation",
      subtitle: "The Infrastructure",
      icon: "🖥️",
      bg: "#dbe9d8",
      desc: "Install Biograph on your own hardware—be it a local home server or your private cloud node. If you're not technical, we provide white-glove setup assistance to ensure your foundation is rock solid."
    },
    {
      title: "Local Ingestion",
      subtitle: "The Engine",
      icon: "🧠",
      bg: "#d8e6fc",
      desc: "Our engine uses open-source LLMs to process everything locally. It builds a personal vector database of your life, understanding context, people, and emotions—without a single byte ever leaving your network."
    },
    {
      title: "Your Life, Conversational",
      subtitle: "The Interface",
      icon: "🖋️",
      bg: "#e2d8fc",
      desc: "Interact with your history through a beautiful, natural interface. From specific queries to high-level reflections, your life's data is now an open book that only you can read."
    }
  ];

  const useCases = [
    {
      query: "How much did I travel last year?",
      insight: "Biograph scans your location history, flight receipts, and calendar to give you a precise map of your 2024 adventures."
    },
    {
      query: "What missing services can enrich my story?",
      insight: "By analyzing your Gmail receipts, Biograph can suggest missing data points—like your old Strava logs or Spotify history—to complete the picture."
    },
    {
      query: "Write a memoir of my 20s.",
      insight: "Biograph drafts a cohesive, beautifully written narrative of your decade, using your photos and journals as the primary source of truth."
    }
  ];

  return (
    <section id="how" className="pt-24 pb-16 space-y-24 scroll-mt-28">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-block px-4 py-1.5 bg-white border border-black/5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          The Architecture of Privacy
        </div>
        <h2 className="text-5xl font-bold text-[#2d2d2d] leading-tight">Your data. Your hardware. <br/> Your intelligence.</h2>
        <p className="text-gray-500 text-lg font-light leading-relaxed">
          Biograph isn't just an app; it's a private operating system for your personal history. Here is how we liberate your memories from the corporate cloud.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[40px] border border-black/5 card-hover flex flex-col space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-bl-full transition-transform group-hover:scale-110" style={{ backgroundColor: step.bg }}></div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{step.subtitle}</div>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm relative z-10" style={{ backgroundColor: step.bg }}>
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-[#2d2d2d] leading-tight">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#fdfaf6] border border-black/5 rounded-[50px] p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-[#2d2d2d] leading-tight">What will you ask <br/> your past?</h3>
            <div className="space-y-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#88a088]"></div>
                    <span className="font-bold text-[#2d2d2d]">"{useCase.query}"</span>
                  </div>
                  <p className="text-gray-400 text-sm pl-5 group-hover:text-gray-600 transition-colors">{useCase.insight}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-black/5 space-y-6">
              <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                <div className="w-8 h-8 rounded-full bg-[#dbe9d8] flex items-center justify-center">✨</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Biograph Memoir Engine</div>
              </div>
              <div className="space-y-4 italic text-gray-500 text-sm leading-relaxed">
                <p>"The summer of 2018 began with a simple flight to Kyoto. Looking at your spend history, you prioritized small tea houses over tourist landmarks. Your journal notes that the rain on the second night felt like 'a reset button'..."</p>
                <p>"By 2021, your musical taste shifted toward Lane 8, coinciding with your move to the Portland suburbs where you planted that first rose bush..."</p>
              </div>
              <div className="pt-4 flex justify-between items-center border-t border-black/5">
                <span className="text-[10px] font-bold text-[#88a088]">GENERATE CHAPTER II</span>
                <span className="text-[10px] text-gray-300">3,420 WORDS WRITTEN</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fce4d8]/30 blur-[40px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlow;
