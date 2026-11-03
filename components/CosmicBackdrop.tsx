'use client';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export default function CosmicBackdrop() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(true);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    setPaused(motion.matches || !!connection?.saveData);
    const onChange = () => {
      if (motion.matches) setPaused(true);
    };
    motion.addEventListener('change', onChange);
    return () => motion.removeEventListener('change', onChange);
  }, []);
  useEffect(() => {
    if (paused) {
      setReady(false);
      return;
    }
    let cancelled = false;
    let dispose: (() => void) | undefined;
    // Let the foreground and the opening sequence take priority.
    const timer = window.setTimeout(() => {
      void import('@/lib/cosmic-intro')
        .then(({ startCosmicIntro }) => {
          if (cancelled || !canvas.current) return;
          dispose = startCosmicIntro(
            canvas.current,
            () => setPaused(true),
            () => {},
            true,
          );
          setReady(true);
        })
        .catch(() => {
          if (!cancelled) setReady(false);
        });
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      dispose?.();
    };
  }, [paused]);
  return (
    <>
      <div className="cosmic-backdrop" aria-hidden="true">
        <div className={`sky-fallback${ready ? ' sky-fallback-hidden' : ''}`} />
        <canvas
          key={paused ? 'still' : 'live'}
          ref={canvas}
          className={ready ? 'sky-ready' : ''}
        />
        <div className="sky-shade" />
      </div>
      <button
        className="sky-control"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? '星空の動きを再開する' : '星空の動きを止める'}
        aria-pressed={paused}
      >
        {paused ? <Play size={11} /> : <Pause size={11} />}
        <span>{paused ? 'STILL SKY' : 'LIVE SKY'}</span>
      </button>
    </>
  );
}
