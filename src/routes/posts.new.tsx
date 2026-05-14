import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { PageLayout, PageHeader, Card } from "@/components/universe/PageLayout";
import { Bold, Italic, Link2, Code, Image as ImageIcon, List, Quote, ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/posts/new")({ component: NewPostPage });

function NewPostPage() {
  const router = useRouter(); // Khởi tạo router để dùng chức năng back()

  return (
    <PageLayout showRightSidebar={false}>
      
      {/* --- NÚT QUAY LẠI & BREADCRUMB --- */}
      <div className="flex items-center gap-3 mb-2">
        <button 
          onClick={() => router.history.back()}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground transition shadow-sm"
          title="Quay lại danh sách bài post"
        >
          <ChevronLeft className="h-5 w-5 -ml-0.5" />
        </button>
        <nav className="text-[13px] text-muted-foreground font-medium">
          <Link to="/posts" className="hover:text-primary transition">Bài post</Link> 
          <span className="mx-2 text-border/80">/</span> 
          <span className="text-foreground">Đặt câu hỏi mới</span>
        </nav>
      </div>

      <PageHeader title="Đặt câu hỏi mới" subtitle="Hỏi cộng đồng APD — càng cụ thể càng dễ được giúp." />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 mt-2">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Card>
            <Label num="1" title="Tiêu đề" hint="Hỏi rõ ràng như khi bạn google. Tránh tiêu đề mơ hồ." />
            <input
              placeholder="VD: Cách giải bài toán tích phân 2 lớp trong đề Giải tích 2 K23?"
              className="mt-3 w-full h-11 px-4 text-[14px] bg-surface border border-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition"
            />
          </Card>
          
          <Card>
            <Label num="2" title="Nội dung chi tiết" hint="Mô tả vấn đề, những gì bạn đã thử, đoạn code/đề bài liên quan." />
            <div className="mt-3">
              <Toolbar />
              <textarea
                rows={12}
                placeholder="Viết nội dung tại đây... Hỗ trợ Markdown."
                className="w-full px-4 py-3 text-[14px] bg-surface border border-border border-t-0 rounded-b-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition resize-y"
              />
            </div>
          </Card>
          
          <Card>
            <Label num="3" title="Môn học liên quan" />
            <select className="mt-3 w-full h-11 px-4 text-[14px] bg-surface border border-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition cursor-pointer appearance-none">
              <option>Chọn môn học...</option>
              <option>Giải tích 2</option>
              <option>Đại số tuyến tính</option>
              <option>Lập trình hướng đối tượng</option>
              <option>Kinh tế vi mô</option>
            </select>
          </Card>
          
          <Card>
            <Label num="4" title="Tags" hint="Tối đa 5 tag. Cách nhau bằng dấu phẩy." />
            <input
              placeholder="vd: giai-tich, tich-phan, k23"
              className="mt-3 w-full h-11 px-4 text-[14px] bg-surface border border-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition"
            />
          </Card>
          
          <div className="flex items-center justify-end gap-3 pt-2">
            <Link to="/posts" className="px-5 h-10 inline-flex items-center border border-border rounded-full text-[13px] hover:bg-muted transition">
              Huỷ
            </Link>
            <button className="px-5 h-10 bg-accent text-foreground rounded-full text-[13px] font-medium hover:bg-border transition shadow-sm">
              Lưu nháp
            </button>
            <button className="px-6 h-10 bg-[#dc2626] text-white rounded-full text-[13px] font-bold hover:bg-[#b91c1c] transition shadow-sm">
              Đăng câu hỏi
            </button>
          </div>
        </form>

        <aside className="space-y-4 mt-1 lg:mt-0">
          <Card className="!p-5 bg-gradient-to-br from-surface to-accent/30">
            <h3 className="font-bold text-[15px] mb-3 text-foreground flex items-center gap-2">
              💡 Mẹo viết bài tốt
            </h3>
            <ul className="text-[13px] text-muted-foreground space-y-2.5 list-disc pl-4">
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
      <div className="flex items-center gap-2.5">
        <span className="h-6 w-6 rounded-full bg-brand-red/10 text-brand-red text-[12px] font-bold inline-flex items-center justify-center">
          {num}
        </span>
        <h3 className="font-bold text-[15px] text-foreground">{title}</h3>
      </div>
      {hint && <p className="text-[13px] text-muted-foreground mt-1 ml-8">{hint}</p>}
    </div>
  );
}

function Toolbar() {
  return (
    <div className="flex items-center gap-1 px-3 py-2 bg-accent/30 border border-border rounded-t-xl">
      {[Bold, Italic, Link2, Quote, Code, List, ImageIcon].map((Icon, i) => (
        <button key={i} type="button" className="p-1.5 hover:bg-border text-muted-foreground hover:text-foreground rounded-md transition">
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}