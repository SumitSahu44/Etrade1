import React, { useState } from 'react';
import { ShieldCheck, Scale, FileText, CreditCard, AlertTriangle, BookOpen, Clock, CheckCircle } from 'lucide-react';

const sections = [
  { id: 'acceptance', title: 'Acceptance', icon: BookOpen },
  { id: 'eligibility', title: 'User Eligibility', icon: Scale },
  { id: 'trading', title: 'Trading Rules', icon: FileText },
  { id: 'payments', title: 'Payments & Fees', icon: CreditCard },
  { id: 'liability', title: 'Legal Liability', icon: AlertTriangle },
];

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState('acceptance');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 font-['Poppins'] min-h-screen">
      
      {/* --- HERO BANNER WITH IMAGE --- */}
      <div className="relative pt-10 h-[350px] w-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
          alt="Legal background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 shadow-lg shadow-blue-500/20">
            <ShieldCheck size={14} /> Legal Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Parekh <span className="lowercase">e-</span>Trade <span className="text-blue-400">Legal Center</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-300 text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1"><Clock size={14} /> Last Updated: March 2026</span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span className="flex items-center gap-1"><CheckCircle size={14} /> Version 4.2</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT SIDE: Sticky Navigation */}
          <aside className="w-full lg:w-80 lg:sticky lg:top-10 z-10">
            <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden p-3">
              <div className="p-5 mb-2">
                <h3 className="font-black text-slate-900 flex items-center gap-2 uppercase text-xs tracking-[0.2em]">
                  Policy Chapters
                </h3>
              </div>
              <nav className="space-y-1">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-[13px] font-black uppercase tracking-wider transition-all ${
                      activeTab === item.id 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* RIGHT SIDE: Scrollable Content */}
          <div className="flex-1 bg-white rounded-[3rem] shadow-sm border border-slate-100 p-8 md:p-16">
            
            {/* Section: Acceptance */}
            <section id="acceptance" className="scroll-mt-24 mb-24 border-b border-slate-50 pb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-lg shadow-blue-100">01</div>
                <h2 className="text-3xl font-black text-slate-900 uppercase">Acceptance of Terms</h2>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed text-base font-medium">
                <p>By accessing and utilizing the Parekh e-Trade Market (Textile) platform, you acknowledge that you have read, understood, and agreed to be bound by our comprehensive terms of service.</p>
                <p>As part of the Hyderabad-based textile industrial network, this platform is governed by strict regulatory standards to ensure transparent, ethical, and efficient B2B digital trading.</p>
              </div>
            </section>

            {/* Section: Eligibility */}
            <section id="eligibility" className="scroll-mt-24 mb-24 border-b border-slate-50 pb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-lg shadow-blue-100">02</div>
                <h2 className="text-3xl font-black text-slate-900 uppercase">User Eligibility</h2>
              </div>
              <div className="bg-slate-900 p-8 rounded-[2rem] text-white mb-8 shadow-xl">
                <p className="font-bold text-blue-400 uppercase tracking-widest text-[11px] mb-2">Requirement Notice</p>
                <p className="text-lg font-medium">Access is strictly restricted to registered GST firms and verified textile brokers only.</p>
              </div>
              <ul className="space-y-4">
                {[
                  "Entities must be legally registered and hold a valid GSTIN.",
                  "Individual representatives must be 18 years of age or older.",
                  "Mandatory submission of authentic business documentation is required for account activation.",
                  "Any attempt to provide falsified identity or fraudulent business information will result in a permanent ban."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start text-slate-600 font-medium">
                    <CheckCircle className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section: Trading Rules */}
            <section id="trading" className="scroll-mt-24 mb-24 border-b border-slate-50 pb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-lg shadow-blue-100">03</div>
                <h2 className="text-3xl font-black text-slate-900 uppercase">Trading & Bidding Rules</h2>
              </div>
              <p className="text-slate-600 mb-8 font-medium">We support both digital auctions and direct sales. Every bid placed on the platform is considered a legally binding contract to purchase.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <h4 className="font-black text-blue-600 mb-3 uppercase text-xs tracking-widest">Quality Assurance</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">Sellers are obligated to supply bulk materials that match the approved samples in quality and specifications.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <h4 className="font-black text-blue-600 mb-3 uppercase text-xs tracking-widest">Logistics Compliance</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">All materials must be dispatched within the agreed-upon timelines specified during the negotiation or auction closing.</p>
                </div>
              </div>
            </section>

            {/* Section: Payments */}
            <section id="payments" className="scroll-mt-24 mb-24 border-b border-slate-50 pb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-lg shadow-blue-100">04</div>
                <h2 className="text-3xl font-black text-slate-900 uppercase">Payments & Platform Fees</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">Parekh e-Trade applies a nominal service fee to all successful transactions. This fee is non-refundable and covers administrative and platform maintenance costs.</p>
              <div className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-6 font-black uppercase text-[10px] tracking-widest">Transaction Type</th>
                      <th className="p-6 font-black uppercase text-[10px] tracking-widest">Standard Service Fee</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600 font-bold text-sm">
                    <tr className="border-t border-slate-50">
                      <td className="p-6">Direct Procurement</td>
                      <td className="p-6 text-blue-600">1.0% Service Charge</td>
                    </tr>
                    <tr className="border-t border-slate-50 bg-slate-50/50">
                      <td className="p-6">Auction Winning Bid</td>
                      <td className="p-6 text-blue-600">1.5% Commission</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section: Liability */}
            <section id="liability" className="scroll-mt-24 pb-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-lg shadow-blue-100">05</div>
                <h2 className="text-3xl font-black text-slate-900 uppercase">Limitation of Liability</h2>
              </div>
              <div className="p-8 bg-red-50 rounded-[2.5rem] border border-red-100">
                <div className="flex items-center gap-3 text-red-600 font-black uppercase text-[10px] tracking-[0.2em] mb-4">
                  <AlertTriangle size={16} /> Disclaimer
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  Parekh e-Trade operates strictly as a facilitator. We do not take ownership of the goods traded. Any quality disputes, shipping delays, or payment defaults must be resolved legally between the respective Buyer and Seller according to the Indian Contract Act.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;