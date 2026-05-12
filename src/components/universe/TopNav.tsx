import { Link } from "@tanstack/react-router";
import { Search, Inbox, Trophy, HelpCircle, Globe } from "lucide-react";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface shadow-[0_1px_0_rgba(0,0,0,0.05),0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-primary" />
      <div className="mx-auto flex h-12 max-w-[1264px] items-center gap-3 px-3">
        <Link to="/" className="flex items-center gap-1.5 px-2 py-1 hover:bg-muted rounded">
          <span className="text-xl">🌌</span>
          <span className="text-[15px] font-light tracking-tight">
            universe<span className="font-semibold">overflow</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          <a className="px-3 py-2 hover:bg-muted rounded-full" href="#">Về chúng tôi</a>
          <a className="px-3 py-2 hover:bg-muted rounded-full" href="#">Tài liệu</a>
          <a className="px-3 py-2 hover:bg-muted rounded-full" href="#">Cộng đồng</a>
        </nav>

        <div className="relative flex-1 max-w-[760px] mx-1">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Tìm môn học, giảng viên, tài liệu, bài post..."
            className="w-full h-9 pl-9 pr-3 text-[13px] bg-surface border border-border rounded focus:outline-none focus:ring-3 focus:ring-accent focus:border-accent-foreground/30"
          />
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 rounded hover:bg-muted text-muted-foreground" aria-label="Help">
            <HelpCircle className="h-[18px] w-[18px]" />
          </button>
          <button className="p-2 rounded hover:bg-muted text-muted-foreground" aria-label="Inbox">
            <Inbox className="h-[18px] w-[18px]" />
          </button>
          <button className="p-2 rounded hover:bg-muted text-muted-foreground" aria-label="Achievements">
            <Trophy className="h-[18px] w-[18px]" />
          </button>
          <button className="ml-2 px-3 h-8 text-[13px] font-medium border border-accent-foreground/30 text-accent-foreground bg-accent/40 rounded hover:bg-accent">
            Đăng nhập
          </button>
          <button className="px-3 h-8 text-[13px] font-medium bg-primary text-primary-foreground rounded hover:brightness-110">
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
}
