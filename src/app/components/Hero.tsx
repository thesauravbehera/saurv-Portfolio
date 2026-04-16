import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-24 md:py-32 px-6 md:px-12">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(192, 132, 252, 0.04) 0%, transparent 50%)',
          willChange: 'auto',
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Headline */}
        <div className="mb-10">
          <h1 
            className="will-change-transform"
            style={{
              fontFamily: 'Clash Display, sans-serif',
              fontSize: 'clamp(56px, 9vw, 120px)',
              lineHeight: '1',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 60px, 0)',
              transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div className="text-white mb-3">Builder</div>
            <div className="text-white mb-3">Video Editor</div>
            <div 
              className="flex items-baseline gap-4"
            >
              <span className="text-white">/</span>
              <span 
                className="text-[#c084fc]" 
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                }}
              >
                AI Visual Creator
              </span>
            </div>
          </h1>
        </div>

        {/* Subtitle */}
        <p 
          className="max-w-[480px] mb-12 will-change-transform"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '14px',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.5)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 60px, 0)',
            transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.15s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.15s',
          }}
        >
          Exploring the intersection of AI, startups, and product building. Building practical digital tools while crafting compelling visual narratives with cutting-edge technology.
        </p>

        {/* CTA Button */}
        <button 
          className="px-8 py-4 bg-white text-black hover:bg-black hover:text-white border border-transparent hover:border-white transition-all duration-300 will-change-transform"
          style={{
            fontFamily: 'Clash Display, sans-serif',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 60px, 0)',
            transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.3s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.3s, background-color 0.3s, color 0.3s, border-color 0.3s',
          }}
          onClick={() => {
            const element = document.getElementById('about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Learn More
        </button>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute right-6 md:right-12 bottom-12 md:bottom-24"
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '10px',
          color: 'rgba(255, 255, 255, 0.3)',
          transform: 'rotate(90deg)',
          transformOrigin: 'right center',
        }}
      >
        Scroll ↓
      </div>
    </section>
  );
}
