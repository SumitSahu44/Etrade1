import React from 'react';
import { Gavel, FileText, Clock, ArrowUpRight } from 'lucide-react';

const TradeOpportunities = () => {
  const auctions = [
    { id: 1, title: "Used Spinning Machinery (2018 Model)", price: "₹45,00,000", time: "2h 45m left" },
    { id: 2, title: "Bulk Raw Cotton - 500 Bales", price: "₹12,50,000", time: "Ended" }
  ];

  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* e-Auction Component */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 text-red-600 rounded-2xl"><Gavel size={24} /></div>
            <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Live e-Auction</h3>
          </div>
          
          <div className="space-y-4">
            {auctions.map(item => (
              <div key={item.id} className="flex justify-between items-center p-4 border rounded-2xl hover:border-blue-500 transition-all cursor-pointer group">
                <div>
                  <h4 className="font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <Clock size={12} /> {item.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-blue-600 font-bold">{item.price}</p>
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-md group-hover:bg-blue-600 group-hover:text-white">BID NOW</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tender & Contract Component */}
        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl"><FileText size={24} /></div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">Tender & Contracts</h3>
          </div>
          <p className="text-slate-400 text-sm mb-8">
            Government and Private textile manufacturing contracts. Download tender documents and apply online.
          </p>
          <div className="space-y-4">
            <button className="w-full flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <span className="text-sm">Military Uniform Fabric Supply 2026</span>
              <ArrowUpRight size={18} className="text-blue-400" />
            </button>
            <button className="w-full flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <span className="text-sm">Technical Textile R&D Contract</span>
              <ArrowUpRight size={18} className="text-blue-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradeOpportunities;