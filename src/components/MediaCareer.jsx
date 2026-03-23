import React from 'react';
import { Briefcase, PlayCircle, FileText } from 'lucide-react';

const MediaCareer = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Career Section */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 group hover:shadow-xl transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm"><Briefcase /></div>
            <h3 className="text-xl font-bold uppercase">Career Opportunities</h3>
          </div>
          <p className="text-slate-600 text-sm mb-6 font-light ">Join the fastest growing textile e-trade platform in Hyderabad. We are hiring for Sales & Tech.</p>
          <button className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
            Browse Jobs <span className="text-xl">→</span>
          </button>
        </div>

        {/* Media Gallery Preview */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 group hover:shadow-xl transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl text-red-600 shadow-sm"><PlayCircle /></div>
            <h3 className="text-xl font-bold uppercase">Media Gallery</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="h-16 bg-slate-200 rounded-lg overflow-hidden">
                <img src={`https://picsum.photos/seed/${i+10}/200`} className="w-full h-full object-cover grayscale" alt="media" />
              </div>
            ))}
          </div>
          <button className="mt-6 text-slate-900 font-bold text-sm flex items-center gap-2">
            View All Media <FileText size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default MediaCareer;