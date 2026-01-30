
import React from 'react';

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-[#2d2d2d] bg-[#dbe9d8]/40 px-1 rounded-sm">{children}</span>
);

const TechnicalSection: React.FC = () => {
  return (
    <section id="privacy" className="py-24 rounded-[40px] bg-[#fdfaf6] border border-black/5 p-8 md:p-16 overflow-hidden relative scroll-mt-28">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#dbe9d8]/10 blur-[100px] pointer-events-none"></div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-[#dbe9d8] text-[#4a634a] font-bold text-[10px] tracking-widest uppercase mb-6 rounded-full">Your Privacy is Sacred</div>
          <h2 className="text-5xl font-bold text-[#2d2d2d] mb-8 leading-tight">Private by design. Forever.</h2>
          
          <ul className="space-y-8">
            <li className="flex gap-5">
              <div className="w-6 h-6 rounded-full bg-[#fce4d8] flex-shrink-0 flex items-center justify-center text-[10px]">🔒</div>
              <div>
                <strong className="block text-[#2d2d2d] font-bold mb-1">Stays on your device</strong>
                <span className="text-gray-500 text-sm"><Highlight>Biograph</Highlight> runs entirely on your own home or cloud (we can help) setup. Your data never leaves your front door.</span>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="w-6 h-6 rounded-full bg-[#dbe9d8] flex-shrink-0 flex items-center justify-center text-[10px]">🔌</div>
              <div>
                <strong className="block text-[#2d2d2d] font-bold mb-1">Works without Internet</strong>
                <span className="text-gray-500 text-sm">Even if the world goes offline, your memories are still right there with you.</span>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="w-6 h-6 rounded-full bg-[#d8e6fc] flex-shrink-0 flex items-center justify-center text-[10px]">💎</div>
              <div>
                <strong className="block text-[#2d2d2d] font-bold mb-1">Native Integrity</strong>
                <span className="text-gray-500 text-sm">We don't alter your raw exports. <Highlight>Biograph</Highlight> indexes your files in their original state, ensuring your history is never locked in a proprietary black box.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="bg-white p-12 rounded-[60px] shadow-2xl border border-black/5 text-center space-y-6">
            <div className="w-24 h-24 bg-[#fdfaf6] rounded-full mx-auto flex items-center justify-center text-4xl shadow-inner border border-black/5">
              🛡️
            </div>
            <h3 className="text-2xl font-bold text-[#2d2d2d]">No Subscriptions. <br/>No Tracking.</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We built <Highlight>Biograph</Highlight> because we wanted it for ourselves. We don't want your data, and we don't want to charge you every month. You buy it once, and you own it for life.
            </p>
            <div className="pt-6">
              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">Verified Secure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
