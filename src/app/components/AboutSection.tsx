import { useEffect, useState, useRef } from 'react';
import { MapPin, Mail, Instagram } from 'lucide-react';
import profileImage from 'figma:asset/e8ff7379a0fc18b09f4efef902e9e05144f4f1ef.png';

// ✏️ EDIT YOUR WORK EXPERIENCE HERE
const WORK_EXPERIENCE = [
  {
    year: "Nov 2025-Present",
    role: "Builder, Video Editor & AI Visual Creator",
    company: "Ananta Capital's BetterAlt",
    description: "Building practical digital tools and creating AI-powered visual content"
  },
  {
    year: "Feb 2023-Jun 2023",
    role: "Video Editor",
    company: "AEVY TV Cohort 3",
    description: "Produced and edited video content, specializing in post-production and storytelling"
  },
];

const CONTACT_INFO = {
  location: "Mumbai, India",
  email: "sauravbehera2323@gmail.com",
  instagram: "@thesauravbehera",
  instagramUrl: "https://instagram.com/thesauravbehera"
};

export function AboutSection() {
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

    const section = document.getElementById('about');
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
    <section id="about" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Title */}
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
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            {/* Who I Am */}
            <div
              className="pb-8 mb-8 will-change-transform"
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <div
                className="mb-4"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  color: '#c084fc',
                  letterSpacing: '0.15em',
                }}
              >
                Who I Am
              </div>
              <p
                className="text-white"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '22px',
                  lineHeight: '1.7',
                }}
              >
                "A technology enthusiast exploring the intersection of AI, startups, and product building — crafting stories through pixels and code."
              </p>
            </div>

            {/* Background */}
            <div
              className="pb-8 mb-8 will-change-transform"
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s',
              }}
            >
              <div
                className="mb-4"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  color: '#c084fc',
                  letterSpacing: '0.15em',
                }}
              >
                Background
              </div>
              <p
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.4)',
                  lineHeight: '1.8',
                }}
              >
                I build practical digital tools using modern technologies like React, JavaScript, and Python, while constantly studying how innovative ideas turn into scalable products. Currently working with Ananta Capital, I combine my passion for video editing with emerging AI technologies to create compelling visual narratives. My journey spans from traditional video production at AEVY TV to pioneering AI-powered content creation today.
              </p>
            </div>

            {/* What Drives Me */}
            <div
              className="pb-8 mb-8 will-change-transform"
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s',
              }}
            >
              <div
                className="mb-4"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  color: '#c084fc',
                  letterSpacing: '0.15em',
                }}
              >
                What Drives Me
              </div>
              <p
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.4)',
                  lineHeight: '1.8',
                }}
              >
                Beyond development and video editing, I'm deeply interested in AI innovation, venture ecosystems, and the strategy behind successful technology companies. I leverage cutting-edge tools like Runway, Sora, and DaVinci Resolve to push creative boundaries. My goal is to work alongside ambitious builders and contribute to technologies that shape the future — whether through compelling visual stories or innovative digital products.
              </p>
            </div>

            {/* Work Experience */}
            <div
              className="will-change-transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.3s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.3s',
              }}
            >
              <div
                className="mb-6"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  color: '#c084fc',
                  letterSpacing: '0.15em',
                }}
              >
                Work Experience
              </div>
              <div className="space-y-6">
                {WORK_EXPERIENCE.map((item, index) => (
                  <div
                    key={index}
                    className="pb-6"
                    style={{
                      borderBottom: index < WORK_EXPERIENCE.length - 1 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
                    }}
                  >
                    <div className="grid grid-cols-[140px_1fr] gap-6 mb-2">
                      <div
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.3)',
                        }}
                      >
                        {item.year}
                      </div>
                      <div>
                        <div
                          className="text-white mb-1"
                          style={{
                            fontFamily: 'Clash Display, sans-serif',
                            fontSize: '16px',
                          }}
                        >
                          {item.role}
                        </div>
                        <div
                          className="mb-2"
                          style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '12px',
                            color: '#c084fc',
                          }}
                        >
                          {item.company}
                        </div>
                        <p
                          style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '11px',
                            color: 'rgba(255, 255, 255, 0.4)',
                            lineHeight: '1.6',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div 
            className="lg:sticky lg:top-24 will-change-transform"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
              transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.4s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.4s',
            }}
          >
            {/* Profile Card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Portrait with B&W Gradient */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '4/5',
                }}
              >
                <img
                  src={profileImage}
                  alt="saurv - Builder / Video Editor & AI Creator"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
                  }}
                />
              </div>

              {/* Profile Info */}
              <div className="p-6">
                {/* Name & Title */}
                <div className="mb-6">
                  <h3
                    className="text-white mb-1"
                    style={{
                      fontFamily: 'Clash Display, sans-serif',
                      fontSize: '28px',
                    }}
                  >
                    saurv
                  </h3>
                  <p
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '13px',
                      color: '#c084fc',
                    }}
                  >
                    Builder, Video Editor & AI Visual Creator
                  </p>
                </div>

                {/* Availability Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{
                    background: 'rgba(46, 213, 115, 0.1)',
                    border: '1px solid rgba(46, 213, 115, 0.3)',
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '11px',
                      color: 'rgba(46, 213, 115, 0.9)',
                    }}
                  >
                    Available for projects
                  </span>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5"
                      style={{
                        color: 'rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.4)',
                          marginBottom: '2px',
                        }}
                      >
                        Location
                      </div>
                      <div
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '13px',
                          color: 'rgba(255, 255, 255, 0.8)',
                        }}
                      >
                        {CONTACT_INFO.location}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5"
                      style={{
                        color: 'rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      <Mail size={16} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.4)',
                          marginBottom: '2px',
                        }}
                      >
                        Email
                      </div>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '13px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          textDecoration: 'none',
                          transition: 'color 0.3s',
                        }}
                        className="hover:text-[#c084fc]"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5"
                      style={{
                        color: 'rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      <Instagram size={16} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.4)',
                          marginBottom: '2px',
                        }}
                      >
                        Instagram
                      </div>
                      <a
                        href={CONTACT_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '13px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          textDecoration: 'none',
                          transition: 'color 0.3s',
                        }}
                        className="hover:text-[#c084fc]"
                      >
                        {CONTACT_INFO.instagram}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full mt-6 px-6 py-3 bg-transparent text-white hover:bg-white hover:text-black border border-white transition-all duration-300"
                  style={{
                    fontFamily: 'Clash Display, sans-serif',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    borderRadius: '8px',
                  }}
                  onClick={() => {
                    window.location.href = `mailto:${CONTACT_INFO.email}`;
                  }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
