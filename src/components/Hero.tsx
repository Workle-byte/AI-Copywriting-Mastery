import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="bg-transparent py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={0.1}>
          <p className="text-green-400 font-bold mb-4 tracking-wider uppercase text-xs md:text-sm">AI COPYWRITING MASTERY</p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
            Dùng AI Viết Bài Bán Hàng Chuyển Đổi Cao Kiếm Thêm <span className="text-green-400 whitespace-nowrap">15-25 Triệu/Tháng</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-base md:text-xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto">
            Ngay cả khi bạn đang bận học/đi làm 8 tiếng/ngày, không rành công nghệ, và chưa từng viết một câu bán hàng nào.
          </p>
        </FadeIn>
        
        {/* VSL Placeholder */}
        <FadeIn delay={0.4}>
          <div className="aspect-video bg-gray-900 rounded-2xl mb-10 border border-gray-800 overflow-hidden relative shadow-[0_0_50px_rgba(34,197,94,0.1)] group cursor-pointer hover:shadow-[0_0_60px_rgba(34,197,94,0.2)] transition-shadow">
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-all group-hover:bg-black/20">
              <div className="bg-white/10 p-4 rounded-full shadow-lg backdrop-blur-md mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-semibold bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20 rounded-full shadow-sm group-hover:-translate-y-1 transition-transform text-sm sm:text-base">Bật âm thanh và xem video</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-green-600 outline-none text-white font-black text-lg md:text-xl px-4 py-5 md:px-8 md:py-6 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_40px_rgba(22,163,74,0.6)] hover:bg-green-500 transition-all transform hover:-translate-y-1 w-full md:w-auto mb-8 active:scale-95 border-b-4 border-green-800 hover:border-green-700 active:border-t-4 active:border-b-0"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="text-2xl md:text-3xl lg:text-4xl">&gt;&gt;&gt;</span>
              <span className="flex flex-col items-center justify-center leading-tight">
                <span>ĐĂNG KÝ NGAY</span>
                <span>GIÁ EARLY BIRD 499K</span>
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl">&lt;&lt;&lt;</span>
            </span>
          </button>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-gray-400 font-medium my-6 md:my-8 text-sm md:text-base">Đây là thời đại bạn phải tận dụng AI để kiếm tiền.</p>
          <p className="text-gray-300 font-semibold mb-6 text-sm md:text-base">Như chị Tiên — kiếm 31 triệu/tháng từ khách quốc tế.</p>
        </FadeIn>

        {/* Testimonial Placeholder */}
        <FadeIn delay={0.7}>
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-green-900/20 transition-shadow text-left max-w-2xl mx-auto flex flex-col md:flex-row gap-6 items-center md:items-start group">
             <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800 flex-shrink-0 border-2 border-gray-700 shadow-md relative overflow-hidden group-hover:scale-105 transition-transform">
               <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
             </div>
             <div className="text-center md:text-left">
               <h4 className="font-bold text-white text-lg group-hover:text-green-400 transition-colors">Chị Tiên - Tên</h4>
               <p className="text-sm text-green-400 font-semibold mb-3">Thu nhập: 31,000,000đ/tháng</p>
               <p className="text-gray-400 italic text-sm md:text-base">"Screenshot thu nhập và trích dẫn 2-3 câu từ học viên..."</p>
             </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
