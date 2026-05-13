import { createFileRoute, Link } from "@tanstack/react-router";
import { TopNav } from "@/hooks/components/universe/TopNav";
import logo from "@/assets/logo.png";
import { User, Mail, Lock, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/register")({ component: RegisterPage });

function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <div className="mx-auto max-w-md px-4 py-10">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="APD" className="h-14 w-14" />
          <h1 className="mt-3 text-2xl font-semibold">Tạo tài khoản APD</h1>
          <p className="text-[13px] text-muted-foreground mt-1">Miễn phí. Ẩn danh được. Cộng đồng có thật.</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="border border-border bg-surface rounded-2xl p-6 shadow-sm space-y-3"
        >
          <Row icon={<User className="h-4 w-4" />} placeholder="Họ và tên hiển thị" />
          <Row icon={<Mail className="h-4 w-4" />} type="email" placeholder="Email" />
          <div className="grid grid-cols-2 gap-3">
            <Row icon={<GraduationCap className="h-4 w-4" />} placeholder="MSSV (tuỳ chọn)" />
            <select className="h-10 px-3 text-[13px] bg-background border border-border rounded-full">
              <option>Khoá K-...</option>
              <option>K2024</option><option>K2023</option><option>K2022</option><option>K2021</option>
            </select>
          </div>
          <select className="w-full h-10 px-3 text-[13px] bg-background border border-border rounded-full">
            <option>Khoa / Chuyên ngành</option>
            <option>Công nghệ thông tin</option>
            <option>Tài chính - Ngân hàng</option>
            <option>Quản trị kinh doanh</option>
            <option>Ngôn ngữ Anh</option>
          </select>
          <Row icon={<Lock className="h-4 w-4" />} type="password" placeholder="Mật khẩu (≥ 8 ký tự)" />
          <Row icon={<Lock className="h-4 w-4" />} type="password" placeholder="Nhập lại mật khẩu" />
          <label className="flex items-start gap-2 text-[12px] text-muted-foreground">
            <input type="checkbox" className="mt-0.5" />
            <span>Tôi đồng ý với <a className="text-primary hover:underline">Điều khoản</a> và <a className="text-primary hover:underline">Chính sách</a> của Universe APD.</span>
          </label>
          <button className="w-full h-10 bg-brand-red text-primary-foreground rounded-full font-medium hover:brightness-110">
            Đăng ký
          </button>
          <p className="text-center text-[13px] text-muted-foreground">
            Đã có tài khoản? <Link to="/login" className="text-primary font-medium hover:underline">Đăng nhập</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function Row({ icon, ...props }: any) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>
      <input
        {...props}
        className="w-full h-10 pl-9 pr-3 text-[13px] bg-background border border-border rounded-full focus:outline-none focus:ring-3 focus:ring-accent focus:border-primary/40"
      />
    </div>
  );
}
