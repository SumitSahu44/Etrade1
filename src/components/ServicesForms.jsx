import React from 'react';
import { FileEdit, ClipboardList, Briefcase } from 'lucide-react';

const ServicesForms = () => {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* e-Quotation Request */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><FileEdit /></div>
            <h3 className="text-2xl font-bold">e-Quotation Request</h3>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" placeholder="Product Name / Code" className="p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="number" placeholder="Required Quantity" className="p-4 bg-slate-50 border-none rounded-2xl outline-none" />
            <select className="p-4 bg-slate-50 border-none rounded-2xl outline-none md:col-span-2">
              <option>Select Delivery Timeline: Immediate</option>
              <option>Delivery Timeline: Within 15 Days</option>
              <option>Delivery Timeline: Monthly Contract</option>
            </select>
            <button className="md:col-span-2 bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-blue-600 transition-all uppercase tracking-widest text-xs">Generate <span className="lowercase">e-</span>Quotation</button>
          </form>
        </div>

        {/* Career & Circulars Sidebar */}
        <div className="space-y-8">
          {/* Career Box */}
          <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white">
            <Briefcase className="mb-4" />
            <h4 className="text-xl font-bold mb-2">Career Page</h4>
            <p className="text-blue-100 text-xs mb-6">Join our Hyderabad textile team. We are looking for Sales Executives.</p>
            <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-xs uppercase">Apply Now</button>
          </div>

          {/* Circular Box */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200">
            <h4 className="font-bold flex items-center gap-2 mb-4"><ClipboardList className="text-blue-600" /> Circulars</h4>
            <div className="space-y-3">
              <p className="text-xs text-slate-500 border-b pb-2 hover:text-blue-600 cursor-pointer ">● New GST Rules for Textile e-Trade 2026</p>
              <p className="text-xs text-slate-500 border-b pb-2 hover:text-blue-600 cursor-pointer ">● Cotton Price Update - Hyderabad Market</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesForms;