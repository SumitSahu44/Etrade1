import React from 'react';
import { Users, BarChart3, Globe2, ShieldCheck } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: "Active Buyers", value: "2,500+", icon: <Users size={24} />, color: "text-blue-500" },
    { label: "Monthly Trade", value: "₹50Cr+", icon: <BarChart3 size={24} />, color: "text-emerald-500" },
    { label: "Cities Covered", value: "120+", icon: <Globe2 size={24} />, color: "text-orange-500" },
    { label: "Verified Sellers", value: "850+", icon: <ShieldCheck size={24} />, color: "text-purple-500" },
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-white italic tracking-tighter mb-1">
                {item.value}
              </h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Text Ribbon */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40">
          {['GST Verified', 'ISO Certified', 'Hyderabad Textile Association', 'Safe Payments'].map((text) => (
            <span key={text} className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
              ● {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;