"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Lang = "en" | "zh";

const slideOrder = ["video", "amazon-ads-demo", "site-preview"] as const;
type SlideId = (typeof slideOrder)[number];

export default function ShowcaseCarousel({ lang }: { lang: Lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const slides = useMemo(
    () =>
      [
        {
          id: "video" as SlideId,
          label: lang === "zh" ? "视频展示" : "VIDEO SHOWCASE"
        },
        {
          id: "amazon-ads-demo" as SlideId,
          label: lang === "zh" ? "Amazon Ads 演示" : "AMAZON ADS DEMO"
        },
        {
          id: "site-preview" as SlideId,
          label: lang === "zh" ? "公益站预览" : "PUBLIC SITE PREVIEW"
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
    <section className="block reveal delay-7 showcase-carousel" id="showcase">
      <div className="showcase-anchors" aria-hidden="true">
        {slides.map((slide) => (
          <span key={slide.id} id={slide.id} className="showcase-anchor" />
        ))}
      </div>

      <p className="label">{slides[activeIndex]?.label}</p>

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
              <source src="/videos/ai-marketing-demo.mp4" type="video/mp4" />
              {lang === "zh"
                ? "你的浏览器不支持 video 标签，请更新浏览器。"
                : "Your browser does not support the video tag."}
            </video>
          </div>
          <p className="showcase-caption">veo3.1 制作</p>
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
              <source src="/videos/amazon-ads-demo.mp4" type="video/mp4" />
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

      <div className="showcase-dots" aria-label={lang === "zh" ? "项目展示切换" : "Showcase switcher"}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={index === activeIndex ? "showcase-dot is-active" : "showcase-dot"}
            aria-label={lang === "zh" ? `切换到${slide.label}` : `Switch to ${slide.label}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
