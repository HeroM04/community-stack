import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { PageLayout, PageHeader, Pagination, SearchBar } from "@/hooks/components/universe/PageLayout";
import { BookOpen, Download, Star, Coins } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/tai-lieu")({
  component: DocsPage,
  head: () => ({
    meta: [
      { title: "Chợ Tài Liệu — Universe APD" },
      { name: "description", content: "Mua bán, trao đổi tài liệu học tập, đề cương, slide bài giảng tại Học viện APD." },
    ],
  }),
});

const docs = [
  { id: 1, title: "Đề cương Giải tích 1 — đầy đủ 10 chương + bài tập mẫu", subject: "Giải tích 1", price: 50, free: false, rating: 4.9, sold: 284, seller: "MèoLười_4782", pages: 142 },
  { id: 2, title: "Slide bài giảng Lập trình C — bản chuẩn của Khoa CNTT", subject: "Lập trình C", price: 0, free: true, rating: 4.7, sold: 1024, seller: "CodeNinja", pages: 86 },
  { id: 3, title: "Tổng ôn Vật lý đại cương — 100 bài giải chi tiết", subject: "Vật lý", price: 80, free: false, rating: 4.8, sold: 192, seller: "CáMậpHọc", pages: 210 },
  { id: 4, title: "Bí kíp qua môn Triết — sơ đồ tư duy + đáp án mẫu", subject: "Triết học", price: 30, free: false, rating: 5.0, sold: 521, seller: "ThỏCưng_0001", pages: 64 },
  { id: 5, title: "Slide CTDL & Giải thuật — phiên bản 2024", subject: "CTDL", price: 0, free: true, rating: 4.6, sold: 412, seller: "GấuNgủ_1923", pages: 98 },
  { id: 6, title: "Toàn bộ vocab IELTS 6.5 — chuẩn bị Tiếng Anh 2", subject: "Tiếng Anh 2", price: 40, free: false, rating: 4.5, sold: 156, seller: "RùaChậm_8821", pages: 120 },
];

function DocsPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleDocs = normalizedQuery
    ? docs.filter((doc) =>
        [doc.title, doc.subject, doc.seller].join(" ").toLowerCase().includes(normalizedQuery),
      )
    : docs;

  if (location.pathname !== "/tai-lieu") {
    return <Outlet />;
  }

  return (
    <PageLayout>
      <PageHeader
        title="Chợ Tài Liệu"
        subtitle="Mua bán, trao đổi tài liệu học tập bằng Universe Coins."
        action={
          <Link
            to="/tai-lieu/dang"
            className="px-4 h-10 inline-flex items-center text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110"
          >
            + Đăng tài liệu
          </Link>
        }
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} count="1,284 tài liệu" placeholder="Tìm kiếm tài liệu..." />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {visibleDocs.map(d => (
          <Link
            key={d.id}
            to="/tai-lieu/$id"
            params={{ id: String(d.id) }}
            className="block bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-sm transition"
          >
            <div className="h-24 bg-gradient-to-br from-accent via-surface to-tag flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-primary/60" />
            </div>
            <div className="p-3.5">
              <h3 className="min-h-[40px] text-[14px] font-semibold leading-5 text-foreground line-clamp-2">{d.title}</h3>
              <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="px-2 py-0.5 bg-tag text-tag-foreground rounded-full">{d.subject}</span>
                <span>{d.pages} trang</span>
              </div>
              <div className="mt-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-[11px]">
                  <Star className="h-3 w-3 text-warning fill-warning" />
                  <span className="font-semibold">{d.rating}</span>
                  <span className="text-muted-foreground">· {d.sold} đã bán</span>
                </div>
                {d.free ? (
                  <span className="text-[12px] font-semibold text-success">Miễn phí</span>
                ) : (
                  <span className="flex items-center gap-1 text-[12px] font-semibold text-brand-red">
                    <Coins className="h-3 w-3" /> {d.price}
                  </span>
                )}
              </div>
              <div className="mt-2.5 pt-2.5 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Bởi <span className="text-primary font-medium">{d.seller}</span></span>
                <span className="flex items-center gap-1"><Download className="h-3 w-3" />{d.sold}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleDocs.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
          <p className="text-[14px] font-medium text-foreground">Không tìm thấy tài liệu phù hợp</p>
          <p className="mt-1 text-[13px] text-muted-foreground">Thử tìm bằng từ khóa khác.</p>
        </div>
      )}
      <Pagination />
    </PageLayout>
  );
}
