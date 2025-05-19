'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

type LenisContextType = {
  lenis: Lenis | null;
  scrollY: number;
};

const LenisContext = createContext<LenisContextType>({ lenis: null, scrollY: 0 });

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    function onScroll({ scroll }: { scroll: number }) {
      setScrollY(scroll);
    }

    lenis.on('scroll', onScroll);
    requestAnimationFrame(raf);

    return () => {
      lenis.off('scroll', onScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollY }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}
