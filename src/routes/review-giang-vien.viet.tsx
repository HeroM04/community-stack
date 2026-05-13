import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHeader, Card } from "@/components/universe/PageLayout";
import { Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/review-giang-vien/viet")({ component: WriteTeacherReviewPage });

function WriteTeacherReviewPage() {
  return (
    <PageLayout showRightSidebar={false}>
      <PageHeader title="Viết review giảng viên" subtitle="Đánh giá khách quan, lịch sự — review của bạn ảnh hưởng đến hàng nghìn sinh viên." />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Card className="space-y-3">
            <Field label="Tên giảng viên" placeholder="VD: TS. Nguyễn Văn A" />
            <div className="grid grid-cols-2 gap-3">
              <Select label="Khoa" options={["CNTT","Kinh tế","Ngoại ngữ","Cơ khí","Khác"]} />
              <Field label="Môn đã học với GV" placeholder="VD: Giải tích 2" />
            </div>
            <Select label="Học kỳ học" options={["HK1 2024-2025","HK2 2024-2025","HK1 2023-2024"]} />
          </Card>

          <Card>
            <h3 className="font-semibold text-[14px] mb-3">Đánh giá theo tiêu chí</h3>
            <div className="space-y-3">
              <Rating label="Tổng quan" />
              <Rating label="Cách giảng dạy" />
              <Rating label="Độ tận tâm" />
              <Rating label="Công bằng chấm điểm" />
              <Rating label="Mức độ khó tính" />
            </div>
          </Card>

          <Card>
            <Field label="Tiêu đề" placeholder="VD: Thầy nhiệt tình, chấm rộng nhưng yêu cầu chuyên cần" />
          </Card>

          <Card className="space-y-3">
            <Field label="Phong cách giảng dạy" textarea placeholder="Cách thầy/cô lên lớp, tương tác..." />
            <Field label="Cách ra đề & chấm điểm" textarea placeholder="Đề khó hay dễ, có theo slide không..." />
            <Field label="Lời khuyên cho khoá sau" textarea placeholder="Học môn của thầy/cô cần lưu ý gì..." />
          </Card>

          <Card>
            <h3 className="font-semibold text-[14px] mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Tâm huyết","Vui tính","Khó tính","Chấm rộng","Chấm chặt","Yêu cầu chuyên cần","Hay điểm danh","Giảng dễ hiểu","Đề bám slide"].map((t) => (
                <label key={t} className="text-[12px] px-3 py-1.5 bg-tag text-tag-foreground rounded-full cursor-pointer hover:brightness-95">
                  <input type="checkbox" className="mr-1.5 align-middle" /> {t}
                </label>
              ))}
            </div>
          </Card>

          <Card>
            <label className="flex items-start gap-2 text-[12.5px] text-muted-foreground">
              <input type="checkbox" className="mt-0.5" />
              <span>Tôi cam kết review trung thực, không bịa đặt, không công kích cá nhân giảng viên.</span>
            </label>
          </Card>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <label className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <input type="checkbox" defaultChecked /> Đăng ẩn danh
            </label>
            <div className="flex gap-2">
              <Link to="/review-giang-vien" className="px-5 h-10 inline-flex items-center border border-border rounded-full text-[13px] hover:bg-muted">Huỷ</Link>
              <button className="px-5 h-10 bg-brand-red text-primary-foreground rounded-full text-[13px] font-medium hover:brightness-110">
                Đăng review
              </button>
            </div>
          </div>
        </form>

        <aside className="space-y-3">
          <Card className="!p-4">
            <h3 className="font-semibold text-[14px] mb-2">Quy tắc</h3>
            <ul className="text-[12.5px] text-muted-foreground space-y-1.5 list-disc pl-4">
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
