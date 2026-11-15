import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { projects } from "#site/content";
import { getExperiences } from "@/config/localized";
import LanguageSwitcher from "@/components/language-switcher";
import { getDictionary, localePath, type Locale } from "@/i18n";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href={localePath(locale, "/")} className="hidden md:inline">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-0 md:mt-3">
        <h1 className="head-text-sm">{locale === "vi" ? "Cao Vũ Hằng Ny" : portfolioConfig.name}</h1>
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-1 text-lg">
        {locale === "vi" ? "Vận hành sàn TMĐT · Digital Marketing" : portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="mt-4 mb-4 max-w-2xl text-foreground/85">
        {t.hero.bio}
        <span className="sr-only">bio</span>
      </p>
      <Socials locale={locale} />
      {/* A few numbers counted from the site's own content, so they stay current */}
      <div className="flex flex-col text-sm space-y-2 max-w-2xl text-foreground/85 mt-4 mb-2 lg:mb-4">
        {[
          { value: projects.filter((p) => p.lang === locale).length, label: locale === "vi" ? "Dự án" : "Projects", href: "/" },
          { value: getExperiences(locale).length, label: locale === "vi" ? "Kinh nghiệm" : "Experience", href: "/experience" },
          { value: locale === "vi" ? "130% chỉ tiêu (01/2025)" : "130% of target (Jan 2025)", label: locale === "vi" ? "Doanh số cao nhất" : "Best sales month", href: "/experience" },
          { value: "3.2 / 4.0", label: "GPA", href: "/cv" },
        ].map((stat) => (
          <p key={stat.label}>
            <span className="font-semibold text-primary/90">{stat.label}:</span>{" "}
            <Link href={localePath(locale, stat.href)} className="hover:text-primary hover:underline">{stat.value}</Link>
          </p>
        ))}
      </div>
    </section>
  );
}
