import { FadeIn } from './FadeIn';

export function Offer() {
  return (
    <section className="bg-[#0f0f0f] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-white mb-4 text-center">
            Tất cả những gì bạn nhận được khi tham gia hôm nay:
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2} y={40}>
          <div className="mt-12 bg-[#111] rounded-3xl shadow-xl overflow-hidden border border-gray-800 hover:shadow-2xl transition-shadow">
            <div className="p-5 sm:p-8 md:p-12">
              
              <div className="space-y-4 sm:space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between border-b border-gray-800/60 pb-5 sm:pb-6 group hover:bg-[#0f0f0f] -mx-2 sm:-mx-4 px-2 sm:px-4 rounded-xl transition-colors">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className="bg-green-900/40 p-2 rounded-full text-green-400 shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl text-white leading-tight mb-1 sm:mb-0">Core Course: AI COPYWRITING MASTERY</h4>
                      <p className="text-gray-500 text-sm sm:text-base">6 Modules (70+ bài giảng chi tiết)</p>
                    </div>
                  </div>
                  <div className="text-left pl-11 sm:pl-0 sm:text-right">
                    <span className="font-bold text-gray-400 line-through text-sm sm:text-base sm:block inline-block mr-2 sm:mr-0">12.000.000đ</span>
                    <span className="font-extrabold text-green-400 text-base sm:text-xl inline-block">Miễn phí</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between border-b border-gray-800/60 pb-5 sm:pb-6 group hover:bg-[#0f0f0f] -mx-2 sm:-mx-4 px-2 sm:px-4 rounded-xl transition-colors">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className="bg-green-900/40 p-2 rounded-full text-green-400 shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl text-white leading-tight mb-1 sm:mb-0">Kho tàng Prompt Master</h4>
                      <p className="text-gray-500 text-sm sm:text-base">Bộ prompt sẵn có chỉ việc copy-paste</p>
                    </div>
                  </div>
                  <div className="text-left pl-11 sm:pl-0 sm:text-right">
                    <span className="font-bold text-gray-400 line-through text-sm sm:text-base sm:block inline-block mr-2 sm:mr-0">2.000.000đ</span>
                    <span className="font-extrabold text-green-400 text-base sm:text-xl inline-block">Miễn phí</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between border-b border-gray-800/60 pb-5 sm:pb-6 group hover:bg-[#0f0f0f] -mx-2 sm:-mx-4 px-2 sm:px-4 rounded-xl transition-colors">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className="bg-green-900/40 p-2 rounded-full text-green-400 shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl text-white leading-tight mb-1 sm:mb-0">Framework Viết Landing Page Chuẩn Mỹ</h4>
                      <p className="text-gray-500 text-sm sm:text-base">Tài liệu độc quyền giúp tăng 300% chuyển đổi</p>
                    </div>
                  </div>
                  <div className="text-left pl-11 sm:pl-0 sm:text-right">
                     <span className="font-bold text-gray-400 line-through text-sm sm:text-base sm:block inline-block mr-2 sm:mr-0">5.000.000đ</span>
                    <span className="font-extrabold text-green-400 text-base sm:text-xl inline-block">Miễn phí</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between pb-2 group hover:bg-[#0f0f0f] -mx-2 sm:-mx-4 px-2 sm:px-4 rounded-xl transition-colors">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className="bg-green-900/40 p-2 rounded-full text-green-400 shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl text-white drop-shadow-sm text-yellow-600 leading-tight mb-1 sm:mb-0">Update trọn đời MIỄN PHÍ</h4>
                      <p className="text-gray-500 text-sm sm:text-base">AI thay đổi, khoá học cập nhật theo</p>
                    </div>
                  </div>
                  <div className="text-left pl-11 sm:pl-0 sm:text-right mt-1 sm:mt-0">
                    <span className="font-extrabold text-yellow-600 text-base sm:text-xl">VÔ GIÁ</span>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="bg-gray-900 p-6 sm:p-8 md:p-12 text-center text-white relative">
              <p className="text-gray-400 font-medium mb-1 sm:mb-2 uppercase tracking-widest text-sm sm:text-base">Tổng giá trị</p>
               <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 line-through mb-4 sm:mb-6 inline-block hover:scale-105 transition-transform">19.000.000 VNĐ</p>
               
               <p className="text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2">Giá ưu đãi giới hạn hôm nay</p>
               <p className="text-5xl sm:text-6xl md:text-7xl font-black text-green-400 mb-6 sm:mb-8 drop-shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:scale-105 transition-transform">499.000 VNĐ</p>
               
               <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-sm mx-auto">Thanh toán 1 lần. Học trọn đời. Cập nhật miễn phí.</p>
               
               <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="bg-green-600 outline-none text-white font-black text-base sm:text-xl px-6 py-4 sm:px-10 sm:py-5 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:bg-green-500 transition-all transform hover:-translate-y-1 w-full sm:w-auto active:scale-95 border-b-4 border-green-500 hover:border-green-400 active:border-t-4 active:border-b-0 hover:shadow-[0_0_40px_rgba(22,163,74,0.6)]"
               >
                ĐĂNG KÝ NGAY
              </button>
              <p className="text-xs text-gray-500 mt-4 font-medium uppercase tracking-wider">Thanh toán an toàn 100%</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center text-gray-400 italic">
            * Đừng chần chừ khi người khác đang đi trước bạn 1 bước trên con đường AI Freelancer.
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
