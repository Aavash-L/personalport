"use client";

import { useRef, useState } from "react";

export function EmailContact({ href, compact = false }: { href: string; compact?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState("");
  const address = href.replace(/^mailto:/, "").split("?")[0];
  async function copy() {
    try { await navigator.clipboard.writeText(address); setStatus("Email address copied."); }
    catch { setStatus("Select the email address above to copy it."); }
  }
  return <>
    <a className={compact ? undefined : "button primary"} href={href} onClick={event => {
      if (!dialog.current?.showModal) return;
      event.preventDefault(); setStatus(""); dialog.current.showModal();
    }}>{compact ? "EMAIL" : "Email Aavash"} <span>↗</span></a>
    <dialog ref={dialog} className="email-dialog" aria-label="Email Aavash" onClick={event => {
      if (event.target === dialog.current) {
        const r = dialog.current.getBoundingClientRect();
        if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.current.close();
      }
    }}>
      <button className="email-close" aria-label="Close email options" onClick={() => dialog.current?.close()}>×</button>
      <h2>Let’s talk.</h2>
      <p>Choose where to write your message, or copy my email address.</p>
      <a className="email-address" href={href}>{address}</a>
      <div className="email-options">
        <a className="button primary" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">Write in Gmail ↗</a>
        <a className="button" href={href}>Open email app ↗</a>
        <button className="button" onClick={copy}>Copy email address</button>
      </div>
      <p className="email-status" role="status">{status}</p>
    </dialog>
  </>;
}
