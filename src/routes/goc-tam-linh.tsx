import { createFileRoute } from "@tanstack/react-router";
import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { TopNav } from "@/components/universe/TopNav";

export const Route = createFileRoute("/goc-tam-linh")({
  component: SpiritualPage,
  head: () => ({
    meta: [
      { title: "Góc Tâm Linh APD - Cầu may mùa thi" },
      {
        name: "description",
        content: "Không gian cầu may mùa thi của sinh viên APD với bàn thờ trang nghiêm và lời nguyện trước kỳ thi.",
      },
    ],
  }),
});

const initialBlessings = [
  {
    author: "meolui4782@apd.edu.vn",
    wish: "Xin APD độ cho môn Giải tích 1 qua êm, chỉ cần vừa đủ điểm là em hứa chăm học lại từ đầu.",
    time: "vừa xong",
  },
  {
    author: "gaungu1923@apd.edu.vn",
    wish: "Cầu cho đề Cấu trúc dữ liệu đừng ra đồ thị, em xin nguyện làm hết slide còn nợ.",
    time: "5 phút trước",
  },
  {
    author: "thocung0001@apd.edu.vn",
    wish: "Xin thầy cô chấm nương tay môn Triết, em thắp hương thật lòng và hoàn toàn biết điều.",
    time: "12 phút trước",
  },
];

const sparkles = [
  { left: "5%", top: "15%", color: "#f8c8c0", size: "h-1 w-1" },
  { left: "15%", top: "60%", color: "#76c8ff", size: "h-2 w-2" },
  { left: "25%", top: "70%", color: "#9dd7ff", size: "h-1 w-1" },
  { left: "40%", top: "25%", color: "#ffd8a8", size: "h-1 w-1" },
  { left: "60%", top: "15%", color: "#ffe1b7", size: "h-1.5 w-1.5" },
  { left: "75%", top: "55%", color: "#76df77", size: "h-2 w-2" },
  { left: "85%", top: "30%", color: "#ffd1c8", size: "h-1 w-1" },
  { left: "10%", top: "85%", color: "#ffd7aa", size: "h-1 w-1" },
  { left: "80%", top: "80%", color: "#a7e99d", size: "h-1 w-1" },
];

function SpiritualPage() {
  const [email, setEmail] = useState("");
  const [wish, setWish] = useState("");
  const [blessings, setBlessings] = useState(initialBlessings);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedWish = wish.trim();

    if (!trimmedWish) {
      return;
    }

    setBlessings((current) => [
      {
        author: email.trim() || "an-danh@apd.edu.vn",
        wish: trimmedWish,
        time: "vừa xong",
      },
      ...current,
    ].slice(0, 3));

    setEmail("");
    setWish("");
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff4e0_0%,#fffef9_26%,#fff8f0_100%)]">
      <TopNav />

      <div className="mx-auto max-w-[1320px] px-3 py-4 sm:px-5">
        <SponsorBanner />

        <section className="relative mt-4 overflow-hidden rounded-[30px] border border-amber-300/60 bg-[radial-gradient(circle_at_top,#fffdf8_0%,#fff9f0_56%,#fff4e8_100%)] shadow-[0_18px_52px_rgba(100,60,20,0.15)]">
          {sparkles.map((dot, index) => (
            <span
              key={index}
              className={`absolute rounded-full opacity-60 animate-pulse ${dot.size}`}
              style={{ left: dot.left, top: dot.top, backgroundColor: dot.color, animationDelay: `${index * 0.5}s` }}
            />
          ))}

          <div className="mx-auto max-w-[1180px] px-4 py-8 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-[800px] drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]">
              <ShrineIllustration />
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-[420px] relative z-10">
              <div className="h-[10px] rounded-full bg-[repeating-linear-gradient(45deg,#8b4513_0,#8b4513_10px,#cd853f_10px,#cd853f_20px)] shadow-inner" />

              <div className="mt-5 space-y-4 rounded-2xl border border-amber-200/60 bg-white/80 p-5 backdrop-blur-sm shadow-lg">
                <label className="block">
                  <span className="sr-only">Mail sinh viên APD</span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-900/60" />
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      placeholder="Mail sinh viên APD (@apd.edu.vn)..."
                      className="h-12 w-full rounded-lg border border-amber-200 bg-white pl-12 pr-4 text-[14px] text-foreground outline-none transition placeholder:text-muted-foreground focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="sr-only">Lời khấn nguyện</span>
                  <textarea
                    value={wish}
                    onChange={(event) => setWish(event.target.value)}
                    placeholder="Con cầu xin các bậc bề trên độ cho con môn... (Thành tâm ắt ứng nghiệm)"
                    rows={4}
                    className="w-full rounded-lg border border-amber-200 bg-white px-4 py-3 text-[14px] leading-relaxed text-foreground outline-none transition placeholder:text-muted-foreground focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full flex h-12 items-center justify-center rounded-lg bg-[linear-gradient(180deg,#c0392b_0%,#8e0000_100%)] px-8 text-[15px] font-bold tracking-[0.06em] text-white shadow-[0_6px_16px_rgba(138,0,0,0.3)] hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  DÂNG HƯƠNG CẦU NGUYỆN
                </button>
              </div>
            </form>

            <div className="mx-auto mt-10 grid max-w-[980px] gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-5 backdrop-blur-sm shadow-md">
                <div className="flex items-center gap-2.5 text-[16px] font-bold text-amber-950">
                  <Sparkles className="h-5 w-5 text-red-600" />
                  Lời khấn nguyện vừa dâng
                </div>

                <div className="mt-4 space-y-3">
                  {blessings.map((item) => (
                    <article
                      key={`${item.author}-${item.time}`}
                      className="rounded-xl border border-amber-100 bg-amber-50/50 px-4 py-3.5 shadow-inner"
                    >
                      <div className="flex items-center justify-between gap-3 text-[12px]">
                        <span className="font-semibold text-amber-900">{item.author}</span>
                        <span className="text-muted-foreground italic">{item.time}</span>
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-foreground">{item.wish}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-5 backdrop-blur-sm shadow-md flex flex-col justify-between">
                <div>
                  <h2 className="text-[16px] font-bold text-amber-950">Linh khí Sĩ tử APD</h2>
                  <div className="mt-4 grid gap-2.5">
                    {[
                      { label: "Nén hương đã thắp hôm nay", value: "2,103" },
                      { label: "Tỷ lệ pass môn (tâm linh)", value: "98.8%" },
                      { label: "Đèn dầu đang sáng", value: "128" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between rounded-xl border border-amber-100 bg-amber-50/80 px-4 py-3"
                      >
                        <span className="text-[13px] text-amber-900/80">{stat.label}</span>
                        <span className="text-[18px] font-extrabold text-red-900">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-[13px] leading-relaxed text-amber-900/80 bg-amber-100/50 p-3 rounded-lg border border-amber-200">
                  Thắp hương online - lòng thành là chính. Giúp sĩ tử an tâm, vững trí trước giờ G. APD độ trì, thi là phải đỗ!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SponsorBanner() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-amber-300/50 bg-[linear-gradient(90deg,#fdf2d9_0%,#fff9ee_44%,#fdf2d9_100%)] px-5 py-3 shadow-md">
      <div className="flex items-center justify-center gap-3">
        <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
        <div className="text-center">
          <div className="text-[12px] font-medium text-amber-900/80 uppercase tracking-widest">Không gian tâm linh</div>
          <div className="mt-0.5 text-[28px] font-black text-red-900 tracking-tight shadow-sm">CỔNG CẦU MAY APD</div>
        </div>
        <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
      </div>
    </div>
  );
}

function ShrineIllustration() {
  return (
    <div className="relative mx-auto h-[480px] w-full max-w-[600px] font-serif">
      <div className="absolute left-1/2 top-0 h-[80px] w-[400px] -translate-x-1/2 rounded-t-[10px] border-[4px] border-[#5d301b] bg-[linear-gradient(180deg,#8e0000_0%,#600000_100%)] shadow-[0_8px_15px_rgba(0,0,0,0.3)] z-20">
        <div className="absolute inset-x-4 top-3 h-[14px] rounded-sm bg-[repeating-linear-gradient(90deg,#b38b4d_0,#b38b4d_12px,#8b6b35_12px,#8b6b35_18px)] opacity-80" />
        
        {/* ĐÃ FIX LỖI FONT: Ép font-sans, xóa tracking, thêm whitespace-nowrap */}
        <div className="absolute left-1/2 top-7 -translate-x-1/2 rounded-sm bg-[#b38b4d] px-6 py-1.5 text-[22px] font-bold text-[#600000] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-[#8b6b35] font-sans whitespace-nowrap">
          TÍN TÂM TẤT ĐỖ
        </div>

        <span className="absolute -left-6 top-2 h-10 w-8 border-[4px] border-[#5d301b] bg-[#600000] rounded-l-md" style={{clipPath: 'polygon(100% 0, 0 50%, 100% 100%)'}} />
        <span className="absolute -right-6 top-2 h-10 w-8 border-[4px] border-[#5d301b] bg-[#600000] rounded-r-md" style={{clipPath: 'polygon(0 0, 100% 50%, 0 100%)'}} />
      </div>

      <div className="absolute left-[80px] top-[70px] h-[230px] w-[24px] border-[3px] border-[#3e1f10] bg-[repeating-linear-gradient(0deg,#6f3f1d_0,#6f3f1d_20px,#5d301b_20px,#5d301b_22px)] shadow-md z-10" />
      <div className="absolute right-[80px] top-[70px] h-[230px] w-[24px] border-[3px] border-[#3e1f10] bg-[repeating-linear-gradient(0deg,#6f3f1d_0,#6f3f1d_20px,#5d301b_20px,#5d301b_22px)] shadow-md z-10" />

      <div className="absolute left-[45px] top-[110px] h-14 w-11 rounded-md border-[3px] border-[#5d301b] bg-[linear-gradient(180deg,#c0392b_0%,#e74c3c_50%,#c0392b_100%)] shadow-lg z-10 flex flex-col justify-between py-1">
        <div className="h-1 w-full bg-[#b38b4d]" />
        <div className="text-center text-[10px] font-bold text-[#ffd700]">燈</div>
        <div className="h-1 w-full bg-[#b38b4d]" />
      </div>
      <div className="absolute right-[45px] top-[110px] h-14 w-11 rounded-md border-[3px] border-[#5d301b] bg-[linear-gradient(180deg,#c0392b_0%,#e74c3c_50%,#c0392b_100%)] shadow-lg z-10 flex flex-col justify-between py-1">
        <div className="h-1 w-full bg-[#b38b4d]" />
        <div className="text-center text-[10px] font-bold text-[#ffd700]">燈</div>
        <div className="h-1 w-full bg-[#b38b4d]" />
      </div>

      <div className="absolute left-1/2 top-[80px] flex h-[220px] w-[280px] -translate-x-1/2 flex-col items-center rounded-sm border-[6px] border-[#b38b4d] bg-[#fffcf5] px-5 pt-6 shadow-[inset_0_4px_10px_rgba(0,0,0,0.1),0_5px_15px_rgba(0,0,0,0.2)] z-0">
        <div className="absolute inset-2 border-2 border-dashed border-[#cd853f]/50" />
        <img src={logo} alt="APD Logo" className="h-20 w-20 object-contain relative z-10 drop-shadow-sm" />
        <div className="mt-4 text-center relative z-10">
    
        </div>
      </div>

      <FlowerVase side="left" flowerColor="#e74c3c" />
      <FlowerVase side="right" flowerColor="#f1c40f" />

      <div className="absolute left-1/2 top-[300px] h-[40px] w-[360px] -translate-x-1/2 rounded-t-md border-[4px] border-[#3e1f10] bg-[linear-gradient(180deg,#6f3f1d_0%,#5d301b_100%)] shadow-lg z-10" />

      <div className="absolute left-1/2 top-[240px] -translate-x-1/2 z-20 group">
        
        {/* ĐÃ NÂNG CẤP: Hiệu ứng khói bay cuộn tròn (Swirl) */}
        <style>
          {`
            @keyframes smokeSwirl {
              0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); opacity: 0; filter: blur(2px); }
              20% { opacity: 0.65; filter: blur(3px); }
              50% { transform: translateY(-45px) translateX(var(--drift-mid)) scale(1.5) rotate(15deg); opacity: 0.4; filter: blur(5px); }
              100% { transform: translateY(-110px) translateX(var(--drift-end)) scale(2.8) rotate(-15deg); opacity: 0; filter: blur(8px); }
            }
          `}
        </style>

        {/* 5 luồng khói đan xen nhau tạo hiệu ứng bay quay chân thực */}
        {[
          { id: 1, mid: '-15px', end: '-35px', delay: '0s', dur: '4s', w: '16px' },
          { id: 2, mid: '20px', end: '40px', delay: '1.2s', dur: '5s', w: '20px' },
          { id: 3, mid: '-10px', end: '20px', delay: '2.5s', dur: '4.5s', w: '14px' },
          { id: 4, mid: '25px', end: '-25px', delay: '0.8s', dur: '5.5s', w: '24px' },
          { id: 5, mid: '-25px', end: '15px', delay: '3s', dur: '4.8s', w: '18px' },
        ].map(smoke => (
          <div
            key={smoke.id}
            className="absolute -top-12 left-1/2 -translate-x-1/2 h-16 rounded-full bg-[radial-gradient(circle,rgba(230,230,230,0.6)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"
            style={{
              width: smoke.w,
              '--drift-mid': smoke.mid,
              '--drift-end': smoke.end,
              animation: `smokeSwirl ${smoke.dur} ease-in-out infinite`,
              animationDelay: smoke.delay
            } as React.CSSProperties}
          />
        ))}

        <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-1.5 items-end h-16 w-10 justify-center">
          {[1, 2, 3].map(i => (
            <div key={i} className="relative w-1 h-16 bg-[#cd853f] rounded-t-sm">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600 rounded-t-sm shadow-[0_0_6px_#ff4500] animate-pulse" />
            </div>
          ))}
        </div>

        <div className="relative flex h-[75px] w-[80px] flex-col items-center justify-center rounded-t-md rounded-b-xl border-[4px] border-[#8b6b35] bg-[linear-gradient(135deg,#b38b4d_0%,#ffd700_50%,#b38b4d_100%)] shadow-[0_8px_15px_rgba(0,0,0,0.4),inset_0_2px_5px_rgba(255,255,255,0.4)]">
          <div className="text-[28px] font-black text-[#600000]/70 opacity-80">卍</div>
          <div className="absolute -bottom-3 h-4 w-[60px] rounded-b-md border-[3px] border-[#8b6b35] bg-[#5d301b]" />
        </div>
      </div>

      <div className="absolute left-1/2 top-[330px] h-[150px] w-[440px] -translate-x-1/2 rounded-b-md border-[5px] border-[#3e1f10] bg-[#5d301b] shadow-[0_15px_35px_rgba(0,0,0,0.3)] z-0">
        <div className="absolute inset-3 grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-2 border-[#3e1f10] bg-[#6f3f1d]/50 rounded-sm flex items-center justify-center shadow-inner">
               <span className="text-[#3e1f10] opacity-30 text-xl">回</span>
            </div>
          ))}
        </div>

        <PassLabel text="ĐỖ" className="left-[25px] top-[20px]" />
        <PassLabel text="ĐỖ" className="right-[25px] top-[20px]" />
        <PassLabel text="ĐỖ" className="left-[25px] bottom-[20px]" />
        <PassLabel text="ĐỖ" className="right-[25px] bottom-[20px]" />

        <div className="absolute left-1/2 bottom-0 h-[100px] w-[120px] -translate-x-1/2 rounded-t-md border-[4px] border-[#3e1f10] bg-[#4a2712] shadow-inner flex items-center justify-center gap-3">
          <div className="w-2 h-10 bg-[#8b6b35] rounded-sm" />
          <div className="w-2 h-10 bg-[#8b6b35] rounded-sm" />
        </div>
      </div>
    </div>
  );
}

interface FlowerVaseProps {
  side: "left" | "right";
  flowerColor: string;
}

function FlowerVase({ side, flowerColor }: FlowerVaseProps) {
  const sideClass = side === "left" ? "left-[105px]" : "right-[105px]";

  return (
    <div className={`absolute top-[180px] ${sideClass} z-20 flex flex-col items-center group`}>
      <div className="flex gap-0.5 animate-pulse">
        <span style={{ color: flowerColor }} className="text-xl">✿</span>
        <span style={{ color: flowerColor }} className="text-2xl -translate-y-1">✿</span>
        <span style={{ color: flowerColor }} className="text-xl">✿</span>
      </div>
      <div className="mt-1 h-[65px] w-[45px] rounded-t-sm rounded-b-lg border-[3px] border-[#5d301b] bg-[#f5f5dc] shadow-md flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,139,0.1)_5px,rgba(0,0,139,0.1)_10px)]" />
        <div className="w-full h-1 bg-[#5d301b] absolute top-2" />
        <div className="text-[8px] font-bold text-blue-900 relative z-10">APD</div>
      </div>
    </div>
  );
}

interface PassLabelProps {
  className: string;
  text: string;
}

function PassLabel({ className, text }: PassLabelProps) {
  return (
    <span
      className={`absolute inline-flex items-center justify-center rounded-sm border border-[#b38b4d] bg-[linear-gradient(180deg,#fff8e1_0%,#ffe082_100%)] px-3 py-1 text-[12px] font-bold tracking-[0.15em] text-[#600000] shadow-sm z-10 ${className}`}
    >
      {text}
    </span>
  );
}