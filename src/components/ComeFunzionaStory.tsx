"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export function ComeFunzionaStory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      return;
    }
    video.pause();
  }

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.28)] ring-1 ring-black/10">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/come-funziona-story.mp4?v=2"
        poster="/videos/come-funziona-story.jpg?v=2"
        playsInline
        preload="metadata"
        aria-label="Come funziona: spiegazione in video"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
          const video = videoRef.current;
          if (video) video.currentTime = 0;
        }}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          if (video.duration) {
            setProgress(video.currentTime / video.duration);
          }
        }}
      >
        Il tuo browser non supporta la riproduzione video.
      </video>

      <div
        className="pointer-events-none absolute inset-x-3 top-3 z-10"
        aria-hidden
      >
        <span className="block h-0.5 overflow-hidden rounded-full bg-white/35">
          <span
            className="block h-full rounded-full bg-white"
            style={{ width: `${Math.max(progress * 100, playing ? 2 : 0)}%` }}
          />
        </span>
      </div>

      <button
        type="button"
        onClick={togglePlay}
        className={
          playing
            ? "absolute inset-0 z-10"
            : "absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-black/40 via-black/10 to-black/75 px-6 text-center text-white"
        }
        aria-label={
          playing
            ? "Metti in pausa il video"
            : "Riproduci video: Come funziona, in 30 secondi"
        }
      >
        {!playing ? (
          <>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red text-white shadow-lg">
              <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden />
            </span>
            <span>
              <span className="block font-display text-lg font-bold tracking-tight">
                Guarda come funziona
              </span>
              <span className="mt-1 block text-sm text-white/75">
                Spiegazione parlata in 30 secondi
              </span>
            </span>
          </>
        ) : null}
      </button>
    </div>
  );
}
