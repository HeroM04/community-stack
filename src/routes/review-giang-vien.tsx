import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { PageLayout, PageHeader, Pagination, SearchBar } from "@/hooks/components/universe/PageLayout";
import { Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/review-giang-vien")({
  component: TeacherReviewPage,
  head: () => ({
    meta: [
      { title: "Review giảng viên — Universe APD" },
      { name: "description", content: "Đánh giá chi tiết về giảng viên tại Học viện APD từ chính sinh viên." },
    ],
  }),
});

const teachers = [
  { id: 1, name: "TS. Nguyễn Văn A", faculty: "Khoa CNTT", subjects: ["CTDL", "Lập trình C"], rating: 4.6, reviews: 128, easy: 3, dedicated: 5, fair: 4, tag: "Khó tính nhưng tận tâm" },
  { id: 2, name: "PGS. Trần Thị B", faculty: "Khoa Toán", subjects: ["Giải tích 1", "Đại số"], rating: 4.8, reviews: 215, easy: 4, dedicated: 5, fair: 5, tag: "Giảng dễ hiểu, chấm thoáng" },
  { id: 3, name: "ThS. Lê Văn C", faculty: "Khoa Triết", subjects: ["Triết học M-L", "KTCT"], rating: 3.4, reviews: 312, easy: 2, dedicated: 3, fair: 3, tag: "Hên xui, học bài cẩn thận" },
  { id: 4, name: "TS. Phạm Thị D", faculty: "Khoa Kinh tế", subjects: ["Kinh tế vi mô", "Kinh tế vĩ mô"], rating: 4.4, reviews: 98, easy: 4, dedicated: 4, fair: 4, tag: "Chill, thi mở tài liệu" },
  { id: 5, name: "TS. Hoàng Văn E", faculty: "Khoa Vật lý", subjects: ["Vật lý đại cương"], rating: 2.8, reviews: 187, easy: 1, dedicated: 4, fair: 2, tag: "Khó, đi học đầy đủ" },
];

function TeacherReviewPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleTeachers = normalizedQuery
    ? teachers.filter((teacher) =>
        [teacher.name, teacher.faculty, teacher.tag, ...teacher.subjects]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : teachers;

  if (location.pathname !== "/review-giang-vien") {
    return <Outlet />;
  }

  return (
    <PageLayout>
      <PageHeader
        title="Review giảng viên"
        subtitle="Lời khuyên từ sinh viên đi trước — chọn giảng viên trước khi đăng ký học phần."
        action={
          <Link
            to="/review-giang-vien/viet"
            className="px-4 h-10 inline-flex items-center text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110"
          >
            + Viết review
          </Link>
        }
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} count="248 giảng viên" placeholder="Tìm kiếm giảng viên..." />

      <div className="space-y-2.5">
        {visibleTeachers.map(t => (
          <Link
            key={t.id}
            to="/review-giang-vien/$id"
            params={{ id: String(t.id) }}
            className="block bg-surface border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition"
          >
            <div className="flex gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand-blue to-primary flex items-center justify-center text-primary-foreground font-bold text-base shrink-0">
                {t.name.split(" ").pop()?.[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="text-[15px] font-semibold leading-5 text-foreground">{t.name}</h3>
                    <p className="text-[12px] text-muted-foreground">{t.faculty}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-warning/10 px-2.5 py-1 rounded-full">
                    <Star className="h-3.5 w-3.5 text-warning fill-warning" />
                    <span className="text-[13px] font-semibold">{t.rating}</span>
                    <span className="text-[11px] text-muted-foreground">({t.reviews})</span>
                  </div>
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {t.subjects.map(s => (
                    <span key={s} className="text-[11px] px-2 py-0.5 bg-tag text-tag-foreground rounded-full">{s}</span>
                  ))}
                </div>
                <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
                  <Bar label="Dễ qua môn" value={t.easy} />
                  <Bar label="Tận tâm" value={t.dedicated} />
                  <Bar label="Chấm công bằng" value={t.fair} />
                </div>
                <p className="mt-2 text-[12px] text-foreground italic">"{t.tag}"</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleTeachers.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
          <p className="text-[14px] font-medium text-foreground">Không tìm thấy giảng viên phù hợp</p>
          <p className="mt-1 text-[13px] text-muted-foreground">Thử tìm bằng từ khóa khác.</p>
        </div>
      )}
      <Pagination />
    </PageLayout>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-muted-foreground">{label}</span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`h-1.5 w-2.5 rounded-full ${i <= value ? "bg-primary" : "bg-muted"}`} />
        ))}
      </div>
    </div>
  );
}
