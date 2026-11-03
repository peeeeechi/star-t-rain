'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './CosmicIntro.module.css';

const SESSION_KEY = 'star-t-rain:intro-seen:v2';

export default function CosmicIntro({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const finishedRef = useRef(false);
  const exitTimerRef = useRef<number | undefined>(undefined);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setLeaving(true);
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* Storage is optional. */ }
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 850;
    exitTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, delay);
  }, [onComplete]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const replay = new URLSearchParams(window.location.search).get('intro') === '1';
    if (reducedMotion || connection?.saveData) { onComplete?.(); return; }
    if (!replay && (window.location.hash || window.scrollY > 24)) { onComplete?.(); return; }

    try {
      if (!replay && sessionStorage.getItem(SESSION_KEY)) { onComplete?.(); return; }
    } catch {
      // Storage restrictions do not prevent the site from opening.
    }
    setVisible(true);
  }, [onComplete]);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    let disposeScene: (() => void) | undefined;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const siblings = Array.from(document.body.children)
      .filter((element): element is HTMLElement => element instanceof HTMLElement)
      .filter((element) => !element.contains(overlayRef.current) && !['SCRIPT', 'STYLE', 'LINK'].includes(element.tagName))
      .map((element) => ({ element, inert: element.inert }));

    for (const { element } of siblings) element.inert = true;
    document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';
    overlayRef.current?.focus({ preventScroll: true });

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => { if (motionPreference.matches) finish(); };
    const handleVisibilityChange = () => { if (document.hidden) finish(); };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish();
      if (event.key === 'Tab') {
        event.preventDefault();
        skipRef.current?.focus({ preventScroll: true });
      }
    };
    motionPreference.addEventListener('change', handleMotionChange);
    document.addEventListener('keydown', handleKey);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // An unavailable GPU or a slow module download must never trap visitors.
    const safetyTimer = window.setTimeout(finish, 8000);
    void import('@/lib/cosmic-intro')
      .then(({ startCosmicIntro }) => {
        if (cancelled || finishedRef.current || !canvasRef.current) return;
        disposeScene = startCosmicIntro(canvasRef.current, finish, setProgress);
        try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* Storage is optional. */ }
        setReady(true);
      })
      .catch(() => { if (!cancelled) finish(); });

    return () => {
      cancelled = true;
      window.clearTimeout(safetyTimer);
      window.clearTimeout(exitTimerRef.current);
      disposeScene?.();
      motionPreference.removeEventListener('change', handleMotionChange);
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      for (const { element, inert } of siblings) element.inert = inert;
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      if (previousFocus instanceof HTMLElement && previousFocus !== document.body && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [visible, finish]);

  if (!visible) return null;

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="星空のオープニング"
      tabIndex={-1}
      className={`${styles.overlay} ${ready ? styles.ready : ''} ${leaving ? styles.leaving : ''}`}
    >
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div
        className={styles.loading}
        role="progressbar"
        aria-label="オープニングの進行状況"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <span>loading ...</span>
        <span className={styles.percentage}>{String(progress).padStart(2, '0')}<span className={styles.percentSign}>%</span></span>
      </div>
      <p className={styles.caption} aria-hidden="true">遠い星から、新しい「問い」へ。</p>
      <button ref={skipRef} type="button" onClick={finish} className={styles.skip}>
        スキップ <span aria-hidden="true">→</span>
      </button>
    </div>,
    document.body,
  );
}
