import React from 'react';
import { MapPin, Globe, Factory, ArrowUpRight } from 'lucide-react';

// 1. Map Pin Component for better reuse
const MapPointer = ({ top, left, label, isHQ }) => (
  <div 
    className="absolute transform -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer z-20"
    style={{ top: `${top}%`, left: `${left}%` }}
  >
    <div className="relative">
      {/* Pulsing Effect */}
      <span className={`absolute inset-0 rounded-full ${isHQ ? 'bg-blue-500' : 'bg-red-500'} animate-ping opacity-75`}></span>
      
      {/* Pin Icon */}
      <MapPin 
        size={isHQ ? 32 : 24} 
        className={`${isHQ ? 'text-blue-600' : 'text-red-600'} drop-shadow-lg transition-transform group-hover/pin:scale-125`} 
        fill="white" 
      />
      
      {/* Tooltip on Hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap font-bold uppercase tracking-tighter">
        {label}
      </div>
    </div>
  </div>
);

const Map1 = () => {
  const hubs = [
    { city: 'Hyderabad', strength: 'Headquarters & Digital Hub', count: '120+', x: 48, y: 72, isHQ: true },
    { city: 'Surat', strength: 'Synthetic Fabrics', count: '85+', x: 28, y: 58 },
    { city: 'Ludhiana', strength: 'Knitwear & Woolen', count: '40+', x: 38, y: 18 },
    { city: 'Coimbatore', strength: 'Cotton Spinning', count: '65+', x: 42, y: 88 },
    { city: 'Bhiwandi', strength: 'Powerloom & Grey Fabric', count: '50+', x: 28, y: 65 },
  ];

  return (
    <section className="bg-slate-50 py-24 font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16">
          <span className="text-blue-600 font-black text-[10px] uppercase mb-4 block">Pan-India Presence</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase">
            Our Textile <br /> <span className="text-blue-600">Associates Network.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: INTERACTIVE MAP AREA */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full scale-75"></div>
            
            <div className="relative bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl border border-white">
              <div className="relative aspect-[4/5] md:aspect-square bg-slate-50 rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-slate-100">
                
                {/* SVG INDIA MAP (Simplified Path) */}
                <svg viewBox="0 0 500 600" className="w-full h-full p-8 opacity-20 fill-slate-400">
                    <path d="M150,100 L200,50 L250,80 L300,50 L350,100 L400,200 L380,300 L350,450 L250,550 L150,450 L120,300 L100,200 Z" />
                    {/* Note: In production, replace this <path> with a detailed India SVG path or an <img> */}
                    <image href="/india-map.avif" width="100%" height="100%" opacity="1" />
                </svg>

                {/* DYNAMIC MAP POINTERS */}
                {hubs.map((hub, idx) => (
                  <MapPointer 
                    key={idx} 
                    top={hub.y} 
                    left={hub.x} 
                    label={hub.city} 
                    isHQ={hub.isHQ} 
                  />
                ))}
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
                <p className="text-3xl font-black ">500+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Associates</p>
              </div>
            </div>
          </div>

          {/* RIGHT: HUB DETAILS */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Factory size={16} className="text-blue-600" /> Major Strategic Centers
            </h3>
            
            <div className="space-y-3">
              {hubs.map((hub, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-blue-500 hover:shadow-xl transition-all cursor-default">
                  <div>
                    <h4 className="font-black text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{hub.city}</h4>
                    <p className="text-xs text-slate-500 mt-1 font-medium">{hub.strength}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-blue-600 uppercase ">{hub.count} Partners</p>
                    <ArrowUpRight size={16} className="ml-auto mt-1 text-slate-200 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden group">
               <div className="relative z-10">
                 <h4 className="text-xl font-bold mb-2">Be part of the network?</h4>
                 <p className="text-blue-100 text-sm mb-6 font-medium">Expand your textile business digitally across India.</p>
                 <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                    Register as Associate
                 </button>
               </div>
               <Globe className="absolute -right-10 -bottom-10 text-white/10 w-40 h-40 group-hover:rotate-45 transition-transform duration-1000" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Map1;