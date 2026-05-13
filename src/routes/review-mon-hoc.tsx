import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { PageLayout, PageHeader, Pagination, SearchBar } from "@/hooks/components/universe/PageLayout";
import { Star, BookOpen, Users } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/review-mon-hoc")({
  component: CourseReviewPage,
  head: () => ({
    meta: [
      { title: "Review môn học — Universe APD" },
      { name: "description", content: "Review chi tiết các môn học tại APD: độ khó, khối lượng, mẹo qua môn." },
    ],
  }),
});

const courses = [
  { id: 1, code: "MAT101", name: "Giải tích 1", credits: 3, rating: 4.2, reviews: 312, difficulty: 4, workload: 4, useful: 5, tag: "Khó nhưng nền tảng quan trọng" },
  { id: 2, code: "CSC102", name: "Lập trình C", credits: 4, rating: 4.6, reviews: 421, difficulty: 3, workload: 4, useful: 5, tag: "Vui, làm nhiều bài tập là pass" },
  { id: 3, code: "PHI201", name: "Triết học Mác-Lênin", credits: 3, rating: 2.8, reviews: 892, difficulty: 5, workload: 3, useful: 2, tag: "Học thuộc, đừng hiểu sâu" },
  { id: 4, code: "PHY101", name: "Vật lý đại cương", credits: 3, rating: 3.4, reviews: 256, difficulty: 4, workload: 5, useful: 3, tag: "Bài tập khó, đi học đầy đủ" },
  { id: 5, code: "CSC201", name: "Cấu trúc dữ liệu", credits: 4, rating: 4.5, reviews: 187, difficulty: 4, workload: 4, useful: 5, tag: "Quan trọng, không học là tạch các môn sau" },
  { id: 6, code: "ENG201", name: "Tiếng Anh 2", credits: 3, rating: 3.8, reviews: 412, difficulty: 3, workload: 3, useful: 4, tag: "Đi học đều là qua" },
];

function CourseReviewPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCourses = normalizedQuery
    ? courses.filter((course) =>
        [course.code, course.name, course.tag].join(" ").toLowerCase().includes(normalizedQuery),
      )
    : courses;

  if (location.pathname !== "/review-mon-hoc") {
    return <Outlet />;
  }

  return (
    <PageLayout>
      <PageHeader
        title="Review môn học"
        subtitle="Đánh giá độ khó, khối lượng và mức độ hữu ích của từng môn."
        action={
          <Link
            to="/review-mon-hoc/viet"
            className="px-4 h-10 inline-flex items-center text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110"
          >
            + Viết review
          </Link>
        }
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} count="184 môn học" placeholder="Tìm kiếm môn học..." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleCourses.map(c => (
          <Link
            key={c.id}
            to="/review-mon-hoc/$id"
            params={{ id: String(c.id) }}
            className="block bg-surface border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-sm transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-tag flex items-center justify-center shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-muted-foreground">{c.code} · {c.credits} TC</div>
                  <h3 className="font-semibold text-foreground truncate">{c.name}</h3>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-warning/10 px-2.5 py-1 rounded-full shrink-0">
                <Star className="h-3.5 w-3.5 text-warning fill-warning" />
                <span className="font-semibold text-[13px]">{c.rating}</span>
              </div>
            </div>
            <p className="mt-3 text-[13px] text-foreground italic">"{c.tag}"</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
              <Stat label="Độ khó" value={c.difficulty} />
              <Stat label="Khối lượng" value={c.workload} />
              <Stat label="Hữu ích" value={c.useful} />
            </div>
            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-[12px] text-muted-foreground">
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{c.reviews} review</span>
            </div>
          </Link>
        ))}
      </div>
      {visibleCourses.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
          <p className="text-[14px] font-medium text-foreground">Không tìm thấy môn học phù hợp</p>
          <p className="mt-1 text-[13px] text-muted-foreground">Thử tìm bằng từ khóa khác.</p>
        </div>
      )}
      <Pagination />
    </PageLayout>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-muted rounded-lg p-2">
      <div className="text-muted-foreground">{label}</div>
      <div className="mt-1 flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= value ? "bg-primary" : "bg-border"}`} />
        ))}
      </div>
    </div>
  );
}
