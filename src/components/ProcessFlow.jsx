import React from 'react';
import { UserPlus, ClipboardCheck, ShoppingBag, Truck } from 'lucide-react';

const ProcessFlow = () => {
  const steps = [
    { icon: <UserPlus />, title: "Registration", desc: "Buyer/Seller apna profile aur GST documents submit karte hain." },
    { icon: <ClipboardCheck />, title: "Verification", desc: "Hamari team documents verify karke 'Authorized Official' assign karti hai." },
    { icon: <ShoppingBag />, title: "Trading", desc: "Live e-Auctions aur Tenders mein participate karein." },
    { icon: <Truck />, title: "Delivery", desc: "Secure payment aur logistics support ke saath deal close karein." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 uppercase ">How Parekh e-Trade Works</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {step.icon}
              </div>
              <h4 className="font-bold text-slate-800 mb-2">{step.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              
              {/* Arrow for Desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-slate-200">
                  <span className="text-2xl">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;