import { createFileRoute, Link } from "@tanstack/react-router";
import { QuestionList } from "@/components/universe/QuestionList";
import { PageLayout, PageHeader, Pagination } from "@/components/universe/PageLayout";
import { BookOpen, Coins, Download, Eye, FileText, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Universe APD — Cộng đồng sinh viên" },
      {
        name: "description",
        content:
          "Universe APD là cộng đồng sinh viên Học viện Chính sách & Phát triển — chia sẻ tài liệu, đề thi cũ, review môn học và giảng viên.",
      },
    ],
  }),
});

const homeExams = [
  { id: 1, subject: "Giải tích 1", year: "2024", type: "Cuối kỳ", downloads: 1284, views: "5.2k", hasAnswer: true },
  { id: 2, subject: "Lập trình C", year: "2024", type: "Giữa kỳ", downloads: 892, views: "3.1k", hasAnswer: true },
  { id: 3, subject: "Triết học M-L", year: "2024", type: "Cuối kỳ", downloads: 2103, views: "8.7k", hasAnswer: true },
];

const homeDocs = [
  { id: 1, title: "Đề cương Giải tích 1", subject: "Giải tích 1", price: 50, free: false, rating: 4.9, sold: 284 },
  { id: 2, title: "Slide bài giảng Lập trình C", subject: "Lập trình C", price: 0, free: true, rating: 4.7, sold: 1024 },
  { id: 3, title: "Tổng ôn Vật lý đại cương", subject: "Vật lý", price: 80, free: false, rating: 4.8, sold: 192 },
];

function Index() {
  return (
    <PageLayout>
      <PageHeader
        title="Universe APD"
        subtitle="Hỏi đáp, tài liệu, đề thi và review học tập của cộng đồng sinh viên APD."
        action={
          <Link
            to="/posts/new"
            className="px-4 h-10 inline-flex items-center text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110"
          >
            + Đăng bài mới
          </Link>
        }
      />
      <section>
        <SectionTitle title="Bài post nổi bật" to="/posts" />
        <QuestionList limit={3} compact />
      </section>
      <HomeResourceSections />
      <Pagination />
    </PageLayout>
  );
}

function HomeResourceSections() {
  return (
    <div className="mt-8 space-y-6">
      <section>
        <SectionTitle title="Đề thi mới" to="/de-thi" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {homeExams.map((exam) => (
            <Link
              key={exam.id}
              to="/de-thi/$id"
              params={{ id: String(exam.id) }}
              className="flex gap-3 rounded-xl border border-border bg-surface p-3.5 hover:border-primary/40 hover:shadow-sm transition"
            >
              <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-[14px] font-semibold text-foreground">{exam.subject}</h3>
                <p className="mt-0.5 text-[12px] text-muted-foreground">{exam.type} · Năm {exam.year}</p>
                <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{exam.views}</span>
                  <span className="flex items-center gap-1"><Download className="h-3 w-3" />{exam.downloads}</span>
                  {exam.hasAnswer && <span className="text-success">Có đáp án</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Tài liệu nổi bật" to="/tai-lieu" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {homeDocs.map((doc) => (
            <Link
              key={doc.id}
              to="/tai-lieu/$id"
              params={{ id: String(doc.id) }}
              className="flex gap-3 rounded-xl border border-border bg-surface p-3.5 hover:border-primary/40 hover:shadow-sm transition"
            >
              <div className="h-10 w-10 rounded-lg bg-tag flex items-center justify-center shrink-0">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-[14px] font-semibold text-foreground">{doc.title}</h3>
                <p className="mt-0.5 text-[12px] text-muted-foreground">{doc.subject}</p>
                <div className="mt-2 flex items-center justify-between gap-2 text-[11px]">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Star className="h-3 w-3 text-warning fill-warning" /> {doc.rating} · {doc.sold}
                  </span>
                  {doc.free ? (
                    <span className="font-semibold text-success">Miễn phí</span>
                  ) : (
                    <span className="flex items-center gap-1 font-semibold text-brand-red">
                      <Coins className="h-3 w-3" /> {doc.price}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ title, to }: { title: string; to: "/posts" | "/de-thi" | "/tai-lieu" }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-[18px] font-semibold text-foreground">{title}</h2>
      <Link to={to} className="text-[13px] font-medium text-primary hover:underline">
        Xem tất cả
      </Link>
    </div>
  );
}
