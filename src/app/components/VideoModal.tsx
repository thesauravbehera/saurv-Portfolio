import { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title, description }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Extract video ID from YouTube URL (including Shorts)
  const getYouTubeId = (url: string) => {
    const patterns = [
      /youtube\.com\/shorts\/([^?]+)/,
      /youtu\.be\/([^?]+)/,
      /youtube\.com\/watch\?v=([^&]+)/,
      /youtube\.com\/embed\/([^?]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = getYouTubeId(videoUrl);
  const isShort = videoUrl.includes('/shorts/');

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 md:p-6 lg:p-8 transition-opacity duration-300 animate-fadeIn"
      style={{
        background: 'rgba(0, 0, 0, 0.96)',
        backdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      {/* Large Close Button in Top Right Corner */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[10000] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        style={{
          background: 'rgba(192, 132, 252, 0.2)',
          backdropFilter: 'blur(12px)',
          border: '2px solid rgba(192, 132, 252, 0.4)',
        }}
        aria-label="Close video"
      >
        <X size={20} className="text-white group-hover:text-purple-300 transition-colors md:w-6 md:h-6" />
      </button>

      {/* Click Outside to Close Hint */}
      <div
        className="fixed top-4 left-4 md:top-6 md:left-6 z-[10000] px-3 py-2 rounded-lg animate-fadeIn hidden md:block"
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '11px',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.5)',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(192, 132, 252, 0.3)',
        }}
      >
        Press ESC or click outside to close
      </div>

      <div
        className="w-full max-w-[1100px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Container */}
        <div 
          className="relative w-full" 
          style={{ 
            paddingBottom: isShort ? '177.78%' : '56.25%',
            maxWidth: isShort ? '400px' : '100%',
            margin: isShort ? '0 auto' : '0'
          }}
        >
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg md:rounded-xl shadow-2xl"
            style={{
              boxShadow: '0 25px 50px -12px rgba(192, 132, 252, 0.25)',
            }}
            src={videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : ''}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
            title={title}
          />
        </div>

        {/* Video Info */}
        <div className="mt-4 md:mt-6 px-1 md:px-2">
          <h3
            className="text-white mb-2"
            style={{
              fontFamily: 'Clash Display, sans-serif',
              fontSize: 'clamp(20px, 4vw, 28px)',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: 'clamp(11px, 2vw, 12px)',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Bottom Close Button for Mobile */}
        <button
          onClick={onClose}
          className="mt-4 md:mt-6 w-full py-3 md:py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] md:hidden"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: 'rgba(192, 132, 252, 0.15)',
            border: '2px solid rgba(192, 132, 252, 0.4)',
            color: '#c084fc',
          }}
        >
          Close Video
        </button>
      </div>
    </div>
  );
}