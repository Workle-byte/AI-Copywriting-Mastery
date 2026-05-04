import { FadeIn } from './FadeIn';

export function Story() {
  return (
    <section className="bg-[#111] py-16 md:py-24 px-4 sm:px-6 border-t border-gray-800/60 overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-white mb-10 pb-4 text-left">
            Câu chuyện của mình:<br />Từ sinh viên năm 1 chật vật đến $1000/tháng nhờ AI Copywriting
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p><span className="font-bold text-white">Năm 2022 là lần đầu tiên mình biết đến kỹ năng copywriting.</span></p>
          <p>Sau khi xem vài video về kỹ năng này, mình bị cuốn hút bởi 1 thứ: <strong>đây là kỹ năng có thể bán cho khách quốc tế và nhận lương bằng đô</strong> kể cả khi mình đang ngồi ở Việt Nam.</p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p>Có thể bạn đang tự hỏi: Copywriting là gì?</p>
          <p>Lúc đó mình cũng tìm hiểu lại từ đầu — và hiểu nó đơn giản như sau:</p>
          
          <div className="my-8">
            <p className="font-bold text-xl text-green-400 text-center">Copywriting = kỹ năng viết ra những câu chữ giúp người đọc QUYẾT ĐỊNH MUA HÀNG.</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p>Ví dụ:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>1 email bán hàng đẩy người đọc click "Mua ngay"</li>
            <li>1 trang bán hàng (landing page) khiến khách điền form đăng ký khoá học</li>
            <li>1 bài quảng cáo Facebook/Instagram khiến người đang lướt phải dừng lại đọc</li>
          </ul>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="mt-8">Copywriter KHÔNG đơn thuần "viết chữ".</p>
          <p>Copywriter phải hiểu tâm lý khách hàng để tạo ra chuyển đổi, mang về DOANH SỐ cho doanh nghiệp.</p>
          <p>Đó là lý do đây là kỹ năng duy nhất mà…</p>
          <p className="font-semibold text-white">Bạn được trả công dựa trên "kết quả" bạn tạo ra.</p>
          <p className="font-semibold text-white">Kết quả càng tốt. Thu nhập của bạn càng CAO.</p>
        </FadeIn>
        
        <div className="w-12 h-1 bg-gray-200 mx-auto my-12 rounded-full"></div>
        
        <FadeIn delay={0.1}>
          <p>Thấy được tiềm năng đó — mình quyết định bắt đầu ngay.</p>
          <p>Hồi đó mình mới chỉ là sinh viên năm nhất. Không biết gì về bán hàng. Tiếng Anh bập bẹ. Không kinh nghiệm trước đó. Không vốn.</p>
          <p>Nhưng mình bắt tay vào làm.</p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p>Sau khi học copywriting một thời gian, mình lên Upwork — nền tảng tìm việc freelancer toàn cầu gửi hồ sơ ứng tuyển đầu tiên.</p>
          <div className="aspect-video bg-[#1a1a1a] rounded-xl my-6 flex items-center justify-center border border-gray-800 text-gray-400 italic shadow-sm hover:shadow-md transition-shadow">
            [Ảnh ứng tuyển Upwork]
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p><span className="font-bold text-white">Khoảng thời gian đầu rất chật vật.</span></p>
          <p>Mình không biết viết copywriting sao cho ra chuyển đổi. Mình không biết tiếng Anh viết sao cho tự nhiên. Có những bản nháp mình viết ra đọc lên còn ọp ẹp, gượng gạo.</p>
          <p>Thế nhưng, với tinh thần sẵn sàng học hỏi, mình quyết định nhận dự án đầu tay với mức phí khiêm tốn để lấy kinh nghiệm.</p>
          <p>May mắn, <strong>4 tháng sau</strong>, mình được nhận 1 dự án đầu tay…</p>
          <p>Viết email bán hàng cho 1 thương hiệu sản phẩm thú cưng đang bán trên Amazon ở Mỹ.</p>
          <p>Lương: <strong>200 đô/tháng (~5 triệu đồng)</strong>, làm vào buổi tối sau giờ học.</p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="aspect-video bg-[#1a1a1a] rounded-xl my-6 flex items-center justify-center border border-gray-800 text-gray-400 italic shadow-sm hover:shadow-md transition-shadow">
            [ẢNH: Email job offer đầu tiên]
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p>Cứ nghĩ đây là dự án bình thường như bao dự án khác… nhưng không ngờ —</p>
          <p className="text-2xl md:text-2xl font-extrabold text-white my-8">Đó chính là dự án thay đổi cuộc đời mình!</p>
          
          <p>Anh sếp lúc đó đã chỉ cho mình 1 công cụ cực mạnh mẽ để làm việc: <strong>Jasper AI.</strong></p>
          <p>Đây là 1 con AI viết copy được huấn luyện theo những công thức chuyển đổi cao — 1 trong những công cụ AI copywriting đầu tiên xuất hiện trên thị trường thời điểm 2022.</p>
          <p className="italic text-gray-500 text-base">(Đây cũng là lần đầu mình nghe đến khái niệm <strong>AI Copywriting</strong> — tức dùng AI làm công cụ chính để tạo ra bản copy bán hàng, thay vì tự ngồi viết bằng tay.)</p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl font-medium text-white mt-8">Và <em>"boom"</em> — toàn bộ công việc của mình thay đổi.</p>
          
          <div className="my-8 space-y-4 p-6 bg-[#111] rounded-xl border border-gray-800">
            <p className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✗</span>
              <span className="text-gray-400">Thay vì chật vật từng chữ tiếng Anh để cho ra "tự nhiên" như bản xứ…</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✗</span>
              <span className="text-gray-400">Thay vì ngồi 4-5 tiếng cho 1 email mà không chắc khách có chịu trả tiền…</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✗</span>
              <span className="text-gray-400">Thay vì thức đêm tới 2-3h sáng để kịp hạn của khách…</span>
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="transform hover:scale-105 transition-transform my-10 cursor-default">
            <p className="font-bold text-xl md:text-2xl text-green-400 text-center">Mình chỉ mất 40-60 phút cho 1 email — vẫn chuẩn giọng bản xứ, vẫn ra đơn cho khách.</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p>Mỗi tuần mình sản xuất 3-4 email và nhận về <strong>5 triệu/tháng</strong> — làm hoàn toàn vào buổi tối, với KHÔNG kinh nghiệm trước đó.</p>
          <p>Lúc đó mình mới thực sự nhận ra <strong>tiềm năng cực kỳ lớn của công việc này.</strong></p>
          <p className="text-2xl font-bold text-white mt-12 mb-6">Và mình bắt đầu TĂNG TỐC vài tháng sau đó…</p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 bg-[#0f0f0f] rounded-lg border border-gray-800/60 hover:border-gray-800 hover:bg-[#111] transition-colors">
              <div className="bg-green-900/40 text-green-400 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
              <div>
                <p className="text-gray-400">Tháng tiếp theo, anh khách giới thiệu mình cho 1 Agency ở Mỹ</p>
                <p className="font-bold text-green-400">→ Thu nhập lên 12 triệu/tháng.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-[#0f0f0f] rounded-lg border border-gray-800/60 hover:border-gray-800 hover:bg-[#111] transition-colors">
              <div className="bg-green-900/40 text-green-400 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
              <div>
                <p className="text-gray-400">Sau 3 tháng nữa, 1 <strong>công ty quảng cáo ở Netherlands</strong> liên hệ, viết landing page cho sản phẩm của họ.</p>
                <p className="font-bold text-green-400">→ Thu nhập lên 18 triệu/tháng.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-[#0f0f0f] rounded-lg border border-gray-800/60 hover:border-gray-800 hover:bg-[#111] transition-colors">
              <div className="bg-green-900/40 text-green-400 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
              <div>
                <p className="text-gray-400">Sau đó là 1 anh founder khác ở Agency bên <strong>Mỹ</strong> thuê về viết chuỗi email outreach cho khách hàng B2B hàng tháng</p>
                <p className="font-bold text-green-400">→ Thu nhập lên 22 triệu/ tháng</p>
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="my-12 text-center p-8 bg-gray-900 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <p className="font-extrabold text-2xl md:text-2xl mb-4">Sau 6 tháng kể từ khi bắt đầu, mình chạm mốc 22 triệu/tháng.</p>
            <p className="text-gray-300">Con số mà 1 sinh viên năm nhất Việt Nam thông thường phải mất 6-7 năm sau khi tốt nghiệp mới đến được.</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="aspect-video bg-[#1a1a1a] rounded-xl mb-12 flex items-center justify-center border border-gray-800 text-gray-400 italic shadow-sm hover:shadow-md transition-shadow">
            [ẢNH: Screenshot Wise — thu nhập 22tr/tháng]
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p>Làm sao một đứa sinh viên đi từ 2 bàn tay trắng lại có được những kết quả không tưởng này?</p>
          <p>Nhưng…</p>
          <p className="text-2xl font-bold text-white my-4">Mình đã làm được.</p>
          <p className="text-2xl font-bold text-white mb-8 border-l-4 border-green-600 pl-4">Bây giờ — sau 4 năm — mình vẫn đang dùng AI mỗi ngày.</p>
          
          <p>Mỗi bài bán hàng cho công việc kinh doanh của mình. Mỗi kịch bản video YouTube. Mỗi email gửi cho khách hàng Việt Nam hay khách quốc tế ở Đan Mạch, Đức, Ireland.</p>
          <p>Kể cả trang bạn đang đọc đây, 80% được hỗ trợ bởi AI.</p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="mt-16 mb-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold leading-relaxed text-white">
              Đó là lý do mình tin chắc: AI không chỉ đơn giản là công cụ.<br className="hidden md:block" />
              AI là trợ thủ đắc lực giúp mình kiếm thu nhập từ 2022 cho đến nay.
            </h2>
          </div>
        </FadeIn>
        
        <div className="w-12 h-1 bg-gray-200 mx-auto my-12 rounded-full"></div>
        
        <FadeIn delay={0.1}>
          <p className="font-bold text-white text-center mb-8">Năm 2026, sẽ có 2 nhóm người trên thị trường phân hoá rõ rệt:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1">
              <h4 className="font-bold text-white mb-4 text-sm">Nhóm 1</h4>
              <p className="text-gray-400">Còn nghi ngờ về tiềm năng thật sự của AI. Họ vẫn cày 8 tiếng/ngày cho lương 7-10 triệu. 1 năm sau vẫn ở vị trí cũ, đứng nhìn người khác đi trước.</p>
            </div>
            <div className="bg-[#111] border-2 border-green-600 p-6 rounded-2xl shadow-md relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-green-900/40 rounded-full blur-xl opacity-50"></div>
              <h4 className="font-bold text-green-400 mb-4 text-sm relative z-10">Nhóm 2</h4>
              <p className="text-gray-100 font-medium relative z-10">Biết kết hợp chuyên môn cá nhân với AI để nhân 10 hiệu suất. Họ làm việc của 3 người, ra giá gấp 3, bỏ xa 99% thị trường và chạm mốc 25 triệu/tháng trong thời gian tới.</p>
            </div>
          </div>
          
          <h3 className="font-extrabold text-2xl text-center mt-12 text-white">Câu hỏi duy nhất: bạn muốn ở nhóm nào?</h3>
          
          <div className="flex justify-center mt-12 w-full">
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="bg-green-600 outline-none text-white font-black text-lg md:text-xl px-4 py-5 md:px-8 md:py-6 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_40px_rgba(22,163,74,0.6)] hover:bg-green-500 transition-all transform hover:-translate-y-1 w-full md:w-auto active:scale-95 border-b-4 border-green-800 hover:border-green-700 active:border-t-4 active:border-b-0"
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
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
