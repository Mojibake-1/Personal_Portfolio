import Link from "next/link";

type Lang = "en" | "zh";

type Work = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  linkText: string;
};

type Copy = {
  displayName: string;
  introLabel: string;
  worksLabel: string;
  contactLabel: string;
  aboutLead1: string;
  aboutHighlight: string;
  aboutLead2: string;
  phoneText: string;
  emailText: string;
  contactLead: string;
  works: Work[];
};

const phoneRaw = "+8617301734842";
const phoneDisplay = "+86 173 0173 4842";
const email = "lyh20223988@gmail.com";

const copyByLang: Record<Lang, Copy> = {
  en: {
    displayName: "Li Yuanhao",
    introLabel: "ABOUT",
    worksLabel: "WORKS",
    contactLabel: "CONTACT",
    aboutLead1: "AI-driven cross-border ecommerce operator.",
    aboutHighlight: "Strong at turning AI tools into practical growth workflows.",
    aboutLead2: "Focus on fast execution across content, visuals, and data operations.",
    phoneText: phoneDisplay,
    emailText: email,
    contactLead: "Open to collaboration in AI + ecommerce content and product operations.",
    works: [
      {
        title: "AI Marketing Videos",
        desc: "Produced product marketing short videos in batches using Jianying, AI voiceover, and AI digital avatars.",
        tags: ["AI Video", "Ecommerce", "Content Ops"],
        link: "#video",
        linkText: "Watch Video"
      },
      {
        title: "AI Public-Benefit Website",
        desc: "Built and operated an AI public-benefit site, with stable service pages for users and campus communities.",
        tags: ["Web", "AI", "Operations"],
        link: "#site-preview",
        linkText: "View Preview"
      }
    ]
  },
  zh: {
    displayName: "Li Yuanhao",
    introLabel: "关于",
    worksLabel: "作品",
    contactLabel: "联系",
    aboutLead1: "AI 驱动的跨境电商运营。",
    aboutHighlight: "擅长把 AI 工具转化为可落地的增长工作流。",
    aboutLead2: "聚焦内容、视觉与数据运营的高效执行。",
    phoneText: phoneDisplay,
    emailText: email,
    contactLead: "可合作方向：AI + 电商内容生产、增长与运营。",
    works: [
      {
        title: "AI 营销视频",
        desc: "使用剪映、AI 配音与 AI 数字人批量产出产品营销短视频。",
        tags: ["AI 视频", "跨境电商", "内容运营"],
        link: "#video",
        linkText: "观看视频"
      },
      {
        title: "AI 公益站页面",
        desc: "独立搭建并持续运维 AI 公益站页面，为用户提供稳定服务入口。",
        tags: ["网站", "AI", "运营"],
        link: "#site-preview",
        linkText: "查看预览"
      }
    ]
  }
};

export default async function HomePage({
  searchParams
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang: Lang = params.lang === "en" ? "en" : "zh";
  const t = copyByLang[lang];

  return (
    <main className="shell">
      <div className="texture" aria-hidden="true" />
      <article className="paper-card reveal">
        <header className="topbar reveal delay-1">
          <div className="branding">
            <h1 className="signature">{t.displayName}</h1>
            <span className="stamp">印</span>
          </div>
          <nav className="lang" aria-label="Language switcher">
            <Link
              href="/?lang=en"
              className={lang === "en" ? "lang-link lang-active" : "lang-link"}
              aria-current={lang === "en" ? "page" : undefined}
            >
              EN
            </Link>
            <span>·</span>
            <Link
              href="/?lang=zh"
              className={lang === "zh" ? "lang-link lang-active" : "lang-link"}
              aria-current={lang === "zh" ? "page" : undefined}
            >
              中
            </Link>
          </nav>
        </header>

        <section className="meta reveal delay-2">
          <a href={`tel:${phoneRaw}`}>
            <span className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="7" y="2.5" width="10" height="19" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="18.5" r="1" fill="currentColor" />
              </svg>
            </span>
            {t.phoneText}
          </a>
          <a href={`mailto:${email}`}>
            <span className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4.5 7L12 13L19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            {t.emailText}
          </a>
          <Link href={`/?lang=${lang}#contact`}>
            <span className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 3.8V7M16 3.8V7M8 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            {lang === "zh" ? "快速联系" : "Quick Contact"}
          </Link>
          <p>{lang === "zh" ? "作品集" : "Portfolio"}</p>
        </section>

        <section className="block reveal delay-3" id="about">
          <p className="label">{t.introLabel}</p>
          <p className="lead">
            {t.aboutLead1}
            <br />
            <span className="highlight">{t.aboutHighlight}</span>
            <br />
            {t.aboutLead2}
          </p>
        </section>

        <section className="block reveal delay-4" id="works">
          <p className="label">{t.worksLabel}</p>
          <div className="project-list">
            {t.works.map((work) => (
              <a
                key={work.title}
                className="project-item"
                href={work.link}
                target={work.link.startsWith("http") ? "_blank" : undefined}
                rel={work.link.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="project-header">
                  <h2>{work.title}</h2>
                </div>
                <p>{work.desc}</p>
                <div className="tags" aria-label={`${work.title} tags`}>
                  {work.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="work-link">{work.linkText}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="block reveal delay-5" id="video">
          <p className="label">{lang === "zh" ? "视频展示" : "VIDEO SHOWCASE"}</p>
          <div className="video-wrap">
            <video
              controls
              preload="metadata"
              playsInline
              className="feature-video"
              poster="/videos/ai-marketing-poster.jpg"
            >
              <source src="/videos/ai-marketing-demo.mp4" type="video/mp4" />
              {lang === "zh"
                ? "你的浏览器不支持 video 标签，请更新浏览器。"
                : "Your browser does not support the video tag."}
            </video>
          </div>
        </section>

        <section className="block reveal delay-6" id="site-preview">
          <p className="label">{lang === "zh" ? "公益站预览" : "PUBLIC SITE PREVIEW"}</p>
          <div className="site-preview-wrap">
            <iframe
              src="https://allinone.001027.xyz/"
              title={lang === "zh" ? "AI 公益站预览" : "AI Public-Benefit Site Preview"}
              className="site-preview-frame"
              loading="lazy"
            />
          </div>
          <a href="https://allinone.001027.xyz/" target="_blank" rel="noreferrer" className="site-preview-link">
            {lang === "zh" ? "打开公益站" : "Open Site"}
          </a>
        </section>

        <section className="block reveal delay-7" id="contact">
          <p className="label">{t.contactLabel}</p>
          <p className="lead compact">{t.contactLead}</p>
          <div className="cta-row">
            <a href={`mailto:${email}`} className="cta-primary">
              {lang === "zh" ? "邮件联系" : "Email Me"}
            </a>
            <a href={`tel:${phoneRaw}`} className="cta-secondary">
              {lang === "zh" ? "电话联系" : "Call Me"}
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
