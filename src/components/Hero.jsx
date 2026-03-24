import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* --- BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Note: Istock links directly source nahi hoti, ensure you have the mp4 file path or a direct CDN link */}
          <source 
            src="https://www.pexels.com/download/video/1114659/" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for Readability: Isse text ekdum saaf dikhega */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-5xl px-6 mt-10">
        <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full">
          <span className="text-blue-400 text-[10px] font-black uppercase ">
            India's Digital Textile Hub
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white  leading-[1.1] ">
          Parekh <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">e-Trade</span> <br /> 
          Market
        </h1>
        
        <p className="mt-8 text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Premium platform for Raw Materials, Finished Products, and Textile Machineries. 
          Connecting Hyderabad to the global textile market.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <button 
            onClick={() => navigate('/BuyerPlatform')} 
            className="group relative bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-500/40 hover:bg-blue-700 transition-all overflow-hidden"
          >
            <span className="relative z-10">Start Trading</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <button 
            onClick={() => navigate('/trade-ops')} 
            className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all"
          >
            Explore Market
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;