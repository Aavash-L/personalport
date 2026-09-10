import { EmailContact } from "@/components/EmailContact";
import Link from "next/link";
import { WORK_STUDIES } from "@/data/work";
import { ScrollStory } from "@/components/ScrollStory";
import { BIO, CONTACT_LINKS, EXPERIENCE, PROJECTS, SITE, TOOLBOX } from "@/data/portfolio";

export default function Home() {
  const projects = [...PROJECTS].sort((a,b) => Number(b.id === "rotgen") - Number(a.id === "rotgen"));
  return <>
    <ScrollStory />
    <aside className="recruiter-summary section" aria-label="Engineering background">
      <div><span className="eyebrow">PRODUCTION EXPERIENCE</span><h2>Previously, SWE intern at Verizon.</h2><p>Shipped React and TypeScript components to production on a payments team during Summer 2025.</p></div>
      <a className="button" href="#experience">View experience ↓</a>
    </aside>
    <section id="work" className="section work-section">
      <div className="section-top"><span className="eyebrow">02 / SELECTED WORK</span><span className="minor">INDEPENDENT BUILDS · CLIENT WORK</span></div>
      <h2>{SITE.workTitle}</h2>
      <h3 className="client-heading">Product & client work</h3>
      <div className="project-list">{projects.map((project,i) => {
        const study=WORK_STUDIES.find(s=>s.slug===project.id);
        return <article className={`project project-${project.id}`} key={project.id}>
          <span className="project-number">{String(i+1).padStart(2,"0")}</span>
          <div className="project-main"><div className="project-meta"><span>{project.metric}</span></div><h3>{study?<Link href={`/work/${study.slug}`}>{project.name} ↗</Link>:project.name}</h3><p>{project.tagline}</p><div className="stack">{project.stack.map(t=><span key={t}>{t}</span>)}</div>
          <div className="project-actions"><a href={project.url} target="_blank" rel="noopener noreferrer">Visit project ↗</a>{study?.repo?<a href={study.repo} target="_blank" rel="noopener noreferrer">View code ↗</a>:<span>{project.id==="wingsciti"?"Private — happy to walk through it.":"Ask me about code access."}</span>}{study&&<Link href={`/work/${study.slug}`}>{project.id==="rotgen"?"Project overview":"Read walkthrough"} ↗</Link>}</div></div>
          <a className="project-preview" href={study?`/work/${study.slug}`:project.url}><img src={project.screenshotPath} alt={`${project.name} website screenshot`} loading="lazy" width="1440" height="960"/><span>{study?"Explore the implementation":"Visit project"} ↗</span></a>
        </article>;
      })}</div>
      <h3 className="client-heading technical-heading">Selected technical work</h3>
      <div className="study-grid">{WORK_STUDIES.filter(s=>s.slug!=="rotgen").map(study=><Link className="study-card" href={`/work/${study.slug}`} key={study.slug}><span className="eyebrow">TECHNICAL WALKTHROUGH</span><h3>{study.title}</h3><p>{study.summary}</p><span className="text-link">Architecture & source ↗</span></Link>)}</div>
    </section>
    <section id="about" className="section about-section"><span className="eyebrow">03 / INTRODUCTION</span><div className="about-grid"><h2>{SITE.aboutTitle}</h2><div className="bio">{BIO.map(p=><p key={p}>{p}</p>)}<p className="education">{SITE.education}</p></div></div></section>
    <section id="experience" className="section"><span className="eyebrow">04 / EXPERIENCE</span><h2>{SITE.experienceTitle}</h2><div className="timeline">{EXPERIENCE.map(e=><article key={e.id}><span className="date">{e.dateRange}</span><div><h3>{e.company}</h3><span className="role">{e.role}</span><p>{e.description}</p></div><span className="minor location">{e.location}</span></article>)}</div></section>
    <section id="toolbox" className="section tools-section"><span className="eyebrow">05 / TOOLBOX</span><h2>{SITE.toolboxTitle}</h2><div className="tools">{TOOLBOX.map(t=><div key={t.label}><h3>{t.label}</h3><p>{t.items.join(" / ")}</p></div>)}</div></section>
    <section id="contact" className="section contact-section"><span className="eyebrow">06 / WHAT’S NEXT</span><h2>{SITE.contactTitle}</h2><p>{SITE.contactText}</p><div className="contact-actions"><EmailContact href={CONTACT_LINKS[0].href} /><a className="button" href={SITE.resume} target="_blank" rel="noopener noreferrer">Download resume <span>↓</span></a></div><div className="contact-links">{CONTACT_LINKS.map(l=>l.href.startsWith("mailto:")?<EmailContact key={l.platform} href={l.href} compact />:<a key={l.platform} href={l.href}>{l.platform} <span>↗</span></a>)}</div></section>
    <footer><span>© 2026 {SITE.name}</span><span>BUILT WITH INTENT.</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
