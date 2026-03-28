import React from 'react';
import { MapPin, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Map from './Map';

const IndiaMap = () => {
  const locations = [
    { id: 1, name: "Parekh Fabrics", city: "Ahmedabad", short: "Fabrics" },
    { id: 2, name: "Parekh Silk", city: "Surat", short: "Silk" },
    { id: 3, name: "Parekh Rayon", city: "Raipur", short: "Rayon" },
    { id: 4, name: "Parekh Linen", city: "Kolkata", short: "Linen" },
    { id: 5, name: "Parekh e-Trade Market", city: "Hyderabad", short: "e-Trade" },
    { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore", short: "Chamber" },
    { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai", short: "Southern" },
  ];

  return (
    <section className="bg-[#f8fafc] py-16 font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: Header & Description */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-100">
            <Globe size={14} /> National Presence
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase">
            Our Textile <span className="text-blue-600">Associates.</span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium max-w-2xl mx-auto">
            Digital integration of India's leading textile hubs for streamlined direct sourcing.
          </p>
        </div>

        {/* MIDDLE SECTION: Locations in X-Axis (Horizontal) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-500 transition-all group shadow-sm min-w-[180px] cursor-pointer"
            >
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin size={16} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">{loc.city}</h4>
                <p className="text-[11px] text-slate-500 font-bold uppercase">{loc.short}</p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-slate-200 group-hover:text-blue-600" />
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: Full Width Map */}
        <div className="relative w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-4 overflow-hidden">
          <div className="w-full h-[500px] md:h-[650px] lg:h-[750px] rounded-2xl overflow-hidden">
            <Map />
          </div>
          
          {/* Badge Overlay on Map */}
          <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-lg hidden md:flex items-center gap-3">
             <ShieldCheck size={20} className="text-emerald-500" />
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                Verified Network: 500+ Partners
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndiaMap;