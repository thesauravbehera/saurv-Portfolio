import { useEffect, useState, useRef } from 'react';

const SERVICES = [
  {
    number: "01",
    label: "Editing",
    name: "Video Editing",
    description: "Professional editing with advanced techniques in DaVinci Resolve, Premiere Pro, and Final Cut Pro. Specializing in narrative pacing, visual storytelling, and seamless transitions.",
    emoji: "🎬",
    image: "https://images.unsplash.com/photo-1575320854760-bfffc3550640?w=400"
  },
  {
    number: "02",
    label: "AI Generation",
    name: "AI Video Generation",
    description: "Creating stunning AI-powered videos using Runway Gen-3, Sora, Kling AI, and Pika. From concept to completion, leveraging the latest generative AI tools.",
    emoji: "🤖",
    image: "https://images.unsplash.com/photo-1708373100061-f75279dbaa7f?w=400"
  },
  {
    number: "03",
    label: "Grading",
    name: "Color Grading",
    description: "Cinematic color correction and grading to achieve the perfect mood and atmosphere. Custom LUTs, HDR mastering, and film emulation.",
    emoji: "🎨",
    image: "https://images.unsplash.com/photo-1638472358951-1ff43bca22a9?w=400"
  },
  {
    number: "04",
    label: "Motion",
    name: "Motion Graphics",
    description: "Dynamic motion design and visual effects using After Effects, Cinema 4D, and Blender. From simple animations to complex 3D compositions.",
    emoji: "⚡",
    image: "https://images.unsplash.com/photo-1759269286316-01bb89cd3d4b?w=400"
  },
  {
    number: "05",
    label: "Automation",
    name: "AI Workflow Automation",
    description: "Streamline your video production with custom AI workflows. Automated editing, batch processing, and intelligent asset management.",
    emoji: "🔄",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400"
  },
  {
    number: "06",
    label: "Social",
    name: "Short-Form Content",
    description: "Viral-worthy content optimized for TikTok, Instagram Reels, and YouTube Shorts. Fast-paced editing with attention-grabbing hooks.",
    emoji: "📱",
    image: "https://images.unsplash.com/photo-1764663908283-46824d5e93af?w=400"
  },
  {
    number: "07",
    label: "Writing",
    name: "Content Writing & Research",
    description: "Compelling scriptwriting and in-depth research for video projects. Creating narratives that engage, inform, and resonate with your audience.",
    emoji: "✍️",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400"
  },
  {
    number: "08",
    label: "Design",
    name: "UI/UX Design",
    description: "Intuitive user interface and experience design. Creating seamless digital experiences with modern aesthetics and user-centered thinking.",
    emoji: "🎯",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400"
  },
  {
    number: "09",
    label: "Audio",
    name: "Sound Design",
    description: "Professional audio engineering and sound design. From Foley work to music composition, crafting immersive sonic landscapes for your videos.",
    emoji: "🎵",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400"
  },
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('services');
    if (section && observerRef.current) {
      observerRef.current.observe(section);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible]);

  return (
    <section 
      id="services" 
      className="py-16 md:py-24"
      style={{
        background: 'rgba(255, 255, 255, 0.015)',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div 
          className="pb-8 mb-12"
          style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <h2
            className="text-white will-change-transform"
            style={{
              fontFamily: 'Clash Display, sans-serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
              transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            Services
          </h2>
        </div>

        {/* Services List */}
        <div>
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group py-8 md:py-12 grid grid-cols-1 md:grid-cols-[200px_1fr_180px] gap-6 md:gap-12 items-start -mx-6 md:-mx-12 px-6 md:px-12 will-change-transform"
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                transition: `opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s, background-color 0.3s`,
              }}
            >
              {/* Number and Label */}
              <div>
                <div
                  className="mb-2 transition-colors duration-500"
                  style={{
                    fontFamily: 'Clash Display, sans-serif',
                    fontSize: '72px',
                    color: 'rgba(255, 255, 255, 0.04)',
                    lineHeight: '1',
                  }}
                >
                  {service.number}
                </div>
                <div
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.4)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {service.label}
                </div>
              </div>

              {/* Service Info */}
              <div>
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: 'Clash Display, sans-serif',
                    fontSize: 'clamp(26px, 3.2vw, 40px)',
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.4)',
                    lineHeight: '1.8',
                    maxWidth: '400px',
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Image/Emoji */}
              <div className="hidden md:block">
                <div
                  className="rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300"
                  style={{
                    aspectRatio: '4/3',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div
                    className="transition-transform duration-300 will-change-transform group-hover:scale-110"
                    style={{
                      fontSize: '28px',
                      opacity: 0.4,
                    }}
                  >
                    {service.emoji}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
