import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/universe/PageLayout";
import { ChevronUp, ChevronDown, Bookmark, Share2, Flag } from "lucide-react";

export const Route = createFileRoute("/posts/$id")({
  component: PostDetailPage,
});

function PostDetailPage() {
  const { id } = Route.useParams();
  return (
    <PageLayout>
      <nav className="text-[13px] text-muted-foreground mb-3">
        <Link to="/posts" className="hover:text-primary">Bài post</Link> <span className="mx-1">/</span> <span>Bài #{id}</span>
      </nav>

      <h1 className="text-[26px] font-semibold leading-tight">
        Có ai có đề thi cuối kỳ Giải tích 1 năm 2024 không ạ?
      </h1>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-[12px] text-muted-foreground border-b border-border pb-3">
        <span>Đăng <strong className="text-foreground">2 phút trước</strong></span>
        <span>Xem <strong className="text-foreground">2,341</strong> lần</span>
        <span className="px-2 py-0.5 bg-brand-red/10 text-brand-red rounded-full font-semibold">🔥 HOT</span>
      </div>

      {/* Question body */}
      <div className="mt-5 flex gap-4">
        <VoteCol votes={124} saved />
        <div className="flex-1 min-w-0">
          <div className="prose prose-sm max-w-none text-[14px] leading-relaxed">
            <p>Em đang ôn cuối kỳ, thầy bảo đề năm nay sẽ giống năm trước 70%. Anh chị nào có đề + đáp án xin chia sẻ với, em xin cảm ơn nhiều ạ.</p>
            <p>Cụ thể em cần:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Đề thi cuối kỳ Giải tích 1 các năm 2022, 2023, 2024</li>
              <li>Đáp án hoặc lời giải chi tiết (nếu có)</li>
              <li>Mẹo làm bài nhanh cho phần tích phân</li>
            </ul>
            <p>Em sẵn sàng đổi 100 Universe Coins cho ai có bộ đầy đủ. Cảm ơn cả nhà! 🙏</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {["giải-tích-1", "đề-thi", "k68", "ôn-thi"].map(t => (
              <span key={t} className="text-[12px] px-2.5 py-1 bg-tag text-tag-foreground rounded-full">{t}</span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-primary"><Share2 className="h-3.5 w-3.5" />Chia sẻ</button>
              <button className="flex items-center gap-1 hover:text-primary"><Bookmark className="h-3.5 w-3.5" />Lưu</button>
              <button className="flex items-center gap-1 hover:text-brand-red"><Flag className="h-3.5 w-3.5" />Báo cáo</button>
            </div>
            <UserCard name="MèoLười_4782" rep="1,284" time="hỏi 2 phút trước" />
          </div>
        </div>
      </div>

      {/* Answers */}
      <h2 className="mt-10 text-[20px] font-semibold border-b border-border pb-2">8 trả lời</h2>

      {[
        { id: "a1", body: "Mình có bộ đề 2022-2024 + đáp án. Đã upload trên Chợ Tài Liệu, miễn phí cho bạn. Link: <strong>/tai-lieu/12</strong>", votes: 87, accepted: true, user: "CodeNinja", rep: "8,921", time: "1 phút trước" },
        { id: "a2", body: "Bạn ơi mình có file PDF đề 2024 chính chủ thầy gửi. Inbox nhé. Phần tích phân năm nay ra dạng từng phần khá nặng, ôn kỹ chương 4-5.", votes: 42, user: "GấuNgủ_1923", rep: "3,402", time: "30 phút trước" },
        { id: "a3", body: "Mẹo nhỏ: học chắc bảng nguyên hàm cơ bản + 4 phương pháp đổi biến. Năm nào cũng có 1 câu vận dụng cao về chuỗi.", votes: 23, user: "ThỏCưng_0001", rep: "12.4k", time: "2 giờ trước" },
      ].map(a => (
        <div key={a.id} className="mt-5 flex gap-4 pb-5 border-b border-border">
          <VoteCol votes={a.votes} accepted={a.accepted} />
          <div className="flex-1 min-w-0">
            {a.accepted && (
              <div className="mb-2 inline-flex items-center gap-1 text-[12px] font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full">
                ✓ Câu trả lời được chấp nhận
              </div>
            )}
            <div className="text-[14px] leading-relaxed" dangerouslySetInnerHTML={{ __html: a.body }} />
            <div className="mt-3 flex justify-end">
              <UserCard name={a.user} rep={a.rep} time={`trả lời ${a.time}`} />
            </div>
          </div>
        </div>
      ))}

      {/* Answer composer */}
      <div className="mt-8">
        <h3 className="text-[16px] font-semibold mb-2">Câu trả lời của bạn</h3>
        <textarea
          rows={6}
          placeholder="Viết câu trả lời chi tiết để giúp người hỏi..."
          className="w-full p-3 bg-surface border border-border rounded-2xl focus:outline-none focus:border-primary/50 focus:ring-3 focus:ring-accent text-[14px]"
        />
        <button className="mt-3 px-5 h-10 text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110">
          Đăng câu trả lời
        </button>
      </div>
    </PageLayout>
  );
}

function VoteCol({ votes, accepted, saved }: { votes: number; accepted?: boolean; saved?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1 w-12 shrink-0 text-muted-foreground">
      <button className="p-1.5 rounded-full hover:bg-accent hover:text-primary border border-border"><ChevronUp className="h-5 w-5" /></button>
      <span className={`text-[16px] font-semibold ${accepted ? "text-success" : "text-foreground"}`}>{votes}</span>
      <button className="p-1.5 rounded-full hover:bg-brand-red/10 hover:text-brand-red border border-border"><ChevronDown className="h-5 w-5" /></button>
      {saved && <Bookmark className="h-4 w-4 mt-1 text-warning fill-warning" />}
      {accepted && <span className="text-success text-2xl leading-none">✓</span>}
    </div>
  );
}

function UserCard({ name, rep, time }: { name: string; rep: string; time: string }) {
  return (
    <div className="bg-accent/50 rounded-xl p-2.5 flex items-center gap-2 text-[12px]">
      <div className="text-muted-foreground">{time}</div>
      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-red" />
      <div className="leading-tight">
        <div className="text-primary font-medium">{name}</div>
        <div className="text-foreground font-semibold">{rep}</div>
      </div>
    </div>
  );
}
