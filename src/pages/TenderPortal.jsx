import React from 'react';
import { 
  FileText, Gavel, ShieldCheck, Clock, ArrowUpRight, 
  Search, Filter, CheckCircle2, AlertCircle, Building2, 
  Globe2, Download, Lock
} from 'lucide-react';

const TenderPortal = () => {
  const activeTenders = [
    {
      id: "TND-2026-089",
      title: "Indian Railways: Winter Uniform Fabric Procurement",
      authority: "Ministry of Railways",
      value: "₹4.20 Crores",
      deadline: "Oct 15, 2026",
      status: "Open",
      category: "Finished Goods"
    },
    {
      id: "TND-2026-104",
      title: "Global Export: Organic Cotton Yarn Supply (EU Standards)",
      authority: "EuroTextile Alliance",
      value: "₹1.85 Crores",
      deadline: "Nov 02, 2026",
      status: "Under Review",
      category: "Raw Material"
    },
    {
      id: "TND-2026-112",
      title: "State Hospital Linen & Medical Textile Contract",
      authority: "Health Dept. Govt of TS",
      value: "₹85.00 Lakhs",
      deadline: "Oct 28, 2026",
      status: "Open",
      category: "Technical Textiles"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-['Poppins']">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 pt-32 pb-40 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8">
            <ShieldCheck size={14} /> Verified Procurement Gateway
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6">
            Tenders & <span className="text-blue-500">Contracts.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed">
            Access exclusive B2B government and private sector textile contracts. 
            Participate in high-value tenders with end-to-end legal transparency.
          </p>
          
          {/* SEARCH BAR */}
        
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 pb-24 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: LIVE TENDERS LIST (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-xl font-black text-slate-900 uppercase ">Active Opportunities</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase ">Showing {activeTenders.length} verified listings</p>
            </div>

            {activeTenders.map((tender) => (
              <div key={tender.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all group">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase  border border-blue-100">
                        {tender.category}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400">ID: {tender.id}</span>
                    </div>
                    <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase leading-tight">
                      {tender.title}
                    </h4>
                    <div className="flex flex-wrap gap-6 items-center">
                      <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                        <Building2 size={16} className="text-slate-300" /> {tender.authority}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                        <Clock size={16} className="text-orange-400" /> Deadline: {tender.deadline}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:text-right flex flex-col justify-between items-start md:items-end gap-6">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase  mb-1">Estimated Value</p>
                      <p className="text-2xl font-black text-slate-900">{tender.value}</p>
                    </div>
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase  hover:bg-blue-600 transition-all flex items-center gap-2">
                      View Documents <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button className="w-full py-6 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-slate-400 font-bold hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all text-sm">
              Load Previous Tenders & Archive
            </button>
          </div>

          {/* RIGHT: PORTAL ACTIONS (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* BIDDING CONSOLE */}
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
                  <Gavel size={24} />
                </div>
                <h4 className="font-black text-slate-900 uppercase ">Bid Submission</h4>
              </div>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <p className="text-xs font-bold text-slate-700">KYC Status: Verified</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <AlertCircle className="text-blue-500" size={20} />
                  <p className="text-xs font-bold text-slate-700">Digital Signature Active</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-8 italic">
                Authorized Officials can submit EMD (Earnest Money Deposit) and technical bids directly via the portal.
              </p>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs uppercase  hover:bg-slate-900 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2">
                <Lock size={16} /> Secure Bid Console
              </button>
            </div>

            {/* DOWNLOAD RESOURCES */}
            <div className="bg-slate-900 p-8 rounded-[3rem] text-white overflow-hidden relative group">
              <Download className="absolute -top-4 -right-4 text-white/5 group-hover:text-white/10 transition-all" size={120} />
              <h4 className="font-black uppercase  text-sm mb-6 relative z-10">Resource Center</h4>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center justify-between group/link cursor-pointer">
                  <span className="text-xs text-slate-400 font-bold group-hover/link:text-blue-400 transition-colors">Tender Guidelines 2026</span>
                  <ArrowUpRight size={14} className="text-slate-600" />
                </li>
                <li className="flex items-center justify-between group/link cursor-pointer">
                  <span className="text-xs text-slate-400 font-bold group-hover/link:text-blue-400 transition-colors">Standard Bidding Document</span>
                  <ArrowUpRight size={14} className="text-slate-600" />
                </li>
                <li className="flex items-center justify-between group/link cursor-pointer">
                  <span className="text-xs text-slate-400 font-bold group-hover/link:text-blue-400 transition-colors">Logistics Compliance PDF</span>
                  <ArrowUpRight size={14} className="text-slate-600" />
                </li>
              </ul>
            </div>

            {/* LOGISTICS STATUS */}
            <div className="bg-emerald-500 p-8 rounded-[3rem] text-white">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 size={24} />
                <h4 className="font-black uppercase  text-xs">Contract Fulfillment</h4>
              </div>
              <p className="text-3xl font-black mb-2 leading-none">98.4%</p>
              <p className="text-[10px] font-black uppercase  opacity-80">Successful Dispatch Rate</p>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER SUPPORT */}
      <div className="text-center py-20 border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">Parekh e-Trade Contract Management System</p>
        <div className="flex justify-center gap-8">
           <a href="#" className="text-blue-600 font-bold text-xs uppercase hover:underline">Support Portal</a>
           <a href="#" className="text-blue-600 font-bold text-xs uppercase hover:underline">Legal Desk</a>
           <a href="#" className="text-blue-600 font-bold text-xs uppercase hover:underline">Escrow Status</a>
        </div>
      </div>
    </div>
  );
};

export default TenderPortal;