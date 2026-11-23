/* Motion patterns adapted from InstaLanding.ai (MIT): reveal, marquee, magnetic CTA.
   No scroll interception, rendering library, or continuous JavaScript animation loop. */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const toggle = document.querySelector('#motion-toggle');
  let paused = reduced.matches;
  const updateMotion = () => {
    root.classList.toggle('motion-paused', paused);
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.disabled = reduced.matches;
    toggle.textContent = reduced.matches ? 'Reduced motion on' : paused ? 'Motion paused' : 'Pause motion';
    if (paused) document.querySelectorAll('.waiting').forEach(el => el.classList.remove('waiting'));
  };
  toggle.addEventListener('click', () => { paused = !paused; updateMotion(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; updateMotion(); });
  updateMotion();

  if ('IntersectionObserver' in window) {
    if (!reduced.matches) {
      const targets = document.querySelectorAll('.reveal');
      const reveal = new IntersectionObserver(entries => {
        for (const entry of entries) if (entry.isIntersecting) {
          entry.target.classList.remove('waiting');
          reveal.unobserve(entry.target);
        }
      }, { threshold: 0.08, rootMargin: '0px 0px 24px 0px' });
      targets.forEach(el => { el.classList.add('waiting'); reveal.observe(el); });
      root.classList.add('motion-ready');
    }
    const strip = document.querySelector('.companies');
    const visibility = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('offscreen', !entry.isIntersecting));
    });
    visibility.observe(strip);
  }

  const cta = document.querySelector('.magnetic');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let bounds;
  cta.addEventListener('pointerenter', () => { bounds = cta.getBoundingClientRect(); });
  cta.addEventListener('pointermove', event => {
    if (paused || reduced.matches || !finePointer.matches || !bounds) return;
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
    cta.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  }, { passive: true });
  cta.addEventListener('pointerleave', () => { cta.style.transform = ''; });
  const preview = document.querySelector('#rotgen-preview');
  const tabs = [...preview.querySelectorAll('[data-preview-tab]')];
  const selectPreview = tab => {
    for (const button of tabs) {
      const selected = button === tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      const panel = preview.querySelector('#preview-' + button.dataset.previewTab);
      panel.hidden = !selected;
      if (selected) {
        const img = panel.querySelector('img');
        if (!img.getAttribute('src')) img.src = img.dataset.src;
      }
    }
  };
  document.querySelectorAll('[data-open-preview]').forEach(button => {
    button.addEventListener('click', () => {
      selectPreview(tabs[0]);
      preview.showModal();
      document.body.classList.add('preview-is-open');
    });
  });
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectPreview(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectPreview(tabs[next]); tabs[next].focus(); }
    });
  });
  preview.querySelector('.preview-close').addEventListener('click', () => preview.close());
  preview.addEventListener('click', event => { if (event.target === preview) preview.close(); });
  preview.addEventListener('close', () => document.body.classList.remove('preview-is-open'));
  const livePreview = document.querySelector('#clearforge-preview');
  const liveFrame = document.querySelector('#clearforge-frame');
  document.querySelectorAll('[data-open-clearforge]').forEach(button => {
    button.addEventListener('click', () => {
      liveFrame.src = liveFrame.dataset.src;
      livePreview.showModal();
      document.body.classList.add('preview-is-open');
    });
  });
  livePreview.querySelector('.preview-close').addEventListener('click', () => livePreview.close());
  livePreview.addEventListener('click', event => { if (event.target === livePreview) livePreview.close(); });
  livePreview.addEventListener('close', () => {
    liveFrame.removeAttribute('src');
    document.body.classList.remove('preview-is-open');
  });
  document.addEventListener('visibilitychange', () => {
    document.body.classList.toggle('offscreen', document.hidden);
  });
})();
