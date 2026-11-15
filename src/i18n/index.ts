import { siteConfig } from "@/config/site.config";

export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

// Vietnamese lives at the root, English under /en
const prefix = (locale: Locale) => (locale === defaultLocale ? "" : `/${locale}`);

export const localePath = (locale: Locale, path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const p = prefix(locale);
  if (!p) return clean;
  return clean === "/" ? p : `${p}${clean}`;
};

const otherLocale: Locale = defaultLocale === "vi" ? "en" : "vi";

// Strip the locale prefix to get the shared path
export const stripLocale = (pathname: string) => {
  const p = `/${otherLocale}`;
  if (pathname === p || pathname === `${p}/`) return "/";
  return pathname.startsWith(`${p}/`) ? pathname.slice(p.length) : pathname;
};

export const localeFromPath = (pathname: string): Locale =>
  pathname === `/${otherLocale}` || pathname.startsWith(`/${otherLocale}/`) ? otherLocale : defaultLocale;

// hreflang alternates for a shared path, e.g. "/experience"
export const languageAlternates = (path: string, locale: Locale) => {
  const origin = siteConfig.siteUrl.replace(/\/$/, "");
  const en = `${origin}${localePath("en", path)}`;
  const vi = `${origin}${localePath("vi", path)}`;
  return {
    canonical: locale === "vi" ? vi : en,
    languages: { vi, en, "x-default": defaultLocale === "vi" ? vi : en },
  };
};

export const ogLocale = (locale: Locale) => (locale === "vi" ? "vi_VN" : "en_US");

const en = {
  nav: { projects: "Projects", experience: "Experience", services: "Services", blog: "Blog", tools: "Tools", wordpress: "WordPress", contact: "Contact" },
  hero: {
    bio: "Hi there 👋 I'm Ny, a Management Information Systems student who loves e-commerce. I've helped run TikTok Shop and Shopee stores, taken care of customers and hit 130% of my sales target, and I'm now growing into digital marketing with Meta Ads. I'm calm, eager to learn and persistent with my goals — if you'd like to work together, feel free to reach out.",
    contact: "Contact",
    resume: "Resume",
    switchLabel: "Tiếng Việt",
    switchShort: "VI",
  },
  home: {
    search: "Search projects",
    searchRequired: "Search is required",
    featured: "Featured",
    github: "GitHub",
    stars: "Stars",
    lastUpdated: "Last updated",
    forks: "forks",
  },
  project: { allProjects: "All projects", visitWebsite: "Visit website" },
  experience: {
    education: "Education",
    current: "Current",
    present: "Present",
    achievement: "Achievement",
    title: "Experience",
    intro: "Hey, I'm {name}. Here's my work experience so far — from sales and customer care to running e-commerce stores.",
    at: "at",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Cao Vu Hang Ny via email.",
    location: "Location",
    locationValue: "Tan Phu, Ho Chi Minh City, Vietnam",
  },
  services: {
    title: "Services",
    description: "WordPress and WooCommerce websites, speed and technical SEO, data crawling, web apps and maintenance.",
    includes: "Includes",
    cta: "Discuss your project",
  },
  blog: {
    title: "Blog",
    description: "Notes on e-commerce, marketing and things I learn along the way.",
    empty: "No posts yet.",
    allPosts: "All posts",
    all: "All",
  },
  tools: {
    title: "Tools",
    description: "Tools and automations I build for WordPress, e-commerce and everyday work.",
    empty: "Tools are being built — check back soon.",
    done: "Live",
    guide: "Docs",
    private: "Private",
    privateHeading: "WordPress Kit",
    privateNote: "Themes, plugins and snippets I use to build WordPress sites.",
    appsHeading: "Web tools",
    guidesHeading: "Docs",
    building: "In progress",
  },
  cv: {
    pageTitle: "Resume",
    home: "Home",
    viewPortfolio: "View Portfolio",
    viewCv: "View CV",
    webNote: "Web version of my CV — always up to date",
    downloadPdf: "Download PDF",
    summary: "Summary",
    links: "Links",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    selectedSites: "Selected sites",
    seeFullList: "see the full list on the",
    portfolio: "portfolio",
  },
};

const vi: typeof en = {
  nav: { projects: "Dự án", experience: "Kinh nghiệm", services: "Dịch vụ", blog: "Blog", tools: "Công cụ", wordpress: "WordPress", contact: "Liên hệ" },
  hero: {
    bio: "Xin chào 👋 Mình là Ny, sinh viên ngành Hệ thống thông tin quản lý và rất thích thương mại điện tử. Mình đã vận hành gian hàng TikTok Shop, Shopee, chăm sóc khách hàng và từng đạt 130% chỉ tiêu doanh số; hiện mình đang phát triển theo hướng Digital Marketing với Meta Ads. Mình điềm tĩnh, chịu khó học hỏi và kiên trì với mục tiêu — nếu muốn cùng làm việc, cứ liên hệ với mình nhé.",
    contact: "Liên hệ",
    resume: "Xem CV",
    switchLabel: "English",
    switchShort: "EN",
  },
  home: {
    search: "Tìm dự án",
    searchRequired: "Vui lòng nhập từ khóa",
    featured: "Nổi bật",
    github: "GitHub",
    stars: "Nhiều sao",
    lastUpdated: "Mới cập nhật",
    forks: "forks",
  },
  project: { allProjects: "Tất cả dự án", visitWebsite: "Xem website" },
  experience: {
    education: "Học vấn",
    current: "Hiện tại",
    present: "nay",
    achievement: "Thành tích",
    title: "Kinh nghiệm",
    intro: "Xin chào, mình là {name}. Dưới đây là kinh nghiệm làm việc của mình — từ bán hàng, chăm sóc khách hàng đến vận hành sàn thương mại điện tử.",
    at: "tại",
  },
  contact: {
    title: "Liên hệ",
    description: "Liên hệ với Cao Vũ Hằng Ny qua email.",
    location: "Địa chỉ",
    locationValue: "Tân Phú, TP. Hồ Chí Minh",
  },
  services: {
    title: "Dịch vụ",
    description: "Thiết kế website WordPress, WooCommerce, tối ưu tốc độ & SEO kỹ thuật, crawl dữ liệu, web app và bảo trì website.",
    includes: "Bao gồm",
    cta: "Trao đổi dự án",
  },
  blog: {
    title: "Blog",
    description: "Ghi chép về thương mại điện tử, marketing và những gì mình học được.",
    empty: "Chưa có bài viết nào.",
    allPosts: "Tất cả bài viết",
    all: "Tất cả",
  },
  tools: {
    title: "Công cụ",
    description: "Các tool và automation mình tự làm cho WordPress, thương mại điện tử và công việc hằng ngày.",
    empty: "Các tool đang được phát triển — bạn quay lại sau nhé.",
    done: "Live",
    guide: "Docs",
    private: "Private",
    privateHeading: "WordPress Kit",
    privateNote: "Theme, plugin và snippet mình dùng để dựng site WordPress.",
    appsHeading: "Web tools",
    guidesHeading: "Docs",
    building: "In progress",
  },
  cv: {
    pageTitle: "CV",
    home: "Trang chủ",
    viewPortfolio: "Xem portfolio",
    viewCv: "Xem CV",
    webNote: "Bản web của CV — luôn cập nhật mới nhất",
    downloadPdf: "Tải PDF",
    summary: "Giới thiệu",
    links: "Liên kết",
    experience: "Kinh nghiệm",
    projects: "Dự án",
    skills: "Kỹ năng",
    education: "Học vấn",
    languages: "Ngoại ngữ",
    selectedSites: "Website tiêu biểu",
    seeFullList: "xem đầy đủ trên",
    portfolio: "portfolio",
  },
};

export type Dictionary = typeof en;
export const dictionaries: Record<Locale, Dictionary> = { en, vi };
export const getDictionary = (locale: Locale) => dictionaries[locale];
