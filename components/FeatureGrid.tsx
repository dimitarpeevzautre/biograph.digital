
import React from 'react';

const FeatureGrid: React.FC = () => {
  const cards = [
    {
      title: "Chat with your Past",
      subtitle: "The Companion",
      icon: "💬",
      copy: "Ask your archive anything: 'What was the name of that little bakery in Paris?' or 'When did I first start gardening?'"
    },
    {
      title: "See the Journey",
      subtitle: "The Timeline",
      icon: "🗺️",
      copy: "Travel through your decades with ease. See your photos plotted on maps and synced with your journals and calendars."
    },
    {
      title: "Write Your Memoir",
      subtitle: "The Storyteller",
      icon: "🖋️",
      copy: "Automatically draft beautiful chapters of your life. Perfect for gifts, family histories, or personal reflection."
    }
  ];

  return (
    <section id="features" className="py-20">
      <h2 className="text-4xl font-bold text-[#2d2d2d] text-center mb-16">Designed for real life.</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-[40px] p-10 border border-black/5 card-hover flex flex-col h-full group">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{card.subtitle}</div>
            <div className="text-4xl mb-6">{card.icon}</div>
            <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4">{card.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm flex-grow">{card.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
