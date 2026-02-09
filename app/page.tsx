import Link from "next/link";
import ShowcaseCarousel from "./showcase-carousel";
import type { IconType } from "react-icons";
import {
  SiAdobephotoshop,
  SiAmazonwebservices,
  SiCanva,
  SiCloudflare,
  SiCloudflareworkers,
  SiClaude,
  SiDiscord,
  SiDocker,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglecloud,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiOpenai,
  SiPython,
  SiReact,
  SiSlack,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVercel
} from "react-icons/si";

type Lang = "en" | "zh";

type Work = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  linkText: string;
};

type BadgeItem = {
  name: string;
  icon: IconType;
  tone: string;
};

type Copy = {
  displayName: string;
  introLabel: string;
  worksLabel: string;
  stackLabel: string;
  toolboxLabel: string;
  contactLabel: string;
  positioningTitle: string;
  positioningSubtitle: string;
  positioningProofs: string[];
  phoneText: string;
  emailText: string;
  contactLead: string;
  works: Work[];
};

const phoneRaw = "+8617301734842";
const phoneDisplay = "+86 173 0173 4842";
const email = "lyh20223988@gmail.com";

const techStack: BadgeItem[] = [
  { name: "TypeScript", icon: SiTypescript, tone: "#3178c6" },
  { name: "React", icon: SiReact, tone: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, tone: "#1d1d1d" },
  { name: "Node.js", icon: SiNodedotjs, tone: "#5fa04e" },
  { name: "Tailwind CSS", icon: SiTailwindcss, tone: "#38bdf8" },
  { name: "Python", icon: SiPython, tone: "#3776ab" },
  { name: "Docker", icon: SiDocker, tone: "#2496ed" },
  { name: "Vercel", icon: SiVercel, tone: "#111111" },
  { name: "Cloudflare", icon: SiCloudflare, tone: "#f38020" },
  { name: "Cloudflare Workers", icon: SiCloudflareworkers, tone: "#f38020" },
  { name: "Google Cloud", icon: SiGooglecloud, tone: "#4285f4" },
  { name: "AWS", icon: SiAmazonwebservices, tone: "#ff9900" }
];

const toolbox: BadgeItem[] = [
  { name: "OpenAI / Codex", icon: SiOpenai, tone: "#111111" },
  { name: "Claude", icon: SiClaude, tone: "#d97757" },
  { name: "Photoshop", icon: SiAdobephotoshop, tone: "#31a8ff" },
  { name: "Canva", icon: SiCanva, tone: "#00c4cc" },
  { name: "Notion", icon: SiNotion, tone: "#1f1f1f" },
  { name: "Google Ads", icon: SiGoogleads, tone: "#4285f4" },
  { name: "Google Analytics", icon: SiGoogleanalytics, tone: "#e37400" },
  { name: "Slack", icon: SiSlack, tone: "#4a154b" },
  { name: "Telegram", icon: SiTelegram, tone: "#229ed9" },
  { name: "Discord", icon: SiDiscord, tone: "#5865f2" }
];

const copyByLang: Record<Lang, Copy> = {
  en: {
    displayName: "Li Yuanhao",
    introLabel: "ABOUT",
    worksLabel: "WORKS",
    stackLabel: "TECH STACK",
    toolboxLabel: "TOOLBOX",
    contactLabel: "CONTACT",
    positioningTitle: "AI-Driven Cross-Border Ecommerce Operator",
    positioningSubtitle:
      "Focused on content production, ad optimization, and data automation, turning ideas into practical outcomes in lean teams.",
    positioningProofs: [
      "Can automate batch production of short videos, English copy, and ad optimization suggestions.",
      "Built an AI community from 0 to 1, growing naturally to 1,000+ users.",
      "Independently operated an AI website with monthly revenue of 2,000+ RMB."
    ],
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
        title: "Amazon Ads Optimization Console Demo",
        desc: "Processes Search Term Report in a weekly loop: Excel calculates CTR/CVR/ACOS and waste priority, then an LLM classifies relevance and intent to output negative keywords plus bid and match-type recommendations.",
        tags: ["Amazon Ads", "Search Terms", "LLM Ops"],
        link: "#amazon-ads-demo",
        linkText: "Watch Demo"
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
    stackLabel: "技术栈",
    toolboxLabel: "工具箱",
    contactLabel: "联系",
    positioningTitle: "AI 驱动的跨境电商运营",
    positioningSubtitle: "聚焦内容生产、广告优化与数据自动化，在小团队里快速把想法落地成结果。",
    positioningProofs: [
      "可自动化批量产出短视频、英文文案与广告优化建议",
      "从 0 到 1 搭建 AI 社群，自然增长 1000+",
      "独立运维 AI 站点，月均营收 2000+"
    ],
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
        title: "Amazon Ads 优化台 Demo",
        desc: "周度处理 Search Term Report：Excel 算 CTR/CVR/ACOS 与浪费优先级，大模型判相关性和意图，自动给出否定词与高转化词出价/匹配建议。",
        tags: ["Amazon Ads", "搜索词分析", "自动化优化"],
        link: "#amazon-ads-demo",
        linkText: "观看演示"
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
          <a href={`tel:${phoneRaw}`} className="ink-line">
            <span className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="7" y="2.5" width="10" height="19" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="18.5" r="1" fill="currentColor" />
              </svg>
            </span>
            {t.phoneText}
          </a>
          <a href={`mailto:${email}`} className="ink-line">
            <span className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4.5 7L12 13L19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            {t.emailText}
          </a>
          <Link href={`/?lang=${lang}#contact`} className="ink-line">
            <span className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 3.8V7M16 3.8V7M8 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            {lang === "zh" ? "快速联系" : "Quick Contact"}
          </Link>
          <p className="meta-location">
            <span className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 20.6C12 20.6 18.2 15.2 18.2 10.3C18.2 6.9 15.5 4.2 12 4.2C8.5 4.2 5.8 6.9 5.8 10.3C5.8 15.2 12 20.6 12 20.6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="10.1" r="2.2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            {lang === "zh" ? "中国广东深圳" : "Shenzhen, Guangdong, China"}
          </p>
        </section>

        <section className="block reveal delay-3" id="about">
          <p className="label">{t.introLabel}</p>
          <h2 className="positioning-title">{t.positioningTitle}</h2>
          <p className="positioning-subtitle">{t.positioningSubtitle}</p>
          <ul className="positioning-proofs">
            {t.positioningProofs.map((proof) => (
              <li key={proof}>{proof}</li>
            ))}
          </ul>
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

        <ShowcaseCarousel lang={lang} />

        <section className="block reveal delay-7" id="stack">
          <p className="label">{t.stackLabel}</p>
          <div className="icon-grid" aria-label={t.stackLabel}>
            {techStack.map((item) => (
              <div key={item.name} className="icon-tile" tabIndex={0} aria-label={item.name}>
                <item.icon className="icon-mark" style={{ color: item.tone }} aria-hidden="true" />
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="block reveal delay-8" id="toolbox">
          <p className="label">{t.toolboxLabel}</p>
          <div className="icon-grid icon-grid-tools" aria-label={t.toolboxLabel}>
            {toolbox.map((item) => (
              <div key={item.name} className="icon-tile" tabIndex={0} aria-label={item.name}>
                <item.icon className="icon-mark" style={{ color: item.tone }} aria-hidden="true" />
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="block reveal delay-9" id="contact">
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
