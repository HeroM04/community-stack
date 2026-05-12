import { MessageSquare, Eye } from "lucide-react";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  votes: number;
  answers: number;
  views: string;
  user: string;
  rep: string;
  time: string;
  answered?: boolean;
  hot?: boolean;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Có ai có đề thi cuối kỳ Giải tích 1 năm 2024 không ạ?",
    excerpt:
      "Em đang ôn cuối kỳ, thầy bảo đề năm nay sẽ giống năm trước 70%. Anh chị nào có đề + đáp án xin chia sẻ với, em xin cảm ơn nhiều...",
    tags: ["giải-tích-1", "đề-thi", "k68"],
    votes: 124,
    answers: 8,
    views: "2.3k",
    user: "MèoLười_4782",
    rep: "1,284",
    time: "2 phút trước",
    answered: true,
    hot: true,
  },
  {
    id: 2,
    title: "Review thầy Nguyễn Văn A — môn Cấu trúc dữ liệu",
    excerpt:
      "Mình học kỳ 1 năm 3 với thầy. Thầy giảng dễ hiểu, ra bài tập vừa sức nhưng chấm khá khó. Cho 4/5 sao về tổng thể...",
    tags: ["review-giảng-viên", "ctdl", "khoa-cntt"],
    votes: 89,
    answers: 23,
    views: "5.1k",
    user: "GấuNgủ_1923",
    rep: "3,402",
    time: "15 phút trước",
    answered: true,
  },
  {
    id: 3,
    title: "Bán đề cương ôn thi Vật lý đại cương — full 8 chương + bài tập mẫu",
    excerpt:
      "Tài liệu mình tự tổng hợp trong cả kỳ, có ví dụ giải chi tiết. Giá 50 Universe Coins. Ai mua cmt mình gửi link preview...",
    tags: ["vật-lý", "đề-cương", "tài-liệu-bán"],
    votes: 56,
    answers: 12,
    views: "892",
    user: "CáMậpHọc",
    rep: "742",
    time: "1 giờ trước",
  },
  {
    id: 4,
    title: "🙏 Thắp nhang xin qua môn Triết học — kỳ này mình tạch là chết",
    excerpt:
      "Nhang đã thắp, hoa đã dâng. Anh em vào tiếp sức tâm linh giúp em với, mai thi rồi mà chưa thuộc nổi 3 quy luật...",
    tags: ["góc-tâm-linh", "triết-học", "cầu-may"],
    votes: 412,
    answers: 67,
    views: "8.7k",
    user: "ThỏCưng_0001",
    rep: "12.4k",
    time: "3 giờ trước",
    hot: true,
  },
  {
    id: 5,
    title: "Cách đăng ký học phần khi server quá tải?",
    excerpt:
      "Mỗi lần đăng ký học phần là server chết, mình ngồi F5 cả tiếng không vào nổi. Có ai có mẹo gì không...",
    tags: ["đăng-ký-học", "mẹo", "kinh-nghiệm"],
    votes: 31,
    answers: 4,
    views: "421",
    user: "RùaChậm_8821",
    rep: "256",
    time: "5 giờ trước",
  },
  {
    id: 6,
    title: "Tổng hợp 50 đề thi cũ Lập trình C — từ K60 đến K68",
    excerpt:
      "Mình mới ngồi scan lại toàn bộ kho đề của khoa, ai cần thì lấy. Free, không bán. Chỉ xin 1 upvote nếu thấy hữu ích...",
    tags: ["lập-trình-c", "đề-thi", "miễn-phí"],
    votes: 287,
    answers: 19,
    views: "12.1k",
    user: "CodeNinja",
    rep: "8,921",
    time: "8 giờ trước",
    answered: true,
  },
];

function Stat({ value, label, accent }: { value: number | string; label: string; accent?: "answered" | "votes" }) {
  return (
    <div
      className={`flex flex-col items-end leading-tight ${
        accent === "answered"
          ? "text-success border border-success/40 bg-success/5 rounded px-2 py-0.5"
          : ""
      }`}
    >
      <span className={`text-[13px] font-medium ${accent === "votes" ? "text-foreground" : ""}`}>{value}</span>
      <span className="text-[11px] text-muted-foreground">{label}</span>
    </div>
  );
}

export function QuestionList() {
  return (
    <div className="border-y border-border bg-surface">
      {posts.map((p, i) => (
        <article
          key={p.id}
          className={`flex gap-4 p-4 ${i !== 0 ? "border-t border-border" : ""} hover:bg-surface-hover`}
        >
          {/* Stats column */}
          <div className="hidden sm:flex flex-col items-end gap-1.5 w-[88px] shrink-0 text-muted-foreground">
            <Stat value={p.votes} label="votes" accent="votes" />
            <Stat
              value={p.answers}
              label="answers"
              accent={p.answered ? "answered" : undefined}
            />
            <div className="flex items-center gap-1 text-[11px]">
              <Eye className="h-3 w-3" />
              <span>{p.views} views</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[17px] leading-snug">
              <a href="#" className="text-accent-foreground hover:text-primary">
                {p.title}
              </a>
              {p.hot && (
                <span className="ml-2 inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded align-middle">
                  🔥 HOT
                </span>
              )}
            </h3>
            <p className="mt-1 text-[13px] text-muted-foreground line-clamp-2">{p.excerpt}</p>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <a
                    key={t}
                    href="#"
                    className="text-[12px] px-1.5 py-0.5 bg-tag text-tag-foreground rounded-sm hover:brightness-95"
                  >
                    {t}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                <div className="h-5 w-5 rounded bg-gradient-to-br from-primary to-warning" />
                <a href="#" className="text-accent-foreground hover:text-primary">{p.user}</a>
                <span className="font-semibold text-foreground">{p.rep}</span>
                <span>asked {p.time}</span>
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="sm:hidden flex flex-col items-end gap-1 text-[11px] text-muted-foreground">
            <span>▲ {p.votes}</span>
            <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{p.answers}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
