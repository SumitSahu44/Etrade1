import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Market', path: '/trade-ops' },
    { name: 'Register', path: '/register' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic: Active link blue rahega, baaki links scroll ke hisab se contrast adjust karenge
  const linkClass = ({ isActive }) => 
    `text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
      isActive 
      ? 'text-blue-500' 
      : scrolled ? 'text-slate-900 hover:text-blue-600' : 'text-white hover:text-blue-400'
    }`;

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-[1000] transition-all duration-500 rounded-full px-8 py-4 ${
      scrolled 
      ? 'bg-white shadow-2xl border border-slate-200 py-3' 
      // Niche wala line update kiya hai permanent visibility ke liye
      : 'bg-black/40 backdrop-blur-md border border-white/10 shadow-lg' 
    }`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className={`text-xl font-black italic tracking-tighter transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          PAREKH <span className="text-blue-500"> E-TRADE</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black hover:bg-slate-900 transition-all shadow-lg shadow-blue-500/30">
            LIVE CHAT
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white mt-4 rounded-[2rem] shadow-2xl p-8 flex flex-col gap-6 lg:hidden border border-slate-100 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className="font-black text-slate-900 text-xs tracking-widest border-b border-slate-100 pb-2 hover:text-blue-600 transition-colors"
            >
              {link.name.toUpperCase()}
            </NavLink>
          ))}
          <button className="bg-blue-600 text-white p-4 rounded-2xl font-black text-xs shadow-lg shadow-blue-500/20">
            START LIVE CHAT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;