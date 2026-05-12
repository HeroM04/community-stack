import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHeader, FilterBar } from "@/components/universe/PageLayout";
import { FileText, Download, Eye } from "lucide-react";

export const Route = createFileRoute("/de-thi")({
  component: ExamsPage,
  head: () => ({
    meta: [
      { title: "Đề thi cũ — Universe APD" },
      { name: "description", content: "Kho đề thi cũ các môn học tại Học viện APD — miễn phí, có đáp án." },
    ],
  }),
});

const exams = [
  { id: 1, subject: "Giải tích 1", year: "2024", semester: "HK1", type: "Cuối kỳ", downloads: 1284, views: "5.2k", uploader: "MèoLười_4782", hasAnswer: true, hot: true },
  { id: 2, subject: "Lập trình C", year: "2024", semester: "HK2", type: "Giữa kỳ", downloads: 892, views: "3.1k", uploader: "CodeNinja", hasAnswer: true },
  { id: 3, subject: "Vật lý đại cương", year: "2023", semester: "HK1", type: "Cuối kỳ", downloads: 642, views: "2.8k", uploader: "CáMậpHọc", hasAnswer: false },
  { id: 4, subject: "Triết học Mác-Lênin", year: "2024", semester: "HK1", type: "Cuối kỳ", downloads: 2103, views: "8.7k", uploader: "ThỏCưng_0001", hasAnswer: true, hot: true },
  { id: 5, subject: "Cấu trúc dữ liệu", year: "2023", semester: "HK2", type: "Cuối kỳ", downloads: 521, views: "1.9k", uploader: "GấuNgủ_1923", hasAnswer: true },
  { id: 6, subject: "Tiếng Anh 2", year: "2024", semester: "HK2", type: "Giữa kỳ", downloads: 312, views: "1.2k", uploader: "RùaChậm_8821", hasAnswer: false },
];

function ExamsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Đề thi cũ"
        subtitle="Kho đề thi của các khóa trước — miễn phí, có đáp án tham khảo."
        action={
          <button className="px-4 h-10 text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110">
            + Tải đề lên
          </button>
        }
      />
      <FilterBar filters={["Mới nhất", "Tải nhiều", "Có đáp án", "Theo khoa"]} count="2,481 đề thi" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exams.map(e => (
          <Link
            key={e.id}
            to="/de-thi/$id"
            params={{ id: String(e.id) }}
            className="block bg-surface border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-sm transition"
          >
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-blue to-primary flex items-center justify-center text-primary-foreground shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-foreground truncate">{e.subject}</h3>
                  {e.hot && <span className="text-[11px] font-semibold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full">🔥 HOT</span>}
                </div>
                <p className="mt-0.5 text-[13px] text-muted-foreground">
                  {e.type} · {e.semester} · Năm {e.year}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="text-[12px] px-2.5 py-1 bg-tag text-tag-foreground rounded-full">{e.subject.toLowerCase().replace(/\s/g, "-")}</span>
                  {e.hasAnswer && <span className="text-[12px] px-2.5 py-1 bg-success/10 text-success rounded-full">✓ có đáp án</span>}
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[12px] text-muted-foreground">
              <span>Bởi <span className="text-primary font-medium">{e.uploader}</span></span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" />{e.views}</span>
                <span className="flex items-center gap-1"><Download className="h-3.5 w-3.5" />{e.downloads}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
