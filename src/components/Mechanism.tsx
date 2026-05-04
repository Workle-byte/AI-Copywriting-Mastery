import { FadeIn } from './FadeIn';

export function Mechanism() {
  return (
    <section className="bg-[#111] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-white mb-12 text-center">
            Và đây là khóa học<br />
            <span className="text-green-400 font-extrabold uppercase whitespace-nowrap">AI COPYWRITING MASTERY</span>
          </h2>
          
          <p className="text-base md:text-lg text-center text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
            Khóa học cung cấp cho bạn từng bước thực hành, bộ công cụ AI, và quy trình bài bản để <strong>tự do sáng tạo ngôn từ giúp doanh nghiệp tăng doanh số.</strong>
          </p>
        </FadeIn>
        
        <div className="space-y-10">
          {/* Module 1 */}
          <FadeIn delay={0.2}>
            <div className="bg-[#111] border-2 border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
              <div className="bg-green-900/40 text-green-400 px-3 py-1.5 rounded-lg font-bold flex-shrink-0 flex items-center justify-center w-max group-hover:scale-105 transition-transform">
                <span className="text-xs uppercase tracking-wider">Module</span>
                <span className="text-xl ml-1">1</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Mindset của Top 1% Copywriter</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Cách tránh 90% lỗi sai của amateur.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span><strong>Mindset để học 1 lần, dùng mãi mãi.</strong> AI có thể đổi, nhưng nền tảng copywriting (sự thấu cảm con người) thì 100 năm nữa cũng không đổi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>1 kỹ năng giúp bạn luôn có khách bất chấp kinh nghiệm.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
          
          {/* Module 2 */}
          <FadeIn delay={0.2}>
            <div className="bg-[#111] border-2 border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
              <div className="bg-green-900/40 text-green-400 px-3 py-1.5 rounded-lg font-bold flex-shrink-0 flex items-center justify-center w-max group-hover:scale-105 transition-transform">
                <span className="text-xs uppercase tracking-wider">Module</span>
                <span className="text-xl ml-1">2</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Mở Khoá Bộ Công Cụ AI Siêu Việt</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Thực hành trên LLMs, <strong>nắm trọn bộ Prompt đỉnh nhất (đang làm việc kiếm hàng chục nghìn đô cho mình)</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Biến AI thành những bậc thầy copywriting.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Sử dụng AI kết nối với kho dữ liệu sống.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Biến Claude hay Google AI thành người bạn đồng hành "có tâm" trên chặng đường Freelance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
          
          {/* Module 3 */}
          <FadeIn delay={0.2}>
            <div className="bg-[#111] border-2 border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
              <div className="bg-green-900/40 text-green-400 px-3 py-1.5 rounded-lg font-bold flex-shrink-0 flex items-center justify-center w-max group-hover:scale-105 transition-transform">
                <span className="text-xs uppercase tracking-wider">Module</span>
                <span className="text-xl ml-1">3</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Các Frameworks Kinh Điển</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Cách móc túi khách hàng mượt nhất (PAS).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Kỹ năng dắt mũi đỉnh cao, không để cho KH thoát (AIDA).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Bí quyết tạo nội dung khiến khán giả thèm thuồng muốn có bằng được (4C/4U).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Tự động viết 100 bài mỗi ngày dễ như ăn kẹo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Phương pháp viết dài - ngắn tùy ý nhờ <strong>AI tự điều chỉnh theo CỖ MÁY.</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
          
          {/* Module 4 */}
          <FadeIn delay={0.2}>
            <div className="bg-[#111] border-2 border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
               <div className="bg-green-900/40 text-green-400 px-3 py-1.5 rounded-lg font-bold flex-shrink-0 flex items-center justify-center w-max group-hover:scale-105 transition-transform">
                <span className="text-xs uppercase tracking-wider">Module</span>
                <span className="text-xl ml-1">4</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Bí Mật Đằng Sau Kỹ Năng Tìm Kiếm Điểm Đau</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Copywriting giỏi mà không hiểu khách hàng thì cũng vứt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Làm thế nào chỉ trong 5 phút bạn <strong>Hiểu người dùng TẬN RUỘT TẬN GAN?</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Dùng AI "hút kiệt" thông tin đối thủ.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
          
          {/* Module 5 */}
          <FadeIn delay={0.2}>
            <div className="bg-[#111] border-2 border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
               <div className="bg-green-900/40 text-green-400 px-3 py-1.5 rounded-lg font-bold flex-shrink-0 flex items-center justify-center w-max group-hover:scale-105 transition-transform">
                <span className="text-xs uppercase tracking-wider">Module</span>
                <span className="text-xl ml-1">5</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Giải Phẫu Landing Page (Kỹ năng mang lại $1K, $2K / bài)</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Làm sao để người khác đâm đầu vào mua sản phẩm?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>10 cách bắt đầu khiến ai đọc cũng bị hút vào.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Công thức Offer không bao giờ bị từ chối.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Bí quyết giật Title: Độc, Nhức, Khó Quên.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Dùng AI viết 100 Idea giật tít chưa đầy 1 phút.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
          
          {/* Module 6 */}
          <FadeIn delay={0.2}>
            <div className="bg-[#111] border-2 border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
               <div className="bg-green-900/40 text-green-400 px-3 py-1.5 rounded-lg font-bold flex-shrink-0 flex items-center justify-center w-max group-hover:scale-105 transition-transform">
                <span className="text-xs uppercase tracking-wider">Module</span>
                <span className="text-xl ml-1">6</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Từ A to Z Dịch Vụ Social Media Copywriting</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Tại sao khách hàng thuê bạn quản lý Social dù họ có thừa nhân viên?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Bí quyết tạo 30 bài Facebook/Insta/LinkedIn <strong>chỉ trong 30 phút.</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 font-bold">✓</span>
                    <span>Biến AI thành <strong>một bộ máy Social Media Manager đắc lực nhất.</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
