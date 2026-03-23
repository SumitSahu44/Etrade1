import React from 'react';
import { Award, Target, Users, LayoutGrid, Camera } from 'lucide-react';

const Management = () => {
  return (
    <section className="py-20 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- ABOUT SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-100">
              Company Overview
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase leading-tight">
              About Parekh <span className="text-blue-600">e-Trade.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg font-medium">
              Based in Hyderabad, Parekh e-Trade Market (Textile) is an advanced digital ecosystem designed to bridge the gap between global buyers and sellers. We specialize in the streamlined procurement of textile raw materials, finished goods, and industrial machinery.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                  <Target size={24} />
                </div>
                <span className="text-slate-800 font-bold uppercase text-xs tracking-wider">Global Textile Connectivity</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                  <Award size={24} />
                </div>
                <span className="text-slate-800 font-bold uppercase text-xs tracking-wider">Verified Sellers & Transparent Auctions</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
             {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 blur-[80px] rounded-full"></div>
            
            <div className="bg-slate-900 h-64 rounded-[3rem] p-8 flex flex-col justify-end shadow-2xl shadow-slate-200 transition-transform hover:-translate-y-2 duration-500">
              <span className="text-5xl font-black text-white mb-2">25+</span>
              <span className="text-[10px] text-blue-400 font-black uppercase tracking-[0.2em]">Years of Industry Experience</span>
            </div>
            <div className="bg-blue-600 h-64 rounded-[3rem] p-8 flex flex-col justify-end text-white shadow-2xl shadow-blue-200 transition-transform hover:-translate-y-2 duration-500 mt-12">
              <span className="text-5xl font-black mb-2">500+</span>
              <span className="text-[10px] text-blue-100 font-black uppercase tracking-[0.2em]">Verified Textile Associates</span>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: INDUSTRY GALLERY --- */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2 flex items-center justify-center gap-3">
              <LayoutGrid className="text-blue-600" size={24} /> Operational Excellence
            </h3>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">
            <div className="md:col-span-2 rounded-[3rem] overflow-hidden group relative">
              <img 
                src="https://img.freepik.com/free-photo/multi-color-fabric-texture-samples_1373-434.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Textile Factory" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-10">
                <p className="text-white font-bold uppercase tracking-widest text-sm">Industrial Hub Integration</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-1/2 rounded-[2.5rem] overflow-hidden group relative">
                <img 
                  src="https://img.freepik.com/free-photo/pile-textiles-background_53876-88751.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Quality Check" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="h-[calc(50%-1.5rem)] rounded-[2.5rem] overflow-hidden group relative">
                 <img 
                  src="https://cdn.shopify.com/s/files/1/1150/2764/files/Sustainable_Fabric_Dyeing_Quality_Inspection.jpg?v=1748847971" 
                  alt="Tech in Textile" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- MANAGEMENT TEAM --- */}
        <div className="text-center">
          <h3 className="text-2xl font-black mb-16 uppercase tracking-[0.3em] text-slate-900">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: 'Sunil Parekh', role: 'Managing Director' },
              { name: 'Technical Head', role: 'Digital Operations' },
              { name: 'Operations Manager', role: 'Supply Chain' }
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-slate-200 rounded-[2.5rem] overflow-hidden border-2 border-white relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                    <img 
                      src={`https://i.pravatar.cc/150?u=${i + 40}`} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                    />
                  </div>
                </div>
                <h4 className="font-black text-slate-900 text-lg uppercase">{member.name}</h4>
                <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;