import React from 'react';
import { Linkedin, Mail, ShieldCheck, Star, Zap, Globe, Heart } from 'lucide-react';

const TeamData = [
  {
    name: "Sunil Parekh",
    role: "Managing Director",
    desc: "A veteran with 25+ years of strategic leadership in Textile Trading and Global Market Dynamics.",
    img: "https://i.pravatar.cc/150?u=10",
    linkedIn: "#"
  },
  {
    name: "Rajesh Kumar",
    role: "Technical Head",
    desc: "Architect of our digital infrastructure, specializing in B2B automation and industrial IoT.",
    img: "https://i.pravatar.cc/150?u=11",
    linkedIn: "#"
  },
  {
    name: "Anjali Sharma",
    role: "Operations Manager",
    desc: "Overseeing end-to-end supply chain logistics with a focus on efficiency and global compliance.",
    img: "https://i.pravatar.cc/150?u=12",
    linkedIn: "#"
  }
];

const CoreValues = [
  { icon: <Zap size={20} />, title: "Innovation", text: "Pushing the boundaries of textile e-commerce." },
  { icon: <ShieldCheck size={20} />, title: "Trust", text: "Building secure, verified trading environments." },
  { icon: <Globe size={20} />, title: "Reach", text: "Connecting local hubs to global opportunities." },
  { icon: <Heart size={20} />, title: "Integrity", text: "Ethical trading practices in every transaction." }
];

const ManagementTeam = () => {
  return (
    <section className="py-24 bg-slate-50 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black tracking-widest uppercase mb-4">
              <Star size={12} /> Executive Leadership
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase leading-none">
              Meet Our <span className="text-blue-600">Visionary</span> Team.
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Parekh e-Trade is steered by industry pioneers committed to digitizing the textile supply chain through transparency and technology.
            </p>
          </div>
          <div className="flex lg:justify-end">
             <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-6">
                <div>
                   <p className="text-3xl font-black text-slate-900">100%</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Leadership</p>
                </div>
                <div className="w-[1px] h-12 bg-slate-100"></div>
                <div>
                   <p className="text-3xl font-black text-blue-600">50+</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Awards</p>
                </div>
             </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {TeamData.map((member, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] translate-y-4 translate-x-4 opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
              
              <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-blue-100 transition-all duration-500 group-hover:-translate-y-3">
                
                <div className="relative w-40 h-40 mx-auto mb-8">
                  <div className="absolute inset-0 bg-slate-100 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="relative w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <div className="text-center">
                  <h4 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">{member.name}</h4>
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-6">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                    {member.desc}
                  </p>

                  <div className="flex justify-center gap-4 pt-6 border-t border-slate-50">
                    <a href={member.linkedIn} className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- ADDED SECTION: CORE VALUES --- */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-12">
            {CoreValues.map((value, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h5 className="text-white font-black uppercase tracking-widest text-sm">{value.title}</h5>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{value.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/60 text-sm font-medium max-w-md text-center md:text-left">
              "Our team combines decades of textile tradition with cutting-edge digital innovation to serve the global market."
            </p>
            <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-blue-600 transition-all shadow-xl shadow-blue-500/20">
              Join our team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManagementTeam;