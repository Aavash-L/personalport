"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, PROJECTS } from "@/data/portfolio";

// Keep short transitions readable and make the longer opening/return clips brisk.
const chapterPlaybackRates = [2, 1.5, 1.5, 3];
const chapterNames = ["Introduction", "Rotgen", "Client work", "Experience", "Contact"];
export function ScrollStory() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visibleVideo, setVisibleVideo] = useState(false);
  const [showCopy, setShowCopy] = useState(true);
  const [error, setError] = useState("");
  const state = useRef({ chapter: 0, playing: false, bypassed: false, readyAt: 0 });
  const poster = chapter === 0 ? "/story/video/start.webp" : `/story/video/end-${chapter}.webp`;

  function jump(index: number) {
    if (state.current.playing) return;
    video.current?.pause();
    state.current.chapter = index;
    state.current.bypassed = false;
    setChapter(index); setShowCopy(true); setVisibleVideo(false); setLoading(false);
  }
  function skip() {
    state.current.playing = false; state.current.bypassed = true;
    video.current?.pause(); setPlaying(false); setLoading(false); setShowCopy(true);
  }

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduced.matches || connection?.saveData || new URLSearchParams(location.search).get("motion") === "off") return;
    setEnabled(true);
    const v = video.current!;
    v.src = "/story/video/chapter-1.mp4";
    v.load();
    let wheelAt = 0, wheelDistance = 0, wheelReady = true, touchY = 0, touchUsed = false;
    const inStory = () => {
      const r = section.current!.getBoundingClientRect();
      return r.top <= innerHeight * 0.25 && r.bottom >= innerHeight * 0.6;
    };
    const start = (direction: number) => {
      const s = state.current;
      if (s.playing || s.bypassed || performance.now() < s.readyAt || !inStory()) return false;
      if (direction < 0) { if (s.chapter > 0) { jump(s.chapter - 1); return true; } return false; }
      if (s.chapter >= 4) return false;
      window.scrollTo({top: window.scrollY + section.current!.getBoundingClientRect().top, behavior: "instant"});
      s.playing = true;
      setPlaying(true); setLoading(true); setError(""); setVisibleVideo(false);
      const source = `/story/video/chapter-${s.chapter + 1}.mp4`;
      if (!v.src.endsWith(source)) { v.src = source; v.load(); } else { v.currentTime = 0; }
      v.playbackRate = chapterPlaybackRates[s.chapter];
      v.play().catch(() => {
        if (!s.playing) return;
        s.playing = false; setPlaying(false); setLoading(false); setShowCopy(true);
        setError("Playback couldn’t start. Try scrolling again or explore the work below.");
      });
      return true;
    };
    const wheel = (e: WheelEvent) => {
      const now = performance.now();
      if (now - wheelAt > 180) { wheelDistance = 0; wheelReady = true; }
      wheelAt = now;
      const s = state.current;
      if (!inStory() || s.bypassed || e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (s.playing) { wheelReady = false; wheelDistance = 0; e.preventDefault(); return; }
      if ((e.deltaY > 0 && s.chapter < 4) || (e.deltaY < 0 && s.chapter > 0)) {
        e.preventDefault();
        if (!wheelReady || now < s.readyAt) return;
        // Trackpads begin with tiny deltas: accumulate the gesture, not just its first event.
        const delta = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1);
        if (Math.sign(delta) !== Math.sign(wheelDistance)) wheelDistance = 0;
        wheelDistance += delta;
        if (Math.abs(wheelDistance) >= 8 && start(wheelDistance > 0 ? 1 : -1)) {
          wheelReady = false; wheelDistance = 0;
        }
      }
    };
    const touchStart = (e: TouchEvent) => { touchY = e.touches[0]?.clientY ?? 0; touchUsed = false; };
    const touchMove = (e: TouchEvent) => {
      if (!inStory() || state.current.bypassed) return;
      if (state.current.playing) { e.preventDefault(); return; }
      const dy = touchY - (e.touches[0]?.clientY ?? touchY);
      if (touchUsed) return;
      if (Math.abs(dy) > 15) { touchUsed = true; if (start(dy > 0 ? 1 : -1)) e.preventDefault(); }
    };
    const key = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest("a,button,input,textarea,select") || !inStory()) return;
      if (e.key === "Escape") { skip(); document.getElementById("work")?.scrollIntoView(); return; }
      const direction = ["ArrowDown", "PageDown", " "].includes(e.key) ? 1 : ["ArrowUp", "PageUp"].includes(e.key) ? -1 : 0;
      if (direction && (state.current.playing || (!e.repeat && start(direction)))) e.preventDefault();
    };
    const click = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;
      if (link.getAttribute("href") === "#top") { state.current.bypassed = false; return; }
      skip();
    };
    const reduce = () => { if (reduced.matches) { skip(); setEnabled(false); } };
    window.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: false });
    window.addEventListener("keydown", key); document.addEventListener("click", click);
    reduced.addEventListener("change", reduce);
    return () => {
      v.pause();
      window.removeEventListener("wheel", wheel); window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove); window.removeEventListener("keydown", key);
      document.removeEventListener("click", click); reduced.removeEventListener("change", reduce);
    };
  }, []);

  return <section ref={section} id="top" className={`scroll-story video-story ${playing ? "motion-active" : ""} ${chapter === 2 ? "range-active" : ""}`}>
    <div className="story-stage">
      <div className="story-media" aria-hidden="true">
        <img className="story-poster" src={poster} alt="" fetchPriority="high" />
        <video ref={video} muted playsInline preload={enabled ? "auto" : "none"} poster={poster}
          style={{ opacity: visibleVideo ? 1 : 0 }}
          onPlaying={() => { if (!state.current.playing) { video.current?.pause(); return; } setVisibleVideo(true); setLoading(false); setShowCopy(false); }}
          onWaiting={() => { if (state.current.playing) setLoading(true); }}
          onEnded={() => {
            const s = state.current; if (!s.playing) return;
            if (process.env.NODE_ENV === "development") {
              const q = video.current?.getVideoPlaybackQuality?.();
              if (q && section.current) section.current.dataset.playbackCheck = JSON.stringify({total:q.totalVideoFrames,dropped:q.droppedVideoFrames});
            }
            s.chapter = Math.min(4, s.chapter + 1); s.playing = false; s.readyAt = performance.now() + 600;
            setChapter(s.chapter); setPlaying(false); setLoading(false); setShowCopy(true);
          }}
          onError={() => {
            if (!state.current.playing) return;
            state.current.playing = false; setPlaying(false); setLoading(false); setVisibleVideo(false); setShowCopy(true);
            setError("This clip couldn’t load. Try scrolling again or explore the work below.");
          }}
        />
        <div className="media-shade" />
      </div>
      <div className="story-product" hidden={!showCopy || (chapter !== 1 && chapter !== 2)}>
        {(chapter === 1 ? PROJECTS.filter(p => p.id === "rotgen") : PROJECTS.filter(p => p.id !== "rotgen")).map(p => <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer"><img src={p.screenshotPath} alt={`${p.name} website`} loading="lazy" /><span>{p.name}<span aria-hidden="true">↗</span></span></a>)}
      </div>
      <div className="story-copy-wrap">{SITE.chapters.map((c, i) => <div key={c.label} className="story-copy" hidden={chapter !== i || !showCopy}>
        <span className="eyebrow">{c.label}</span>{i === 0 ? <h1>{c.title}</h1> : <h2>{c.title}</h2>}
        <p>{c.body}</p><span className="story-detail">{c.detail}</span>
        <a className="text-link" href={c.href}>{c.link}<span>↗</span></a>
        {i === 0 && <a className="intro-resume" href={SITE.resume} target="_blank" rel="noopener noreferrer">View resume ↗</a>}
      </div>)}</div>
      {enabled && <nav className="chapter-dots" aria-label="Story chapters">{chapterNames.map((name, i) => <button key={name} aria-label={`${i + 1}. ${name}`} aria-current={chapter === i ? "step" : undefined} disabled={playing} onClick={() => jump(i)}><span className="chapter-number">{String(i + 1).padStart(2, "0")}</span><i /><span className="chapter-tooltip">{name}</span></button>)}</nav>}
      <div className="story-bottom"><span className="availability"><i />{SITE.availability}</span>
        <span className="playback-cue" role="status">{error || (loading ? "Loading the next chapter…" : playing ? "A little look inside…" : chapter === 4 ? "Keep scrolling to explore ↓" : enabled ? "Scroll for the next chapter ↓" : "Get to know my work")}</span>
        <a href="#work" className="skip" onClick={skip}>{enabled ? "Skip to work" : "View selected work"} ↓</a>
      </div>
    </div>
  </section>;
}
