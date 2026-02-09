"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Lang = "en" | "zh";

const slideOrder = ["video", "amazon-ads-case", "site-preview"] as const;
type SlideId = (typeof slideOrder)[number];

export default function ShowcaseCarousel({ lang }: { lang: Lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const slides = useMemo(
    () =>
      [
        {
          id: "video" as SlideId,
          label: lang === "zh" ? "AI 视频" : "AI Videos",
          caption: lang === "zh" ? "VEO 3.1 制作 · 视频已压缩用于网页加载" : "Made with VEO 3.1 · Video compressed for web delivery"
        },
        {
          id: "amazon-ads-case" as SlideId,
          label: lang === "zh" ? "广告优化台" : "Ads Console",
          caption: lang === "zh" ? "Search Term 周度优化流程" : "Weekly Search Term Optimization Loop"
        },
        {
          id: "site-preview" as SlideId,
          label: lang === "zh" ? "公益站预览" : "Public Site",
          caption: lang === "zh" ? "公益站在线预览" : "Live Site Preview"
        }
      ],
    [lang]
  );

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const index = slideOrder.indexOf(hash as SlideId);
      if (index >= 0) {
        setActiveIndex(index);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) {
        video.pause();
      }
    });
  }, [activeIndex]);

  const setActiveSlide = (index: number) => {
    setActiveIndex(index);
    const targetId = slides[index]?.id;
    if (!targetId) return;
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <section className="block chapter reveal delay-7 showcase-carousel" id="showcase">
      <div className="section-head section-head-center">
        <span className="section-index">03</span>
        <p className="label">{lang === "zh" ? "实证展示" : "EVIDENCE REEL"}</p>
      </div>

      <div className="showcase-anchors" aria-hidden="true">
        {slides.map((slide) => (
          <span key={slide.id} id={slide.id} className="showcase-anchor" />
        ))}
      </div>

      <div className="showcase-nav" aria-label={lang === "zh" ? "项目展示切换" : "Showcase switcher"}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={index === activeIndex ? "showcase-tab is-active" : "showcase-tab"}
            aria-label={lang === "zh" ? `切换到${slide.label}` : `Switch to ${slide.label}`}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            {slide.label}
          </button>
        ))}
      </div>

      <div className="showcase-stage">
        <div className="showcase-item" hidden={activeIndex !== 0}>
          <div className="video-wrap">
            <video
              ref={(node) => {
                videoRefs.current[0] = node;
              }}
              controls
              preload="metadata"
              playsInline
              className="feature-video"
              poster="/videos/ai-marketing-poster.jpg"
            >
              <source src="/videos/ai-marketing-case.mp4" type="video/mp4" />
              {lang === "zh"
                ? "你的浏览器不支持 video 标签，请更新浏览器。"
                : "Your browser does not support the video tag."}
            </video>
          </div>
        </div>

        <div className="showcase-item" hidden={activeIndex !== 1}>
          <div className="video-wrap video-wrap-wide">
            <video
              ref={(node) => {
                videoRefs.current[1] = node;
              }}
              controls
              preload="metadata"
              playsInline
              className="feature-video feature-video-wide"
            >
              <source src="/videos/amazon-ads-case.mp4" type="video/mp4" />
              {lang === "zh"
                ? "你的浏览器不支持 video 标签，请更新浏览器。"
                : "Your browser does not support the video tag."}
            </video>
          </div>
        </div>

        <div className="showcase-item" hidden={activeIndex !== 2}>
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
        </div>
      </div>

      <p className="showcase-caption">{slides[activeIndex]?.caption}</p>
    </section>
  );
}
