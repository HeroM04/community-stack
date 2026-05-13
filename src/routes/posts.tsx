import { Outlet, createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { QuestionList } from "@/components/universe/QuestionList";
import { PageLayout, PageHeader, Pagination, SearchBar } from "@/components/universe/PageLayout";
import { useState } from "react";

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
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  if (location.pathname !== "/posts") {
    return <Outlet />;
  }

  return (
    <PageLayout>
      <PageHeader
        title="Bài post"
        subtitle="Đặt câu hỏi, chia sẻ kinh nghiệm với cộng đồng."
        action={
          <Link
            to="/posts/new"
            className="px-4 h-10 inline-flex items-center text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110"
          >
            + Đăng bài mới
          </Link>
        }
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} count="28,492 bài post" placeholder="Tìm kiếm bài post..." />
      <QuestionList searchQuery={searchQuery} />
      <Pagination />
    </PageLayout>
  );
}
