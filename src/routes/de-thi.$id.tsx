import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/universe/PageLayout";
import { Download, Eye, FileText, Calendar, User, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/de-thi/$id")({
  component: ExamDetailPage,
});

function ExamDetailPage() {
  const { id } = Route.useParams();
  return (
    <PageLayout>
      <nav className="text-[13px] text-muted-foreground mb-3">
        <Link to="/de-thi" className="hover:text-primary">Đề thi cũ</Link> <span className="mx-1">/</span> <span>Đề #{id}</span>
      </nav>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        <div className="p-6 bg-gradient-to-br from-accent via-surface to-tag border-b border-border">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-blue to-primary flex items-center justify-center text-primary-foreground shrink-0">
              <FileText className="h-8 w-8" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-semibold">Đề thi Cuối kỳ — Giải tích 1</h1>
              <p className="mt-1 text-[13px] text-muted-foreground">Học kỳ 1 · Năm học 2024-2025 · Khoa Toán</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-[12px] px-2.5 py-1 bg-tag text-tag-foreground rounded-full">giải-tích-1</span>
                <span className="text-[12px] px-2.5 py-1 bg-success/10 text-success rounded-full">✓ có đáp án</span>
                <span className="text-[12px] px-2.5 py-1 bg-brand-red/10 text-brand-red rounded-full font-semibold">🔥 HOT</span>
              </div>
            </div>
            <button className="px-5 h-11 text-[13px] font-semibold bg-brand-red text-primary-foreground rounded-full hover:brightness-110 flex items-center gap-2 shrink-0">
              <Download className="h-4 w-4" /> Tải về
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-[13px] border-b border-border">
          <Meta icon={<Calendar className="h-4 w-4" />} label="Năm học" value="2024-2025" />
          <Meta icon={<FileText className="h-4 w-4" />} label="Loại đề" value="Cuối kỳ" />
          <Meta icon={<Eye className="h-4 w-4" />} label="Lượt xem" value="5.2k" />
          <Meta icon={<Download className="h-4 w-4" />} label="Lượt tải" value="1,284" />
        </div>

        {/* Preview */}
        <div className="p-6">
          <h2 className="text-[16px] font-semibold mb-3">Xem trước đề thi</h2>
          <div className="aspect-[3/4] max-w-md mx-auto bg-muted border border-border rounded-2xl p-6 text-[13px] leading-relaxed">
            <div className="text-center font-semibold mb-4">HỌC VIỆN CHÍNH SÁCH & PHÁT TRIỂN<br/>ĐỀ THI CUỐI KỲ — GIẢI TÍCH 1</div>
            <div className="text-[11px] text-muted-foreground text-center mb-4">Thời gian: 90 phút · Không sử dụng tài liệu</div>
            <p><strong>Câu 1 (2đ):</strong> Tính giới hạn lim<sub>x→0</sub> (sin x)/x.</p>
            <p className="mt-2"><strong>Câu 2 (3đ):</strong> Khảo sát và vẽ đồ thị hàm số y = x³ − 3x + 2.</p>
            <p className="mt-2"><strong>Câu 3 (3đ):</strong> Tính tích phân ∫(x²+1)e^x dx.</p>
            <p className="mt-2 blur-sm select-none">Câu 4 (2đ): ... (Tải về để xem đầy đủ)</p>
          </div>
        </div>

        <div className="p-6 border-t border-border flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-red" />
            <div className="text-[13px]">
              <div className="text-primary font-medium flex items-center gap-1">MèoLười_4782 <CheckCircle2 className="h-3.5 w-3.5 text-success" /></div>
              <div className="text-[12px] text-muted-foreground">1,284 reputation · Đăng 2 ngày trước</div>
            </div>
          </div>
          <button className="px-4 h-9 text-[13px] border border-border rounded-full hover:bg-muted">+ Theo dõi</button>
        </div>
      </div>

      {/* Comments */}
      <h2 className="mt-8 text-[18px] font-semibold mb-3">Bình luận (24)</h2>
      <div className="space-y-2">
        {[
          { user: "CodeNinja", rep: "8,921", time: "1 giờ trước", text: "Cảm ơn bạn rất nhiều! Đáp án câu 3 hơi sai chỗ tích phân từng phần, nhưng các câu khác chuẩn." },
          { user: "GấuNgủ_1923", rep: "3,402", time: "5 giờ trước", text: "Đề năm 2024 này khó hơn 2023 đó. Câu 4 ai làm được chỉ mình với 🥺" },
          { user: "ThỏCưng_0001", rep: "12.4k", time: "1 ngày trước", text: "Upload chuẩn, chất lượng scan rõ. Đã upvote." },
        ].map((c, i) => (
          <div key={i} className="flex gap-3 p-3 bg-surface border border-border rounded-2xl">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-red shrink-0" />
            <div className="flex-1 min-w-0 text-[13px]">
              <div className="flex items-center gap-2"><span className="text-primary font-medium">{c.user}</span><span className="text-muted-foreground text-[12px]">· {c.time}</span></div>
              <p className="mt-1 text-foreground">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-primary">{icon}</div>
      <div>
        <div className="text-[11px] text-muted-foreground uppercase">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}
