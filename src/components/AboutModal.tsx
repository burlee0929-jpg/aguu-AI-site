import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: 'all' | 'stats' | 'interests';
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-zinc-950/95 border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Толгой */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              Хувийн танилцуулга
            </span>
            <h2
              className="text-2xl sm:text-3xl font-medium tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {PERSONAL_INFO.name} ({PERSONAL_INFO.nickname})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Хаах"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Агуулга */}
        <div className="overflow-y-auto my-4 space-y-6 pr-1">
          {/* Профайл карт */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center sm:text-left flex-1 space-y-1.5">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white text-xs border border-white/20">
                Тамирчин • Волейбол • Ирээдүйн программист
              </div>
              <h3 className="text-xl font-medium">{PERSONAL_INFO.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Сайн байна уу! Намайг Алтан-Од гэдэг. 17 настай, волейболын спортод дуртай, одоогоор вэб код сурч буй бүтээлч залуу байна.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start text-xs text-white/80">
                <span className="px-2 py-1 rounded bg-black/40 border border-white/10">
                  Клуб: <strong>{PERSONAL_INFO.club}</strong>
                </span>
                <span className="px-2 py-1 rounded bg-black/40 border border-white/10">
                  Өндөр: <strong>{PERSONAL_INFO.height}</strong>
                </span>
                <span className="px-2 py-1 rounded bg-black/40 border border-white/10">
                  Хоч: <strong>«{PERSONAL_INFO.nickname}»</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Ирээдүйн төлөвлөгөө (Future Plan) */}
          <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 block mb-1">
              Ирээдүйн төлөвлөгөө (Future Plan)
            </span>
            <h4 className="text-lg font-medium text-white mb-2">
              {PERSONAL_INFO.futureGoal}
            </h4>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.learningSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-200 border border-cyan-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Үзүүлэлтүүд ба дуртай зүйлс */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-white/50 mb-3">
              Дэлгэрэнгүй үзүүлэлтүүд & Сонирхол
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Нас</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.age} настай
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Биеийн өндөр</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.height}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Хобби</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.hobby}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Тоглодог клуб</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.club}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Дурртай хамтлаг</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.favoriteBand}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Дурртай дуу</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.favoriteSong}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Дурртай хоол</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.favoriteFood}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Дурртай аниме & кино</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.favoriteAnime} / {PERSONAL_INFO.favoriteMovie}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Дурртай амьтан</span>
                <span className="text-base font-medium text-white">
                  {PERSONAL_INFO.favoriteAnimal}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="text-xs text-white/50 block">Хоч</span>
                <span className="text-base font-medium text-white">
                  «{PERSONAL_INFO.nickname}»
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Хөл */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
          <span>{PERSONAL_INFO.registeredName}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:underline cursor-pointer"
          >
            Хаах
          </button>
        </div>
      </div>
    </div>
  );
};
