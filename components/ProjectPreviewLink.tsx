"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Project } from "@/data/types";
export function ProjectPreviewLink({project,children}:{project:Project;children:ReactNode}){
 const [open,setOpen]=useState(false),dialog=useRef<HTMLDialogElement>(null),trigger=useRef<HTMLAnchorElement>(null);
 useEffect(()=>{if(open){dialog.current?.showModal();const old=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=old;};}},[open]);
 const close=()=>{dialog.current?.close();setOpen(false);trigger.current?.focus();};
 return <><a ref={trigger} className={`project project-${project.id}`} href={project.url} target="_blank" rel="noopener noreferrer" onClick={e=>{if(!project.openExternal&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&e.button===0){e.preventDefault();setOpen(true);}}}>{children}</a>{open&&<dialog ref={dialog} className="project-dialog" onCancel={()=>setOpen(false)} onClick={e=>{if(e.target===e.currentTarget)close();}} aria-label={`${project.name} live preview`}><div className="dialog-bar"><strong>{project.name}</strong><a href={project.url} target="_blank" rel="noopener noreferrer">Open website ↗</a><button type="button" onClick={close} aria-label="Close preview">×</button></div><p className="dialog-note">If the site blocks an embedded preview, use “Open website”.</p><iframe src={project.url} title={`${project.name} live website`} referrerPolicy="strict-origin-when-cross-origin"/></dialog>}</>;
}
