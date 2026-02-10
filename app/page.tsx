import Link from "next/link";
import ShowcaseCarousel from "./showcase-carousel";

type Lang = "en" | "zh";

type CaseMetric = {
  label: string;
  value: string;
};

type LeadCase = {
  title: string;
  desc: string;
  challenge: string;
  method: string;
  result: string;
  tags: string[];
  link: string;
  linkText: string;
  note: string;
  metrics: CaseMetric[];
};

type SupportCase = {
  title: string;
  desc: string;
  evidence: string;
  tags: string[];
  link: string;
  linkText: string;
};

type Capability = {
  pillar: string;
  title: string;
  summary: string;
  highlights: string[];
  tools: string[];
  outcome: string;
};

type Copy = {
  displayName: string;
  introLabel: string;
  worksLabel: string;
  matrixLabel: string;
  contactLabel: string;
  caseLeadLabel: string;
  caseProblemLabel: string;
  caseMethodLabel: string;
  caseResultLabel: string;
  matrixLead: string;
  positioningTitle: string;
  positioningSubtitle: string;
  positioningProofs: string[];
  phoneText: string;
  emailText: string;
  contactLead: string;
  leadCase: LeadCase;
  supportCases: SupportCase[];
  capabilities: Capability[];
};

const phoneRaw = "+8617301734842";
const phoneDisplay = "+86 173 0173 4842";
const email = "lyh20223988@gmail.com";

const copyByLang: Record<Lang, Copy> = {
  en: {
    displayName: "Li Yuanhao",
    introLabel: "ABOUT",
    worksLabel: "CASE STUDIES",
    matrixLabel: "CAPABILITY MATRIX",
    contactLabel: "CONTACT",
    caseLeadLabel: "Lead Case",
    caseProblemLabel: "Problem",
    caseMethodLabel: "Method",
    caseResultLabel: "Result",
    matrixLead: "Organized by repeatable capability modules, each mapped to real delivery tools and outcomes.",
    positioningTitle: "AI-Driven Cross-Border Ecommerce Operator",
    positioningSubtitle:
      "Focused on content production, ad optimization, and data automation, turning ideas into practical outcomes in teams.",
    positioningProofs: [
      "Can automate batch production of short videos, English copy, and ad optimization suggestions.",
      "Built an AI community from 0 to 1, growing naturally to 1,000+ users.",
      "Independently operated an AI website with monthly revenue of 2,000+ RMB."
    ],
    phoneText: phoneDisplay,
    emailText: email,
    contactLead: "Open to collaboration in AI + ecommerce content and product operations.",
    leadCase: {
      title: "Amazon Ads Optimization Console",
      desc: "Turned weekly Search Term Reports into execution-ready keyword actions instead of manual spreadsheet reading.",
      challenge:
        "Search terms, CTR/CVR/ACOS, and spending waste were split across sheets, so each optimization round cost heavy manual judgment.",
      method:
        "Built a weekly loop: Excel calculates priority scores, then an LLM classifies relevance and intent to produce negative keyword and bid recommendations.",
      result:
        "Compressed decision time to one short review pass and generated reusable optimization suggestions for continuous campaign updates.",
      tags: ["Amazon Ads", "Search Terms", "LLM Ops"],
      link: "#amazon-ads-case",
      linkText: "View Case",
      note: "Note: case data is desensitized; process logic and interaction flow are preserved.",
      metrics: [
        { label: "Weekly Scope", value: "2,000+ Terms" },
        { label: "Round Duration", value: "< 20 min" },
        { label: "Outputs", value: "Negatives + Bid Actions" }
      ]
    },
    supportCases: [
      {
        title: "AI Marketing Videos",
        desc: "Batch-produced product marketing videos with Jianying, AI voiceovers, and digital avatars.",
        evidence: "Delivered repeatable content templates for ongoing listing and ad creative needs.",
        tags: ["AI Video", "Ecommerce", "Content Ops"],
        link: "#video",
        linkText: "Watch Video"
      },
      {
        title: "AI Public-Benefit Website",
        desc: "Built and operated an AI public-benefit site with stable access pages for users and campus communities.",
        evidence: "Maintained continuous operations while monetizing selected service modules.",
        tags: ["Web", "AI", "Operations"],
        link: "#site-preview",
        linkText: "View Preview"
      }
    ],
    capabilities: [
      {
        pillar: "Pillar 01",
        title: "Creative Intelligence Studio",
        summary: "Orchestrate scripts, visual assets, and AI voice tracks into campaign-ready content packages.",
        highlights: ["Batch output across listing, social, and ad channels.", "Template libraries for consistently faster launches."],
        tools: ["OpenAI / Codex", "Claude", "Canva", "Photoshop", "Jianying"],
        outcome: "Outcome: weekly creative assets delivered with stable quality and shorter prep cycles."
      },
      {
        pillar: "Pillar 02",
        title: "Performance Decision Engine",
        summary: "Convert raw search-term data into ranked actions for negative keywords and bid adjustments.",
        highlights: ["Weekly intent clustering and waste-term elimination.", "Reusable scoring logic for iteration rhythm."],
        tools: ["Amazon Ads", "Excel", "Python", "Google Analytics"],
        outcome: "Outcome: optimization rounds move from manual scanning to focused decision review."
      },
      {
        pillar: "Pillar 03",
        title: "Commerce Delivery System",
        summary: "Keep pages, scripts, and operating workflows stable while shipping quickly in teams.",
        highlights: ["Deploy lean product pages and practical utilities.", "Synchronize docs, prompts, and execution rituals."],
        tools: ["Next.js", "Node.js", "Cloudflare Workers", "Vercel", "Notion", "Slack"],
        outcome: "Outcome: continuous delivery with fewer handoff gaps across content and operations."
      }
    ]
  },
  zh: {
    displayName: "Li Yuanhao",
    introLabel: "关于",
    worksLabel: "案例研究",
    matrixLabel: "能力矩阵",
    contactLabel: "联系",
    caseLeadLabel: "主案例",
    caseProblemLabel: "问题",
    caseMethodLabel: "方法",
    caseResultLabel: "结果",
    matrixLead: "以三大能力单元组织交付体系，直接对应真实业务场景与工具链。",
    positioningTitle: "AI 驱动的跨境电商运营",
    positioningSubtitle: "聚焦内容生产、广告优化与数据自动化，在团队里快速把想法落地成结果。",
    positioningProofs: [
      "可自动化批量产出短视频、英文文案与广告优化建议",
      "从 0 到 1 搭建 AI 社群，自然增长 1000+",
      "独立运维 AI 站点，月均营收 2000+"
    ],
    phoneText: phoneDisplay,
    emailText: email,
    contactLead: "可合作方向：AI + 电商内容生产，提效、增长与运营。",
    leadCase: {
      title: "Amazon Ads 优化台",
      desc: "把周度 Search Term Report 变成可执行的关键词动作，而不是重复的人肉判读。",
      challenge:
        "搜索词、CTR/CVR/ACOS 与浪费数据分散在多张表，导致每轮优化高度依赖人工经验，决策成本高。",
      method:
        "搭建周度循环：Python 计算指标与优先级，再由大模型判断相关性与意图，自动生成否定词与出价建议，并导出为 Excel。",
      result:
        "将优化动作压缩为一次短评审，持续沉淀可复用的建议清单，支持广告账户滚动更新。",
      tags: ["Amazon Ads", "搜索词分析", "自动化优化"],
      link: "#amazon-ads-case",
      linkText: "查看案例",
      note: "注：案例数据已脱敏，仅保留真实流程与交互逻辑。",
      metrics: [
        { label: "周度处理", value: "2,000+ 搜索词" },
        { label: "单轮耗时", value: "< 20 分钟" },
        { label: "动作产出", value: "否词 + 出价建议" }
      ]
    },
    supportCases: [
      {
        title: "AI 营销视频",
        desc: "使用剪映、AI 配音与 AI 数字人批量产出产品营销短视频。",
        evidence: "形成可重复的视频模板流程，支撑站内外内容持续上新。",
        tags: ["AI 视频", "跨境电商", "内容运营"],
        link: "#video",
        linkText: "观看视频"
      },
      {
        title: "AI 公益站页面",
        desc: "独立搭建并持续运维 AI 公益站页面，为用户与校园社群提供稳定入口。",
        evidence: "在稳定服务基础上持续验证可收费模块，保持站点长期运营。",
        tags: ["网站", "AI", "运营"],
        link: "#site-preview",
        linkText: "查看预览"
      }
    ],
    capabilities: [
      {
        pillar: "模块 01",
        title: "创意智能工作室",
        summary: "把脚本、视觉素材与 AI 配音统一编排，形成可复用的营销内容包。",
        highlights: ["覆盖站内、社媒与投放素材的批量输出。", "模板资产沉淀，保证更新速度与风格稳定。"],
        tools: ["OpenAI / Codex", "Claude", "Canva", "Photoshop", "剪映"],
        outcome: "结果：周度创意产出可持续复用，素材准备周期显著缩短。"
      },
      {
        pillar: "模块 02",
        title: "增长决策引擎",
        summary: "将搜索词原始数据转为可排序的否词与出价动作，减少人工筛读。",
        highlights: ["周度意图聚类与浪费词剔除。", "评分逻辑和优化规则持续复用。"],
        tools: ["Amazon Ads", "Excel", "Python", "Google Analytics"],
        outcome: "结果：优化流程从大段人工检索，变为聚焦动作评审。"
      },
      {
        pillar: "模块 03",
        title: "商业交付系统",
        summary: "让页面、脚本与运营流程在团队协作中保持稳定上线节奏。",
        highlights: ["轻量页面与实用工具持续部署。", "文档、提示词与执行流程统一协同。"],
        tools: ["Next.js", "Node.js", "Cloudflare Workers", "Vercel", "Notion", "Slack"],
        outcome: "结果：跨内容与运营环节的交付连续性更强、断点更少。"
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

        <section className="block chapter reveal delay-3" id="about">
          <div className="section-head">
            <span className="section-index">01</span>
            <p className="label">{t.introLabel}</p>
          </div>
          <h2 className="positioning-title">{t.positioningTitle}</h2>
          <p className="positioning-subtitle">{t.positioningSubtitle}</p>
          <ul className="positioning-proofs">
            {t.positioningProofs.map((proof) => (
              <li key={proof}>{proof}</li>
            ))}
          </ul>
        </section>

        <section className="block chapter reveal delay-4" id="works">
          <div className="section-head">
            <span className="section-index">02</span>
            <p className="label">{t.worksLabel}</p>
          </div>

          <article className="lead-case">
            <header className="lead-case-head">
              <p className="lead-kicker">{t.caseLeadLabel}</p>
              <h2>{t.leadCase.title}</h2>
              <p>{t.leadCase.desc}</p>
            </header>

            <ul className="metric-strip" aria-label={lang === "zh" ? "主案例关键指标" : "Lead case metrics"}>
              {t.leadCase.metrics.map((metric) => (
                <li key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </li>
              ))}
            </ul>

            <div className="case-narrative">
              <div className="case-block">
                <p className="case-block-label">{t.caseProblemLabel}</p>
                <p>{t.leadCase.challenge}</p>
              </div>
              <div className="case-block">
                <p className="case-block-label">{t.caseMethodLabel}</p>
                <p>{t.leadCase.method}</p>
              </div>
              <div className="case-block">
                <p className="case-block-label">{t.caseResultLabel}</p>
                <p>{t.leadCase.result}</p>
              </div>
            </div>

            <footer className="lead-case-foot">
              <div className="tags" aria-label={`${t.leadCase.title} tags`}>
                {t.leadCase.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="case-link"
                href={t.leadCase.link}
                target={t.leadCase.link.startsWith("http") ? "_blank" : undefined}
                rel={t.leadCase.link.startsWith("http") ? "noreferrer" : undefined}
              >
                {t.leadCase.linkText}
              </a>
            </footer>
            <p className="case-note">{t.leadCase.note}</p>
          </article>

          <div className="support-grid">
            {t.supportCases.map((work) => (
              <a
                key={work.title}
                className="support-item"
                href={work.link}
                target={work.link.startsWith("http") ? "_blank" : undefined}
                rel={work.link.startsWith("http") ? "noreferrer" : undefined}
              >
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
                <p className="support-evidence">{work.evidence}</p>
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

        <section className="block chapter reveal delay-8" id="stack">
          <div className="section-head">
            <span className="section-index">04</span>
            <p className="label">{t.matrixLabel}</p>
          </div>
          <p className="section-subline">{t.matrixLead}</p>
          <div className="capability-matrix" aria-label={t.matrixLabel}>
            {t.capabilities.map((capability) => (
              <article key={capability.title} className="capability-card">
                <p className="capability-pillar">{capability.pillar}</p>
                <h3>{capability.title}</h3>
                <p>{capability.summary}</p>
                <ul className="capability-highlights">
                  {capability.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="capability-tools" aria-label={`${capability.title} tools`}>
                  {capability.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <p className="capability-outcome">{capability.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="block chapter reveal delay-9" id="contact">
          <div className="section-head">
            <span className="section-index">05</span>
            <p className="label">{t.contactLabel}</p>
          </div>
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
