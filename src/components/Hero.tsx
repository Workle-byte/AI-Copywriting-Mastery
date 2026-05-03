import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={0.1}>
          <p className="text-green-700 font-bold mb-4 tracking-wider uppercase text-sm md:text-base">AI COPYWRITING MASTERY</p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 mb-6">
            Dùng AI Viết Bài Bán Hàng Chuyển Đổi Cao Kiếm Thêm <span className="text-green-700">15-25 Triệu/Tháng</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
            Ngay cả khi bạn đang bận học/đi làm 8 tiếng/ngày, không rành công nghệ, và chưa từng viết một câu bán hàng nào.
          </p>
        </FadeIn>
        
        {/* VSL Placeholder */}
        <FadeIn delay={0.4}>
          <div className="aspect-video bg-gray-100 rounded-2xl mb-10 border border-gray-200 overflow-hidden relative shadow-lg group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 bg-black/5 flex flex-col items-center justify-center transition-all group-hover:bg-black/10">
              <div className="bg-white/90 p-4 rounded-full shadow-lg backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-semibold bg-white/90 px-4 py-2 rounded-full shadow-sm group-hover:-translate-y-1 transition-transform">Bật âm thanh và xem video</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-green-600 outline-none text-white font-black text-lg md:text-xl px-6 py-5 md:px-8 md:py-6 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_40px_rgba(22,163,74,0.6)] hover:bg-green-500 transition-all transform hover:-translate-y-1 w-full md:w-auto mb-8 active:scale-95 border-b-4 border-green-800 hover:border-green-700 active:border-t-4 active:border-b-0"
          >
            &gt;&gt;&gt; ĐĂNG KÝ NGAY — GIÁ EARLY BIRD 499K (đến 23:59 ngày 18/5) &lt;&lt;&lt;
          </button>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-gray-500 font-medium my-8">Đây là thời đại bạn phải tận dụng AI để kiếm tiền.</p>
          <p className="text-gray-800 font-semibold mb-6">Như chị Tiên — kiếm 31 triệu/tháng từ khách quốc tế.</p>
        </FadeIn>

        {/* Testimonial Placeholder */}
        <FadeIn delay={0.7}>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow text-left max-w-2xl mx-auto flex flex-col md:flex-row gap-6 items-center md:items-start group">
             <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 border-4 border-white shadow-md relative overflow-hidden group-hover:scale-105 transition-transform">
               <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
             </div>
             <div>
               <h4 className="font-bold text-gray-900 text-lg group-hover:text-green-800 transition-colors">Chị Tiên - Tên</h4>
               <p className="text-sm text-green-700 font-semibold mb-3">Thu nhập: 31,000,000đ/tháng</p>
               <p className="text-gray-600 italic">"Screenshot thu nhập và trích dẫn 2-3 câu từ học viên..."</p>
             </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
