
import React from 'react';

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-[#2d2d2d] bg-[#dbe9d8]/40 px-1 rounded-sm">{children}</span>
);

const ProblemSolution: React.FC = () => {
  return (
    <section id="story" className="pt-12 space-y-12">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: The Problem (Now in a box) */}
        <div className="space-y-8 bg-white p-10 md:p-12 rounded-[40px] border border-black/5 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#fce4d8]/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <div className="w-12 h-12 rounded-2xl bg-[#fce4d8] flex items-center justify-center text-xl shadow-sm relative z-10">
            🧩
          </div>
          <h2 className="text-4xl font-bold text-[#2d2d2d] leading-tight relative z-10">
            The Reality of Silos.
          </h2>
          <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-light relative z-10">
            <p>
              Your personal history is currently siloed into dozens of different services and providers. As long as your memories are trapped in corporate clouds, they remain disconnected and unreadable.
            </p>
            <p className="text-[#2d2d2d] font-semibold border-l-4 border-[#fce4d8] pl-6 italic">
              The only way to truly process your history and get deep insights into your past is by owning and processing that data independently, on your own terms.
            </p>
          </div>
        </div>

        {/* Right Side: The Solution */}
        <div className="space-y-8 bg-white p-10 md:p-12 rounded-[40px] border border-black/5 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#dbe9d8]/20 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <div className="w-12 h-12 rounded-2xl bg-[#dbe9d8] flex items-center justify-center text-xl shadow-sm relative z-10">
            🏡
          </div>
          <h2 className="text-4xl font-bold text-[#2d2d2d] leading-tight relative z-10">
            A warm, private home <br/> for your legacy.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed relative z-10 font-light">
            <Highlight>Biograph</Highlight> bridges the gap between those silos. By bringing your archives into one private vault, you unlock the ability to cross-reference your whole life—connecting the dots between your travel logs, your journals, and your photos.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-6 md:p-10 rounded-[40px] border border-black/5">
        <div className="bg-white p-8 md:p-12 rounded-[30px] shadow-sm flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="text-6xl select-none">✨</div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#2d2d2d]">Independence is Insight</h3>
            <p className="text-gray-500 max-w-2xl leading-relaxed font-light">
              We believe your digital footprint is an extension of your own mind. You shouldn't have to ask a corporation for permission to understand your own history. <Highlight>Biograph</Highlight> provides the independent processing power to liberate your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
