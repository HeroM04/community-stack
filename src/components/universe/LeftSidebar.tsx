import { Link, useLocation } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  FileText,
  Flame,
  Folder,
  GraduationCap,
  Home,
  MessageSquare,
  ShoppingBag,
} from "lucide-react";

const nav = [
  { to: "/", icon: Home, label: "Trang chủ" },
  { to: "/posts", icon: MessageSquare, label: "Bài post" },
  { to: "/tai-lieu", icon: ShoppingBag, label: "Chợ Tài Liệu" },
  { to: "/de-thi", icon: FileText, label: "Đề thi cũ" },
  { to: "/review-mon-hoc", icon: BookOpen, label: "Review môn học" },
  { to: "/review-giang-vien", icon: GraduationCap, label: "Review giảng viên" },
  { to: "/goc-tam-linh", icon: Flame, label: "Góc Tâm Linh" },
  { to: "/bang-vinh-danh", icon: Award, label: "Bảng vinh danh" },
  { to: "/tai-lieu-mon-hoc", icon: Folder, label: "Tài liệu môn học" },
] as const;

export function LeftSidebar() {
  const { pathname } = useLocation();

  return (
    // Đã xóa "hidden lg:block" và sửa thành "w-full md:w-[180px]" để tương thích cả trên PC lẫn menu trượt Mobile
    <aside className="w-full md:w-[180px] shrink-0 md:border-r border-border h-full flex flex-col">
      <nav className="py-4 md:pr-2 text-[13px] flex-1">
        {nav.map((item) => {
          const active = pathname === item.to;

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex items-center gap-3 px-4 md:px-3 py-3 md:py-2 my-0.5 md:rounded-r-full rounded-lg md:rounded-l-none transition-colors ${
                active
                  ? "bg-accent font-semibold md:border-r-[3px] border-primary text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className={`h-4 w-4 md:h-4 md:w-4 ${active ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-[14px] md:text-[13px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}