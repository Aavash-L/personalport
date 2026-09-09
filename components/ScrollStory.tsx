"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, PROJECTS } from "@/data/portfolio";

import { frameAt, type Beat } from "@/lib/scroll-timeline";
type Manifest = { count: number; width: number; height: number; pattern: string; poster: string; beats: Beat[]; travelVh: number };
export function ScrollStory(){
  const section=useRef<HTMLElement>(null), canvas=useRef<HTMLCanvasElement>(null);
  const [enabled,setEnabled]=useState(false),[chapter,setChapter]=useState(0),[progress,setProgress]=useState(0),[travel,setTravel]=useState(800);
  useEffect(()=>{
    const media=matchMedia("(prefers-reduced-motion: reduce)");
    const connection=(navigator as Navigator & {connection?:{saveData?:boolean}}).connection;
    if(media.matches || connection?.saveData || new URLSearchParams(location.search).get("motion")==="off") return;
    let suspended=false, disposed=false, manifest:Manifest|null=null, raf=0, active=0, wanted=0, last=-1;
    let playing=false, bypassed=false, playback=0, elapsed=0, previous=0;
    let step=0, from=0, to=0, duration=0, lastWheel=0, readyAt=0;
    // Each transition ends on readable content and waits indefinitely for a new gesture.
    const clips=[{from:0,to:0.32,ms:9000},{from:0.43,to:0.49,ms:2300},{from:0.58,to:0.699,ms:4100},{from:0.699,to:1,ms:12000}];
    const cache=new Map<number,ImageBitmap>(), pending=new Map<number,AbortController>(), failures=new Map<number,number>();
    const maxBytes=32*1024*1024; let cacheBytes=0;
    const root=section.current!,c=canvas.current!,ctx=c.getContext("2d",{alpha:false});
    if(!ctx)return;
    function draw(index:number){
      const bitmap=cache.get(index); if(!bitmap)return;
      const dpr=Math.min(devicePixelRatio||1,2),rect=c.getBoundingClientRect();
      const width=Math.round(rect.width*dpr),height=Math.round(rect.height*dpr);
      if(c.width!==width||c.height!==height){c.width=width;c.height=height;}
      const scale=Math.max(width/bitmap.width,height/bitmap.height);
      ctx!.drawImage(bitmap,(width-bitmap.width*scale)/2,(height-bitmap.height*scale)/2,bitmap.width*scale,bitmap.height*scale);
      c.style.opacity="1"; last=index;
    }
    function prune(){
      const entries=[...cache.keys()].sort((a,b)=>Math.abs(b-wanted)-Math.abs(a-wanted));
      for(const key of entries){if(cacheBytes<=maxBytes)break;if(key===wanted)continue;const b=cache.get(key)!;cacheBytes-=b.width*b.height*4;b.close();cache.delete(key);}
    }
    function schedule(){
      if(disposed||suspended||!manifest)return;
      const indices=[wanted];for(let n=1;n<=5;n++){indices.push(wanted+n,wanted-n);}
      for(const [key,controller] of pending){if(Math.abs(key-wanted)>10)controller.abort();}
      for(const index of indices){
        if(active>=3)break;
        if(index<0||index>=manifest.count||cache.has(index)||pending.has(index)||(failures.get(index)||0)>=2)continue;
        const controller=new AbortController();pending.set(index,controller);active++;
        const url=manifest.pattern.replace("{frame}",String(index).padStart(4,"0"));
        fetch(url,{signal:controller.signal}).then(r=>{if(!r.ok)throw Error("Frame unavailable");return r.blob();}).then(b=>createImageBitmap(b)).then(bitmap=>{
          if(disposed||Math.abs(index-wanted)>10){bitmap.close();return;}
          cache.set(index,bitmap);cacheBytes+=bitmap.width*bitmap.height*4;prune();
          if(index===wanted)draw(index);
        }).catch(error=>{if(error.name!=="AbortError"){failures.set(index,(failures.get(index)||0)+1);if(index===wanted&&(failures.get(index)||0)>=2){suspended=true;setEnabled(false);setChapter(0);c.style.opacity="0";}}}).finally(()=>{active--;pending.delete(index);if(!disposed)schedule();});
      }
    }
    function update(){
      raf=0;if(disposed||suspended||!manifest)return;
      const rect=root.getBoundingClientRect();const distance=root.offsetHeight-innerHeight;
      const p=Math.max(0,Math.min(1,-rect.top/Math.max(1,distance)));
      const mapped=frameAt(p,manifest.beats,manifest.count);wanted=mapped.frame;setChapter(mapped.chapter);setProgress(p);
      if(cache.has(wanted))draw(wanted);else if(last<0)c.style.opacity="0";
      schedule();
    }
    function play(now:number){
      if(disposed||suspended||!playing)return;
      if(previous && !document.hidden)elapsed+=Math.min(now-previous,100);
      previous=now;
      const t=Math.min(1,elapsed/duration);
      const p=from+(to-from)*t;
      window.scrollTo({top:window.scrollY+root.getBoundingClientRect().top+p*(root.offsetHeight-innerHeight),behavior:"instant"});
      update();
      if(t<1)playback=requestAnimationFrame(play);else {playing=false;readyAt=performance.now()+500;}
    }
    function start(direction=1){
      if(playing||bypassed||!manifest||suspended||performance.now()<readyAt)return false;
      const rect=root.getBoundingClientRect();
      if(rect.top>1||rect.bottom<innerHeight-1)return false;
      if(direction>0){
        if(step>=clips.length)return false;
        const clip=clips[step++];from=clip.from;to=clip.to;duration=clip.ms;
      }else{
        if(step<=0)return false;
        const clip=clips[--step];from=clip.to;to=step===0?0:clips[step-1].to;duration=clip.ms;
      }
      elapsed=0;playing=true;previous=0;playback=requestAnimationFrame(play);return true;
    }
    const scroll=()=>{if(!raf)raf=requestAnimationFrame(update);};
    const wheel=(event:WheelEvent)=>{
      const now=performance.now(),fresh=now-lastWheel>220;lastWheel=now;
      if(playing){event.preventDefault();return;}
      const inside=root.getBoundingClientRect();
      if(!bypassed&&manifest&&!suspended&&inside.top<=1&&inside.bottom>=innerHeight-1&&((event.deltaY>0&&step<clips.length)||(event.deltaY<0&&step>0))){
        event.preventDefault();if(fresh)start(event.deltaY>0?1:-1);
      }
    };
    let touchY=0,touchUsed=false;
    const touchStart=(event:TouchEvent)=>{touchY=event.touches[0]?.clientY??0;touchUsed=false;};
    const touchMove=(event:TouchEvent)=>{
      const delta=touchY-(event.touches[0]?.clientY??touchY);
      if(playing){event.preventDefault();return;}
      if(!touchUsed&&Math.abs(delta)>12){touchUsed=true;if(start(delta>0?1:-1))event.preventDefault();}
    };
    const stop=()=>{playing=false;bypassed=true;cancelAnimationFrame(playback);};
    const key=(event:KeyboardEvent)=>{
      if((event.target as HTMLElement)?.closest("a,button,input,textarea,select"))return;
      if(event.key==="Escape"&&playing){stop();document.getElementById("work")?.scrollIntoView();return;}
      const forward=["ArrowDown","PageDown"," "].includes(event.key),back=["ArrowUp","PageUp"].includes(event.key);
      if(playing&&(forward||back||["Home","End"].includes(event.key))){event.preventDefault();return;}
      if(!event.repeat&&(forward||back)&&start(forward?1:-1))event.preventDefault();
    };
    const link=(event:MouseEvent)=>{if((event.target as HTMLElement)?.closest('a[href^="#"]'))stop();};
    const reduce=()=>{if(media.matches){suspended=true;stop();setEnabled(false);setChapter(0);pending.forEach(c=>c.abort());}};
    fetch(SITE.manifest).then(r=>{if(!r.ok)throw Error("Manifest unavailable");return r.json();}).then((m:Manifest)=>{
      if(disposed||!Number.isInteger(m.count)||m.count<2||!m.beats?.length)return;
      manifest=m;setTravel(m.travelVh);setEnabled(true);requestAnimationFrame(scroll);
    }).catch(()=>{});
    window.addEventListener("wheel",wheel,{passive:false});window.addEventListener("touchstart",touchStart,{passive:true});window.addEventListener("touchmove",touchMove,{passive:false});window.addEventListener("keydown",key);document.addEventListener("click",link);
    window.addEventListener("scroll",scroll,{passive:true});window.addEventListener("resize",scroll);media.addEventListener("change",reduce);
    return ()=>{disposed=true;cancelAnimationFrame(playback);window.removeEventListener("wheel",wheel);window.removeEventListener("touchstart",touchStart);window.removeEventListener("touchmove",touchMove);window.removeEventListener("keydown",key);document.removeEventListener("click",link);cancelAnimationFrame(raf);window.removeEventListener("scroll",scroll);window.removeEventListener("resize",scroll);media.removeEventListener("change",reduce);pending.forEach(c=>c.abort());cache.forEach(b=>b.close());cache.clear();};
  },[]);
  return <section ref={section} id="top" className={`scroll-story ${chapter===2?"range-active":""} ${enabled?"story-enabled":"story-static"}`} style={{"--travel":`${travel}vh`} as React.CSSProperties}>
    <div className="story-stage">
      <div className="story-media" aria-hidden="true"><img className="story-poster" src={SITE.portrait} alt="" fetchPriority="high"/><canvas ref={canvas}/><div className="media-shade"/><span className="frame-label">AAVASH LAMICHHANE / A WORK IN PROGRESS</span></div>
      <div className="story-product" hidden={chapter!==1&&chapter!==2}>{(chapter===1?[PROJECTS.find(p=>p.id==="rotgen")!]:PROJECTS.filter(p=>p.id!=="rotgen")).map(p=><a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer"><img src={p.screenshotPath} alt={`${p.name} website screenshot`} loading="lazy"/><span>{p.name} <span aria-hidden="true">↗</span></span></a>)}</div><div className="story-copy-wrap">{SITE.chapters.map((c,i)=><div key={c.label} className="story-copy" hidden={chapter!==i}>
        <span className="eyebrow">{c.label}</span><h1 hidden={i!==0}>{c.title}</h1>{i!==0&&<h2>{c.title}</h2>}<p>{c.body}</p><span className="story-detail">{c.detail}</span><a className="text-link" href={c.href}>{c.link}<span>↗</span></a>
      </div>)}</div>
      <div className="story-bottom"><span className="availability"><i/>{SITE.availability}</span><a href="#work" className="skip">{enabled?"Skip animation":"View selected work"} ↓</a><span className="story-counter" title="Scroll to play the next clip; pause to read">{String(Math.round(progress*100)).padStart(2,"0")} / 100</span></div>
      {enabled&&<div className="story-progress" style={{transform:`scaleX(${progress})`}}/>}
    </div>
  </section>;
}
