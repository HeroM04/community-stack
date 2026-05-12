import { Link, useLocation } from "@tanstack/react-router";
import {
  Home, FileText, BookOpen, Users, Flame, Tag, GraduationCap,
  ShoppingBag, MessageSquare, Star, Award
} from "lucide-react";

const nav = [
  { to: "/", icon: Home, label: "Trang chủ" },
  { to: "/posts", icon: MessageSquare, label: "Bài post" },
  { to: "/tai-lieu", icon: ShoppingBag, label: "Chợ Tài Liệu" },
  { to: "/de-thi", icon: FileText, label: "Đề thi cũ" },
  { to: "/review-mon-hoc", icon: BookOpen, label: "Review môn học" },
  { to: "/review-giang-vien", icon: GraduationCap, label: "Review giảng viên" },
  { to: "/goc-tam-linh", icon: Flame, label: "Góc Tâm Linh" },
  { to: "/tags", icon: Tag, label: "Tags" },
  { to: "/sinh-vien", icon: Users, label: "Sinh viên" },
  { to: "/vinh-danh", icon: Award, label: "Bảng vinh danh" },
] as const;

export function LeftSidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="hidden lg:block w-[180px] shrink-0 border-r border-border">
      <nav className="py-4 pr-2 text-[13px]">
        {nav.map(item => {
          const active = pathname === item.to;
          return (
            <Link
              key={item.to}
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

        <div className="mt-4 px-3 text-[11px] uppercase tracking-wide text-muted-foreground font-semibold">
          Môn nổi bật
        </div>
        <ul className="mt-1">
          {["Giải tích 1", "Lập trình C", "Vật lý đại cương", "Triết học", "Tiếng Anh 2"].map(s => (
            <li key={s}>
              <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-foreground hover:bg-muted rounded-r-full">
                <Star className="h-3.5 w-3.5 text-warning" />
                <span className="truncate">{s}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
