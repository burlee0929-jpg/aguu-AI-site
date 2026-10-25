import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Шууд хэрэглэгчийн имэйл клиентээр нээх
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      'Алтан-Од руу илгээсэн захидал'
    )}&body=${encodeURIComponent(message)}`;
    setSentNotice(true);
    setTimeout(() => {
      setSentNotice(false);
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-zinc-950/95 border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden flex flex-col">
        {/* Толгой */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              Холбоо барих
            </span>
            <h2
              className="text-2xl font-medium tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Надтай холбогдох
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
        <div className="my-5 space-y-5">
          {/* Имэйл хайрцаг */}
          <div className="p-4 rounded-xl border border-white/15 bg-white/[0.03] flex items-center justify-between gap-3">
            <div>
              <span className="text-xs text-white/50 block">Имэйл хаяг</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-medium text-white hover:underline"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3.5 py-1.5 rounded-full border border-white/30 text-xs font-medium hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {copied ? (
                <span className="text-emerald-400 font-semibold">Хуулагдлаа!</span>
              ) : (
                <>
                  <svg
                    className="w-3.5 h-3.5"
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
                  <span>Хуулах</span>
                </>
              )}
            </button>
          </div>

          {/* Шууд мессеж бичих form */}
          <form onSubmit={handleSendMessage} className="space-y-3">
            <label
              htmlFor="message"
              className="text-xs text-white/60 block font-mono uppercase tracking-wider"
            >
              Шуурхай зурвас бичих
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Сайн байна уу, тантай хамтран ажиллах хүсэлтэй байна..."
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-black/40 text-white placeholder-white/40 focus:outline-none focus:border-white text-sm resize-none"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {sentNotice ? 'Илгээж байна...' : 'Имэйлээр илгээх'}
            </button>
          </form>
        </div>

        {/* Хөл */}
        <div className="pt-3 border-t border-white/10 text-xs text-white/50 text-center">
          Алтан-Од • Улаанбаатар хот
        </div>
      </div>
    </div>
  );
};
