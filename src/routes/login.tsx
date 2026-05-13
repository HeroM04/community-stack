import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { TopNav } from "@/components/universe/TopNav";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <div className="mx-auto max-w-md px-4 py-12">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="APD" className="h-14 w-14" />
          <h1 className="mt-3 text-2xl font-semibold">Đăng nhập Universe APD</h1>
          <p className="text-[13px] text-muted-foreground mt-1">Cùng học, cùng review, cùng sống sót qua đại học.</p>
        </div>
        <div className="border border-border bg-surface rounded-2xl p-6 shadow-sm">
          <button className="w-full h-10 border border-border rounded-full text-[13px] font-medium hover:bg-muted mb-3">
            Tiếp tục với Google
          </button>
          <div className="relative my-4 text-center text-[12px] text-muted-foreground">
            <span className="bg-surface px-2 relative z-10">hoặc</span>
            <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
          </div>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <Field icon={<Mail className="h-4 w-4" />} type="email" placeholder="Email APD hoặc cá nhân" />
            <Field
              icon={<Lock className="h-4 w-4" />}
              type={show ? "text" : "password"}
              placeholder="Mật khẩu"
              right={
                <button type="button" onClick={() => setShow(!show)} className="text-muted-foreground">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />
            <div className="flex items-center justify-between text-[12px]">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="rounded" /> Ghi nhớ tôi
              </label>
              <a className="text-primary hover:underline cursor-pointer">Quên mật khẩu?</a>
            </div>
            <button className="w-full h-10 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110">
              Đăng nhập
            </button>
          </form>
          <p className="text-center text-[13px] text-muted-foreground mt-4">
            Chưa có tài khoản? <Link to="/register" className="text-brand-red font-medium hover:underline">Đăng ký ngay</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ icon, right, ...props }: any) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>
      <input
        {...props}
        className="w-full h-10 pl-9 pr-9 text-[13px] bg-background border border-border rounded-full focus:outline-none focus:ring-3 focus:ring-accent focus:border-primary/40"
      />
      {right && <span className="absolute right-3 top-1/2 -translate-y-1/2">{right}</span>}
    </div>
  );
}
