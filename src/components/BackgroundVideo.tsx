import React, { useEffect, useRef, useState } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4';
const SENSITIVITY = 0.8;

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const prevXRef = useRef<number | null>(null);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  // Видео хугацааг шинэчлэх функц
  const applySeek = () => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    if (!isSeekingRef.current) {
      isSeekingRef.current = true;
      video.currentTime = targetTimeRef.current;
    }
  };

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video || !video.duration) {
      isSeekingRef.current = false;
      return;
    }

    // Хэрэв targetTime өөрчлөгдсөн бол дараагийн seek-ийг үргэлжлүүлнэ
    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.04) {
      video.currentTime = targetTimeRef.current;
    } else {
      isSeekingRef.current = false;
    }
  };

  useEffect(() => {
    const handleMove = (currentX: number) => {
      const video = videoRef.current;
      if (!video || !video.duration || isNaN(video.duration)) return;

      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const windowWidth = window.innerWidth || 1;
      const timeOffset = (delta / windowWidth) * SENSITIVITY * video.duration;

      let nextTime = targetTimeRef.current + timeOffset;
      if (nextTime < 0) nextTime = 0;
      if (nextTime > video.duration) nextTime = video.duration;

      targetTimeRef.current = nextTime;
      applySeek();
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleLoadedMetadata = () => {
    setVideoLoaded(true);
    if (videoRef.current && videoRef.current.duration) {
      // Видеоны эхлэлийг бага зэрэг урагшлуулж эхний кадрыг үзүүлнэ
      targetTimeRef.current = Math.min(0.1, videoRef.current.duration);
      videoRef.current.currentTime = targetTimeRef.current;
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onSeeked={handleSeeked}
        className="fixed inset-0 z-0 w-full h-full object-cover select-none pointer-events-none"
        style={{ objectPosition: '70% center' }}
      />
      {/* Видео дээрх дэгжин сүүдэржилт, тодосгогч давхарга */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 pointer-events-none" />

      {/* Интерактив заавар тэмдэглэгээ (доод баруун өнцөгт маш даруухан) */}
      <div className="fixed bottom-3 right-4 z-10 text-[11px] uppercase tracking-widest text-white/40 pointer-events-none hidden sm:block">
        {videoLoaded ? '← Хулганаа хөдөлгөж видеог удирдана уу →' : 'Уншиж байна...'}
      </div>
    </>
  );
};
