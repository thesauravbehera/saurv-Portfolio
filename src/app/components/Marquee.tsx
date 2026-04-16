export function Marquee() {
  const text = "VIDEO EDITING · AI VIDEO GENERATION · COLOR GRADING · MOTION GRAPHICS · DAVINCI RESOLVE · RUNWAY · SORA · KLING · SHORT-FORM · STORYTELLING";

  return (
    <div 
      className="relative overflow-hidden py-4"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="marquee-container">
        <div 
          className="marquee-content"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'rgba(255, 255, 255, 0.3)',
          }}
        >
          <span className="inline-block px-2">{text}</span>
          <span className="text-[#c084fc] inline-block px-2">◆</span>
          <span className="inline-block px-2">{text}</span>
          <span className="text-[#c084fc] inline-block px-2">◆</span>
          <span className="inline-block px-2">{text}</span>
          <span className="text-[#c084fc] inline-block px-2">◆</span>
          <span className="inline-block px-2">{text}</span>
          <span className="text-[#c084fc] inline-block px-2">◆</span>
        </div>
      </div>

      <style>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 0;
        }

        .marquee-content {
          flex-shrink: 0;
          display: flex;
          justify-content: space-around;
          min-width: 100%;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
