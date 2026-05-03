import { FadeIn } from './FadeIn';

export function ProblemAgitation() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-gray-900 mb-8 border-l-4 border-green-600 pl-6">
            Có thể lúc này bạn đang nghĩ: "Lại một khóa kiếm tiền rỗng nữa?"
          </h2>
        </FadeIn>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <FadeIn delay={0.2}>
            <p>Mình KHÔNG trách bạn nghĩ vậy.</p>
            <p className="mb-4">Vì thị trường này đã đầy những lời hứa giả tạo: "$10.000/tháng sau một đêm", "kiếm tiền đô khi đang ngủ", "không cần làm gì hết". Bạn đã thấy quá nhiều, bạn đã nghi ngờ - đó là phản ứng đúng đắn.</p>
            <p className="mb-6">Nên mình phải nói thẳng một điều:</p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
              <p className="font-extrabold text-2xl text-red-900 mb-2">Mình KHÔNG hứa bạn sẽ kiếm $1.000/tháng sau một đêm.</p>
              <p className="text-red-800">Vì sự thật là thu nhập của bạn là kết quả của giá trị thật mà bạn tạo ra cho khách hàng. Nếu bạn còn thiếu kiến thức về thị trường, thiếu kinh nghiệm viết, thiếu trải nghiệm làm với khách thật, bạn sẽ KHÔNG chạm $1.000/tháng ngay. Bất kỳ ai nói với bạn chuyện này KHẢ THI, họ đang lừa bạn.</p>
            </div>
          </FadeIn>
          
          <div className="h-10"></div>
          
          <FadeIn delay={0.1}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sự thật về timeline:</h3>
            <p>Mình mất <span className="font-semibold text-gray-900">6 tháng</span> để tự đi từ con số 0 đến mốc <span className="font-semibold text-gray-900">$1.000/tháng (~25 triệu)</span>, và <span className="font-semibold text-gray-900">2 năm</span> nữa để chạm mốc <span className="font-semibold text-gray-900">$3.000/tháng</span> từ freelance copywriting cho khách Mỹ, Hà Lan, Canada.</p>
            <p><span className="font-semibold text-gray-900">4 năm</span> đó mình tự đọc 100+ cuốn sách, làm 30+ chiến dịch bán hàng, trải qua không biết bao nhiêu lần bị khách từ chối — nên mình KHÔNG đảm bảo bạn "thành công sau 1 đêm."</p>
            <p>Cái mình đóng gói ở đây là 4 năm trải nghiệm đó + cách sử dụng AI đã được tinh chỉnh sẵn để rút ngắn timeline:</p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <ul className="space-y-4 my-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <li className="flex gap-4 items-start">
                <span className="text-green-700 font-bold bg-green-50 px-2 py-1 rounded">Trước</span>
                <span>mình mất <strong>1 tháng</strong> để viết được 1 bản copy đầu tay → giờ bạn chỉ mất <strong className="text-green-800">3 ngày</strong></span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-green-700 font-bold bg-green-50 px-2 py-1 rounded">Trước</span>
                <span>mình mất <strong>120 ngày</strong> để có khách hàng đầu tiên → giờ bạn làm được trong <strong className="text-green-800">30-60 ngày</strong></span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-green-700 font-bold bg-green-50 px-2 py-1 rounded">Trước</span>
                <span>mình mất <strong>3 tháng</strong> để chạm $1.000/tháng → giờ bạn có thể làm điều đó <strong className="text-green-800">trong cùng 3 tháng nhưng có hệ thống</strong>, thay vì tự mò</span>
              </li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="font-bold text-xl text-green-800 text-center my-10">Không phải 1 đêm. Là 3 tháng có người đi trước cầm tay chỉ đường thay vì 4 năm tự mò một mình.</p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-sm relative overflow-hidden transition-all hover:border-red-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Vì vậy, nếu bạn đang tìm một trong những thứ sau, trang này không dành cho bạn:</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3"><svg className="w-6 h-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg> Một lời hứa $1.000/tháng sau một đêm</li>
                <li className="flex gap-3"><svg className="w-6 h-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg> Một bộ câu lệnh copy-paste rồi chờ tiền tự rơi xuống</li>
                <li className="flex gap-3"><svg className="w-6 h-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg> Một con đường không cần cố gắng</li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 shadow-sm relative overflow-hidden transition-all hover:border-green-300 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Nhưng nếu bạn:</h3>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex gap-3"><svg className="w-6 h-6 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Sẵn sàng dành 1-2 giờ mỗi tối, đều đặn trong 30 ngày đầu sau khoá</li>
                <li className="flex gap-3"><svg className="w-6 h-6 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Chấp nhận rằng tháng đầu có thể chỉ là 0-200 đô — và bạn vẫn tiếp tục</li>
                <li className="flex gap-3"><svg className="w-6 h-6 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Muốn một con đường THẬT, ngắn hơn 4 năm nhưng dài hơn 1 đêm</li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="font-bold text-center mt-12 text-2xl text-gray-900 max-w-2xl mx-auto">
              Đây là những thứ bạn cần biết ngay lúc này để tận dụng cơ hội kiếm thu nhập online tốt nhất 2026
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
