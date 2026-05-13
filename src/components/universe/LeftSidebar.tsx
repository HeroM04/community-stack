import { Link, useLocation } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  FileText,
  Flame,
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
] as const;

export function LeftSidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:block w-[180px] shrink-0 border-r border-border">
      <nav className="py-4 pr-2 text-[13px]">
        {nav.map((item) => {
          const active = pathname === item.to;

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex items-center gap-2 px-3 py-2 my-0.5 rounded-r-full ${
                active
                  ? "bg-accent font-semibold border-r-[3px] border-primary text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className={`h-4 w-4 ${active ? "text-primary" : "text-muted-foreground"}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
