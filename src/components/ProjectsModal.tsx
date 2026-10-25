import React, { useState } from 'react';
import { MY_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CategoryFilter = 'Бүгд' | 'Вэб хуудас' | 'Медиа & Видео' | 'Аниме & Контент' | 'Төлөвлөгөө';

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Бүгд');

  if (!isOpen) return null;

  const categories: CategoryFilter[] = [
    'Бүгд',
    'Вэб хуудас',
    'Медиа & Видео',
    'Аниме & Контент',
    'Төлөвлөгөө',
  ];

  const filteredProjects: ProjectItem[] =
    selectedCategory === 'Бүгд'
      ? MY_PROJECTS
      : MY_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-zinc-950/95 border border-white/20 rounded-2xl p-5 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Толгой хэсэг */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                Бүтээлийн сан
              </span>
              <span className="text-xs bg-white text-black px-2.5 py-0.5 rounded-full font-semibold">
                {MY_PROJECTS.length} бүтээл
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-medium tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Миний бүтээлүүд
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

        {/* Категорийн шүүлтүүр (Цэгцтэй болгох) */}
        <div className="flex items-center gap-2 overflow-x-auto py-3 border-b border-white/5 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
              }`}
            >
              {cat}
              {cat === 'Бүгд' && ` (${MY_PROJECTS.length})`}
            </button>
          ))}
        </div>

        {/* Төслүүдийн жагсаалт (Array) */}
        <div className="overflow-y-auto my-3 pr-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between p-5 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/40 transition-all duration-200"
              >
                <div>
                  {/* Дээд зураг болон шошго */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-medium">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    {project.imageUrl && (
                      <div className="w-12 h-12 rounded-lg bg-black/60 border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover rounded"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Гарчиг ба холбоос */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/title"
                  >
                    <h3 className="text-lg font-medium text-white group-hover/title:text-amber-200 transition-colors flex items-center gap-1.5">
                      {project.title}
                      <span className="inline-block transition-transform duration-200 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 text-sm text-white/60">
                        ↗
                      </span>
                    </h3>
                  </a>

                  {/* Тайлбар */}
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Онцлох түлхүүрүүд (Highlights) */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.highlights.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-black/50 text-white/60 border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Дэд холбоосууд (Solo Leveling, Star seasons гэх мэт) */}
                  {project.subLinks && project.subLinks.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {project.subLinks.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                        >
                          <span>{sub.label}</span>
                          <span className="text-[9px]">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Картны доод хэсэг: Шинэ цонхонд нээх товч */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span className="font-mono text-[11px]">
                    {project.sourceFile}
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white font-medium hover:underline text-xs"
                  >
                    Шинэ цонхонд нээх ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Хөл хэсэг */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
          <span>Холбоос: bucolic-klepon-91d72c.netlify.app</span>
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
