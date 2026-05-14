import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  votes: number;
  answers: number;
  views: string; // Vẫn giữ trong type để không lỗi data cũ, nhưng sẽ không render ra UI
  user: string;
  rep: string;
  time: string;
  answered?: boolean;
  hot?: boolean;
};

const defaultPosts: Post[] = [
  {
    id: 1,
    title: "Có ai có đề thi cuối kỳ Giải tích 1 năm 2024 không ạ?",
    excerpt:
      "Em đang ôn cuối kỳ, thầy bảo đề năm nay sẽ giống năm trước 70%. Anh chị nào có đề + đáp án xin chia sẻ với, em xin cảm ơn nhiều...",
    tags: ["giải-tích-1", "đề-thi", "k68"],
    votes: 124, answers: 8, views: "2.3k",
    user: "MèoLười_4782", rep: "1,284", time: "2 phút trước",
    answered: true, hot: true,
  },
  {
    id: 2,
    title: "Review thầy Nguyễn Văn A — môn Cấu trúc dữ liệu",
    excerpt: "Mình học kỳ 1 năm 3 với thầy. Thầy giảng dễ hiểu, ra bài tập vừa sức nhưng chấm khá khó. Cho 4/5 sao về tổng thể...",
    tags: ["review-giảng-viên", "ctdl", "khoa-cntt"],
    votes: 89, answers: 23, views: "5.1k",
    user: "GấuNgủ_1923", rep: "3,402", time: "15 phút trước", answered: true,
  },
  {
    id: 3,
    title: "Bán đề cương ôn thi Vật lý đại cương — full 8 chương + bài tập mẫu",
    excerpt: "Tài liệu mình tự tổng hợp trong cả kỳ, có ví dụ giải chi tiết. Giá 50 Universe Coins. Ai mua cmt mình gửi link preview...",
    tags: ["vật-lý", "đề-cương", "tài-liệu-bán"],
    votes: 56, answers: 12, views: "892",
    user: "CáMậpHọc", rep: "742", time: "1 giờ trước",
  },
  {
    id: 4,
    title: "🙏 Thắp nhang xin qua môn Triết học — kỳ này mình tạch là chết",
    excerpt: "Nhang đã thắp, hoa đã dâng. Anh em vào tiếp sức tâm linh giúp em với, mai thi rồi mà chưa thuộc nổi 3 quy luật...",
    tags: ["góc-tâm-linh", "triết-học", "cầu-may"],
    votes: 412, answers: 67, views: "8.7k",
    user: "ThỏCưng_0001", rep: "12.4k", time: "3 giờ trước", hot: true,
  },
];

export function QuestionList({
  posts = defaultPosts,
  searchQuery = "",
  limit,
  compact = false,
}: {
  posts?: Post[];
  searchQuery?: string;
  limit?: number;
  compact?: boolean;
}) {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visiblePosts = normalizedQuery
    ? posts.filter((post) =>
        [
          post.title,
          post.excerpt,
          post.user,
          ...post.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : posts;

  const displayedPosts = typeof limit === "number" ? visiblePosts.slice(0, limit) : visiblePosts;

  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      {visiblePosts.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
          <p className="text-[14px] font-medium text-foreground">Không tìm thấy bài post phù hợp</p>
          <p className="mt-1 text-[13px] text-muted-foreground">Thử tìm bằng từ khóa khác.</p>
        </div>
      )}

      {displayedPosts.map(p => (
        <div
          key={p.id}
          className={`${compact ? "p-4" : "p-5"} bg-surface border border-border rounded-xl hover:border-primary/40 hover:shadow-sm transition`}
        >
          {/* Header Card: Tiêu đề + Trạng thái HOT */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <Link to="/posts/$id" params={{ id: String(p.id) }} className="flex-1 min-w-0">
              <h3 className={`${compact ? "text-[16px]" : "text-[18px]"} font-semibold leading-snug text-foreground hover:text-primary transition`}>
                {p.title}
                {p.hot && (
                  <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-bold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full align-middle">
                    🔥 HOT
                  </span>
                )}
              </h3>
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {p.tags.map(t => (
              <span key={t} className="text-[11px] px-2 py-0.5 bg-accent text-muted-foreground font-medium rounded-md cursor-pointer hover:bg-border transition">
                {t}
              </span>
            ))}
          </div>

          {/* Nội dung thu gọn */}
          <p className={`${compact ? "line-clamp-2" : "line-clamp-3"} text-[14px] text-muted-foreground mb-4`}>
            {p.excerpt}
          </p>

          {/* Footer Card: Tương tác + User (Tách biệt 2 bên) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border/50 text-[13px] font-medium text-muted-foreground">
            
            {/* Cụm Tương tác */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-accent/40 rounded-full px-2 py-1 border border-border/60">
                <button className="flex items-center gap-1 hover:text-primary transition p-1"><ThumbsUp className="h-4 w-4" /> {p.votes}</button>
                <div className="w-[1px] h-3 bg-border mx-1"></div>
                <button className="flex items-center gap-1 hover:text-brand-red transition p-1"><ThumbsDown className="h-4 w-4" /></button>
              </div>
              
              <Link to="/posts/$id" params={{ id: String(p.id) }} className="flex items-center gap-1.5 hover:text-foreground transition">
                <MessageSquare className="h-4 w-4" />
                <span>{p.answers} Bình luận</span>
              </Link>
            </div>

            {/* Cụm Thông tin User */}
            <div className="flex items-center gap-1.5">
              <span className="text-[12px]">Bởi</span>
              {/* Tên người dùng được làm đậm */}
              <Link to="#" className="font-bold text-primary hover:underline">
                {p.user}
              </Link>
             
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}