import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 px-6 font-['Poppins']">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-2xl tracking-tight">
              PAREKH <span className="text-blue-500 font-light">e-Trade</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Hyderabad's premier Textile e-Trade Platform. Connecting buyers and sellers for Raw Materials, Finished Goods, and Machineries with transparency and trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About us', 'Product & Services', 'Career Page', 'Blog', 'e-Trade T&C'].map((item) => (
                <li key={item} className="flex items-center group cursor-pointer hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div>
            <h4 className="text-white font-semibold mb-6  text-xs tracking-[0.2em]">e-Trade Services</h4>
            <ul className="space-y-4 text-sm">
              {['Trade Enquiry', 'e-Quotation', 'e-Auction', 'Tender & Contract', 'Media Gallery', 'Visit with Appointment'].map((item) => (
                <li key={item} className="cursor-pointer hover:text-blue-400 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-[0.2em]">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <span>Hyderabad, Telangana (TG), India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span className="break-all">info@parekhtrade.com</span>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800">
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                  LIVE CHAT AVAILABLE
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-[11px]  tracking-widest text-slate-500">
          <p>© {currentYear} PAREKH e-Trade MARKET. ALL RIGHTS RESERVED.</p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <span>SEO FRIENDLY</span>
            <span>MOBILE RESPONSIVE</span>
            <span>ALL BROWSER SUPPORT</span>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;