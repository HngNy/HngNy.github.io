import type { Locale } from "@/i18n";
import { siteConfig } from "@/config/site.config";
import { experiencesConfig } from "@/config/experience.config";
import { resumeConfig } from "@/config/resume.config";
import { skillsConfig } from "@/config/skills.config";
import { experiencesConfigVi } from "@/config/vi/experience.config";
import { resumeConfigVi } from "@/config/vi/resume.config";

const skillCategoryVi: Record<string, string> = {
  "E-commerce": "Vận hành sàn TMĐT",
  Marketing: "Marketing",
  "Data & Office": "Dữ liệu & Văn phòng",
  "Soft skills": "Kỹ năng mềm",
  Languages: "Ngoại ngữ",
};

const skillItemVi: Record<string, string> = {
  "Product Listing": "Đăng & tối ưu sản phẩm",
  "Competitive Pricing": "Tính giá bán cạnh tranh",
  "Inventory Control": "Quản lý tồn kho",
  "Marketplace Ads Campaigns": "Tạo chiến dịch quảng cáo sàn",
  "Ad Metrics (CTR, CPC, ROAS)": "Đọc chỉ số ads (CTR, CPC, ROAS)",
  "Orders & Returns": "Xử lý đơn & hoàn trả",
  "Meta Ads (fundamentals)": "Meta Ads (nền tảng)",
  "MS Office": "Tin học văn phòng",
  "Sales Reporting": "Theo dõi số liệu bán hàng",
  Communication: "Giao tiếp, lắng nghe",
  "Customer Care": "Chăm sóc khách hàng",
  Teamwork: "Làm việc nhóm",
  "Time Management": "Quản lý thời gian",
  "Chinese (HSK 2)": "Tiếng Trung HSK 2",
};

export const getSkills = (locale: Locale) =>
  locale === "vi"
    ? skillsConfig.map((s) => ({
        category: skillCategoryVi[s.category] ?? s.category,
        technologies: s.technologies.map((t) => skillItemVi[t] ?? t),
      }))
    : skillsConfig;

export const getExperiences = (locale: Locale) =>
  locale === "vi" ? experiencesConfigVi : experiencesConfig;

export const getResume = (locale: Locale) => (locale === "vi" ? resumeConfigVi : resumeConfig);

export const getSiteText = (locale: Locale) =>
  locale === "vi"
    ? {
        title: "Cao Vũ Hằng Ny | Vận hành sàn TMĐT · Digital Marketing",
        description:
          "Cao Vũ Hằng Ny — vận hành sàn TMĐT và Digital Marketing. Có kinh nghiệm vận hành gian hàng TikTok Shop, Shopee, chăm sóc khách hàng, bán hàng và quản lý tồn kho; đang phát triển theo hướng quảng cáo Meta Ads và marketing dựa trên dữ liệu.",
      }
    : { title: siteConfig.title, description: siteConfig.description };

export const getEducation = (locale: Locale) =>
  locale === "vi"
    ? { school: "Trường Đại học Ngân hàng TP. Hồ Chí Minh", degree: "Ngành Hệ thống thông tin quản lý · GPA 3.2/4.0", period: "2022 - 2026" }
    : { school: "Banking University of Ho Chi Minh City", degree: "Management Information Systems · GPA 3.2/4.0", period: "2022 - 2026" };
