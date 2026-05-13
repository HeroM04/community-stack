import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/hooks/components/universe/PageLayout";
import { Star, Coins, Download, BookOpen, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/tai-lieu/$id")({
  component: DocDetailPage,
});

function DocDetailPage() {
  const { id } = Route.useParams();
  return (
    <PageLayout>
      <nav className="text-[13px] text-muted-foreground mb-3">
        <Link to="/tai-lieu" className="hover:text-primary">Chợ Tài Liệu</Link> <span className="mx-1">/</span> <span>#{id}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div>
          <div className="aspect-[16/9] bg-gradient-to-br from-accent via-surface to-tag rounded-2xl flex items-center justify-center border border-border">
            <BookOpen className="h-20 w-20 text-primary/50" />
          </div>

          <h1 className="mt-5 text-2xl font-semibold leading-tight">
            Đề cương Giải tích 1 — đầy đủ 10 chương + bài tập mẫu
          </h1>
          <div className="mt-2 flex items-center gap-3 text-[13px] text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-warning fill-warning" />
              <span className="font-semibold text-foreground">4.9</span>
              <span>(124 đánh giá)</span>
            </div>
            <span>· 284 lượt mua</span>
            <span>· 142 trang</span>
          </div>

          <div className="mt-5">
            <h2 className="text-[16px] font-semibold mb-2">Mô tả</h2>
            <div className="text-[14px] leading-relaxed text-foreground space-y-2">
              <p>Đề cương được biên soạn trong suốt cả học kỳ, bám sát giáo trình của thầy Nguyễn Văn A (Khoa Toán). Tài liệu bao gồm:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tóm tắt lý thuyết 10 chương — gọn, dễ học thuộc</li>
                <li>Sơ đồ tư duy mỗi chương</li>
                <li>200+ bài tập có lời giải chi tiết</li>
                <li>5 đề thi mẫu sát đề thật cuối kỳ</li>
                <li>Mẹo làm nhanh phần tích phân & chuỗi</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-[16px] font-semibold mb-3">Đánh giá của người mua</h2>
            <div className="space-y-3">
              {[
                { user: "GấuNgủ_1923", rating: 5, text: "Tài liệu xịn, mình pass môn nhờ cái này. Phần bài tập lời giải rất rõ ràng." },
                { user: "CodeNinja", rating: 5, text: "Đáng tiền 50 coins. Sơ đồ tư duy giúp mình ôn thi nhanh hơn nhiều." },
                { user: "RùaChậm_8821", rating: 4, text: "Tốt, nhưng chương 7 có vài chỗ hơi tóm tắt quá. Vẫn recommend." },
              ].map((r, i) => (
                <div key={i} className="p-4 bg-surface border border-border rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium text-[13px]">{r.user}</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`h-3.5 w-3.5 ${j < r.rating ? "text-warning fill-warning" : "text-muted"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-[13px] text-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buy panel */}
        <aside className="lg:sticky lg:top-20 self-start">
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <div className="flex items-baseline gap-1">
              <Coins className="h-6 w-6 text-warning" />
              <span className="text-3xl font-bold text-brand-red">50</span>
              <span className="text-muted-foreground text-[13px]">Universe Coins</span>
            </div>
            <button className="w-full h-11 text-[14px] font-semibold bg-brand-red text-primary-foreground rounded-full hover:brightness-110">
              Mua ngay
            </button>
            <button className="w-full h-11 text-[14px] font-semibold border border-primary text-primary rounded-full hover:bg-accent">
              Thêm vào giỏ
            </button>

            <div className="pt-3 border-t border-border space-y-2 text-[13px]">
              <Row label="Định dạng" value="PDF" />
              <Row label="Số trang" value="142" />
              <Row label="Cập nhật" value="2 ngày trước" />
              <Row label="Ngôn ngữ" value="Tiếng Việt" />
            </div>

            <div className="pt-3 border-t border-border flex items-center gap-2 text-[12px] text-success">
              <ShieldCheck className="h-4 w-4" />
              <span>Hoàn coins 100% nếu tài liệu sai mô tả</span>
            </div>
          </div>

          <div className="mt-4 bg-surface border border-border rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-red" />
              <div>
                <div className="text-primary font-semibold">MèoLười_4782</div>
                <div className="text-[12px] text-muted-foreground">1,284 reputation · 23 tài liệu</div>
              </div>
            </div>
            <button className="mt-3 w-full h-9 text-[13px] border border-border rounded-full hover:bg-muted">Theo dõi người bán</button>
          </div>
        </aside>
      </div>
    </PageLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
