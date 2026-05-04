import { FadeIn } from './FadeIn';

export function SafetyDecision() {
  return (
    <section className="bg-[#111] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-white mb-12 text-center">
            Câu hỏi thường gặp
          </h2>
        </FadeIn>
        
        <div className="space-y-6 mb-16">
          <FadeIn delay={0.1}>
            <div className="border border-gray-800 rounded-xl p-6 bg-[#0f0f0f] hover:bg-[#111] transition-colors hover:shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-white mb-3">Q: Khoá học này dành cho ai?</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Dành cho những người muốn kiếm tiền từ kỹ năng viết, muốn làm việc tự do (freelance), hoặc chủ doanh nghiệp muốn tự viết nội dung bán hàng mà không cần thuê ngoài. Kể cả bạn đang làm văn phòng muốn có thêm nghề tay trái.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="border border-gray-800 rounded-xl p-6 bg-[#0f0f0f] hover:bg-[#111] transition-colors hover:shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-white mb-3">Q: Tôi chưa biết gì về viết lách có học được không?</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Hoàn toàn được. Module 1 và 3 được thiết kế để đắp nền tư duy từ số 0. Bạn không cần năng khiếu văn chương, chỉ cần tư duy logic và framework (đã được cung cấp sẵn).
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="border border-gray-800 rounded-xl p-6 bg-[#0f0f0f] hover:bg-[#111] transition-colors hover:shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-white mb-3">Q: Tôi dốt tiếng Anh thì sao?</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Thì đây chính là khóa học cứu rỗi bạn. AI (như ChatGPT, Claude) sẽ lo 95% phần ngữ pháp và từ vựng nâng cao. Khóa học dạy bạn cách "điều khiển" AI viết tiếng Anh chuẩn bản xứ. Bạn chỉ cần đọc hiểu cơ bản là làm được.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="border border-gray-800 rounded-xl p-6 bg-[#0f0f0f] hover:bg-[#111] transition-colors hover:shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-white mb-3">Q: Học xong bao lâu thì kiếm được tiền?</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Tùy thuộc độ chăm chỉ của bạn. Có học viên áp dụng xin được việc ngay sau 2 tuần. Lời khuyên là: Vừa học vừa đi tìm khách hàng ngay lúc đang học.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* DECISION / FINAL CTA */}
        <FadeIn delay={0.2} y={30}>
          <div className="bg-green-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-green-800 opacity-50 blur-3xl group-hover:bg-green-700 transition-colors"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-green-700 opacity-50 blur-3xl group-hover:bg-green-600 transition-colors"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug mb-6 group-hover:scale-[1.02] transition-transform">
                Sẵn sàng trở thành<br />
                <span className="whitespace-nowrap"><span className="text-green-300">Top 1%</span> AI Copywriter?</span>
              </h2>
              <p className="text-base md:text-lg text-green-100 mb-10 max-w-xl mx-auto leading-relaxed">
                Hãy tưởng tượng cảnh mỗi sáng thức dậy, mở email thấy tiền đô được chuyển vào tài khoản vì 1 bài viết bạn bấm nút gửi từ hôm trước.
              </p>
              <p className="text-base md:text-lg text-green-100 mb-12 max-w-xl mx-auto leading-relaxed font-bold">
                Nó hoàn toàn có thể là sự thật.
              </p>
              
              <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="bg-[#111] outline-none text-green-300 font-black text-xl md:text-2xl px-6 py-5 md:px-10 rounded-2xl shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:bg-[#1a1a1a] transition-all transform hover:-translate-y-1 w-full sm:w-auto active:scale-95 hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] border-b-4 border-gray-300 hover:border-gray-800 active:border-t-4 active:border-b-0">
                ĐĂNG KÝ NGAY
              </button>
              <p className="mt-6 text-green-200 font-medium leading-relaxed">
                Chỉ 499.000đ<br />
                Truy cập vĩnh viễn
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
