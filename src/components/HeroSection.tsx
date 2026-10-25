import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroSectionProps {
  onOpenProjects: () => void;
  onOpenAbout: () => void;
  onOpenInterests: () => void;
  onOpenStats: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenProjects,
  onOpenAbout,
  onOpenInterests,
  onOpenStats,
}) => {
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter хук (38ms хурдтай, 600ms хүлээлттэй)
  const typewriterText =
    'Сайтаар минь зочилсонд талархлаа. Спортод дуртай, бүтээлч эрч хүчтэй. Одоо хамтдаа юу бүтээх вэ?';
  const { displayed, done } = useTypewriter(typewriterText, {
    speed: 38,
    startDelay: 600,
  });

  // Товчлуурууд 400ms дараа fade-in + slide-up хэлбэрээр гарч ирнэ
  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // дэмжигдээгүй эсвэл алдаа гарвал
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative z-10 w-full h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden">
      <div className="max-w-xl relative z-10 text-left">
        {/* 1. Бүрэлзсэн угталтын бичиг (Blurred intro label) */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#fff',
            filter: 'blur(4px)',
          }}
        >
          Сайн уу, намайг Алтан-Од гэдэг,
          <br />
          Naturbucks клубийн тамирчин, 17 настай
        </div>

        {/* 2. Бичигдэх текстийн хэсэг (Typewriter text) */}
        <p
          className="text-white mb-5 sm:mb-6 min-h-[54px]"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Үйлдлийн товчлуурууд (Action pill buttons) */}
        <div
          className="flex flex-wrap gap-y-1 transition-all duration-400 ease-out"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          {/* 4 цагаан товчлуур */}
          <button
            type="button"
            onClick={onOpenProjects}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          >
            Миний бүтээлүүд
          </button>

          <button
            type="button"
            onClick={onOpenStats}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          >
            Биеийн үзүүлэлт & клуб
          </button>

          <button
            type="button"
            onClick={onOpenInterests}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          >
            Хобби & Сонирхол
          </button>

          <button
            type="button"
            onClick={onOpenAbout}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          >
            Нэмэлт мэдээлэл
          </button>

          {/* 1 хүрээтэй товчлуур (Email copy) */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Имэйл хаягийг хуулах"
            className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 group"
          >
            <span>
              Холбогдох:{' '}
              <span className="underline underline-offset-1">
                {PERSONAL_INFO.email}
              </span>
            </span>
            {/* 12x12 2 давхардсан тэгш өнцөгт бүхий хуулах дүрс SVG */}
            <svg
              className="w-3 h-3 shrink-0 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            {copied && (
              <span className="text-[11px] bg-emerald-500 text-black px-1.5 py-0.5 rounded-full font-medium animate-pulse ml-1">
                Хуулагдлаа!
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
