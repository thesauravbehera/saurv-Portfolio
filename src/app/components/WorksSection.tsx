import { useState, useEffect, useRef } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { VideoModal } from './VideoModal';

// Extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string {
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
  return '';
}

// Get YouTube thumbnail URL with fallback strategy for better mobile compatibility
function getYouTubeThumbnail(url: string): string {
  const videoId = getYouTubeVideoId(url);
  // Start with maxresdefault.jpg, then fallback using onError
  return videoId ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` : '';
}

// Portfolio organized by categories from youtube-links.txt
// Organized by aspect ratio and category for better visual symmetry
const VIDEO_PROJECTS = [
  // === REELS - VERTICAL SHORTS (9:16) ===
  {
    title: "Dynamic Reel #1",
    tag: "Reels",
    description: "High-energy short-form content optimized for social media",
    youtubeUrl: "https://youtube.com/shorts/XkuYuRBsMho?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/XkuYuRBsMho?feature=share")
  },
  {
    title: "Dynamic Reel #2",
    tag: "Reels",
    description: "Captivating short-form storytelling",
    youtubeUrl: "https://youtube.com/shorts/ujWSmaB_c_0?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/ujWSmaB_c_0?feature=share")
  },
  {
    title: "Creative Reel #3",
    tag: "Reels",
    description: "Eye-catching visual content for maximum engagement",
    youtubeUrl: "https://youtube.com/shorts/9oTxtOVY_qQ?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/9oTxtOVY_qQ?feature=share")
  },
  {
    title: "Trending Reel #4",
    tag: "Reels",
    description: "Algorithm-optimized short-form video",
    youtubeUrl: "https://youtube.com/shorts/FhBVFsp8u9s?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/FhBVFsp8u9s?feature=share")
  },
  {
    title: "Cinematic Reel #5",
    tag: "Reels",
    description: "Stunning visuals in bite-sized format",
    youtubeUrl: "https://youtube.com/shorts/StiTbBOwCT0?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/StiTbBOwCT0?feature=share")
  },
  {
    title: "Engaging Reel #6",
    tag: "Reels",
    description: "Crafted for viral potential",
    youtubeUrl: "https://youtube.com/shorts/e1f0Lwqp9io?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/e1f0Lwqp9io?feature=share")
  },
  {
    title: "Creative Reel #7",
    tag: "Reels",
    description: "Premium short-form content",
    youtubeUrl: "https://youtube.com/shorts/8Ez43jF9Xew?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/8Ez43jF9Xew?feature=share")
  },
  {
    title: "Dynamic Reel #8",
    tag: "Reels",
    description: "High-impact short-form storytelling",
    youtubeUrl: "https://youtube.com/shorts/NztWBb0t1ek?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/NztWBb0t1ek?feature=share")
  },
  {
    title: "Creative Reel #9",
    tag: "Reels",
    description: "Engaging visual narrative",
    youtubeUrl: "https://youtube.com/shorts/pFgPnZDxnLY?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/pFgPnZDxnLY?feature=share")
  },

  // === REELS - HORIZONTAL (16:9) ===
  {
    title: "Highlight Reel",
    tag: "Reels",
    description: "Best moments compilation",
    youtubeUrl: "https://youtu.be/fYU4AfL6h88",
    thumbnail: getYouTubeThumbnail("https://youtu.be/fYU4AfL6h88")
  },
  {
    title: "Cinematic Reel #10",
    tag: "Reels",
    description: "Captivating content creation",
    youtubeUrl: "https://youtu.be/m6rVOrBLMgY?si=R1C8ZUr3b_xV46Qs",
    thumbnail: getYouTubeThumbnail("https://youtu.be/m6rVOrBLMgY?si=R1C8ZUr3b_xV46Qs")
  },
  {
    title: "Engaging Reel #11",
    tag: "Reels",
    description: "Premium social media content",
    youtubeUrl: "https://youtu.be/dBl3VGGjbss",
    thumbnail: getYouTubeThumbnail("https://youtu.be/dBl3VGGjbss")
  },

  // === AI AVATAR - VERTICAL (9:16) ===
  {
    title: "AI Avatar Showcase #1",
    tag: "AI Avatar",
    description: "Cutting-edge AI avatar technology in action",
    youtubeUrl: "https://youtube.com/shorts/DAjqf7Pq1IU?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/DAjqf7Pq1IU?feature=share")
  },
  {
    title: "AI Avatar Demo #2",
    tag: "AI Avatar",
    description: "Next-generation digital human creation",
    youtubeUrl: "https://youtube.com/shorts/0wuSkPcdncc?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/0wuSkPcdncc?feature=share")
  },
  {
    title: "AI Avatar Experience #3",
    tag: "AI Avatar",
    description: "Revolutionary AI-powered avatar synthesis",
    youtubeUrl: "https://youtube.com/shorts/T05fZi-1xlU?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/T05fZi-1xlU?feature=share")
  },

  // === AI VIDEO - VERTICAL (9:16) ===
  {
    title: "AI Story #1",
    tag: "AI Video",
    description: "AI-powered narrative short",
    youtubeUrl: "https://youtube.com/shorts/QL1YvTrbtqw?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/QL1YvTrbtqw?feature=share")
  },
  {
    title: "AI Story #2",
    tag: "AI Video",
    description: "Innovative AI-generated storytelling",
    youtubeUrl: "https://youtube.com/shorts/6dqh31WycsU?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/6dqh31WycsU?feature=share")
  },
  {
    title: "AI Story #3",
    tag: "AI Video",
    description: "Creative AI narrative content",
    youtubeUrl: "https://youtube.com/shorts/fMHrowbC4iU?feature=share",
    thumbnail: getYouTubeThumbnail("https://youtube.com/shorts/fMHrowbC4iU?feature=share")
  },

  // === SHORT VIDEOS - HORIZONTAL (16:9) ===
  {
    title: "Ancient India Chronicles #1",
    tag: "Short Video",
    description: "Cinematic journey through ancient Indian history",
    youtubeUrl: "https://youtu.be/lwlsX2amRb4?si=W24Xsq584zmiQ2pt",
    thumbnail: getYouTubeThumbnail("https://youtu.be/lwlsX2amRb4?si=W24Xsq584zmiQ2pt")
  },
  {
    title: "Ancient India Heritage #2",
    tag: "Short Video",
    description: "Exploring the rich cultural heritage of ancient India",
    youtubeUrl: "https://youtu.be/B-RNTypoAmg?si=ZRdM-eEmbHI68V0F",
    thumbnail: getYouTubeThumbnail("https://youtu.be/B-RNTypoAmg?si=ZRdM-eEmbHI68V0F")
  },
  {
    title: "Ancient India Documentary #3",
    tag: "Short Video",
    description: "Deep dive into ancient Indian civilization",
    youtubeUrl: "https://www.youtube.com/watch?v=RzUl8LhwbVw&t=5s",
    thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=RzUl8LhwbVw&t=5s")
  },
  {
    title: "Ancient India Stories #4",
    tag: "Short Video",
    description: "Narrative exploration of India's ancient past",
    youtubeUrl: "https://www.youtube.com/watch?v=9_JBblqsh6M&t=2s",
    thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=9_JBblqsh6M&t=2s")
  },

  // === CLIENT WORKS - HORIZONTAL (16:9) ===
  {
    title: "Short Story Film",
    tag: "Client Works",
    description: "Compelling narrative-driven content",
    youtubeUrl: "https://youtu.be/dD-IptxY8zY",
    thumbnail: getYouTubeThumbnail("https://youtu.be/dD-IptxY8zY")
  },
  {
    title: "Short Story Film",
    tag: "Client Works",
    description: "Cinematic storytelling at its finest",
    youtubeUrl: "https://youtu.be/h440uiff2DY",
    thumbnail: getYouTubeThumbnail("https://youtu.be/h440uiff2DY")
  },
  {
    title: "Short Story Film",
    tag: "Client Works",
    description: "Engaging narrative experience",
    youtubeUrl: "https://youtu.be/Q_hWVa9gkjM",
    thumbnail: getYouTubeThumbnail("https://youtu.be/Q_hWVa9gkjM")
  },
  {
    title: "Short Story Film",
    tag: "Client Works",
    description: "Immersive storytelling journey",
    youtubeUrl: "https://youtu.be/KU4g7fCKA0w",
    thumbnail: getYouTubeThumbnail("https://youtu.be/KU4g7fCKA0w")
  },
  {
    title: "Short Story Film",
    tag: "Client Works",
    description: "Masterful narrative filmmaking",
    youtubeUrl: "https://youtu.be/frXYTt3nPLI",
    thumbnail: getYouTubeThumbnail("https://youtu.be/frXYTt3nPLI")
  },
];

export function WorksSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof VIDEO_PROJECTS[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
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

    const section = document.getElementById('work');
    if (section && observerRef.current) {
      observerRef.current.observe(section);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible]);

  const categories = ['All', 'Reels', 'AI Avatar', 'Short Video', 'AI Video', 'Client Works'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? VIDEO_PROJECTS 
    : VIDEO_PROJECTS.filter(p => p.tag === selectedCategory);

  return (
    <>
      <section id="work" className="py-12 md:py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h2
              className="text-white mb-2 will-change-transform"
              style={{
                fontFamily: 'Clash Display, sans-serif',
                fontSize: 'clamp(32px, 5vw, 64px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              Selected Works
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
              A showcase of {VIDEO_PROJECTS.length} projects across AI videos, storytelling, and viral reels
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 md:mb-10 flex flex-wrap gap-2 md:gap-3">
            {categories.map((category, idx) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-3 md:px-4 py-2 rounded-lg transition-all duration-300"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  background: selectedCategory === category 
                    ? 'rgba(192, 132, 252, 0.15)' 
                    : 'rgba(255, 255, 255, 0.03)',
                  border: selectedCategory === category 
                    ? '1px solid rgba(192, 132, 252, 0.4)' 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  color: selectedCategory === category ? '#c084fc' : 'rgba(255, 255, 255, 0.6)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                  transition: `all 0.3s, opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${idx * 0.05}s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${idx * 0.05}s`,
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((project, index) => {
              const videoId = getYouTubeVideoId(project.youtubeUrl);
              const isShort = project.youtubeUrl.includes('/shorts/');
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer will-change-transform"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    aspectRatio: isShort ? '9/16' : '16/9',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                    transition: `opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.05}s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.05}s, border-color 0.3s`,
                  }}
                  onClick={() => setSelectedVideo(project)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  {/* YouTube Thumbnail */}
                  <div className="absolute inset-0">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback sequence: maxresdefault -> hqdefault -> sddefault -> default
                        const target = e.target as HTMLImageElement;
                        const videoId = getYouTubeVideoId(project.youtubeUrl);
                        if (target.src.includes('maxresdefault')) {
                          target.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                        } else if (target.src.includes('hqdefault')) {
                          target.src = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
                        } else if (target.src.includes('sddefault')) {
                          target.src = `https://i.ytimg.com/vi/${videoId}/default.jpg`;
                        }
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)',
                      }}
                    />
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform duration-300 will-change-transform group-hover:scale-110"
                      style={{
                        background: 'rgba(192, 132, 252, 0.2)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(192, 132, 252, 0.4)',
                      }}
                    >
                      <Play className="text-white ml-1" size={20} fill="white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div
                      className="mb-1 md:mb-2 inline-block px-2 py-1 rounded"
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '9px',
                        textTransform: 'uppercase',
                        color: '#c084fc',
                        background: 'rgba(192, 132, 252, 0.1)',
                        border: '1px solid rgba(192, 132, 252, 0.3)',
                      }}
                    >
                      {project.tag}
                    </div>
                    {project.title !== "Short Story Film" && (
                      <h3
                        className="text-white mb-1 md:mb-2"
                        style={{
                          fontFamily: 'Clash Display, sans-serif',
                          fontSize: 'clamp(14px, 2.5vw, 24px)',
                        }}
                      >
                        {project.title}
                      </h3>
                    )}
                    <p
                      className="line-clamp-2"
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: 'clamp(10px, 1vw, 11px)',
                        color: 'rgba(255, 255, 255, 0.4)',
                        lineHeight: '1.6',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(192, 132, 252, 0.2)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(192, 132, 252, 0.4)',
                      }}
                    >
                      <ArrowUpRight className="text-white" size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Count */}
          <div 
            className="mt-8 md:mt-10 text-center"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            Showing {filteredProjects.length} of {VIDEO_PROJECTS.length} projects
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.youtubeUrl}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </>
  );
}