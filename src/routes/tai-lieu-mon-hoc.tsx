import { createFileRoute, Link } from "@tanstack/react-router";
import { Folder, ChevronRight } from "lucide-react";
import { PageLayout, PageHeader, Pagination, SearchBar } from "@/components/universe/PageLayout";

export const Route = createFileRoute("/tai-lieu-mon-hoc")({
  component: DocumentPage,
  head: () => ({
    meta: [{ title: "Tài Liệu Các Môn Học" }],
  }),
});

// --- MOCK DATA ---
const ky0Data = {
  title: "Kỳ 0 - Các môn đại cương & Chuẩn bị",
  badge: "0",
  badgeColor: "bg-amber-500",
  subjects: ["COV111", "ENT103", "ENT104", "ENT203", "ENT303", "OJT202", "SSC102"],
  stats: { topics: 409, posts: 453 },
  latestPost: {
    tag: "Đề Thi FE",
    tagColor: "bg-brand-red",
    title: "ENT503 - SP26 - H2RE - W",
    date: "5/5/26",
    author: "Kokichi92",
    avatarBg: "bg-brand-red",
    avatar: "K",
  },
};

const curriculumData = [
  {
    year: "Năm 1",
    semesters: [
      {
        name: "Kỳ 1",
        phases: [
          {
            name: "Đợt 1",
            badge: "1.1",
            badgeColor: "bg-blue-500",
            subjects: ["CSI104", "CEA201", "PRF192"],
            stats: { topics: 125, posts: 310 },
            latestPost: {
              tag: "Tài Liệu",
              tagColor: "bg-success",
              title: "Slide bài giảng PRF192 full",
              date: "10/5/26",
              author: "TuanMinh",
              avatarBg: "bg-blue-500",
              avatar: "T",
            },
          },
          {
            name: "Đợt 2",
            badge: "1.2",
            badgeColor: "bg-blue-600",
            subjects: ["PRO192", "MAD101", "SSL101c"],
            stats: { topics: 321, posts: 492 },
            latestPost: {
              tag: "Đề Thi FE",
              tagColor: "bg-brand-red",
              title: "SSL101c - SP26 - RE",
              date: "4/5/26",
              author: "Ngọc Bảo1",
              avatarBg: "bg-slate-500",
              avatar: "N",
            },
          },
        ],
      },
      {
        name: "Kỳ 2",
        phases: [
          {
            name: "Đợt 1",
            badge: "2.1",
            badgeColor: "bg-rose-500",
            subjects: ["OSG202", "SSG104"],
            stats: { topics: 210, posts: 420 },
            latestPost: {
              tag: "Review",
              tagColor: "bg-purple-500",
              title: "Kinh nghiệm pass OSG202",
              date: "12/5/26",
              author: "HieuHoc",
              avatarBg: "bg-rose-500",
              avatar: "H",
            },
          },
          {
            name: "Đợt 2",
            badge: "2.2",
            badgeColor: "bg-rose-600",
            subjects: ["CSD201", "DBI202"],
            stats: { topics: 520, posts: 842 },
            latestPost: {
              tag: "Đề Thi PE",
              tagColor: "bg-warning",
              title: "DBI202 - SP26 - B5 - PE",
              date: "4/5/26",
              author: "green_tea",
              avatarBg: "bg-teal-500",
              avatar: "G",
            },
          },
        ],
      },
    ],
  },
  {
    year: "Năm 2",
    semesters: [
      {
        name: "Kỳ 3",
        phases: [
          {
            name: "Đợt 1",
            badge: "3.1",
            badgeColor: "bg-indigo-500",
            subjects: ["JPD113", "WED201c"],
            stats: { topics: 180, posts: 350 },
            latestPost: {
              tag: "Project",
              tagColor: "bg-indigo-500",
              title: "Source code WED201c tham khảo",
              date: "1/5/26",
              author: "QuocKhanh",
              avatarBg: "bg-indigo-500",
              avatar: "Q",
            },
          },
          {
            name: "Đợt 2",
            badge: "3.2",
            badgeColor: "bg-indigo-600",
            subjects: ["PRN211", "SWE201c"],
            stats: { topics: 290, posts: 610 },
            latestPost: {
              tag: "Đề Thi PE",
              tagColor: "bg-warning",
              title: "SWE201c - SP26 - PE2",
              date: "4/5/26",
              author: "strong_will",
              avatarBg: "bg-blue-500",
              avatar: "S",
            },
          },
        ],
      },
    ],
  },
];

// --- MAIN COMPONENT ---
function DocumentPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Tài Liệu Các Môn Học"
        subtitle="Danh sách tổng hợp tài liệu, đề thi, review các môn học theo lộ trình tại APD."
      />

      <div className="mt-6 rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
        
        {/* Header của bảng */}
        <div className="hidden md:grid grid-cols-[1fr_120px_120px_300px] gap-4 bg-accent/50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
          <div>Chuyên mục / Môn học</div>
          <div className="text-center">Chủ đề</div>
          <div className="text-center">Bài viết</div>
          <div>Bài viết mới nhất</div>
        </div>

        <div className="divide-y divide-border">
          {/* KỲ 0 - ĐẠI CƯƠNG */}
          <ForumRow
            title={ky0Data.title}
            badge={ky0Data.badge}
            badgeColor={ky0Data.badgeColor}
            subjects={ky0Data.subjects}
            stats={ky0Data.stats}
            latestPost={ky0Data.latestPost}
          />

          {/* RENDER CÁC NĂM TIẾP THEO */}
          {curriculumData.map((yearData) => (
            <div key={yearData.year}>
              {/* Tiêu đề Năm */}
              <div className="bg-accent/40 px-6 py-2.5 border-y border-border flex items-center gap-2">
                <span className="text-foreground font-bold text-[15px]">{yearData.year}</span>
                <div className="h-[1px] flex-1 bg-border ml-4" />
              </div>

              {/* Các Kỳ trong Năm */}
              {yearData.semesters.map((semester) => (
                <div key={semester.name}>
                  <div className="px-6 py-2 text-sm font-medium text-muted-foreground bg-surface border-b border-border flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {semester.name}
                  </div>

                  {/* Các Đợt trong Kỳ */}
                  <div className="divide-y divide-border/50">
                    {semester.phases.map((phase) => (
                      <ForumRow
                        key={phase.name}
                        title={`${semester.name} - ${phase.name}`}
                        badge={phase.badge}
                        badgeColor={phase.badgeColor}
                        subjects={phase.subjects}
                        stats={phase.stats}
                        latestPost={phase.latestPost}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

// --- SUB-COMPONENT ---
interface ForumRowProps {
  title: string;
  badge: string;
  badgeColor: string;
  subjects: string[];
  stats: { topics: number; posts: number };
  latestPost: {
    tag: string;
    tagColor: string;
    title: string;
    date: string;
    author: string;
    avatarBg: string;
    avatar: string;
  };
}

function ForumRow({ title, badge, badgeColor, subjects, stats, latestPost }: ForumRowProps) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_120px_120px_300px] gap-4 px-6 py-5 hover:bg-accent/30 transition-colors duration-200">
      
      {/* Cột 1: Thông tin môn học */}
      <div className="flex gap-4">
        <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-bold text-white shadow-sm ${badgeColor}`}>
          {badge}
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-foreground hover:text-primary cursor-pointer mb-2 transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {subjects.map((code) => (
              <Link
                key={code}
                to="#"
                className="flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-primary hover:underline transition-colors"
              >
                <Folder className="h-3.5 w-3.5 text-primary/70" />
                <span>{code}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Cột 2 & 3: Thống kê */}
      <div className="hidden md:flex flex-col items-center justify-center text-center">
        <span className="text-foreground font-medium text-[14px]">{stats.topics.toLocaleString()}</span>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center text-center">
        <span className="text-foreground font-medium text-[14px]">{stats.posts.toLocaleString()}</span>
      </div>

      {/* Cột 4: Bài viết mới nhất */}
      <div className="mt-3 md:mt-0 flex items-start gap-3 border-t border-border pt-3 md:border-t-0 md:pt-0">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white text-sm font-semibold shadow-sm ${latestPost.avatarBg}`}>
          {latestPost.avatar}
        </div>
        <div className="overflow-hidden min-w-0">
          <div className="flex items-center gap-2 truncate">
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold text-white whitespace-nowrap ${latestPost.tagColor}`}>
              {latestPost.tag}
            </span>
            <Link to="#" className="text-[13px] font-medium text-foreground hover:text-primary hover:underline truncate transition-colors">
              {latestPost.title}
            </Link>
          </div>
          <div className="mt-1 flex items-center gap-2 text-[12px] text-muted-foreground">
            <span>{latestPost.date}</span>
            <span>•</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">{latestPost.author}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}