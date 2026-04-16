import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9000] backdrop-blur-[20px]" style={{
        background: 'rgba(0, 0, 0, 0.6)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <div style={{ fontFamily: 'Clash Display, sans-serif' }} className="text-white">
            saurv
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Work', 'Services'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-[11px] uppercase tracking-[0.15em] transition-colors group"
                style={{ 
                  fontFamily: 'DM Mono, monospace',
                  color: 'rgba(255, 255, 255, 0.4)',
                }}
              >
                <span className="group-hover:text-white transition-colors">{item}</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Location Tag */}
          <div className="hidden md:flex items-center gap-2" style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px' }}>
            <div className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" />
            <span className="text-white/60">Mumbai, India</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[8999] bg-black flex items-center justify-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-8">
            {['Home', 'About', 'Work', 'Services'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white text-4xl md:text-6xl hover:text-[#c084fc] transition-colors"
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
