import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/universe/PageLayout";
import { Star, ThumbsUp, BookOpen, Users, Clock } from "lucide-react";

export const Route = createFileRoute("/review-mon-hoc/$id")({
  component: CourseDetailPage,
});

function CourseDetailPage() {
  const { id } = Route.useParams();
  return (
    <PageLayout>
      <nav className="text-[13px] text-muted-foreground mb-3">
        <Link to="/review-mon-hoc" className="hover:text-primary">Review môn học</Link> <span className="mx-1">/</span> <span>#{id}</span>
      </nav>

      <div className="bg-surface border border-border rounded-2xl p-6">
        <div className="flex items-start gap-4 flex-wrap">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-tag flex items-center justify-center shrink-0">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-mono text-muted-foreground">CSC201 · 4 tín chỉ · Khoa CNTT</div>
            <h1 className="text-2xl font-semibold">Cấu trúc dữ liệu & Giải thuật</h1>
            <div className="mt-2 flex items-center gap-3 text-[13px]">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-warning fill-warning" />
                <span className="font-semibold">4.5</span>
                <span className="text-muted-foreground">(187 review)</span>
              </div>
              <span className="text-muted-foreground">· Tỉ lệ pass: 78%</span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat icon={<Clock className="h-4 w-4" />} label="Khối lượng" value="Trung bình - cao" />
          <Stat icon={<Star className="h-4 w-4" />} label="Độ khó" value="4/5" />
          <Stat icon={<BookOpen className="h-4 w-4" />} label="Hữu ích" value="5/5" />
          <Stat icon={<Users className="h-4 w-4" />} label="Đã học" value="2,143 SV" />
        </div>
      </div>

      {/* Mô tả + mẹo */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface border border-border rounded-2xl p-5">
          <h2 className="text-[15px] font-semibold mb-2">Nội dung môn học</h2>
          <ul className="text-[13px] space-y-1 list-disc pl-5 text-foreground">
            <li>Mảng, danh sách liên kết, ngăn xếp, hàng đợi</li>
            <li>Cây nhị phân, cây tìm kiếm, cây cân bằng</li>
            <li>Bảng băm, đồ thị, các thuật toán BFS/DFS</li>
            <li>Sắp xếp, tìm kiếm, độ phức tạp thuật toán</li>
            <li>Quy hoạch động, chia để trị, tham lam</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-accent to-surface border border-primary/20 rounded-2xl p-5">
          <h2 className="text-[15px] font-semibold mb-2 text-primary">💡 Mẹo qua môn từ sinh viên</h2>
          <ul className="text-[13px] space-y-1.5 list-disc pl-5">
            <li>Code lại tất cả ví dụ trên slide bằng tay</li>
            <li>Làm hết bài tập trên LeetCode Easy phần Tree</li>
            <li>Học thuộc 7 thuật toán sắp xếp + độ phức tạp</li>
            <li>Đề thi cuối kỳ luôn có 1 bài quy hoạch động</li>
          </ul>
        </div>
      </div>

      {/* Giảng viên dạy */}
      <div className="mt-5 bg-surface border border-border rounded-2xl p-5">
        <h2 className="text-[15px] font-semibold mb-3">Giảng viên đang dạy môn này</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { name: "TS. Nguyễn Văn A", rating: 4.6 },
            { name: "ThS. Phạm Thị D", rating: 4.2 },
          ].map(t => (
            <Link key={t.name} to="/review-giang-vien/$id" params={{ id: "1" }} className="flex items-center gap-3 p-3 border border-border rounded-xl hover:border-primary/40">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-primary flex items-center justify-center text-primary-foreground font-bold">
                {t.name.split(" ").pop()?.[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{t.name}</div>
                <div className="flex items-center gap-1 text-[12px] text-muted-foreground">
                  <Star className="h-3 w-3 text-warning fill-warning" /> {t.rating}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8 mb-3 flex items-center justify-between gap-3">
        <h2 className="text-[18px] font-semibold">Review chi tiết</h2>
        <Link
          to="/review-mon-hoc/viet"
          className="px-4 h-10 inline-flex items-center text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110"
        >
          + Viết review
        </Link>
      </div>
      <div className="space-y-3">
        {[
          { user: "CodeNinja", rep: "8,921", time: "1 tuần trước", rating: 5, text: "Môn xương sống của ngành CNTT. Học chăm là pass dễ. Đầu tư thời gian xứng đáng.", likes: 87, semester: "HK2 2023-2024" },
          { user: "GấuNgủ_1923", rep: "3,402", time: "1 tháng trước", rating: 4, text: "Khối lượng nhiều, deadline liên tục. Nhưng kiến thức rất hữu ích cho phỏng vấn.", likes: 42, semester: "HK1 2023-2024" },
          { user: "RùaChậm_8821", rep: "256", time: "2 tháng trước", rating: 3, text: "Khó với người chưa quen tư duy thuật toán. Cần học từ trước.", likes: 18, semester: "HK1 2023-2024" },
        ].map((r, i) => (
          <article key={i} className="bg-surface border border-border rounded-2xl p-5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-red" />
                <div className="text-[13px]">
                  <div className="text-primary font-medium">{r.user}</div>
                  <div className="text-muted-foreground text-[12px]">{r.rep} rep · {r.time} · {r.semester}</div>
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-4 w-4 ${j < r.rating ? "text-warning fill-warning" : "text-muted"}`} />
                ))}
              </div>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed">{r.text}</p>
            <div className="mt-3 flex items-center gap-3 text-[12px] text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-primary"><ThumbsUp className="h-3.5 w-3.5" />{r.likes} hữu ích</button>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-muted rounded-xl p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] uppercase">
        {icon}
        {label}
      </div>
      <div className="mt-1 font-semibold text-[14px]">{value}</div>
    </div>
  );
}
