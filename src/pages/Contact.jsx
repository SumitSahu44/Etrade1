import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl font-black italic mb-6 text-slate-900 uppercase">Get in Touch</h1>
          <p className="text-slate-500 mb-12">Hyderabad office and PAN India support desk for textile queries.</p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600"><MapPin /></div>
              <div>
                <h4 className="font-bold text-slate-900">Headquarters</h4>
                <p className="text-sm text-slate-500">Textile Market Area, Hyderabad, TS - 500001</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600"><Phone /></div>
              <div>
                <h4 className="font-bold text-slate-900">Call Support</h4>
                <p className="text-sm text-slate-500">+91 98XXX XXXXX / 040-XXXXXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="h-[400px] bg-white rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.312948622177!2d78.4744!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaec391d%3A0x67341e33e493393b!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000" 
            className="w-full h-full grayscale border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;