import { useState } from "react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { PageLayout } from "@/components/universe/PageLayout";
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, Flag, Bookmark, ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/posts/$id")({
  component: PostDetailPage,
});

// Mock data giả lập bình luận có chứa phản hồi (replies) lồng nhau
const mockComments = [
  {
    id: "a1",
    user: "CodeNinja",
    avatar: "C",
    avatarColor: "bg-blue-600",
    content: "Mình có bộ đề 2022-2024 + đáp án. Đã upload trên Chợ Tài Liệu, miễn phí cho bạn. Link: <strong>/tai-lieu/12</strong>",
    votes: 87,
    replies: [
      {
        id: "r1",
        user: "MèoLười_4782",
        avatar: "M",
        avatarColor: "bg-red-500",
        content: "Ôi mình cảm ơn bạn nhiều lắm nha! Đã tải và vote 5 sao cho tài liệu của bạn.",
        votes: 12,
      }
    ]
  },
  {
    id: "a2",
    user: "GấuNgủ_1923",
    avatar: "G",
    avatarColor: "bg-amber-600",
    content: "Bạn ơi mình có file PDF đề 2024 chính chủ thầy gửi. Inbox nhé. Phần tích phân năm nay ra dạng từng phần khá nặng, ôn kỹ chương 4-5.",
    votes: 42,
    replies: []
  },
  {
    id: "a3",
    user: "ThỏCưng_0001",
    avatar: "T",
    avatarColor: "bg-pink-500",
    content: "Mẹo nhỏ: học chắc bảng nguyên hàm cơ bản + 4 phương pháp đổi biến. Năm nào cũng có 1 câu vận dụng cao về chuỗi.",
    votes: 23,
    replies: []
  }
];

function PostDetailPage() {
  const { id } = Route.useParams();
  const router = useRouter(); // Khởi tạo router để dùng hàm back()
  
  // State quản lý việc mở ô phản hồi
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  // Component phụ: Ô nhập phản hồi
  const ReplyBox = ({ placeholder, onCancel }: { placeholder: string, onCancel: () => void }) => (
    <div className="mt-3 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="w-8 h-8 shrink-0 rounded-full bg-accent flex items-center justify-center text-muted-foreground text-[12px] font-bold">
        Bạn
      </div>
      <div className="flex-1 min-w-0">
        <textarea 
          autoFocus
          className="w-full min-h-[80px] p-3 bg-surface border border-border rounded-xl text-[13px] resize-y focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition"
          placeholder={placeholder}
        ></textarea>
        <div className="flex justify-end mt-2 gap-2">
          <button 
            onClick={onCancel}
            className="px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-muted transition text-foreground"
          >
            Hủy
          </button>
          <button className="bg-primary text-white px-4 py-1.5 rounded-full text-[12px] font-bold hover:bg-primary/90 transition shadow-sm">
            Gửi
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto pb-10">
        
        {/* --- NÚT QUAY LẠI & BREADCRUMB --- */}
        <div className="flex items-center gap-3 mb-6">
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
            <span className="text-foreground">Bài #{id}</span>
          </nav>
        </div>

        {/* --- KHU VỰC BÀI POST CHÍNH --- */}
        <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-0.5 bg-brand-red/10 text-brand-red rounded-full text-[11px] font-bold">🔥 HOT</span>
            {["giải-tích-1", "đề-thi", "k68", "ôn-thi"].map(t => (
              <span key={t} className="text-[12px] px-2.5 py-1 bg-accent text-muted-foreground font-medium rounded-md">{t}</span>
            ))}
          </div>

          <h1 className="text-[24px] md:text-[28px] font-bold leading-tight text-foreground mb-5">
            Có ai có đề thi cuối kỳ Giải tích 1 năm 2024 không ạ?
          </h1>

          <div className="flex items-center gap-3 mb-6 border-b border-border/60 pb-5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center text-white font-bold text-[15px]">
              M
            </div>
            <div className="font-bold text-[15px] text-primary">MèoLười_4782</div>
          </div>

          <div className="text-[15px] leading-relaxed text-foreground mb-8">
            <p>Em đang ôn cuối kỳ, thầy bảo đề năm nay sẽ giống năm trước 70%. Anh chị nào có đề + đáp án xin chia sẻ với, em xin cảm ơn nhiều ạ.</p>
            <p className="mt-3">Cụ thể em cần:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1 font-medium">
              <li>Đề thi cuối kỳ Giải tích 1 các năm 2022, 2023, 2024</li>
              <li>Đáp án hoặc lời giải chi tiết (nếu có)</li>
              <li>Mẹo làm bài nhanh cho phần tích phân</li>
            </ul>
            <p className="mt-3">Em sẵn sàng đổi <strong className="text-warning">100 Universe Coins</strong> cho ai có bộ đầy đủ. Cảm ơn cả nhà! 🙏</p>
          </div>

          <div className="flex items-center flex-wrap gap-4 text-[13px] font-medium text-muted-foreground pt-4 border-t border-border/60">
            <div className="flex items-center gap-1 bg-accent/60 rounded-full px-3 py-1.5 border border-border">
              <button className="flex items-center gap-1.5 hover:text-primary transition p-1"><ThumbsUp className="h-4 w-4" /> 124</button>
              <div className="w-px h-4 bg-border mx-2"></div>
              <button className="flex items-center gap-1.5 hover:text-brand-red transition p-1"><ThumbsDown className="h-4 w-4" /></button>
            </div>
            <button className="flex items-center gap-2 hover:text-primary transition px-2 py-1"><MessageSquare className="h-4 w-4" /> 8 Bình luận</button>
            <button className="flex items-center gap-2 hover:text-primary transition px-2 py-1"><Share2 className="h-4 w-4" /> Chia sẻ</button>
            <button className="flex items-center gap-2 hover:text-primary transition px-2 py-1"><Bookmark className="h-4 w-4" /> Lưu</button>
            <button className="flex items-center gap-2 hover:text-brand-red transition ml-auto px-2 py-1"><Flag className="h-4 w-4" /> Báo cáo</button>
          </div>
        </div>

        {/* --- KHU VỰC BÌNH LUẬN --- */}
        <h2 className="text-[18px] font-bold text-foreground mb-5 px-1">{mockComments.length} Câu trả lời</h2>
        
        <div className="space-y-5">
          {mockComments.map(comment => (
            <div key={comment.id} className="bg-surface border border-border rounded-2xl p-4 md:p-6 shadow-sm">
              
              <div className="flex gap-3 md:gap-4">
                <div className={`w-10 h-10 shrink-0 rounded-full ${comment.avatarColor} flex items-center justify-center text-white font-bold text-[15px] shadow-inner`}>
                  {comment.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-[14px] md:text-[15px] text-primary hover:underline cursor-pointer">{comment.user}</span>
                  </div>
                  
                  <div 
                    className="text-[14px] text-foreground leading-relaxed mt-1" 
                    dangerouslySetInnerHTML={{ __html: comment.content }} 
                  />
                  
                  <div className="flex items-center gap-4 mt-3 text-[12px] font-bold text-muted-foreground">
                    <button className="flex items-center gap-1.5 hover:text-primary transition"><ThumbsUp className="h-3.5 w-3.5" /> {comment.votes}</button>
                    <button className="flex items-center gap-1.5 hover:text-brand-red transition"><ThumbsDown className="h-3.5 w-3.5" /></button>
                    <button 
                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                      className="flex items-center gap-1.5 hover:text-foreground transition ml-1"
                    >
                      <MessageSquare className="h-3.5 w-3.5" /> Phản hồi
                    </button>
                  </div>

                  {replyingTo === comment.id && (
                    <ReplyBox 
                      placeholder={`Trả lời ${comment.user}...`} 
                      onCancel={() => setReplyingTo(null)} 
                    />
                  )}
                </div>
              </div>

              {comment.replies.length > 0 && (
                <div className="mt-4 ml-4 md:ml-14 border-l-2 border-border/60 pl-4 space-y-4">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="flex gap-3">
                      <div className={`w-8 h-8 shrink-0 rounded-full ${reply.avatarColor} flex items-center justify-center text-white text-[13px] font-bold`}>
                        {reply.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-[13px] md:text-[14px] text-primary hover:underline cursor-pointer">{reply.user}</span>
                        </div>
                        <p className="text-[13px] md:text-[14px] text-foreground leading-relaxed mt-1">{reply.content}</p>
                        
                        <div className="flex items-center gap-4 mt-2 text-[11px] font-bold text-muted-foreground">
                          <button className="flex items-center gap-1.5 hover:text-primary transition"><ThumbsUp className="h-3 w-3" /> {reply.votes}</button>
                          <button className="flex items-center gap-1.5 hover:text-brand-red transition"><ThumbsDown className="h-3 w-3" /></button>
                          <button 
                            onClick={() => setReplyingTo(replyingTo === reply.id ? null : reply.id)}
                            className="flex items-center gap-1.5 hover:text-foreground transition"
                          >
                            <MessageSquare className="h-3 w-3" /> Phản hồi
                          </button>
                        </div>

                        {replyingTo === reply.id && (
                          <ReplyBox 
                            placeholder={`Trả lời ${reply.user}...`} 
                            onCancel={() => setReplyingTo(null)} 
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Khung Viết câu trả lời mới */}
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-[16px] font-bold text-foreground mb-4">Câu trả lời của bạn</h3>
            <div className="flex gap-3 md:gap-4">
               <div className="w-10 h-10 shrink-0 rounded-full bg-accent flex items-center justify-center text-muted-foreground font-bold text-[13px]">
                 Bạn
               </div>
               <div className="flex-1 relative">
                 <textarea 
                   className="w-full min-h-[100px] p-4 bg-surface border border-border rounded-xl text-[14px] resize-y focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition"
                   placeholder="Viết câu trả lời chi tiết để giúp người hỏi..."
                 ></textarea>
                 <div className="flex justify-end mt-2">
                   <button className="bg-brand-red text-white px-5 py-2 rounded-full text-[13px] font-bold hover:bg-red-700 transition shadow-sm">
                     Đăng câu trả lời
                   </button>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}