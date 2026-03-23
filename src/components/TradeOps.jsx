import React from 'react';
import { Gavel, FileText, Clock, ArrowUpRight, ShieldCheck, Tag } from 'lucide-react';

const TradeOps = () => {
  // Mock Data for Live e-Auctions
  const auctions = [
    {
      id: "AUC-2026-01",
      title: "Premium Cotton Bales (50 Tons)",
      currentBid: "₹18,50,000",
      timeLeft: "04h 20m",
      location: "Gujarat Hub"
    },
    {
      id: "AUC-2026-02",
      title: "High-Speed Spinning Frame (Used)",
      currentBid: "₹12,00,000",
      timeLeft: "01h 15m",
      location: "Coimbatore"
    }
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* --- e-AUCTION CARD --- */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 text-orange-600 rounded-2xl">
                <Gavel size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 ">Live e-Auction</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Real-time Bidding</p>
              </div>
            </div>
            <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold animate-pulse">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span> LIVE NOW
            </span>
          </div>

          <div className="space-y-4">
            {auctions.map((item) => (
              <div key={item.id} className="p-5 border border-slate-100 rounded-3xl hover:border-blue-500 hover:bg-blue-50/30 transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <span className="text-[10px] text-slate-400 font-mono">#{item.id}</span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock size={12} /> Ends in: <span className="text-orange-600 font-bold">{item.timeLeft}</span>
                    </p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Tag size={12} /> {item.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-slate-900">{item.currentBid}</p>
                    <button className="text-[10px] font-bold text-blue-600 uppercase border-b border-blue-600 group-hover:border-b-2">Place Bid</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-4 bg-slate-50 rounded-2xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors">
            View All Auctions
          </button>
        </div>

        {/* --- TENDER & CONTRACT CARD --- */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
          {/* Decorative BG */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-500/40">
                <FileText size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white ">Tender & Contracts</h3>
                <p className="text-xs text-blue-400 uppercase tracking-widest font-semibold">Verified Opportunities</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              B2B bulk supply contracts aur industrial tenders. Sirf verified members hi apply kar sakte hain.
            </p>

            <div className="space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all flex justify-between items-center group/item cursor-pointer">
                <div>
                  <h4 className="text-white font-semibold">Indian Railways Uniform Fabric 2026</h4>
                  <p className="text-xs text-slate-500 mt-1  ">Value: ₹1.2 Cr | Status: Open</p>
                </div>
                <div className="p-2 bg-white/10 rounded-full group-hover/item:bg-blue-600 transition-all">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all flex justify-between items-center group/item cursor-pointer">
                <div>
                  <h4 className="text-white font-semibold">Technical Textile Export Contract (Germany)</h4>
                  <p className="text-xs text-slate-500 mt-1 ">Value: Private | Status: Under Review</p>
                </div>
                <div className="p-2 bg-white/10 rounded-full group-hover/item:bg-blue-600 transition-all">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck size={14} /> 100% Secure & Verified Trades
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradeOps;