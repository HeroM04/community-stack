import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { PageLayout, PageHeader, Card } from "@/components/universe/PageLayout";
import { Star, ChevronLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/review-giang-vien/viet")({ component: WriteTeacherReviewPage });

function WriteTeacherReviewPage() {
  const router = useRouter(); // Khởi tạo router để dùng hàm back()

  return (
    <PageLayout showRightSidebar={false}>
      
      {/* --- NÚT QUAY LẠI & BREADCRUMB --- */}
      <div className="flex items-center gap-3 mb-2">
        <button 
          onClick={() => router.history.back()}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground transition shadow-sm"
          title="Quay lại danh sách review"
        >
          <ChevronLeft className="h-5 w-5 -ml-0.5" />
        </button>
        <nav className="text-[13px] text-muted-foreground font-medium">
          <Link to="/review-giang-vien" className="hover:text-primary transition">Review giảng viên</Link> 
          <span className="mx-2 text-border/80">/</span> 
          <span className="text-foreground">Viết review</span>
        </nav>
      </div>

      <PageHeader title="Viết review giảng viên" subtitle="Đánh giá khách quan, lịch sự — review của bạn ảnh hưởng đến hàng nghìn sinh viên." />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 mt-2">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Card className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select 
                label="Tên giảng viên" 
                options={["-- Chọn giảng viên --", "TS. Nguyễn Văn A", "ThS. Trần Thị B", "PGS. TS Lê Văn C", "ThS. Phạm Văn D"]} 
              />
              <Select label="Khoa" options={["CNTT","Kinh tế","Ngoại ngữ","Cơ khí","Khác"]} />
              <div className="md:col-span-2">
                <Field label="Môn đã học với giảng viên" placeholder="VD: Giải tích 2, Lập trình C..." />
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-[14px] mb-3 text-foreground">Đánh giá theo tiêu chí</h3>
            <div className="space-y-3">
              <Rating label="Tổng quan" />
              <Rating label="Cách giảng dạy" />
              <Rating label="Độ tận tâm" />
              <Rating label="Công bằng chấm điểm" />
              <Rating label="Mức độ khó tính" />
            </div>
          </Card>

          <Card>
            <Field label="Tiêu đề review" placeholder="VD: Thầy nhiệt tình, chấm rộng nhưng yêu cầu chuyên cần" />
          </Card>

          <Card className="space-y-4">
            <Field label="Phong cách giảng dạy" textarea placeholder="Cách thầy/cô lên lớp, tương tác..." />
            <Field label="Cách ra đề & chấm điểm" textarea placeholder="Đề khó hay dễ, có theo slide không..." />
            <Field label="Lời khuyên cho khoá sau" textarea placeholder="Học môn của thầy/cô cần lưu ý gì..." />
          </Card>

          <Card>
            <h3 className="font-semibold text-[14px] mb-3 text-foreground">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Tâm huyết","Vui tính","Khó tính","Chấm rộng","Chấm chặt","Yêu cầu chuyên cần","Hay điểm danh","Giảng dễ hiểu","Đề bám slide"].map((t) => (
                <label key={t} className="text-[12px] px-3 py-1.5 bg-tag text-tag-foreground rounded-full cursor-pointer hover:brightness-95 transition">
                  <input type="checkbox" className="mr-1.5 align-middle" /> {t}
                </label>
              ))}
            </div>
          </Card>

          <div className="flex justify-end gap-3 pt-2">
            <Link to="/review-giang-vien" className="px-5 h-10 inline-flex items-center border border-border rounded-full text-[13px] hover:bg-muted transition">
              Huỷ
            </Link>
            <button className="px-5 h-10 bg-[#dc2626] text-white rounded-full text-[13px] font-medium hover:bg-[#b91c1c] transition shadow-sm">
              Đăng review (Chờ duyệt)
            </button>
          </div>
        </form>

        <aside className="space-y-4 mt-1 lg:mt-0">
          <Card className="!p-5 bg-gradient-to-br from-surface to-accent/30">
            <h3 className="font-bold text-[15px] mb-3 text-foreground flex items-center gap-2">
              📜 Quy tắc
            </h3>
            <ul className="text-[13px] text-muted-foreground space-y-2.5 list-disc pl-4">
              <li>Không dùng từ ngữ xúc phạm.</li>
              <li>Chỉ review giảng viên bạn đã học.</li>
              <li>Review vi phạm sẽ bị gỡ và khoá tài khoản.</li>
            </ul>
          </Card>
        </aside>
      </div>
    </PageLayout>
  );
}

function Rating({ label }: { label: string }) {
  const [v, setV] = useState(0);
  return (
    <div className="flex items-center justify-between">
      <span className="text-[13px] font-medium text-foreground">{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <button key={i} type="button" onClick={() => setV(i)} className="transition-transform hover:scale-110">
            <Star className={`h-5 w-5 ${i <= v ? "fill-warning text-warning" : "text-muted-foreground/40"}`} />
          </button>
        ))}
      </div>
    </div>
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
        {options.map((o) => (
          <option key={o} value={o === "-- Chọn giảng viên --" ? "" : o} disabled={o === "-- Chọn giảng viên --"}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}