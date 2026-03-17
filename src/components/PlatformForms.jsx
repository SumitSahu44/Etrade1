import React, { useState } from 'react';
import { Upload, Eye, CheckCircle2, X } from 'lucide-react';

const PlatformForms = () => {
  const [activeTab, setActiveTab] = useState('buyer');
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({});

  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Common Fields for both Buyer & Seller
  const BusinessDetails = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full bg-blue-50 p-4 rounded-xl flex flex-wrap justify-between gap-4 border border-blue-100">
          <span className="text-sm font-bold text-blue-800 uppercase tracking-tighter">Authorized Official: Sunil Parekh</span>
          <span className="text-sm font-bold text-blue-800 tracking-tighter uppercase">Code No: PT-TRADE-2026</span>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 ml-1">NAME OF {activeTab.toUpperCase()}</label>
          <input name="name" onChange={handleInput} type="text" className="p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Full Name" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 ml-1">TITLE OF BUSINESS</label>
          <input name="businessTitle" onChange={handleInput} type="text" className="p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Company Name" />
        </div>

        <div className="flex flex-col gap-1 md:col-span-2 lg:col-span-1">
          <label className="text-xs font-bold text-slate-500 ml-1">ADDRESS</label>
          <input name="address" onChange={handleInput} type="text" className="p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Business Address" />
        </div>

        <input name="mobile" onChange={handleInput} placeholder="Mobile No." className="p-4 bg-slate-100 rounded-2xl outline-none" />
        <input name="email" onChange={handleInput} placeholder="Email Id" className="p-4 bg-slate-100 rounded-2xl outline-none" />
        <input name="url" onChange={handleInput} placeholder="URL (if any)" className="p-4 bg-slate-100 rounded-2xl outline-none" />

        <select name="nature" onChange={handleInput} className="p-4 bg-slate-100 rounded-2xl outline-none text-slate-500 font-medium">
          <option>Nature of Business</option>
          <option>Retailer</option>
          <option>Wholesaler</option>
          <option>Manufacturers</option>
        </select>

        <select name="category" onChange={handleInput} className="p-4 bg-slate-100 rounded-2xl outline-none text-slate-500 font-medium">
          <option>Category of Business</option>
          <option>Proprietorship</option>
          <option>Partnership</option>
          <option>LLP</option>
          <option>Private Limited</option>
          <option>Ltd.</option>
        </select>

        <input name="membership" onChange={handleInput} placeholder="Membership in Chamber of Textile" className="p-4 bg-slate-100 rounded-2xl outline-none" />
      </div>

      <div className="mt-8">
        <label className="text-xs font-bold text-slate-500 ml-1 mb-3 block italic uppercase">Upload Documents (GST, MSME, Trade License, Labour License, LLP, CIN)</label>
        <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-8 flex flex-col items-center justify-center text-slate-400 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
          <Upload size={32} className="mb-2 text-blue-600" />
          <p className="text-sm font-medium">Click to upload required business documents</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 font-['Poppins']">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        
        {/* TABS */}
        <div className="flex bg-slate-100 p-2">
          <button onClick={() => setActiveTab('buyer')} className={`flex-1 py-4 rounded-[2rem] font-bold text-sm transition-all ${activeTab === 'buyer' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>BUYER'S PLATFORM</button>
          <button onClick={() => setActiveTab('seller')} className={`flex-1 py-4 rounded-[2rem] font-bold text-sm transition-all ${activeTab === 'seller' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>SELLER'S PLATFORM</button>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-8 border-blue-600 pl-4 italic uppercase tracking-tighter">
            {activeTab} Registration
          </h2>

          <form className="space-y-12">
            <BusinessDetails />

            {/* Textile Items Form Section */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden">
               <div className="relative z-10">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3 italic">
                  <CheckCircle2 className="text-blue-400" /> Textile Items To {activeTab === 'buyer' ? 'Buy' : 'Sell'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1 col-span-full lg:col-span-1">
                    <label className="text-[10px] font-bold text-slate-400 ml-1">SELECT CATEGORY (ROLL-DOWN)</label>
                    <select name="itemCategory" onChange={handleInput} className="p-4 bg-white/10 border border-white/20 rounded-2xl outline-none text-white appearance-none">
                      <option className="bg-slate-900">Textile Raw Materials</option>
                      <option className="bg-slate-900">Textile Finished Products</option>
                      <option className="bg-slate-900">Textile Industrial Machineries</option>
                      <option className="bg-slate-900">Textile Spares</option>
                    </select>
                  </div>
                  <input name="qty" onChange={handleInput} placeholder="Required Qty" className="p-4 bg-white/10 border border-white/20 rounded-2xl outline-none text-white placeholder:text-slate-400" />
                  <input name="rate" onChange={handleInput} placeholder="Tentative Rate" className="p-4 bg-white/10 border border-white/20 rounded-2xl outline-none text-white placeholder:text-slate-400" />
                  <input name="budget" onChange={handleInput} placeholder="Tentative Budget" className="p-4 bg-white/10 border border-white/20 rounded-2xl outline-none text-white placeholder:text-slate-400 col-span-full lg:col-span-1" />
                  <textarea name="desc" onChange={handleInput} placeholder="Description of items" className="p-4 bg-white/10 border border-white/20 rounded-2xl outline-none text-white placeholder:text-slate-400 col-span-full h-24"></textarea>
                </div>
               </div>
            </div>

            {/* Form Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <button 
                type="button" 
                onClick={() => setShowPreview(true)}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all"
              >
                <Eye size={18} /> Preview Form
              </button>
              <button 
                type="submit" 
                className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {showPreview && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-[1000] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] p-8 md:p-12 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button onClick={() => setShowPreview(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
            
            <h3 className="text-3xl font-black italic mb-8 border-b-4 border-blue-600 pb-2 inline-block">Final Review</h3>
            
            <div className="space-y-6 mt-4">
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Business Name</p>
                <p className="font-bold text-slate-900">{formData.businessTitle || 'N/A'}</p>
                
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Contact Person</p>
                <p className="font-bold text-slate-900">{formData.name || 'N/A'}</p>

                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Nature / Category</p>
                <p className="font-bold text-slate-900">{formData.nature} / {formData.category}</p>

                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Required Item</p>
                <p className="font-bold text-blue-600">{formData.itemCategory || 'Not Selected'}</p>
              </div>

              <div className="bg-slate-100 p-6 rounded-3xl border border-slate-200 mt-6">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Item Description</p>
                <p className="text-sm italic">"{formData.desc || 'No description provided.'}"</p>
              </div>

              <div className="flex gap-4 mt-8">
                <button onClick={() => setShowPreview(false)} className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">Confirm & Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformForms;