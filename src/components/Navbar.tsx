import React, { useState } from 'react';

interface NavbarProps {
  onOpenProjects: () => void;
  onOpenAbout: () => void;
  onOpenInterests: () => void;
  onOpenClub: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProjects,
  onOpenAbout,
  onOpenInterests,
  onOpenClub,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Бүтээлүүд', action: onOpenProjects },
    { label: 'Танилцуулга', action: onOpenAbout },
    { label: 'Клуб', action: onOpenClub },
    { label: 'Сонирхол', action: onOpenInterests },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center transition-all duration-300">
        {/* Лого (Зүүн талд) */}
        <div
          className="flex items-center gap-3 cursor-pointer group select-none"
          onClick={onOpenAbout}
          title="Алтан-Од танилцуулга"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white font-medium group-hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Алтан-Од®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none transition-transform duration-300 group-hover:rotate-45"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
        </div>

        {/* Компьютерын цэс (Голд, md-ээс дээш харагдана) */}
        <nav className="hidden md:flex items-center text-[23px] text-white select-none">
          {navItems.map((item, idx) => (
            <React.Fragment key={item.label}>
              <button
                type="button"
                onClick={item.action}
                className="hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 text-white p-0"
              >
                {item.label}
              </button>
              {idx < navItems.length - 1 && (
                <span className="opacity-80 mx-1">, </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Компьютерын холбоо барих CTA (Баруун талд, md-ээс дээш) */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={onOpenContact}
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0"
          >
            Холбогдох
          </button>
        </div>

        {/* Мобайл гамбургер товч (md-ээс доош) */}
        <button
          type="button"
          aria-label="Цэс нээх/хаах"
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer bg-transparent border-0 p-0 z-30 focus:outline-none"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Гар утасны бүтэн дэлгэцийн цэс */}
      <div
        className={`fixed inset-0 z-10 bg-black/90 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-left">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                closeMobileMenu();
                item.action();
              }}
              className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity text-left bg-transparent border-0 p-0 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              closeMobileMenu();
              onOpenContact();
            }}
            className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-60 transition-opacity text-left bg-transparent border-0 p-0 cursor-pointer pt-4"
          >
            Холбогдох
          </button>
        </div>

        <div className="text-white/50 text-sm mt-8 border-t border-white/20 pt-4 w-full">
          Алтан-Од • Naturbucks клуб
        </div>
      </div>
    </>
  );
};
