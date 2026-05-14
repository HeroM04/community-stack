import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Folder, GraduationCap } from "lucide-react";
import { PageLayout, PageHeader } from "@/components/universe/PageLayout";

export const Route = createFileRoute("/tai-lieu-mon-hoc")({
  component: DocumentPage,
  head: () => ({
    meta: [{ title: "Tài Liệu Các Môn Học" }],
  }),
});

// --- MOCK DATA: PHÂN BỔ THEO NĂM & NGÀNH THEO CHUẨN APD ---
const curriculumData = [
  {
    year: "Năm 1",
    majors: [
      {
        name: "Đại cương chung",
        subjects: ["MAC101", "MAC102", "PHI101", "LAW101", "ENG101", "ENG102", "PHY101", "MAT101", "MAT102", "PE101", "DEF101"],
      },
      {
        name: "Ngành kinh tế",
        subjects: ["ECO101", "ECO102", "MIC101", "MAC201", "STA101"],
      },
      {
        name: "Ngành quản trị kinh doanh",
        subjects: ["MGT101", "MKT101", "ECO101", "STA101"],
      },
      {
        name: "Ngành kế toán",
        subjects: ["ACC101", "ECO101", "ECO102", "LAW102"],
      },
    ],
  },
  {
    year: "Năm 2",
    majors: [
      {
        name: "Ngành kinh tế",
        subjects: ["DEV201", "INV201", "HRM201", "PRO201", "ECO202", "ECO203", "ECO204"],
      },
      {
        name: "Ngành kinh tế quốc tế",
        subjects: ["INT201", "LOG201", "TRD201", "FDI201", "ECO205"],
      },
      {
        name: "Ngành kinh tế số",
        subjects: ["DAT201", "DBS201", "ECO206", "ECOM201"],
      },
      {
        name: "Ngành tài chính - ngân hàng",
        subjects: ["FIN201", "BNK201", "COR201", "TAX201", "INV202"],
      },
    ],
  },
  {
    year: "Năm 3",
    majors: [
      {
        name: "Ngành kinh tế phát triển",
        subjects: ["PLA301", "COOP301", "DEV301", "DEV302", "RUR301"],
      },
      {
        name: "Ngành luật kinh tế",
        subjects: ["LAW301", "LAW302", "LAW303", "LAW304", "CON301"],
      },
      {
        name: "Ngành quản trị kinh doanh",
        subjects: ["ENT301", "TOU301", "MKT301", "MKT302", "MGT301", "MGT302"],
      },
      {
        name: "Ngành quản lý nhà nước",
        subjects: ["PUB301", "POL301", "ADM301", "LAW305"],
      },
    ],
  },
  {
    year: "Năm 4",
    majors: [
      {
        name: "Thực tập & Khóa luận",
        subjects: ["OJT401", "THE401", "PRJ401"],
      },
      {
        name: "Các môn chuyên sâu",
        subjects: ["ADV401", "ADV402", "SEM401"],
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
        subtitle="Chọn năm học và ngành học tương ứng để truy cập thư viện tài liệu, giáo trình và đề thi."
      />

      <div className="mt-6 space-y-6 pb-20">
        {curriculumData.map((yearData) => (
          <YearSection key={yearData.year} data={yearData} />
        ))}
      </div>
    </PageLayout>
  );
}

// --- SUB-COMPONENT: QUẢN LÝ TAB CHO TỪNG NĂM ---
function YearSection({ data }: { data: typeof curriculumData[0] }) {
  // Quản lý state Tab đang được chọn (mặc định là ngành đầu tiên trong mảng)
  const [activeTab, setActiveTab] = useState(data.majors[0].name);

  // Lấy ra danh sách môn học của Tab đang được chọn
  const activeMajordata = data.majors.find((m) => m.name === activeTab);

  return (
    <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
      {/* Tiêu đề Năm */}
      <div className="bg-accent/40 px-5 py-3 border-b border-border flex items-center gap-2.5">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h2 className="text-foreground font-bold text-[16px]">{data.year}</h2>
      </div>

      {/* Thanh Tabs Chuyên Ngành */}
      <div className="border-b border-border bg-surface px-2">
        <div className="flex overflow-x-auto hide-scrollbar">
          {data.majors.map((major) => (
            <button
              key={major.name}
              onClick={() => setActiveTab(major.name)}
              className={`whitespace-nowrap px-4 py-3 text-[13px] font-medium transition-colors border-b-2 relative ${
                activeTab === major.name
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent/30"
              }`}
            >
              {major.name}
            </button>
          ))}
        </div>
      </div>

      {/* Nội dung: Danh sách mã môn dàn ngang */}
      <div className="p-5">
        {activeMajordata && activeMajordata.subjects.length > 0 ? (
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {activeMajordata.subjects.map((code) => (
              <Link
                key={code}
                to="/tai-lieu" // Sau này bạn sửa thành `/tai-lieu/${code}`
                className="flex items-center gap-2 group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-accent/60 group-hover:bg-primary/10 transition-colors">
                  <Folder className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors">
                  {code}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-[13px] text-muted-foreground italic">
            Chưa có dữ liệu môn học cho ngành này.
          </p>
        )}
      </div>
    </div>
  );
}