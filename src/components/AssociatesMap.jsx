import React from 'react';
import { MapPin } from 'lucide-react';

const AssociatesMap = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 italic">Our Textile Associates</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Humara network poore India mein faila hua hai. Gujarat ke cotton mills se lekar Tamil Nadu ke spinning units tak, hum sabhi major textile hubs se jude hain.
          </p>
          <ul className="space-y-4">
            {['Maharashtra Hub', 'Gujarat Region', 'Telangana (TG) Network', 'Tamil Nadu Clusters'].map((hub) => (
              <li key={hub} className="flex items-center text-slate-700 font-medium">
                <MapPin className="text-blue-600 mr-3" size={20} /> {hub}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Map Placeholder - Yahan tum real SVG Map ya Google Map use kar sakte ho */}
        <div className="bg-slate-100 rounded-3xl p-10 flex items-center justify-center border-2 border-dashed border-slate-200 min-h-[400px]">
           <img 
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/India_administrative_map.svg/800px-India_administrative_map.svg.png" 
             alt="India Map" 
             className="opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer max-h-full"
           />
        </div>
      </div>
    </section>
  );
};

export default AssociatesMap;