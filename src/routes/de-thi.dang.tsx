import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHeader, Card } from "@/components/universe/PageLayout";
import { UploadCloud, FileText, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/de-thi/dang")({ component: UploadExamPage });

function UploadExamPage() {
  const [files, setFiles] = useState<{ name: string; size: string }[]>([]);
  return (
    <PageLayout showRightSidebar={false}>
      <PageHeader title="Tải đề thi lên" subtitle="Đóng góp đề cũ — giúp khoá sau ôn thi đỡ khổ." />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Card>
            <h3 className="font-semibold text-[14px] mb-2">File đề thi</h3>
            <label className="block border-2 border-dashed border-border rounded-2xl p-8 text-center hover:bg-muted/50 cursor-pointer">
              <UploadCloud className="h-10 w-10 mx-auto text-brand-red" />
              <p className="mt-2 text-[14px] font-medium">Kéo thả ảnh/PDF của đề vào đây</p>
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
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tên môn" placeholder="Giải tích 2" />
              <Field label="Mã môn" placeholder="MATH121" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Select label="Học kỳ" options={["HK1", "HK2", "HK Hè"]} />
              <Select label="Năm học" options={["2024-2025","2023-2024","2022-2023","2021-2022"]} />
              <Select label="Loại đề" options={["Cuối kỳ", "Giữa kỳ", "Quiz", "Đề mẫu"]} />
            </div>
            <Field label="Giảng viên ra đề (tuỳ chọn)" placeholder="VD: TS. Nguyễn Văn A" />
            <Field label="Hình thức thi" placeholder="VD: Tự luận 90 phút, được dùng tài liệu" />
            <Field label="Ghi chú" textarea placeholder="Đề khó/dễ, mẹo làm bài, dạng câu hỏi..." />
          </Card>

          <Card>
            <h3 className="font-semibold text-[14px] mb-3">Tuỳ chọn nâng cao</h3>
            <div className="space-y-2 text-[13px]">
              <label className="flex items-center gap-2"><input type="checkbox" /> Có đáp án đính kèm</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Đề được scan, chất lượng rõ</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Cho phép cộng đồng bình luận</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Đăng ẩn danh</label>
            </div>
          </Card>

          <div className="flex justify-end gap-2">
            <Link to="/de-thi" className="px-5 h-10 inline-flex items-center border border-border rounded-full text-[13px] hover:bg-muted">Huỷ</Link>
            <button className="px-5 h-10 bg-brand-red text-primary-foreground rounded-full text-[13px] font-medium hover:brightness-110">
              Tải đề lên
            </button>
          </div>
        </form>

        <aside className="space-y-3">
          <Card className="!p-4">
            <h3 className="font-semibold text-[14px] mb-2">Phần thưởng</h3>
            <ul className="text-[12.5px] text-muted-foreground space-y-1.5 list-disc pl-4">
              <li>+50 xu khi đề được duyệt.</li>
              <li>+10 xu mỗi 100 lượt tải.</li>
              <li>Huy hiệu "Người đóng góp" sau 5 đề.</li>
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
        <textarea {...props} rows={3} className="w-full px-4 py-2 text-[13px] bg-background border border-border rounded-xl focus:outline-none focus:ring-3 focus:ring-accent" />
      ) : (
        <input {...props} className="w-full h-10 px-4 text-[13px] bg-background border border-border rounded-full focus:outline-none focus:ring-3 focus:ring-accent" />
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
