import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader, FilterBar } from "@/components/universe/PageLayout";
import { Flame, Heart, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/goc-tam-linh")({
  component: SpiritualPage,
  head: () => ({
    meta: [
      { title: "Góc Tâm Linh — Universe APD" },
      { name: "description", content: "Thắp nhang, cầu may, xin vía pass môn cùng cộng đồng sinh viên APD." },
    ],
  }),
});

const prayers = [
  { id: 1, user: "ThỏCưng_0001", time: "3 phút trước", subject: "Triết học M-L", text: "Mai thi rồi mà chưa thuộc được 3 quy luật. Anh em vào tiếp sức tâm linh giúp em với. Em xin hứa nếu pass sẽ donate 50 coins cho người tiếp lửa cao nhất 🙏", incense: 412, pray: 234, comments: 67, hot: true },
  { id: 2, user: "MèoLười_4782", time: "12 phút trước", subject: "Giải tích 1", text: "Đề ra trúng 3 câu cuối làm em không kịp. Cầu mong thầy chấm thoáng tay 🙏🙏🙏", incense: 184, pray: 92, comments: 23 },
  { id: 3, user: "GấuNgủ_1923", time: "1 giờ trước", subject: "Cấu trúc dữ liệu", text: "Vía cao thủ ơi, em đã ôn xong cây nhị phân, xin đề đừng ra đồ thị 🥺", incense: 256, pray: 142, comments: 34, hot: true },
  { id: 4, user: "CáMậpHọc", time: "2 giờ trước", subject: "Vật lý", text: "Đêm trước thi vật lý đại cương, em đã đốt nhang xin vía Newton. Sáng mai mong đề đừng có cơ học chất lưu 🙏", incense: 89, pray: 47, comments: 12 },
  { id: 5, user: "RùaChậm_8821", time: "5 giờ trước", subject: "Tiếng Anh 2", text: "Speaking 1-1 với cô. Em đã chuẩn bị 10 topic, xin cô bốc trúng cái dễ nhất 😭", incense: 124, pray: 78, comments: 19 },
];

function SpiritualPage() {
  return (
    <PageLayout>
      <PageHeader
        title="🔮 Góc Tâm Linh"
        subtitle="Nơi sinh viên APD thắp nhang, cầu may, xin vía pass môn. Tâm linh là có thật khi đến mùa thi."
        action={
          <button className="px-4 h-10 text-[13px] font-medium bg-brand-red text-primary-foreground rounded-full hover:brightness-110">
            🙏 Thắp nhang mới
          </button>
        }
      />
      <FilterBar filters={["Mới nhất", "Hot", "Linh nhất", "Đã pass"]} count="2,103 lời cầu" />

      <div className="space-y-3">
        {prayers.map(p => (
          <article
            key={p.id}
            className="bg-surface border border-border rounded-2xl p-5 hover:border-brand-red/40 hover:shadow-sm transition"
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-red to-warning flex items-center justify-center text-primary-foreground shrink-0">
                🙏
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-primary">{p.user}</span>
                  <span className="text-[12px] text-muted-foreground">· {p.time}</span>
                  <span className="text-[12px] px-2.5 py-0.5 bg-tag text-tag-foreground rounded-full">{p.subject}</span>
                  {p.hot && <span className="text-[11px] font-semibold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full">🔥 LINH</span>}
                </div>
                <p className="mt-2 text-[14px] text-foreground leading-relaxed">{p.text}</p>
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red hover:bg-brand-red/20 text-[13px] font-medium">
                    <Flame className="h-4 w-4" /> {p.incense} thắp nhang
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-primary hover:brightness-95 text-[13px] font-medium">
                    <Heart className="h-4 w-4" /> {p.pray} cầu may
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-muted text-muted-foreground text-[13px]">
                    <MessageCircle className="h-4 w-4" /> {p.comments}
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
