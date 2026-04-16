import { Mail, Instagram, Youtube, Twitter } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'Email', icon: Mail, href: 'mailto:sauravbehera2323@gmail.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/thesauravbehera' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { name: 'X', icon: Twitter, href: 'https://x.com' },
];

export function Footer() {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <div 
        className="py-16 md:py-24 px-6 md:px-12"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="max-w-[1600px] mx-auto text-center">
          {/* Headline */}
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: 'Clash Display, sans-serif',
              fontSize: 'clamp(52px, 8vw, 120px)',
              lineHeight: '0.9',
            }}
          >
            <div>Let's Build</div>
            <div>Something</div>
            <div className="text-[#c084fc]">Extraordinary.</div>
          </h2>

          {/* Subtext */}
          <p
            className="mb-12"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            Currently accepting new projects for 2026
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 rounded-full transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Icon 
                      size={16} 
                      className="transition-colors"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    />
                    <span
                      className="transition-colors"
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      {link.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-6 px-6 md:px-12"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            ©2026 saurv. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
