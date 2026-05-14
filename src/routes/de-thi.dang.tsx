import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { PageLayout, PageHeader, Card } from "@/components/universe/PageLayout";
import { UploadCloud, FileText, X, ChevronLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/de-thi/dang")({ component: UploadExamPage });

function UploadExamPage() {
  const [files, setFiles] = useState<{ name: string; size: string }[]>([]);
  const router = useRouter(); // Khởi tạo router để dùng hàm back()

  return (
    <PageLayout showRightSidebar={false}>
      
      {/* --- NÚT QUAY LẠI & BREADCRUMB --- */}
      <div className="flex items-center gap-3 mb-2">
        <button 
          onClick={() => router.history.back()}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground transition shadow-sm"
          title="Quay lại danh sách đề thi"
        >
          <ChevronLeft className="h-5 w-5 -ml-0.5" />
        </button>
        <nav className="text-[13px] text-muted-foreground font-medium">
          <Link to="/de-thi" className="hover:text-primary transition">Đề thi cũ</Link> 
          <span className="mx-2 text-border/80">/</span> 
          <span className="text-foreground">Tải đề lên</span>
        </nav>
      </div>

      <PageHeader title="Tải đề thi lên" subtitle="Đóng góp đề cũ — giúp khoá sau ôn thi đỡ khổ." />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 mt-2">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Card>
            <h3 className="font-semibold text-[14px] mb-3 text-foreground">File đề thi</h3>
            <label className="block border-2 border-dashed border-border bg-surface rounded-2xl p-8 text-center hover:bg-accent/50 hover:border-primary/50 transition cursor-pointer group">
              <UploadCloud className="h-10 w-10 mx-auto text-brand-red group-hover:scale-110 transition-transform duration-300" />
              <p className="mt-3 text-[14px] font-medium text-foreground">Kéo thả ảnh/PDF của đề vào đây</p>
              <p className="text-[12px] text-muted-foreground mt-1">Có thể tải nhiều ảnh nếu chụp từng trang</p>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    setFiles([...files, ...Array.from(e.target.files).map(f => ({ name: f.name, size: `${(f.size/1024/1024).toFixed(1)} MB` }))]);
                  }
                }}
              />
            </label>
            {files.length > 0 && (
              <ul className="mt-4 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between p-3 bg-accent/40 border border-border rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 text-[13px] min-w-0">
                      <div className="p-2 bg-surface rounded-lg shrink-0">
                        <FileText className="h-4 w-4 text-brand-red" />
                      </div>
                      <div className="truncate">
                        <span className="font-semibold text-foreground">{f.name}</span>
                        <span className="text-muted-foreground ml-2">· {f.size}</span>
                      </div>
                    </div>
                    <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))} className="p-1.5 hover:bg-brand-red/10 hover:text-brand-red text-muted-foreground rounded-md transition shrink-0 ml-2">
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <Card className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Tên môn" placeholder="Giải tích 2" />
              <Field label="Mã môn" placeholder="MATH121" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select label="Học kỳ" options={["HK1", "HK2", "HK Hè"]} />
              <Select label="Năm học" options={["2024-2025","2023-2024","2022-2023","2021-2022"]} />
              <Select label="Loại đề" options={["Cuối kỳ", "Giữa kỳ", "Quiz", "Đề mẫu"]} />
            </div>
            <Field label="Giảng viên ra đề (tuỳ chọn)" placeholder="VD: TS. Nguyễn Văn A" />
            <Field label="Hình thức thi" placeholder="VD: Tự luận 90 phút, được dùng tài liệu" />
            <Field label="Ghi chú" textarea placeholder="Đề khó/dễ, mẹo làm bài, dạng câu hỏi..." />
          </Card>

          <div className="flex justify-end gap-3 pt-2">
            <Link to="/de-thi" className="px-5 h-10 inline-flex items-center border border-border rounded-full text-[13px] hover:bg-muted transition">
              Huỷ
            </Link>
            <button className="px-6 h-10 bg-[#dc2626] text-white rounded-full text-[13px] font-bold hover:bg-[#b91c1c] transition shadow-sm">
              Tải đề lên
            </button>
          </div>
        </form>

        <aside className="space-y-4 mt-1 lg:mt-0">
          <Card className="!p-5 bg-gradient-to-br from-surface to-accent/30">
            <h3 className="font-bold text-[15px] mb-3 text-foreground flex items-center gap-2">
              🎁 Phần thưởng
            </h3>
            <ul className="text-[13px] text-muted-foreground space-y-2.5 list-none">
              <li className="flex items-start gap-2">
                <span className="text-brand-red font-bold">✨</span> +50 xu khi đề được duyệt.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red font-bold">✨</span> +10 xu mỗi 100 lượt tải.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red font-bold">✨</span> Huy hiệu "Người đóng góp" sau 5 đề.
              </li>
            </ul>
          </Card>
        </aside>
      </div>
    </PageLayout>
  );
}

function Field({ label, textarea, ...props }: any) {
  return (
    <div>
      <label className="block text-[13px] font-medium mb-1.5 text-foreground">{label}</label>
      {textarea ? (
        <textarea {...props} rows={3} className="w-full px-4 py-3 text-[13px] bg-surface border border-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition resize-y" />
      ) : (
        <input {...props} className="w-full h-10 px-4 text-[13px] bg-surface border border-border rounded-full focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition" />
      )}
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[13px] font-medium mb-1.5 text-foreground">{label}</label>
      <select className="w-full h-10 px-3 text-[13px] bg-surface border border-border rounded-full focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition cursor-pointer appearance-none">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}