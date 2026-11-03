'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import CosmicIntro from './CosmicIntro';

export default function HomeReveal({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const revealOpening = useRef<(() => void) | undefined>(undefined);
  const [openingComplete, setOpeningComplete] = useState(false);
  const finishOpening = useCallback(() => setOpeningComplete(true), []);

  useEffect(() => {
    const container = root.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!container || motion.matches || !('IntersectionObserver' in window)
      || !('animate' in HTMLElement.prototype)) return;

    const pending = new Set<HTMLElement>();
    const animations = new Map<HTMLElement, Animation>();
    const elements = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'));
    const opening = elements.filter((element) => element.closest('.observatory-hero'));

    const show = (element: HTMLElement, animated = true) => {
      observer.unobserve(element);
      pending.delete(element);
      element.removeAttribute('data-reveal-pending');
      animations.get(element)?.cancel();
      animations.delete(element);
      if (!animated || motion.matches) return;

      const title = element.dataset.reveal === 'title';
      const delay = Math.min(700, Number(element.dataset.revealDelay) || 0);
      const animation = element.animate([
        { opacity: 0, transform: `translateY(${title ? 18 : 12}px)`, filter: title ? 'blur(3px)' : 'blur(0px)' },
        { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      ], {
        duration: title ? 1050 : 780,
        delay,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'both',
      });
      animations.set(element, animation);
      void animation.finished.then(() => {
        if (animations.get(element) !== animation) return;
        // Release the compositor layer and restore normal hover/focus styling.
        animations.delete(element);
        animation.cancel();
      }).catch(() => { /* Cancellation is expected on focus, navigation or reduced motion. */ });
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && pending.has(entry.target as HTMLElement)) {
          show(entry.target as HTMLElement);
        }
      }
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0 });

    for (const element of elements) {
      const isOpening = opening.includes(element);
      // Hash links and restored scroll positions should never hide text already in view.
      if (!isOpening && element.getBoundingClientRect().top < window.innerHeight) continue;
      element.setAttribute('data-reveal-pending', '');
      pending.add(element);
      if (!isOpening) observer.observe(element);
    }

    revealOpening.current = () => {
      for (const element of opening) {
        if (!pending.has(element)) continue;
        const bounds = element.getBoundingClientRect();
        show(element, bounds.bottom > 0 && bounds.top < window.innerHeight);
      }
    };

    const showEverything = () => {
      observer.disconnect();
      for (const element of [...pending]) show(element, false);
      for (const animation of animations.values()) animation.cancel();
      animations.clear();
    };
    const onMotionChange = () => { if (motion.matches) showEverything(); };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      for (const element of new Set([...pending, ...animations.keys()])) {
        if (element.contains(event.target)) show(element, false);
      }
    };
    // Reveal newly inserted filter/tab results immediately. Only the initial reading
    // pass is choreographed; changing a control must not make its results wait.
    const mutations = new MutationObserver(() => {
      for (const element of [...pending]) {
        if (!element.isConnected) {
          observer.unobserve(element);
          pending.delete(element);
        }
      }
    });
    mutations.observe(container, { childList: true, subtree: true });
    motion.addEventListener('change', onMotionChange);
    container.addEventListener('focusin', onFocus);
    window.addEventListener('beforeprint', showEverything);
    return () => {
      showEverything();
      revealOpening.current = undefined;
      mutations.disconnect();
      motion.removeEventListener('change', onMotionChange);
      container.removeEventListener('focusin', onFocus);
      window.removeEventListener('beforeprint', showEverything);
    };
  }, []);

  useEffect(() => {
    if (openingComplete) revealOpening.current?.();
  }, [openingComplete]);

  return (
    <>
      <CosmicIntro onComplete={finishOpening} />
      <div ref={root} className="home-reveal">{children}</div>
    </>
  );
}
