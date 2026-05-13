import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { TopNav } from "@/hooks/components/universe/TopNav";
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
          <button className="w-full h-10 border border-border rounded-full text-[13px] font-medium hover:bg-muted mb-3 inline-flex items-center justify-center gap-2">
            <GoogleLogo />
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

function GoogleLogo() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.8.54-1.84.86-3.05.86-2.35 0-4.34-1.58-5.05-3.71H.94v2.33A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.95 10.71a5.41 5.41 0 0 1 0-3.42V4.96H.94a9 9 0 0 0 0 8.08l3.01-2.33Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.9 11.43 0 9 0A9 9 0 0 0 .94 4.96l3.01 2.33C4.66 5.16 6.65 3.58 9 3.58Z"
      />
    </svg>
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
