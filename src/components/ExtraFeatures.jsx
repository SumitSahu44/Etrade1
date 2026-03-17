import React from 'react';
import { Calendar, Image as ImageIcon, Video } from 'lucide-react';

const ExtraFeatures = () => {
  return (
    <div className="bg-slate-50 py-20 px-6 font-['Poppins']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Media Gallery Preview */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <ImageIcon className="text-blue-600" /> Media Gallery
            </h3>
            <button className="text-blue-600 text-sm font-bold">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
               <img src="https://images.unsplash.com/photo-1524292332409-30124d0ed6a8?q=80&w=2070" className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer" />
            </div>
            <div className="h-40 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
               <img src="https://images.unsplash.com/photo-1558271823-662425ce5e04?q=80&w=2070" className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Visit Appointment Form */}
        <div className="bg-blue-600 p-8 rounded-3xl shadow-xl text-white">
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Calendar /> Visit with Appointment
          </h3>
          <p className="text-blue-100 text-sm mb-6 font-light">Schedule a meeting with our experts at Hyderabad HQ.</p>
          
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-blue-100 outline-none" />
            <div className="grid grid-cols-2 gap-4">
               <input type="date" className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white" />
               <input type="time" className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white" />
            </div>
            <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-colors uppercase text-sm tracking-widest">
              Request e-Appointment
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ExtraFeatures;