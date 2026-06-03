"use client";

import { useRef, useState } from "react";

export default function FilmPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const togglePiP = async () => {
    if (!videoRef.current) return;

    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoRef.current.requestPictureInPicture();
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden group bg-black">

      {/* VIDEO */}
      <video
        ref={videoRef}
        src="/videos/film1.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* CONTROLS */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">

        {/* LEFT */}
        <div className="flex items-center gap-4 text-white text-xl">

          <button onClick={togglePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button onClick={toggleMute}>
            {isMuted ? "🔇" : "🔊"}
          </button>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-white text-xl">

          <button onClick={togglePiP}>
            ⧉
          </button>

          <button onClick={toggleFullscreen}>
            ⛶
          </button>

        </div>

      </div>
    </div>
  );
}