import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlatformForms from './components/PlatformForms';
import TradeOps from './components/TradeOps';
import Management from './components/Management';
import Contact from './pages/Contact';
import LiveChat from './components/LiveChat';
function App() {
  return (
    <Router>
      <div className="font-['Poppins'] antialiased bg-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div className="pt-20"><Management /></div>} />
            <Route path="/register" element={<div className="pt-24 py-20 bg-slate-50"><PlatformForms /></div>} />
            <Route path="/trade-ops" element={<div className="pt-24 max-w-7xl mx-auto px-6"><TradeOps /></div>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <LiveChat />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;