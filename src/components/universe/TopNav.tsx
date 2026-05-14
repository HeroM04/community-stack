import { Link } from "@tanstack/react-router";
import { Search, Inbox, Trophy, HelpCircle, Menu } from "lucide-react";
import logo from "@/assets/logo.png";

export function TopNav({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface shadow-[0_1px_0_rgba(0,0,0,0.04),0_2px_10px_rgba(0,0,0,0.04)]">
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-brand-blue via-brand-blue to-brand-red" />
      <div className="mx-auto flex h-14 max-w-[1264px] items-center gap-3 px-3">
        
        {/* Nút gọi Menu hiện ra khi thu nhỏ màn hình */}
        <button 
          onClick={onMenuClick} 
          className="md:hidden p-2 -ml-1 rounded-md hover:bg-muted text-muted-foreground transition"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="flex items-center gap-2 px-2 py-1 hover:bg-muted rounded-lg">
          <img src={logo} alt="Universe APD" className="h-8 w-8 object-contain" />
          <span className="text-[15px] font-light tracking-tight hidden sm:inline-block">
            <span className="text-brand-blue font-semibold">universe</span>
            <span className="text-brand-red font-semibold">APD</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          <Link to="/posts" className="px-3 py-2 hover:bg-muted rounded-full">Bài post</Link>
          <Link to="/tai-lieu" className="px-3 py-2 hover:bg-muted rounded-full">Tài liệu</Link>
          <Link to="/de-thi" className="px-3 py-2 hover:bg-muted rounded-full">Đề thi</Link>
        </nav>

        <div className="relative flex-1 max-w-[760px] mx-1"></div>

        <div className="flex items-center gap-1">
          <button className="p-2 rounded-full hover:bg-muted text-muted-foreground hidden sm:block" aria-label="Help">
            <HelpCircle className="h-[18px] w-[18px]" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted text-muted-foreground" aria-label="Inbox">
            <Inbox className="h-[18px] w-[18px]" />
          </button>
          <Link to="/bang-vinh-danh" className="p-2 rounded-full hover:bg-muted text-muted-foreground" aria-label="Achievements">
            <Trophy className="h-[18px] w-[18px]" />
          </Link>
          <Link to="/login" className="hidden sm:inline-flex ml-2 px-3 h-9 items-center text-[13px] font-medium border border-primary/30 text-primary bg-accent rounded-full hover:bg-accent/70">
            Đăng nhập
          </Link>
          <Link to="/register" className="hidden sm:inline-flex px-3 h-9 items-center text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110">
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
}