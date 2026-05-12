import { Flame, Coins, Award, TrendingUp } from "lucide-react";

export function RightSidebar() {
  return (
    <aside className="hidden xl:block w-[300px] shrink-0 space-y-4 py-6 pl-6">
      {/* Welcome / login card */}
      <div className="border border-primary/20 bg-gradient-to-br from-accent to-surface rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-primary/15 text-[13px] font-semibold text-primary">
          🎓 Chào mừng đến Universe APD
        </div>
        <div className="p-4 text-[13px] space-y-2">
          <p>Cộng đồng sinh viên APD — chia sẻ tài liệu, đọc review, sống sót qua đại học.</p>
          <ul className="text-muted-foreground list-disc pl-5 space-y-1">
            <li>Đăng nhập <strong className="text-foreground">ẩn danh</strong> tự động</li>
            <li>Kiếm <strong className="text-foreground">Universe Coins</strong> khi đóng góp</li>
            <li>Truy cập <strong className="text-foreground">đề thi cũ</strong> miễn phí</li>
          </ul>
          <button className="mt-2 w-full h-9 text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110">
            Tham gia ngay
          </button>
        </div>
      </div>

      <div className="border border-border bg-surface rounded-2xl overflow-hidden">
        <div className="px-4 py-2.5 border-b border-border bg-muted text-[13px] font-semibold flex items-center gap-2">
          <Flame className="h-4 w-4 text-brand-red" /> Bài hot tuần này
        </div>
        <ul className="text-[13px] divide-y divide-border">
          {[
            { v: 412, t: "Thắp nhang xin qua môn Triết — kỳ này tạch là chết" },
            { v: 287, t: "Tổng hợp 50 đề thi cũ Lập trình C — từ K60 đến K68" },
            { v: 124, t: "Có ai có đề thi cuối kỳ Giải tích 1 năm 2024?" },
            { v: 89,  t: "Review thầy Nguyễn Văn A — môn CTDL" },
            { v: 76,  t: "Mẹo qua môn Vật lý đại cương trong 3 đêm" },
          ].map((it, i) => (
            <li key={i} className="px-4 py-2.5 hover:bg-muted">
              <a href="#" className="flex gap-2">
                <span className="text-[12px] font-mono text-success min-w-[28px] text-right">{it.v}</span>
                <span className="text-foreground hover:text-primary">{it.t}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-border bg-surface rounded-2xl overflow-hidden">
        <div className="px-4 py-2.5 border-b border-border bg-muted text-[13px] font-semibold flex items-center gap-2">
          <TrendingUp className="h-4 w-4" /> Universe ngày hôm nay
        </div>
        <div className="p-4 grid grid-cols-2 gap-3 text-[12px]">
          <Stat icon={<Coins className="h-4 w-4 text-warning" />} v="12,847" l="Coins giao dịch" />
          <Stat icon={<Award className="h-4 w-4 text-primary" />} v="384" l="Bài post mới" />
          <Stat icon={<Flame className="h-4 w-4 text-brand-red" />} v="2,103" l="Nhang đã thắp" />
          <Stat icon={<TrendingUp className="h-4 w-4 text-success" />} v="92" l="Đề thi mới" />
        </div>
      </div>

      <div className="border border-border bg-surface rounded-2xl overflow-hidden">
        <div className="px-4 py-2.5 border-b border-border bg-muted text-[13px] font-semibold">
          🏆 Top đóng góp tuần
        </div>
        <ul className="text-[13px]">
          {[
            ["CodeNinja", "8,921", "🥇"],
            ["ThỏCưng_0001", "12.4k", "🥈"],
            ["GấuNgủ_1923", "3,402", "🥉"],
            ["MèoLười_4782", "1,284", "4."],
          ].map(([n, r, m], i) => (
            <li key={i} className="flex items-center gap-2 px-4 py-2.5 hover:bg-muted">
              <span className="w-5 text-center">{m}</span>
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-red" />
              <a href="#" className="flex-1 text-foreground hover:text-primary truncate">{n}</a>
              <span className="text-[12px] font-semibold">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Stat({ icon, v, l }: { icon: React.ReactNode; v: string; l: string }) {
  return (
    <div className="flex items-start gap-2">
      {icon}
      <div className="leading-tight">
        <div className="text-[14px] font-semibold text-foreground">{v}</div>
        <div className="text-muted-foreground">{l}</div>
      </div>
    </div>
  );
}
