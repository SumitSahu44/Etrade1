import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

const TradeEnquiry = () => {
  return (
    <section className="py-20 bg-white px-6" id="enquiry">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ">Quick Trade Enquiry</h2>
            <p className="text-slate-400">Hume bataye aapko kya chahiye, hamari team 24 ghante mein contact karegi.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-blue-500 transition-all" />
            <input type="email" placeholder="Email ID" className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-blue-500 transition-all" />
            <select className="bg-white/5 border border-white/10 p-4 rounded-2xl text-slate-400 outline-none focus:border-blue-500 col-span-full">
              <option>Subject: e-Quotation Request</option>
              <option>Subject: Machinery Inquiry</option>
              <option>Subject: Raw Material Bulk Order</option>
              <option>Subject: Other Service</option>
            </select>
            <textarea placeholder="Message / Details of items" rows="4" className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-blue-500 col-span-full"></textarea>
            
            <button className="col-span-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-sm">
              <Send size={18} /> Send Enquiry
            </button>
          </form>
        </div>
        
        {/* Background Design */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default TradeEnquiry;