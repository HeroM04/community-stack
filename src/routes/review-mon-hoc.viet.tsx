import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHeader, Card } from "@/hooks/components/universe/PageLayout";
import { Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/review-mon-hoc/viet")({ component: WriteCourseReviewPage });

function WriteCourseReviewPage() {
  return (
    <PageLayout showRightSidebar={false}>
      <PageHeader title="Viết review môn học" subtitle="Trải nghiệm thật của bạn giúp khoá sau chọn môn đỡ hối hận." />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Card className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tên môn học" placeholder="VD: Kinh tế vi mô" />
              <Field label="Mã môn" placeholder="ECON101" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Giảng viên đã học" placeholder="VD: ThS. Trần Thị B" />
              <Select label="Học kỳ" options={["HK1 2024-2025","HK2 2024-2025","HK1 2023-2024"]} />
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-[14px] mb-3">Đánh giá chi tiết</h3>
            <div className="space-y-3">
              <Rating label="Tổng quan" />
              <Rating label="Độ khó (5 = rất khó)" />
              <Rating label="Khối lượng bài tập" />
              <Rating label="Tính ứng dụng" />
              <Rating label="Giảng viên dạy" />
            </div>
          </Card>

          <Card>
            <Field label="Tiêu đề review" placeholder="VD: Môn dễ ăn A nếu đi học đầy đủ" />
          </Card>

          <Card className="space-y-3">
            <Field label="Nội dung học" textarea placeholder="Môn này dạy gì? Lý thuyết hay thực hành?" />
            <Field label="Cách học hiệu quả" textarea placeholder="Mẹo qua môn, cách ôn thi..." />
            <Field label="Ưu điểm" textarea placeholder="Điều bạn thích..." />
            <Field label="Nhược điểm" textarea placeholder="Điều cần cải thiện..." />
          </Card>

          <Card>
            <h3 className="font-semibold text-[14px] mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Dễ qua", "Điểm cao", "Thầy dễ tính", "Bài tập nhiều", "Cần đi học", "Có quiz tuần", "Thi tự luận", "Thi trắc nghiệm"].map((t) => (
                <label key={t} className="text-[12px] px-3 py-1.5 bg-tag text-tag-foreground rounded-full cursor-pointer hover:brightness-95">
                  <input type="checkbox" className="mr-1.5 align-middle" /> {t}
                </label>
              ))}
            </div>
          </Card>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <label className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <input type="checkbox" defaultChecked /> Đăng ẩn danh
            </label>
            <div className="flex gap-2">
              <Link to="/review-mon-hoc" className="px-5 h-10 inline-flex items-center border border-border rounded-full text-[13px] hover:bg-muted">Huỷ</Link>
              <button className="px-5 h-10 bg-primary text-primary-foreground rounded-full text-[13px] font-medium hover:brightness-110">
                Đăng review
              </button>
            </div>
          </div>
        </form>

        <aside className="space-y-3">
          <Card className="!p-4">
            <h3 className="font-semibold text-[14px] mb-2">Review chất lượng</h3>
            <ul className="text-[12.5px] text-muted-foreground space-y-1.5 list-disc pl-4">
              <li>Khách quan, không công kích cá nhân.</li>
              <li>Nêu rõ trải nghiệm cụ thể.</li>
              <li>Giúp người đọc quyết định, không chỉ khen/chê.</li>
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
      <span className="text-[13px]">{label}</span>
      <div className="flex gap-1">
        {[1,2,3,4,5].map((i) => (
          <button key={i} type="button" onClick={() => setV(i)}>
            <Star className={`h-5 w-5 ${i <= v ? "fill-warning text-warning" : "text-muted-foreground"}`} />
          </button>
        ))}
      </div>
    </div>
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
