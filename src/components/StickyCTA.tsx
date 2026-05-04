import { useState, useEffect } from 'react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 p-4 bg-[#111]/95 backdrop-blur-md border-t border-gray-800 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-50 transition-transform duration-500 ease-out flex justify-center ${
        isVisible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="hidden sm:block text-left">
          <p className="font-bold text-white text-lg leading-tight uppercase">AI COPYWRITING MASTERY</p>
          <p className="text-green-400 font-semibold text-sm">Chỉ 499.000đ — Truy cập vĩnh viễn.</p>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="bg-green-600 outline-none text-white font-black text-base md:text-lg px-4 py-3 md:px-6 rounded-xl shadow-[0_5px_15px_rgba(22,163,74,0.3)] hover:bg-green-500 hover:shadow-[0_8px_25px_rgba(22,163,74,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto active:scale-95 border-b-4 border-green-800 hover:border-green-700 active:border-t-4 active:border-b-0"
        >
          <span className="flex items-center justify-center gap-2 md:gap-3">
            <span className="text-xl md:text-2xl lg:text-3xl">&gt;&gt;&gt;</span>
            <span className="flex flex-col items-center justify-center leading-tight">
              <span>ĐĂNG KÝ NGAY</span>
              <span className="text-sm">GIÁ EARLY BIRD 499K</span>
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl">&lt;&lt;&lt;</span>
          </span>
        </button>
      </div>
    </div>
  );
}
