
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="join" className="py-32 flex flex-col items-center scroll-mt-28">
      <div className="w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-[#2d2d2d] leading-tight">One payment. <br/>A lifetime of stories.</h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
            Keep your legacy safe without worrying about monthly fees. Simple, honest pricing for a tool that grows with you.
          </p>
        </div>
        
        <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-black/5 relative group">
          <div className="absolute -top-4 -right-4 bg-[#dbe9d8] text-[#4a634a] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
            Best Value
          </div>
          
          <div className="mb-8">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Lifetime Access</div>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-bold tracking-tight text-[#2d2d2d]">$600</span>
              <span className="text-gray-400 font-medium">Once</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 text-gray-600">
            <li className="flex items-center gap-3">
               <span className="text-[#88a088]">✔</span> Unlimited Data Archives
            </li>
            <li className="flex items-center gap-3">
               <span className="text-[#88a088]">✔</span> Personal Storyteller AI
            </li>
            <li className="flex items-center gap-3">
               <span className="text-[#88a088]">✔</span> Privacy Shield Technology
            </li>
            <li className="flex items-center gap-3">
               <span className="text-[#88a088]">✔</span> Free Updates Forever
            </li>
          </ul>

          <button className="w-full py-5 bg-[#2d2d2d] text-white font-bold rounded-full hover:bg-black transition-all shadow-xl shadow-black/10">
            Secure Your Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
