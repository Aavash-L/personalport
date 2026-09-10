import Link from "next/link";
import { notFound } from "next/navigation";
import { WORK_STUDIES } from "@/data/work";
export function generateStaticParams(){return WORK_STUDIES.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=WORK_STUDIES.find(s=>s.slug===slug);return {title:s?`${s.title} — Aavash Lamichhane`:"Work"};}
export default async function WorkPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const s=WORK_STUDIES.find(s=>s.slug===slug);if(!s)notFound();
 return <article className="case-page section">
  <Link className="minor" href="/#work">← All work</Link><span className="eyebrow">{s.kind}</span>
  <h1>{s.title}</h1><p className="case-summary">{s.summary}</p>
  {s.repo&&<a className="text-link" href={s.repo} target="_blank" rel="noopener noreferrer">View source code ↗</a>}
  <div className="case-body">
   <section><h2>Problem</h2><p>{s.problem}</p></section>
   <section><h2>Constraints</h2><p>{s.constraints}</p></section>
   <section><h2>Architecture</h2>{s.nodes.length>0&&<figure className="architecture" aria-label="Implementation flow">{s.nodes.map((node,i)=><div key={node}><span>{node}</span>{i<s.nodes.length-1&&<b aria-hidden="true">→</b>}</div>)}<figcaption>Flow reconstructed from the linked source files.</figcaption></figure>}<p>{s.architecture}</p></section>
   <section><h2>Technical tradeoff</h2><p>{s.decision}</p></section>
   <section><h2>Failure modes & verification</h2><p>{s.failure}</p></section>
   <section><h2>Next iteration</h2><p>{s.next}</p></section>
   <section><h2>Evidence & metrics</h2><p>{s.metrics}</p><ul className="source-links">{s.sources.map(link=><li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label} ↗</a></li>)}</ul></section>
  </div><Link className="button primary" href="/#contact">Let’s talk about the implementation ↗</Link>
 </article>;
}
