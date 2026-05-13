import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import { TopNav } from "./TopNav";

export function PageLayout({
  children,
  showRightSidebar = true,
}: {
  children: React.ReactNode;
  showRightSidebar?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <div className="mx-auto flex max-w-[1264px]">
        <LeftSidebar />
        <main className="flex-1 min-w-0 border-x border-border bg-background px-5 py-4">
          {children}
        </main>
        {showRightSidebar && <RightSidebar />}
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 bg-foreground text-background">
      <div className="mx-auto grid max-w-[1264px] grid-cols-2 gap-6 px-4 py-8 text-[13px] md:grid-cols-4">
        <div>
          <div className="mb-2 font-semibold text-brand-red">UNIVERSE APD</div>
          <ul className="space-y-1 text-background/70">
            <li>Về chúng tôi</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold">SẢN PHẨM</div>
          <ul className="space-y-1 text-background/70">
            <li>Chợ Tài Liệu</li>
            <li>Đề thi cũ</li>
            <li>Review môn</li>
            <li>Góc tâm linh</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold">CỘNG ĐỒNG</div>
          <ul className="space-y-1 text-background/70">
            <li>Quy tắc</li>
            <li>Cấp bậc & uy tín</li>
            <li>
              <Link to="/bang-vinh-danh" className="hover:text-background">
                Bảng vinh danh
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold">HỖ TRỢ</div>
          <ul className="space-y-1 text-background/70">
            <li>Trung tâm trợ giúp</li>
            <li>Báo cáo vi phạm</li>
            <li>Điều khoản</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-4 text-center text-[12px] text-background/60">
        © 2026 Universe APD - Trí tuệ và Phát triển. Không chỉ học, còn sống sót qua đại học cùng nhau.
      </div>
    </footer>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-3 flex items-start justify-between gap-3 border-b border-border/70 pb-3">
      <div className="flex min-w-0 items-start gap-2.5">
        <div className="mt-1 h-8 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-brand-blue to-brand-red" />
        <div className="min-w-0">
          <h1 className="text-[24px] font-semibold leading-tight text-foreground">{title}</h1>
          {subtitle && <p className="mt-1 max-w-2xl text-[13px] leading-5 text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      <div className="shrink-0">{action}</div>
    </div>
  );
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Tìm kiếm...",
  count,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  count?: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3 flex-wrap">
      {count && <p className="text-[13px] text-muted-foreground">{count}</p>}
      <div className="relative flex-1 min-w-[240px] max-w-[520px]">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          type="search"
          placeholder={placeholder}
          className="h-9 w-full rounded-full border border-border bg-surface pl-8 pr-4 text-[13px] text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/15"
        />
      </div>
    </div>
  );
}

export function Pagination() {
  return (
    <div className="mt-6 flex items-center justify-between text-[13px]">
      <div className="flex gap-1">
        {["1", "2", "3", "4", "5", "...", "1898", "Sau"].map((n, i) => (
          <button
            key={i}
            className={`min-w-[32px] h-8 rounded-full border px-2.5 ${
              i === 0
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-surface text-foreground hover:bg-muted"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="cursor-pointer rounded-full bg-tag px-2.5 py-1 text-[12px] text-tag-foreground hover:brightness-95">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-5 transition hover:shadow-sm ${className}`}>
      {children}
    </div>
  );
}
