import React from 'react';
import { UserPlus, ClipboardCheck, ShoppingBag, Truck } from 'lucide-react';

const ProcessFlow = () => {
  const steps = [
    { 
      icon: <UserPlus />, 
      title: "Registration", 
      desc: "Buyers and Sellers submit their business profiles along with mandatory GST documentation." 
    },
    { 
      icon: <ClipboardCheck />, 
      title: "Verification", 
      desc: "Our expert team validates all documents to assign an 'Authorized Official' status to your account." 
    },
    { 
      icon: <ShoppingBag />, 
      title: "Trading", 
      desc: "Gain exclusive access to participate in live e-Auctions and digital procurement tenders." 
    },
    { 
      icon: <Truck />, 
      title: "Delivery", 
      desc: "Finalize deals with secure payment gateways and integrated logistics support for seamless fulfillment." 
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">How Parekh e-Trade Works</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Icon Container */}
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-xl group-hover:-translate-y-2">
                {React.cloneElement(step.icon, { size: 32 })}
              </div>
              
              {/* Text Content */}
              <h4 className="font-black text-slate-900 mb-3 uppercase text-sm tracking-widest">{step.title}</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed px-4 font-medium">
                {step.desc}
              </p>
              
              {/* Connector Arrow for Desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-10 -right-6 text-slate-200 pointer-events-none">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                    <path d="M1 10H38M38 10L30 2M38 10L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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