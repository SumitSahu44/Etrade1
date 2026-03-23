import React from 'react';
import { Download, CheckCircle, Clock } from 'lucide-react';

const TenderWorking = () => {
  const activeTenders = [
    { id: "TND-99", subject: "Raw Silk Supply (5000kg)", status: "Open", deadline: "25 March 2026" },
    { id: "TND-102", subject: "Spinning Mill Spares - Yearly Contract", status: "Under Review", deadline: "30 March 2026" }
  ];

  return (
    <div className="bg-slate-900 text-white p-10 rounded-[40px] shadow-2xl overflow-hidden relative">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 ">
          <CheckCircle className="text-blue-400" /> Active Tender Desk
        </h3>
        
        <div className="space-y-4">
          {activeTenders.map(t => (
            <div key={t.id} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white/10 transition-all">
              <div>
                <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded uppercase font-bold">{t.id}</span>
                <h4 className="text-lg font-medium mt-1">{t.subject}</h4>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <Clock size={12} /> Deadline: {t.deadline}
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-xs">
                  <Download size={14} /> DOCS
                </button>
                <button className="flex-1 md:flex-none bg-blue-500 text-white px-6 py-2 rounded-lg font-bold text-xs hover:bg-blue-400 transition-colors">
                  APPLY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative BG element */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default TenderWorking;