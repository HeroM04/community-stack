import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { PageLayout, PageHeader, Card } from "@/components/universe/PageLayout";
import { UploadCloud, FileText, X, ChevronLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/tai-lieu/dang")({ component: UploadDocPage });

function UploadDocPage() {
  const router = useRouter(); // Khởi tạo router
  const [files, setFiles] = useState<{ name: string; size: string }[]>([
    { name: "Slide_GiaiTich2_Chuong3.pdf", size: "2.4 MB" },
  ]);
  return (
    <PageLayout showRightSidebar={false}>
      
      {/* Thêm Flex container bao bọc nút Back và Nav */}
      <div className="flex items-center gap-3 mb-3">
        <button 
          onClick={() => router.history.back()}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground transition shadow-sm"
          title="Quay lại"
        >
          <ChevronLeft className="h-5 w-5 -ml-0.5" />
        </button>
        <nav className="text-[13px] text-muted-foreground">
          <Link to="/tai-lieu" className="hover:text-primary">Chợ Tài Liệu</Link> <span className="mx-1">/</span> <span>Đăng tài liệu</span>
        </nav>
      </div>

      <PageHeader title="Đăng tài liệu mới" subtitle="Chia sẻ slide, bài giảng, tóm tắt — kiếm xu APD." />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Card>
            <h3 className="font-semibold text-[14px] mb-2">File tài liệu</h3>
            <label className="block border-2 border-dashed border-border rounded-2xl p-8 text-center hover:bg-muted/50 cursor-pointer transition">
              <UploadCloud className="h-10 w-10 mx-auto text-primary" />
              <p className="mt-2 text-[14px] font-medium">Kéo thả file vào đây hoặc bấm để chọn</p>
              <p className="text-[12px] text-muted-foreground mt-1">PDF, DOCX, PPTX, ZIP — tối đa 50MB</p>
              <input type="file" multiple className="hidden" />
            </label>
            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between p-3 bg-background border border-border rounded-xl">
                    <div className="flex items-center gap-2 text-[13px]">
                      <FileText className="h-4 w-4 text-brand-red" />
                      <span className="font-medium">{f.name}</span>
                      <span className="text-muted-foreground">· {f.size}</span>
                    </div>
                    <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))} className="p-1 hover:bg-muted rounded">
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <Card className="space-y-3">
            <Field label="Tiêu đề tài liệu" placeholder="VD: Tổng hợp công thức Giải tích 2" />
            <div className="grid grid-cols-2 gap-3">
              <Select label="Môn học" options={["Giải tích 2", "Đại số tuyến tính", "Vật lý đại cương"]} />
              <Select label="Loại tài liệu" options={["Slide bài giảng", "Tóm tắt", "Bài tập", "Đáp án", "Khác"]} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Select label="Học kỳ" options={["HK1 2024-2025", "HK2 2024-2025", "HK1 2023-2024"]} />
              <Select label="Giảng viên" options={["TS. Nguyễn Văn A", "ThS. Trần Thị B", "Khác / Không rõ"]} />
            </div>
            <Field label="Mô tả" textarea placeholder="Tài liệu này gồm những gì, dùng cho ai..." />
            <Field label="Tags" placeholder="giai-tich, tom-tat, k23" />
          </Card>

          <Card>
            <h3 className="font-semibold text-[14px] mb-3">Giá tài liệu</h3>
            <div className="grid grid-cols-3 gap-2">
              {["Miễn phí", "10 xu", "30 xu", "50 xu", "100 xu", "Tuỳ chọn"].map((p, i) => (
                <button
                  key={p}
                  type="button"
                  className={`h-10 rounded-full border text-[13px] ${i === 0 ? "border-primary bg-accent text-accent-foreground font-medium" : "border-border hover:bg-muted"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </Card>

          <div className="flex justify-end gap-2">
            <Link to="/tai-lieu" className="px-5 h-10 inline-flex items-center border border-border rounded-full text-[13px] hover:bg-muted">
              Huỷ
            </Link>
            <button className="px-5 h-10 bg-primary text-primary-foreground rounded-full text-[13px] font-medium hover:brightness-110">
              Đăng tài liệu
            </button>
          </div>
        </form>

        <aside className="space-y-3">
          <Card className="!p-4">
            <h3 className="font-semibold text-[14px] mb-2">Quy tắc đăng tài liệu</h3>
            <ul className="text-[12.5px] text-muted-foreground space-y-1.5 list-disc pl-4">
              <li>Không đăng tài liệu vi phạm bản quyền.</li>
              <li>Ghi rõ nguồn nếu sưu tầm.</li>
              <li>File rõ nét, đặt tên dễ hiểu.</li>
              <li>Tài liệu chất lượng được duyệt nhanh hơn.</li>
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
      <label className="block text-[13px] font-medium mb-1">{label}</label>
      {textarea ? (
        <textarea {...props} rows={4} className="w-full px-4 py-2 text-[13px] bg-background border border-border rounded-xl focus:outline-none focus:ring-3 focus:ring-accent focus:border-primary/40" />
      ) : (
        <input {...props} className="w-full h-10 px-4 text-[13px] bg-background border border-border rounded-full focus:outline-none focus:ring-3 focus:ring-accent focus:border-primary/40" />
      )}
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[13px] font-medium mb-1">{label}</label>
      <select className="w-full h-10 px-3 text-[13px] bg-background border border-border rounded-full">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}