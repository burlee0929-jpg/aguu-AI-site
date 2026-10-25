import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  speed?: number;
  startDelay?: number;
}

interface UseTypewriterResult {
  displayed: string;
  done: boolean;
}

/**
 * Үсэг үсгээр бичих текстийн анимацийн хук
 * @param text Харуулах текст
 * @param options speed: 1 үсэг гарах хугацаа (ms), startDelay: эхлэхээс өмнөх хүлээлт (ms)
 */
export function useTypewriter(
  text: string,
  options?: UseTypewriterOptions
): UseTypewriterResult {
  const speed = options?.speed ?? 38;
  const startDelay = options?.startDelay ?? 600;

  const [displayed, setDisplayed] = useState<string>('');
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let currentIndex = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        currentIndex++;
        setDisplayed(text.slice(0, currentIndex));

        if (currentIndex >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
