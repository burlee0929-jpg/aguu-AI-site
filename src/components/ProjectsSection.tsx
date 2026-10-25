import React from 'react';
import { MY_PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="my-projects-section"
      className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/10 bg-black/60 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto">
        {/* Хэсгийн толгой */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                Багц бүтээл
              </span>
              <span className="text-xs bg-white text-black px-2 py-0.5 rounded-full font-semibold">
                3 бүтээл
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white flex items-center gap-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Миний бүтээлүүд
              <span className="text-white/60 text-2xl sm:text-3xl">✳︎</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md">
            Карт дээр дарж тухайн төслийг шинэ цонхонд шууд нээн үзнэ үү. Бүх холбоосууд Netlify дээр шууд ажиллана.
          </p>
        </div>

        {/* 3 үндсэн бүтээлийн картууд (Шууд ил харагдана) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MY_PROJECTS.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/50 transition-all duration-300 p-6 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Картын дээд тал */}
              <div>
                {/* Зурагт хэсэг */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-5 relative flex items-center justify-center p-3">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/80 text-white border border-white/20 backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-amber-400 text-black shadow">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Гарчиг ба индекс */}
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-mono text-white/40">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {project.sourceFile}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-white group-hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  {project.title}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-sm text-white/60">
                    ↗
                  </span>
                </h3>

                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Онцлох түлхүүрүүд */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.highlights.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Картын доод үйлдэл */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/40 font-mono text-[11px]">
                  Шинэ цонхонд нээх
                </span>
                <span className="inline-flex items-center gap-1 text-black bg-white group-hover:bg-amber-300 px-3.5 py-1.5 rounded-full font-medium transition-colors shadow">
                  <span>Үзэх</span>
                  <span>↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Доод холбоос мэдээлэл */}
        <div className="mt-10 p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Бүх бүтээл https://bucolic-klepon-91d72c.netlify.app/ дээр байршсан</span>
          </div>
          <span className="font-mono">Алтан-Од • Portfolio 2026</span>
        </div>
      </div>
    </section>
  );
};
