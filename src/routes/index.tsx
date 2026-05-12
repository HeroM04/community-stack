import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/universe/TopNav";
import { LeftSidebar } from "@/components/universe/LeftSidebar";
import { QuestionList } from "@/components/universe/QuestionList";
import { RightSidebar } from "@/components/universe/RightSidebar";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Universe — Cộng đồng sinh viên" },
      {
        name: "description",
        content:
          "Universe là cộng đồng sinh viên — chia sẻ tài liệu, đề thi cũ, review môn học và giảng viên, và góc tâm linh mùa thi.",
      },
    ],
  }),
});

const filters = ["Mới nhất", "Hot", "Tuần này", "Chưa trả lời", "Bountied"];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <div className="mx-auto flex max-w-[1264px]">
        <LeftSidebar />

        <main className="flex-1 min-w-0 px-4 py-5 border-x border-border bg-background">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-normal">Tất cả bài post</h1>
            <button className="px-3 h-9 text-[13px] font-medium bg-primary text-primary-foreground rounded hover:brightness-110">
              Đăng bài mới
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
            <p className="text-[14px] text-muted-foreground">28,492 bài post</p>
            <div className="flex border border-border rounded overflow-hidden text-[13px]">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`px-3 py-1.5 ${
                    i === 0
                      ? "bg-primary/10 text-primary font-medium"
                      : "bg-surface text-foreground hover:bg-muted"
                  } ${i !== 0 ? "border-l border-border" : ""}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <QuestionList />
          </div>

          <div className="mt-5 flex items-center justify-between text-[13px]">
            <div className="flex gap-1">
              {["1", "2", "3", "4", "5", "…", "1898", "Sau"].map((n, i) => (
                <button
                  key={i}
                  className={`min-w-[28px] h-7 px-2 rounded border ${
                    i === 0
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-surface border-border hover:bg-muted text-foreground"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="flex gap-1">
              {["15", "30", "50"].map((n, i) => (
                <button
                  key={n}
                  className={`min-w-[28px] h-7 px-2 rounded border ${
                    i === 0
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-surface border-border hover:bg-muted text-foreground"
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-2 py-1 text-muted-foreground">/ trang</span>
            </div>
          </div>
        </main>

        <RightSidebar />
      </div>

      <footer className="mt-8 bg-foreground text-background">
        <div className="mx-auto max-w-[1264px] px-4 py-8 text-[13px] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="font-semibold mb-2">UNIVERSE</div>
            <ul className="space-y-1 text-background/70">
              <li>Về chúng tôi</li><li>Tuyển dụng</li><li>Liên hệ</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">SẢN PHẨM</div>
            <ul className="space-y-1 text-background/70">
              <li>Chợ Tài Liệu</li><li>Đề thi cũ</li><li>Review môn</li><li>Góc tâm linh</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">CỘNG ĐỒNG</div>
            <ul className="space-y-1 text-background/70">
              <li>Quy tắc</li><li>Cấp bậc & uy tín</li><li>Bảng vinh danh</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">HỖ TRỢ</div>
            <ul className="space-y-1 text-background/70">
              <li>Trung tâm trợ giúp</li><li>Báo cáo vi phạm</li><li>Điều khoản</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 py-4 text-center text-[12px] text-background/60">
          © 2026 Universe — Không chỉ học, còn sống sót qua đại học cùng nhau.
        </div>
      </footer>
    </div>
  );
}
