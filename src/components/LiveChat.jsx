import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! Parekh e-Trade mein aapka swagat hai. Main aapki kaise madad kar sakta hoon?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // User Message
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Dummy Bot Reply (After 1 second)
    setTimeout(() => {
      const botMsg = { 
        id: Date.now() + 1, 
        text: "Dhanyawad! Hamare 'Authorized Official' aapse jald hi sampark karenge. Kya aapka koi specific Product Code hai?", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[2000] font-['Poppins']">
      {/* --- CHAT WINDOW --- */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User size={20} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest">Support Desk</p>
                <p className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online Now
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-xs leading-relaxed shadow-sm ${
                  msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..." 
              className="flex-1 bg-slate-100 p-3 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button type="submit" className="bg-blue-600 text-white p-3 rounded-xl hover:bg-slate-900 transition-colors">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* --- FLOATING BUTTON --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-5 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-slate-900 rotate-180' : 'bg-blue-600 hover:scale-110 shadow-blue-500/40'
        } text-white`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
        )}
      </button>
    </div>
  );
};

export default LiveChat;