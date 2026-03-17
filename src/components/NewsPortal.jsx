import React from 'react';
import { Newspaper, Bell } from 'lucide-react';

const NewsPortal = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-blue-600 font-bold text-sm tracking-[0.3em] uppercase">Updates</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 italic">Circular & Industry Blog</h2>
          </div>
          <button className="px-6 py-2 border-2 border-slate-900 rounded-full font-bold text-sm hover:bg-slate-900 hover:text-white transition-all">
            VIEW ALL POSTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Blog Card */}
          <div className="md:col-span-2 group cursor-pointer">
            <div className="relative h-[350px] rounded-3xl overflow-hidden mb-6">
              <img src="https://plus.unsplash.com/premium_photo-1747643596393-6cb4e5b44b18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjB0cmFkZSUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt="News" />
              <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">LATEST NEWS</div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Future of Sustainable Textiles in India 2026</h3>
            <p className="text-slate-500 mt-3 line-clamp-2 italic">How Indian manufacturers are adopting green energy and recycled materials to lead the global market...</p>
          </div>

          {/* Circular/Notice Sidebar */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <h4 className="font-bold flex items-center gap-2 mb-6 border-b pb-4">
              <Bell size={18} className="text-orange-500" /> Important Circulars
            </h4>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="group cursor-pointer">
                  <span className="text-[10px] text-blue-600 font-bold uppercase">March {10+i}, 2026</span>
                  <p className="text-sm font-semibold text-slate-800 group-hover:underline decoration-blue-500">New Export Regulations for Cotton Yarn to EU Markets</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPortal;