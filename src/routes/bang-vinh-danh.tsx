import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Crown,
  FileText,
  Flame,
  Medal,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { Card, PageHeader, PageLayout } from "@/hooks/components/universe/PageLayout";

export const Route = createFileRoute("/bang-vinh-danh")({
  component: HallOfFamePage,
  head: () => ({
    meta: [
      { title: "Bảng vinh danh - Universe APD" },
      {
        name: "description",
        content: "Bảng xếp hạng thành viên đóng góp nổi bật của cộng đồng Universe APD.",
      },
    ],
  }),
});

const podium = [
  {
    rank: 1,
    name: "CodeNinja",
    title: "Vua chia sẻ tài liệu",
    points: "12,480",
    badge: "Top tài liệu",
    icon: Crown,
    tone: "from-amber-100 to-orange-50",
  },
  {
    rank: 2,
    name: "MèoLười_4782",
    title: "Bậc thầy đề thi",
    points: "10,960",
    badge: "Top đề thi",
    icon: Medal,
    tone: "from-slate-100 to-slate-50",
  },
  {
    rank: 3,
    name: "ThỏCưng_0001",
    title: "Cây review chiến",
    points: "9,740",
    badge: "Top review",
    icon: Award,
    tone: "from-orange-100 to-rose-50",
  },
] as const;

const leaderboard = [
  { rank: 4, name: "GấuNgủ_1923", faculty: "CNTT", points: "8,920", posts: 64, docs: 18, exams: 6, trend: "+12%" },
  { rank: 5, name: "CáMậpHọc", faculty: "Vật lý", points: "8,340", posts: 42, docs: 22, exams: 4, trend: "+9%" },
  { rank: 6, name: "RùaChậm_8821", faculty: "Anh ngữ", points: "7,880", posts: 37, docs: 16, exams: 3, trend: "+7%" },
  { rank: 7, name: "TSV_204", faculty: "Kinh tế", points: "7,420", posts: 31, docs: 14, exams: 5, trend: "+5%" },
  { rank: 8, name: "NoteHunter", faculty: "Toán", points: "6,970", posts: 23, docs: 19, exams: 2, trend: "+4%" },
  { rank: 9, name: "SlideMaster", faculty: "QTKD", points: "6,540", posts: 18, docs: 24, exams: 1, trend: "+3%" },
  { rank: 10, name: "MidnightCram", faculty: "Triết", points: "6,020", posts: 29, docs: 8, exams: 2, trend: "+2%" },
];

function HallOfFamePage() {
  return (
    <PageLayout showRightSidebar={false}>
      <PageHeader
        title="Bảng vinh danh"
        subtitle="Những thành viên đóng góp nổi bật nhất cộng đồng APD tuần này."
        action={
          <Link
            to="/posts"
            className="inline-flex h-10 items-center rounded-full bg-foreground px-4 text-[13px] font-medium text-background hover:opacity-90"
          >
            Khám phá cộng đồng
          </Link>
        }
      />

      <div className="grid gap-3 md:grid-cols-4">
        <MetricCard icon={TrendingUp} label="Tổng uy tín tuần" value="128,420" />
        <MetricCard icon={MessageSquare} label="Bài post nổi bật" value="342" />
        <MetricCard icon={BookOpen} label="Tài liệu được duyệt" value="128" />
        <MetricCard icon={FileText} label="Đề thi mới" value="54" />
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[1.1fr_1.9fr]">
        <Card className="p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-[18px] font-semibold text-foreground">Top 3 tuần này</h2>
              <p className="mt-1 text-[13px] text-muted-foreground">Xếp hạng theo mức độ đóng góp và tương tác hữu ích.</p>
            </div>
            <div className="rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-primary">
              Cập nhật 13/05
            </div>
          </div>

          <div className="space-y-3">
            {podium.map((entry) => (
              <div
                key={entry.rank}
                className={`rounded-2xl border border-border bg-gradient-to-br ${entry.tone} p-4`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                      <entry.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[12px] font-medium text-muted-foreground">Hạng {entry.rank}</div>
                      <div className="text-[18px] font-semibold text-foreground">{entry.name}</div>
                      <div className="text-[13px] text-muted-foreground">{entry.title}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[20px] font-semibold text-foreground">{entry.points}</div>
                    <div className="text-[12px] text-muted-foreground">điểm uy tín</div>
                  </div>
                </div>
                <div className="mt-3 inline-flex rounded-full bg-surface/90 px-3 py-1 text-[12px] font-medium text-primary">
                  {entry.badge}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-[18px] font-semibold text-foreground">BXH đóng góp</h2>
              <p className="mt-1 text-[13px] text-muted-foreground">Những thành viên có ảnh hưởng tốt nhất tới cộng đồng học tập.</p>
            </div>
            <div className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-[12px] text-muted-foreground">
              Tuần này
            </div>
          </div>

          <div className="space-y-2.5">
            {leaderboard.map((entry) => (
              <div
                key={entry.rank}
                className="grid items-center gap-3 rounded-xl border border-border bg-background px-3 py-3 md:grid-cols-[56px_1.4fr_0.9fr_1fr_90px]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[14px] font-semibold text-primary">
                  #{entry.rank}
                </div>

                <div className="min-w-0">
                  <div className="truncate text-[14px] font-semibold text-foreground">{entry.name}</div>
                  <div className="mt-0.5 text-[12px] text-muted-foreground">{entry.faculty}</div>
                </div>

                <div>
                  <div className="text-[15px] font-semibold text-foreground">{entry.points}</div>
                  <div className="text-[11px] text-muted-foreground">điểm uy tín</div>
                </div>

                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-tag px-2.5 py-1 text-tag-foreground">Post {entry.posts}</span>
                  <span className="rounded-full bg-tag px-2.5 py-1 text-tag-foreground">Tài liệu {entry.docs}</span>
                  <span className="rounded-full bg-tag px-2.5 py-1 text-tag-foreground">Đề thi {entry.exams}</span>
                </div>

                <div className="text-right text-[12px] font-medium text-success">{entry.trend}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Card className="p-4">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-foreground">
            <Flame className="h-4 w-4 text-brand-red" />
            Điểm cộng nhiều nhất
          </div>
          <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
            Bài post có câu trả lời hữu ích, tài liệu được tải nhiều và review chi tiết đều được cộng uy tín mạnh hơn.
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-foreground">
            <BookOpen className="h-4 w-4 text-primary" />
            Tiêu chí xếp hạng
          </div>
          <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
            Xếp hạng dựa trên chất lượng đóng góp, lượt tải, lượt vote hữu ích và độ đều đặn trong tuần.
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-foreground">
            <Award className="h-4 w-4 text-warning" />
            Huy hiệu cộng đồng
          </div>
          <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
            Top 3 mỗi tuần được gắn huy hiệu nổi bật trên hồ sơ và ưu tiên hiển thị ở các bảng xếp hạng lớn.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4" />
        <span className="text-[12px]">{label}</span>
      </div>
      <div className="mt-2 text-[24px] font-semibold leading-none text-foreground">{value}</div>
    </Card>
  );
}
