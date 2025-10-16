"use client";

import { useEffect, useRef } from "react";
import LiquidEther, { type LiquidEtherProps } from "@/components/LiquidEther";

export default function LiquidEtherClient(props: LiquidEtherProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const target = host.querySelector<HTMLElement>('.rb-liquid-ether');
    if (!target) return;

    const onMove = (e: MouseEvent) => {
      target.dispatchEvent(new MouseEvent('mousemove', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true,
      }));
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const t = e.touches[0];
        target.dispatchEvent(new MouseEvent('mousemove', {
          clientX: t.clientX,
          clientY: t.clientY,
          bubbles: true,
        }));
      }
    };

    const onLeave = () => {
      target.dispatchEvent(new Event('mouseleave', { bubbles: true }));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={hostRef} className="w-full h-full">
      <LiquidEther {...props} className="rb-liquid-ether w-full h-full" />
    </div>
  );
}


