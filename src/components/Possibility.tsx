import { FadeIn } from './FadeIn';

export function Possibility() {
  return (
    <section className="bg-[#0f0f0f] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-8 text-base md:text-lg text-gray-300 leading-relaxed">
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-white mb-12 text-left">
            Bí quyết để tạo ra thu nhập 8 chữ số với AI Copywriting là gì?
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="bg-[#111] p-8 rounded-2xl shadow-sm border border-gray-800/60 hover:shadow-md transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-green-400 mb-4 flex gap-3 items-start">
              <span className="text-green-600 bg-green-900/20 rounded px-2">1</span>
              Copywriting là kỹ năng thu nhập cao — vì nó ảnh hưởng TRỰC TIẾP đến doanh số.
            </h3>
            <p className="mb-4">Khi bạn viết được 1 bản copy giúp khách hàng tăng doanh thu, bạn không phải là nhân viên — bạn là <strong>đòn bẩy</strong>.</p>
            <p className="mb-4">Có rất nhiều doanh nghiệp sẵn sàng trả bạn <strong>1.000 đến 3.000 đô</strong> cho 1 bài bán hàng chuyển đổi cao. Họ không quan tâm bạn ngồi viết ở Việt Nam hay ở Mỹ.</p>
            <p className="mb-4">Họ không quan tâm bạn dùng AI hay không. Họ không quan tâm bạn 21 hay 41 tuổi.</p>
            
            <div className="bg-gray-900 text-white p-6 rounded-xl my-6 shadow-md border border-gray-800">
              <p className="font-bold text-xl text-center">Họ chỉ quan tâm 1 điều: bài đó có ra tiền cho họ không.</p>
            </div>
            
            <p>Đó là lý do copywriter giỏi luôn được trả cao hơn nhân viên văn phòng cùng số năm kinh nghiệm — nhiều khi gấp 5, gấp 10 lần.</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="bg-[#111] p-8 rounded-2xl shadow-sm border border-gray-800/60 hover:shadow-md transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-green-400 mb-4 flex gap-3 items-start">
              <span className="text-green-600 bg-green-900/20 rounded px-2">2</span>
              AI giờ làm thay 80% công việc viết.
            </h3>
            <p className="mb-6">Đây là sự khác biệt giữa cách làm cũ và cách làm mới:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
              <div className="p-6 border border-gray-800 rounded-xl bg-[#0f0f0f] flex flex-col gap-3 relative hover:bg-[#111] transition-colors">
                <span className="absolute top-4 right-4 text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                </span>
                <p className="font-bold text-white">Cách làm cũ (trước 2024):</p>
                <p className="text-sm text-gray-400 leading-relaxed">Tiếng Anh của bạn phải đạt 8.0-9.0 IELTS mới làm việc được với khách Mỹ, Canada, châu Âu. Mỗi bài copy mất 3-4 tiếng để chỉnh ngữ pháp, chính tả, thành ngữ.</p>
              </div>
              <div className="p-6 border-2 border-green-900/50 rounded-xl bg-green-900/20 flex flex-col gap-3 shadow-inner relative hover:bg-green-900/40 transition-colors">
                <span className="absolute top-4 right-4 text-green-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </span>
                <p className="font-bold text-green-300">Cách làm mới (từ 2024 đến nay):</p>
                <p className="text-sm text-green-400 leading-relaxed">Bạn KHÔNG cần xuất sắc tiếng Anh. ChatGPT, Claude, Gemini — viết tiếng Anh chuẩn hơn 99% người Việt. Đôi khi còn chuẩn hơn cả 1 người Anh, người Mỹ trung bình.</p>
              </div>
            </div>
            
            <p className="mb-4">Bây giờ đây với kiến thức chuyên môn vững chắc, bạn có thể làm việc với khách hàng nước ngoài mà không chịu rào cản của ngôn ngữ.</p>
            <p className="mb-4">Ngay tại Việt Nam, bạn có thể làm cho 1 ông sếp ở Toronto, 1 chủ shop ở California, 1 doanh nghiệp khởi nghiệp ở Berlin.</p>
            <p className="font-medium text-white bg-[#1a1a1a] p-2 inline-block rounded">Không cần qua công ty trung gian. <strong>Tiền đô vào thẳng tài khoản của bạn.</strong></p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="bg-[#111] p-8 rounded-2xl shadow-sm border border-gray-800/60 hover:shadow-md transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-green-400 mb-4 flex gap-3 items-start">
              <span className="text-green-600 bg-green-900/20 rounded px-2">3</span>
              AI Copywriting là kỹ năng BẮT BUỘC phải nắm bắt trong năm 2026.
            </h3>
            <p className="mb-4">Câu hỏi không còn là <em>"có nên dùng AI không"</em>.</p>
            
            <div className="my-6">
              <p className="font-bold text-base md:text-lg text-green-400">Câu hỏi đúng là: "Mình tận dụng AI nhanh đến đâu — để nhân 10-20 lần năng suất, và đạt tự do tài chính sớm hơn?"</p>
            </div>
            
            <p className="mb-4">Vì AI có thể giúp bạn <strong>x10 năng suất</strong> ở mọi mắt xích copywriting:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3"><span className="text-green-500">▶</span> <span>Research khách hàng: từ 8 tiếng → <strong>30 phút</strong></span></li>
              <li className="flex gap-3"><span className="text-green-500">▶</span> <span>Viết 1 email bán hàng: từ 4 tiếng → <strong>40 phút</strong></span></li>
              <li className="flex gap-3"><span className="text-green-500">▶</span> <span>Viết 1 trang bán hàng: từ 2 ngày → <strong>4 tiếng</strong></span></li>
              <li className="flex gap-3"><span className="text-green-500">▶</span> <span>Tạo 30 hook quảng cáo khác nhau: từ 1 ngày → <strong>1 tiếng</strong></span></li>
              <li className="flex gap-3"><span className="text-green-500">▶</span> <span>Viết kịch bản video bán hàng: từ 1 tuần → <strong>1 buổi tối</strong></span></li>
            </ul>
            
            <p className="font-bold text-white mb-2">AI hiện đang có ở mọi nơi và đang tăng tốc theo cấp số nhân.</p>
            <p className="mb-4">Cứ mỗi 90 ngày, năng lực AI mạnh gấp nhiều lần.</p>
            <p className="mb-4">Mỗi tuần bạn chần chừ = 1 tuần người khác đang học, đang có khách thật, đang quen tay với AI.</p>
            <p>Sau 30 ngày, khoảng cách không phải là 30 ngày.</p>
            <p className="font-bold text-lg text-orange-400 mt-2 bg-[#111] border border-gray-800 p-2 rounded inline-block">Là khoảng cách mà bạn cố cũng không đuổi kịp.</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="font-bold text-lg md:text-xl text-white mb-6 uppercase tracking-wider">Tóm lại:</p>
            
            <div className="mb-10 max-w-2xl mx-auto transform hover:scale-105 transition-transform cursor-default">
              <p className="text-base md:text-lg font-bold leading-relaxed text-green-400">
                Đây là tất cả lý do mình dám khẳng định: AI Copywriting là con đường bạn KHÔNG thể bỏ lỡ để chạm mốc $1.000/tháng đầu tiên (25 triệu) <br className="hidden md:block" />trong năm 2026.
              </p>
            </div>
            
            <p className="mb-10 text-gray-400 max-w-xl mx-auto">Kể cả khi bạn bắt đầu từ con số 0. Kể cả khi bạn không có kinh nghiệm. Kể cả khi tiếng Anh của bạn còn bập bẹ.</p>
            
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
            
            <div className="mt-16 space-y-6 max-w-2xl mx-auto text-left py-8 border-t border-gray-800">
              <p className="font-bold text-white">Mình mất 4 năm để tự mò ra: cách dùng AI đúng quy trình, cách viết ra bản copy thật sự bán được hàng, cách đi tìm khách quốc tế trả lương đô…</p>
              
              <p className="text-lg md:text-xl font-bold text-white text-center my-8 border-none bg-transparent shadow-none p-0">
                Mình <strong className="text-white font-extrabold">KHÔNG MUỐN</strong> bạn cũng phải <strong className="text-white font-extrabold">MẤT 4 NĂM</strong> như vậy.
              </p>
              
              <p className="text-xl text-center">
                Đó là lý do mình phát triển<br />
                <strong className="text-green-400">AI Copywriting Mastery</strong>.
              </p>
              
              <p className="text-gray-400 bg-[#0f0f0f] border border-gray-800 p-6 rounded-xl hover:bg-[#111] transition-colors">
                Đây là nơi đóng gói tất cả những gì mình ước có ai đó truyền lại cho mình ngày đầu — 1 lộ trình kiến thức + minh hoạ, kèm bộ câu lệnh và quy trình đã chắt từ 30+ chiến dịch thực tế và 100+ cuốn sách copywriting đỉnh cao.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
