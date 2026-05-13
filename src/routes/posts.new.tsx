import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHeader, Card } from "@/hooks/components/universe/PageLayout";
import { Bold, Italic, Link2, Code, Image as ImageIcon, List, Quote } from "lucide-react";

export const Route = createFileRoute("/posts/new")({ component: NewPostPage });

function NewPostPage() {
  return (
    <PageLayout showRightSidebar={false}>
      <PageHeader title="Đặt câu hỏi mới" subtitle="Hỏi cộng đồng APD — càng cụ thể càng dễ được giúp." />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Card>
            <Label num="1" title="Tiêu đề" hint="Hỏi rõ ràng như khi bạn google. Tránh tiêu đề mơ hồ." />
            <input
              placeholder="VD: Cách giải bài toán tích phân 2 lớp trong đề Giải tích 2 K23?"
              className="mt-2 w-full h-11 px-4 text-[14px] bg-background border border-border rounded-xl focus:outline-none focus:ring-3 focus:ring-accent focus:border-primary/40"
            />
          </Card>
          <Card>
            <Label num="2" title="Nội dung chi tiết" hint="Mô tả vấn đề, những gì bạn đã thử, đoạn code/đề bài liên quan." />
            <Toolbar />
            <textarea
              rows={12}
              placeholder="Viết nội dung tại đây... Hỗ trợ Markdown."
              className="w-full px-4 py-3 text-[14px] bg-background border border-border border-t-0 rounded-b-xl focus:outline-none"
            />
          </Card>
          <Card>
            <Label num="3" title="Môn học liên quan" />
            <select className="mt-2 w-full h-10 px-3 text-[13px] bg-background border border-border rounded-full">
              <option>Chọn môn học...</option>
              <option>Giải tích 2</option><option>Đại số tuyến tính</option>
              <option>Lập trình hướng đối tượng</option><option>Kinh tế vi mô</option>
            </select>
          </Card>
          <Card>
            <Label num="4" title="Tags" hint="Tối đa 5 tag. Cách nhau bằng dấu phẩy." />
            <input
              placeholder="vd: giai-tich, tich-phan, k23"
              className="mt-2 w-full h-10 px-4 text-[13px] bg-background border border-border rounded-full focus:outline-none focus:ring-3 focus:ring-accent"
            />
          </Card>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <label className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <input type="checkbox" /> Đăng ẩn danh
            </label>
            <div className="flex gap-2">
              <Link to="/posts" className="px-5 h-10 inline-flex items-center border border-border rounded-full text-[13px] hover:bg-muted">
                Huỷ
              </Link>
              <button className="px-5 h-10 bg-muted text-foreground rounded-full text-[13px] font-medium hover:brightness-95">
                Lưu nháp
              </button>
              <button className="px-5 h-10 bg-primary text-primary-foreground rounded-full text-[13px] font-medium hover:brightness-110">
                Đăng câu hỏi
              </button>
            </div>
          </div>
        </form>

        <aside className="space-y-3">
          <Card className="!p-4">
            <h3 className="font-semibold text-[14px] mb-2">Mẹo viết bài tốt</h3>
            <ul className="text-[12.5px] text-muted-foreground space-y-1.5 list-disc pl-4">
              <li>Tóm tắt vấn đề trong tiêu đề.</li>
              <li>Mô tả những gì bạn đã thử.</li>
              <li>Đính kèm ảnh/đề bài nếu có.</li>
              <li>Dùng tag đúng để đúng người thấy.</li>
            </ul>
          </Card>
        </aside>
      </div>
    </PageLayout>
  );
}

function Label({ num, title, hint }: { num: string; title: string; hint?: string }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-accent text-accent-foreground text-[12px] font-semibold inline-flex items-center justify-center">{num}</span>
        <h3 className="font-semibold text-[14px]">{title}</h3>
      </div>
      {hint && <p className="text-[12.5px] text-muted-foreground mt-1 ml-8">{hint}</p>}
    </div>
  );
}

function Toolbar() {
  return (
    <div className="mt-2 flex items-center gap-1 px-3 py-2 bg-background border border-border rounded-t-xl">
      {[Bold, Italic, Link2, Quote, Code, List, ImageIcon].map((Icon, i) => (
        <button key={i} type="button" className="p-1.5 hover:bg-muted rounded">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </button>
      ))}
    </div>
  );
}
