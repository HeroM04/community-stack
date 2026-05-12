import { TopNav } from "./TopNav";
import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";

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
        <main className="flex-1 min-w-0 px-5 py-6 border-x border-border bg-background">
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
      <div className="mx-auto max-w-[1264px] px-4 py-8 text-[13px] grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="font-semibold mb-2 text-brand-red">UNIVERSE APD</div>
          <ul className="space-y-1 text-background/70">
            <li>Về chúng tôi</li><li>Tuyển dụng</li><li>Liên hệ</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">SẢN PHẨM</div>
          <ul className="space-y-1 text-background/70">
            <li>Chợ Tài Liệu</li><li>Đề thi cũ</li><li>Review môn</li><li>Góc tâm linh</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">CỘNG ĐỒNG</div>
          <ul className="space-y-1 text-background/70">
            <li>Quy tắc</li><li>Cấp bậc & uy tín</li><li>Bảng vinh danh</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">HỖ TRỢ</div>
          <ul className="space-y-1 text-background/70">
            <li>Trung tâm trợ giúp</li><li>Báo cáo vi phạm</li><li>Điều khoản</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-4 text-center text-[12px] text-background/60">
        © 2026 Universe APD — Trí tuệ và Phát triển. Không chỉ học, còn sống sót qua đại học cùng nhau.
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
    <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        {subtitle && <p className="mt-1 text-[13px] text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function FilterBar({
  filters,
  active = 0,
  count,
}: {
  filters: string[];
  active?: number;
  count?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
      {count && <p className="text-[13px] text-muted-foreground">{count}</p>}
      <div className="flex border border-border rounded-full overflow-hidden text-[13px] bg-surface">
        {filters.map((f, i) => (
          <button
            key={f}
            className={`px-4 py-1.5 ${
              i === active
                ? "bg-primary text-primary-foreground font-medium"
                : "text-foreground hover:bg-muted"
            } ${i !== 0 ? "border-l border-border" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[12px] px-2.5 py-1 bg-tag text-tag-foreground rounded-full hover:brightness-95 cursor-pointer">
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
    <div className={`border border-border bg-surface rounded-2xl p-5 hover:shadow-sm transition ${className}`}>
      {children}
    </div>
  );
}
