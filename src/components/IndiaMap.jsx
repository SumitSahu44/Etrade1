import React from 'react';
import { MapPin, Globe } from 'lucide-react';

const IndiaMap = () => {
  const hubs = [
    { city: "Ahmedabad", type: "Cotton Hub" },
    { city: "Surat", type: "Synthetic Fabric" },
    { city: "Hyderabad", type: "Parekh HQ & Logistics" },
    { city: "Coimbatore", type: "Spinning Units" },
    { city: "Ludhiana", type: "Woolen & Knits" }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold mb-6">
            <Globe size={14} /> PAN INDIA NETWORK
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 italic">Our Textile Associates</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Parekh e-Trade ka network poore desh ke pramukh textile hubs se juda hai, jo aapko har tarah ka raw material aur machinery provide karta hai.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hubs.map((hub) => (
              <div key={hub.city} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-blue-500 transition-all">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{hub.city}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{hub.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Map Illustration */}
        <div className="order-1 lg:order-2 relative flex justify-center">
          <div className="absolute inset-0 bg-blue-400/10 blur-[120px] rounded-full"></div>
          <img 
            src="/indiamap.avif" 
            alt="India Textile Map" 
            className="relative z-10 w-full  transition-all duration-700 opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default IndiaMap;