import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Monitor } from 'lucide-react';

const WEBSITE_PROJECTS = [
  {
    title: "Giggs Social",
    description: "Creative portfolio website with modern design and smooth animations",
    url: "https://merry-sketch-18217306.figma.site",
    tag: "Portfolio",
    color: "rgba(192, 132, 252, 0.1)"
  },
  {
    title: "Bloomify",
    description: "Professional pricing and rate management platform",
    url: "https://rack-rate-36475957.figma.site",
    tag: "Web App",
    color: "rgba(192, 132, 252, 0.1)"
  },
  {
    title: "CodeShift",
    description: "Real estate and property showcase platform",
    url: "https://house-lift-22596972.figma.site",
    tag: "Business Site",
    color: "rgba(192, 132, 252, 0.1)"
  },
];

export function WebsiteWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

    const section = document.getElementById('websites');
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
      id="websites" 
      className="py-16 md:py-24 px-6 md:px-12"
      style={{
        background: 'rgba(255, 255, 255, 0.015)',
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            className="text-white mb-2 will-change-transform"
            style={{
              fontFamily: 'Clash Display, sans-serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
              transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            Website Projects
          </h2>
          <p
            className="will-change-transform"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.4)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
              transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s',
            }}
          >
            Interactive web experiences built with modern design principles
          </p>
        </div>

        {/* Website Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBSITE_PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl cursor-pointer will-change-transform block"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: hoveredIndex === index 
                  ? '1px solid rgba(192, 132, 252, 0.3)' 
                  : '1px solid rgba(255, 255, 255, 0.08)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                transition: `opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s, border-color 0.3s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Preview Frame */}
              <div 
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '16/10',
                  background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.05) 0%, rgba(192, 132, 252, 0.02) 100%)',
                }}
              >
                {/* Browser Chrome */}
                <div 
                  className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center gap-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  </div>
                  <div 
                    className="ml-4 px-3 py-1 rounded text-[9px]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.3)',
                      fontFamily: 'DM Mono, monospace',
                    }}
                  >
                    {project.url.replace('https://', '')}
                  </div>
                </div>

                {/* Website Preview - Using iframe */}
                <div className="absolute inset-0 top-[44px]">
                  <iframe
                    src={project.url}
                    className="w-full h-full pointer-events-none"
                    style={{
                      border: 'none',
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left',
                      width: '200%',
                      height: '200%',
                    }}
                    title={project.title}
                  />
                  {/* Overlay to prevent interaction */}
                  <div className="absolute inset-0 bg-transparent" />
                </div>

                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center transition-transform duration-300 will-change-transform group-hover:scale-110"
                      style={{
                        background: 'rgba(192, 132, 252, 0.2)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(192, 132, 252, 0.4)',
                      }}
                    >
                      <ExternalLink className="text-white" size={24} />
                    </div>
                    <div
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '11px',
                        color: '#c084fc',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      Visit Site
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className="mb-2 inline-block px-2 py-1 rounded"
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    color: '#c084fc',
                    background: 'rgba(192, 132, 252, 0.1)',
                    border: '1px solid rgba(192, 132, 252, 0.3)',
                  }}
                >
                  {project.tag}
                </div>
                <h3
                  className="text-white mb-2 flex items-center gap-2"
                  style={{
                    fontFamily: 'Clash Display, sans-serif',
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                  }}
                >
                  {project.title}
                  <Monitor size={18} className="text-white/40" />
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.4)',
                    lineHeight: '1.6',
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* External Link Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(192, 132, 252, 0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(192, 132, 252, 0.4)',
                  }}
                >
                  <ExternalLink className="text-white" size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Project Count */}
        <div 
          className="mt-10 text-center"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.3)',
          }}
        >
          {WEBSITE_PROJECTS.length} Live Website Projects
        </div>
      </div>
    </section>
  );
}
