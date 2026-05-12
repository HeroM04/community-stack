import { createFileRoute } from "@tanstack/react-router";
import { QuestionList } from "@/components/universe/QuestionList";
import { PageLayout, PageHeader, FilterBar } from "@/components/universe/PageLayout";

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

const filters = ["Mới nhất", "Hot", "Tuần này", "Chưa trả lời"];

function Index() {
  return (
    <PageLayout>
      <PageHeader
        title="Tất cả bài post"
        subtitle="Hỏi đáp, chia sẻ và sống sót qua đại học cùng cộng đồng APD."
        action={
          <button className="px-4 h-10 text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110">
            + Đăng bài mới
          </button>
        }
      />
      <FilterBar filters={filters} count="28,492 bài post" />
      <QuestionList />

      <div className="mt-6 flex items-center justify-between text-[13px]">
        <div className="flex gap-1">
          {["1", "2", "3", "4", "5", "…", "1898", "Sau"].map((n, i) => (
            <button
              key={i}
              className={`min-w-[32px] h-8 px-2.5 rounded-full border ${
                i === 0
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface border-border hover:bg-muted text-foreground"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
