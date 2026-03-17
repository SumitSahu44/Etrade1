import React from 'react';
import { Award, Target, Users } from 'lucide-react';

const Management = () => {
  return (
    <section className="py-20 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 italic">About Parekh e-Trade</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Parekh e-Trade Market (Textile) Hyderabad based ek advanced platform hai jo Buyers aur Sellers ko Textile Raw Materials, Finished Products, aur Machineries ke liye ek digital bridge provide karta hai.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-800 font-medium">
                <Target className="text-blue-600" size={20} /> Worldwide Textile Connectivity
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-medium">
                <Award className="text-blue-600" size={20} /> Verified Sellers & Transparent Auctions
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 h-48 rounded-3xl p-6 flex flex-col justify-end">
              <span className="text-3xl font-bold text-blue-600">25+</span>
              <span className="text-sm text-slate-500 uppercase">Years Experience</span>
            </div>
            <div className="bg-blue-600 h-48 rounded-3xl p-6 flex flex-col justify-end text-white">
              <span className="text-3xl font-bold">500+</span>
              <span className="text-sm text-blue-100 uppercase">Textile Associates</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-800">Our Management Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {['Sunil Parekh (MD)', 'Technical Head', 'Operations Manager'].map((name, i) => (
              <div key={i} className="group">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-transparent group-hover:border-blue-600 transition-all">
                  <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt={name} className="grayscale group-hover:grayscale-0" />
                </div>
                <h4 className="font-bold text-slate-900">{name}</h4>
                <p className="text-xs text-slate-500 uppercase mt-1">Parekh e-Trade Market</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;