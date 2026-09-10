import { EmailContact } from "@/components/EmailContact";
import { ProjectPreviewLink } from "@/components/ProjectPreviewLink";
import { ScrollStory } from "@/components/ScrollStory";
import { BIO, CONTACT_LINKS, EXPERIENCE, PROJECTS, SITE, STATS, TOOLBOX } from "@/data/portfolio";

export default function Home() {
  const projects = [...PROJECTS].sort((a,b) => Number(b.id === "rotgen") - Number(a.id === "rotgen"));
  return <>
    <ScrollStory />
    <section id="work" className="section work-section">
      <div className="section-top"><span className="eyebrow">01 / SELECTED WORK</span><span className="minor">INDEPENDENT BUILDS · CLIENT WORK</span></div>
      <h2>{SITE.workTitle}</h2>
      <div className="project-list">{projects.map((project,i) => <ProjectPreviewLink project={project} key={project.id}>
        <span className="project-number">{String(i+1).padStart(2,"0")}</span>
        <div className="project-main"><div className="project-meta"><span>{project.metric}</span>{project.status === "BETA" && <span className="status">BETA</span>}</div><h3>{project.name}<span className="arrow" aria-hidden="true">↗</span></h3><p>{project.tagline}</p><div className="stack">{project.stack.map(t=><span key={t}>{t}</span>)}</div></div>
        <div className="project-preview"><img src={project.screenshotPath} alt={`${project.name} website screenshot`} loading="lazy" width="1440" height="960"/><span>Visit project ↗</span></div>
      </ProjectPreviewLink>)}</div>
    </section>
    <section id="about" className="section about-section"><span className="eyebrow">02 / INTRODUCTION</span><div className="about-grid"><h2>{SITE.aboutTitle}</h2><div className="bio">{BIO.map(p=><p key={p}>{p}</p>)}<p className="education">{SITE.education}</p></div></div><div className="stats">{STATS.map(s=><div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div></section>
    <section id="experience" className="section"><span className="eyebrow">03 / EXPERIENCE</span><h2>{SITE.experienceTitle}</h2><div className="timeline">{EXPERIENCE.map(e=><article key={e.id}><span className="date">{e.dateRange}</span><div><h3>{e.company}</h3><span className="role">{e.role}</span><p>{e.description}</p></div><span className="minor location">{e.location}</span></article>)}</div></section>
    <section id="toolbox" className="section tools-section"><span className="eyebrow">04 / TOOLBOX</span><h2>{SITE.toolboxTitle}</h2><div className="tools">{TOOLBOX.map(t=><div key={t.label}><h3>{t.label}</h3><p>{t.items.join(" / ")}</p></div>)}</div></section>
    <section id="contact" className="section contact-section"><span className="eyebrow">05 / WHAT’S NEXT</span><h2>{SITE.contactTitle}</h2><p>{SITE.contactText}</p><div className="contact-actions"><EmailContact href={CONTACT_LINKS[0].href} /><a className="button" href={SITE.resume} target="_blank" rel="noopener noreferrer">Download resume <span>↓</span></a></div><div className="contact-links">{CONTACT_LINKS.map(l=>l.href.startsWith("mailto:")?<EmailContact key={l.platform} href={l.href} compact />:<a key={l.platform} href={l.href}>{l.platform} <span>↗</span></a>)}</div></section>
    <footer><span>© 2026 {SITE.name}</span><span>BUILT WITH INTENT.</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
