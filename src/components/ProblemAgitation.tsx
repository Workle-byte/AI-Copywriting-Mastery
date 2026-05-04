import { FadeIn } from './FadeIn';

export function ProblemAgitation() {
  return (
    <section className="bg-[#0f0f0f] py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-white mb-8 border-l-4 border-green-500 pl-4 md:pl-6 text-left">
            Có thể lúc này bạn đang nghĩ: "Lại một khóa kiếm tiền rỗng nữa?"
          </h2>
        </FadeIn>
        
        <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
          <FadeIn delay={0.2}>
            <p>Mình KHÔNG trách bạn nghĩ vậy.</p>
            <p className="mb-4">Vì thị trường này đã đầy những lời hứa giả tạo: "$10.000/tháng sau một đêm", "kiếm tiền đô khi đang ngủ", "không cần làm gì hết". Bạn đã thấy quá nhiều, bạn đã nghi ngờ - đó là phản ứng đúng đắn.</p>
            <p className="mb-6">Nên mình phải nói thẳng một điều:</p>
            <div className="bg-[#111] border-l-4 border-orange-500 p-6 rounded-r-xl my-8">
              <p className="font-extrabold text-xl md:text-2xl text-orange-400 mb-2">Mình KHÔNG hứa bạn sẽ kiếm $1.000/tháng sau một đêm.</p>
              <p className="text-gray-300">Vì sự thật là thu nhập của bạn là kết quả của giá trị thật mà bạn tạo ra cho khách hàng. Nếu bạn còn thiếu kiến thức về thị trường, thiếu kinh nghiệm viết, thiếu trải nghiệm làm với khách thật, bạn sẽ KHÔNG chạm $1.000/tháng ngay. Bất kỳ ai nói với bạn chuyện này KHẢ THI, họ đang lừa bạn.</p>
            </div>
          </FadeIn>
          
          <div className="h-10"></div>
          
          <FadeIn delay={0.1}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Sự thật về timeline:</h3>
            <p>Mình mất <span className="font-semibold text-white">6 tháng</span> để tự đi từ con số 0 đến mốc <span className="font-semibold text-white">$1.000/tháng (~25 triệu)</span>, và <span className="font-semibold text-white">2 năm</span> nữa để chạm mốc <span className="font-semibold text-white">$3.000/tháng</span> từ freelance copywriting cho khách Mỹ, Hà Lan, Canada.</p>
            <p><span className="font-semibold text-white">4 năm</span> đó mình tự đọc 100+ cuốn sách, làm 30+ chiến dịch bán hàng, trải qua không biết bao nhiêu lần bị khách từ chối — nên mình KHÔNG đảm bảo bạn "thành công sau 1 đêm."</p>
            <p>Cái mình đóng gói ở đây là 4 năm trải nghiệm đó + cách sử dụng AI đã được tinh chỉnh sẵn để rút ngắn timeline:</p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <ul className="space-y-4 my-8 p-6 bg-[#111] rounded-xl shadow-sm border border-gray-800 text-sm md:text-base">
              <li className="flex gap-4 items-start">
                <span className="text-green-400 font-bold">Trước</span>
                <span>mình mất <strong>1 tháng</strong> để viết được 1 bản copy đầu tay → giờ bạn chỉ mất <strong className="text-green-400">3 ngày</strong></span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-green-400 font-bold">Trước</span>
                <span>mình mất <strong>120 ngày</strong> để có khách hàng đầu tiên → giờ bạn làm được trong <strong className="text-green-400">30-60 ngày</strong></span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-green-400 font-bold">Trước</span>
                <span>mình mất <strong>3 tháng</strong> để chạm $1.000/tháng → giờ bạn có thể làm điều đó <strong className="text-green-400">trong cùng 3 tháng nhưng có hệ thống</strong>, thay vì tự mò</span>
              </li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="font-bold text-lg md:text-xl text-green-400 text-center my-10">Không phải 1 đêm. Là 3 tháng có người đi trước cầm tay chỉ đường thay vì 4 năm tự mò một mình.</p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mb-10 shadow-sm relative overflow-hidden transition-all hover:border-red-900 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">Vì vậy, nếu bạn đang tìm một trong những thứ sau, trang này không dành cho bạn:</h3>
              <ul className="space-y-4 text-gray-400 text-sm md:text-base">
                <li className="flex gap-3"><svg className="w-6 h-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg> Một lời hứa $1.000/tháng sau một đêm</li>
                <li className="flex gap-3"><svg className="w-6 h-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg> Một bộ câu lệnh copy-paste rồi chờ tiền tự rơi xuống</li>
                <li className="flex gap-3"><svg className="w-6 h-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg> Một con đường không cần cố gắng</li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all hover:border-green-700 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">Nhưng nếu bạn:</h3>
              <ul className="space-y-4 text-gray-300 font-medium text-sm md:text-base">
                <li className="flex gap-3"><svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Sẵn sàng dành 1-2 giờ mỗi tối, đều đặn trong 30 ngày đầu sau khoá</li>
                <li className="flex gap-3"><svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Chấp nhận rằng tháng đầu có thể chỉ là 0-200 đô — và bạn vẫn tiếp tục</li>
                <li className="flex gap-3"><svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Muốn một con đường THẬT, ngắn hơn 4 năm nhưng dài hơn 1 đêm</li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="font-bold text-center mt-12 text-xl md:text-2xl text-white max-w-2xl mx-auto">
              Đây là những thứ bạn cần biết ngay lúc này để tận dụng cơ hội kiếm thu nhập online tốt nhất 2026
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
