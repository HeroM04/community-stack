import { createFileRoute } from "@tanstack/react-router";
import { QuestionList } from "@/components/universe/QuestionList";
import { PageLayout, PageHeader, FilterBar } from "@/components/universe/PageLayout";

export const Route = createFileRoute("/posts")({
  component: PostsPage,
  head: () => ({
    meta: [
      { title: "Bài post — Universe APD" },
      { name: "description", content: "Tổng hợp các bài post hỏi đáp, chia sẻ kinh nghiệm học tập của sinh viên APD." },
    ],
  }),
});

function PostsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Bài post"
        subtitle="Đặt câu hỏi, chia sẻ kinh nghiệm với cộng đồng."
        action={
          <button className="px-4 h-10 text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110">
            + Đăng bài mới
          </button>
        }
      />
      <FilterBar filters={["Mới nhất", "Hot", "Tuần này", "Chưa trả lời"]} count="28,492 bài post" />
      <QuestionList />
    </PageLayout>
  );
}
