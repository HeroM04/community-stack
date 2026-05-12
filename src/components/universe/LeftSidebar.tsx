import {
  Home, FileText, BookOpen, Users, Flame, Tag, GraduationCap,
  ShoppingBag, MessageSquare, Star, Award
} from "lucide-react";

const nav = [
  { icon: Home, label: "Trang chủ", active: true },
  { icon: MessageSquare, label: "Bài post" },
  { icon: ShoppingBag, label: "Chợ Tài Liệu" },
  { icon: FileText, label: "Đề thi cũ" },
  { icon: BookOpen, label: "Review môn học" },
  { icon: GraduationCap, label: "Review giảng viên" },
  { icon: Flame, label: "Góc Tâm Linh" },
  { icon: Tag, label: "Tags" },
  { icon: Users, label: "Sinh viên" },
  { icon: Award, label: "Bảng vinh danh" },
];

export function LeftSidebar() {
  return (
    <aside className="hidden lg:block w-[164px] shrink-0 border-r border-border">
      <nav className="py-4 pr-2 text-[13px]">
        {nav.map((item, i) => (
          <a
            key={i}
            href="#"
            className={`flex items-center gap-2 px-3 py-1.5 my-px rounded-r ${
              item.active
                ? "bg-muted font-bold border-r-[3px] border-primary text-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            <item.icon className="h-4 w-4 text-muted-foreground" />
            {item.label}
          </a>
        ))}

        <div className="mt-4 px-3 text-[11px] uppercase tracking-wide text-muted-foreground font-semibold">
          Môn nổi bật
        </div>
        <ul className="mt-1">
          {["Giải tích 1", "Lập trình C", "Vật lý đại cương", "Triết học", "Tiếng Anh 2"].map(s => (
            <li key={s}>
              <a href="#" className="flex items-center gap-2 px-3 py-1 text-foreground hover:bg-muted rounded-r">
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
