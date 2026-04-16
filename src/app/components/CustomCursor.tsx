import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    let targetX = -100;
    let targetY = -100;
    let currentRingX = -100;
    let currentRingY = -100;

    const updateCursor = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
    };

    const animateRing = () => {
      // Smooth interpolation for ring
      currentRingX += (targetX - currentRingX) * 0.15;
      currentRingY += (targetY - currentRingY) * 0.15;
      
      setRingPosition({ x: currentRingX, y: currentRingY });
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Ring */}
      <div
        className="fixed pointer-events-none z-[10000] will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: isHovering ? '36px' : '32px',
          height: isHovering ? '36px' : '32px',
          transform: `translate3d(${ringPosition.x - (isHovering ? 18 : 16)}px, ${ringPosition.y - (isHovering ? 18 : 16)}px, 0)`,
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      >
        <div className="w-full h-full rounded-full border border-white opacity-50 mix-blend-difference" />
      </div>
      
      {/* Dot */}
      <div
        className="fixed pointer-events-none z-[10001] will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: isHovering ? '36px' : '8px',
          height: isHovering ? '36px' : '8px',
          transform: `translate3d(${position.x - (isHovering ? 18 : 4)}px, ${position.y - (isHovering ? 18 : 4)}px, 0)`,
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      >
        <div className="w-full h-full rounded-full bg-white mix-blend-difference" />
      </div>
    </>
  );
}
