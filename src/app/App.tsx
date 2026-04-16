import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Marquee } from './components/Marquee';
import { WorksSection } from './components/WorksSection';
import { WebsiteWorksSection } from './components/WebsiteWorksSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Set page title and meta tags for link previews
    document.title = "saurv's portfolio";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Video editing & AI content creation portfolio showcasing cinematic works, reels, and creative projects.');
    
    // Open Graph tags for better social sharing
    const ogTags = [
      { property: 'og:title', content: "saurv's portfolio" },
      { property: 'og:description', content: 'Video editing & AI content creation portfolio showcasing cinematic works, reels, and creative projects.' },
      { property: 'og:type', content: 'website' },
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "saurv's portfolio" },
      { name: 'twitter:description', content: 'Video editing & AI content creation portfolio showcasing cinematic works, reels, and creative projects.' },
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <div 
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background: '#000000',
        cursor: 'none',
      }}
    >

      {/* Film Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
          mixBlendMode: 'overlay',
          willChange: 'auto',
        }}
      />

      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Works Section - Proof of Work - MOVED TO TOP */}
        <WorksSection />

        {/* About Section - Your entire info */}
        <AboutSection />

        {/* Marquee */}
        <Marquee />

        {/* Website Projects Section */}
        <WebsiteWorksSection />

        {/* Services Section */}
        <ServicesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}