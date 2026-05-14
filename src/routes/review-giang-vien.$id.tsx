import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { PageLayout } from "@/components/universe/PageLayout";
import { Star, ThumbsUp, MessageCircle, ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/review-giang-vien/$id")({
  component: TeacherDetailPage,
});

function TeacherDetailPage() {
  const { id } = Route.useParams();
  const router = useRouter(); // Khởi tạo router

  return (
    <PageLayout>
      {/* Thêm Flex container bao bọc nút Back và Nav */}
      <div className="flex items-center gap-3 mb-3">
        <button 
          onClick={() => router.history.back()}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground transition shadow-sm"
          title="Quay lại"
        >
          <ChevronLeft className="h-5 w-5 -ml-0.5" />
        </button>
        <nav className="text-[13px] text-muted-foreground">
          <Link to="/review-giang-vien" className="hover:text-primary">Review giảng viên</Link> <span className="mx-1">/</span> <span>#{id}</span>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-surface border border-border rounded-2xl p-6">
        <div className="flex items-start gap-5 flex-wrap">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-blue to-primary flex items-center justify-center text-primary-foreground font-bold text-2xl shrink-0">
            A
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-semibold">TS. Nguyễn Văn A</h1>
            <p className="mt-1 text-[14px] text-muted-foreground">Khoa Công nghệ Thông tin · Học viện APD</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["CTDL & Giải thuật", "Lập trình C", "Hệ điều hành"].map(s => (
                <span key={s} className="text-[12px] px-2.5 py-1 bg-tag text-tag-foreground rounded-full">{s}</span>
              ))}
            </div>
          </div>
          <div className="text-center bg-gradient-to-br from-warning/20 to-warning/5 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-1 justify-center">
              <Star className="h-5 w-5 text-warning fill-warning" />
              <span className="text-3xl font-bold">4.6</span>
            </div>
            <div className="text-[12px] text-muted-foreground mt-1">128 đánh giá</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <RatingBar label="Dễ qua môn" value={3} />
          <RatingBar label="Tận tâm" value={5} />
          <RatingBar label="Chấm công bằng" value={4} />
        </div>
      </div>

      {/* Tags summary */}
      <div className="mt-5 bg-surface border border-border rounded-2xl p-5">
        <h2 className="text-[15px] font-semibold mb-3">Sinh viên thường nói gì?</h2>
        <div className="flex flex-wrap gap-2">
          {[
            ["Khó tính", 42], ["Tận tâm", 87], ["Slide đẹp", 23], ["Chấm chặt", 56],
            ["Bài tập nhiều", 38], ["Đi học điểm danh", 19], ["Thi mở tài liệu", 12]
          ].map(([t, n]) => (
            <span key={t as string} className="text-[12px] px-3 py-1.5 bg-accent text-primary rounded-full">
              {t} <span className="opacity-70">· {n}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-5 flex items-center justify-between">
        <h2 className="text-[18px] font-semibold">128 review chi tiết</h2>
        <button className="px-4 h-9 text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110">+ Viết review</button>
      </div>

      <div className="mt-3 space-y-3">
        {[
          { user: "GấuNgủ_1923", rep: "3,402", time: "2 ngày trước", rating: 5, subject: "CTDL", text: "Thầy giảng dễ hiểu, ra bài tập vừa sức nhưng chấm khá khó. Đi học đầy đủ thì pass thoải mái. 5/5 cho sự tận tâm.", likes: 47, comments: 12, semester: "HK1 2024-2025" },
          { user: "CodeNinja", rep: "8,921", time: "1 tuần trước", rating: 4, subject: "Lập trình C", text: "Slide rất chỉn chu, thầy chuẩn bị kỹ. Hơi khó tính chỗ chấm bài tập về nhà nhưng nhìn chung là 1 thầy giỏi. Khuyên các bạn đăng ký.", likes: 23, comments: 5, semester: "HK2 2023-2024" },
          { user: "RùaChậm_8821", rep: "256", time: "2 tuần trước", rating: 3, subject: "Hệ điều hành", text: "Thầy giảng nhanh quá, theo không kịp. Nhưng thầy nhiệt tình trả lời câu hỏi sau giờ học.", likes: 8, comments: 3, semester: "HK1 2023-2024" },
        ].map((r, i) => (
          <article key={i} className="bg-surface border border-border rounded-2xl p-5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-red" />
                <div className="text-[13px]">
                  <div className="text-primary font-medium">{r.user}</div>
                  <div className="text-muted-foreground text-[12px]">{r.rep} rep · {r.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] px-2.5 py-1 bg-tag text-tag-foreground rounded-full">{r.subject}</span>
                <span className="text-[12px] px-2.5 py-1 bg-muted rounded-full">{r.semester}</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < r.rating ? "text-warning fill-warning" : "text-muted"}`} />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed">{r.text}</p>
            <div className="mt-3 flex items-center gap-3 text-[12px] text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-primary"><ThumbsUp className="h-3.5 w-3.5" />{r.likes}</button>
              <button className="flex items-center gap-1 hover:text-primary"><MessageCircle className="h-3.5 w-3.5" />{r.comments} bình luận</button>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function RatingBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-muted rounded-xl p-3">
      <div className="flex justify-between text-[13px] mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold">{value}/5</span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`h-2 flex-1 rounded-full ${i <= value ? "bg-primary" : "bg-border"}`} />
        ))}
      </div>
    </div>
  );
}