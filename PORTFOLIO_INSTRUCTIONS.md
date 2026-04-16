# Portfolio Customization Guide

## 🎬 Your Video Portfolio is Ready!

This is a cinematic, noir-inspired portfolio website featuring:
- **Custom cursor** with smooth animations
- **Glassmorphism effects** throughout
- **Film grain texture** overlay
- **AI Videos, Normal Videos, and Reels sections**
- **Smooth scroll animations**
- **Fully responsive design**

---

## ✏️ How to Customize Your Content

### 1. **Add Your Videos** (MOST IMPORTANT)

Open `/src/app/components/WorksSection.tsx` and find the `VIDEO_PROJECTS` array at the top of the file.

Replace the placeholder YouTube URLs with your actual video links:

```typescript
const VIDEO_PROJECTS = [
  {
    title: "Your Video Title",
    tag: "AI Video", // or "Video Editing", "Short-Form", etc.
    description: "Your video description",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID", // Paste any YouTube URL format
    thumbnail: "https://your-thumbnail-url.jpg" // Optional: custom thumbnail
  },
  // Add more videos...
];
```

**Supported YouTube URL formats:**
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

---

### 2. **Update Personal Information**

#### **Navigation** (`/src/app/components/Navigation.tsx`)
- Line 23: Change `"Saurav"` to your name
- Line 42: Update location: `"San Francisco, CA"` to your city

#### **Hero Section** (`/src/app/components/Hero.tsx`)
- Lines 23-41: Customize your headline and subtitle
- Current headline: "Video Editor & AI Creator"

#### **About Section** (`/src/app/components/AboutSection.tsx`)
- Lines 8-11: Update your timeline/work history
- Lines 68-88: Edit "What I Do" quote
- Lines 103-117: Update your background story
- Lines 132-146: Modify your approach description
- Line 200: Change your name

#### **Footer** (`/src/app/components/Footer.tsx`)
- Lines 6-11: Update social media links
- Replace `mailto:hello@saurav.com`, Instagram, YouTube, X (Twitter) URLs
- Line 94: Update copyright name

---

### 3. **Add Your Portrait Photo**

In `/src/app/components/AboutSection.tsx`, line 195:
```typescript
<img
  src="YOUR_PHOTO_URL_HERE"
  alt="Your Name - Video Editor & AI Creator"
  className="w-full h-full object-cover"
/>
```

---

### 4. **Customize Services**

Edit `/src/app/components/ServicesSection.tsx` starting at line 3:
- Modify service names, descriptions, and emojis
- Add or remove services as needed

---

### 5. **Update Marquee Text**

In `/src/app/components/Marquee.tsx`, line 2:
- Change the scrolling text to showcase your skills
- Format: "SKILL 1 · SKILL 2 · SKILL 3"

---

## 🎨 Design Customization

### Color Scheme
The design uses:
- **Black background**: `#000000`
- **White text**: `#ffffff`
- **Amber accent**: `#e8a945`

To change the amber accent color, search and replace `#e8a945` across all files.

### Fonts
Current fonts (imported in `/src/styles/fonts.css`):
- **Clash Display** - Headlines
- **DM Mono** - Body text
- **Cormorant Garamond** - Italic accents

---

## 📱 Responsive Breakpoints

The site is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Desktop**: ≥ 768px

---

## 🎥 Video Categories

Organize your work with these tags:
- `"AI Video"` - AI-generated content (Runway, Sora, Kling)
- `"Video Editing"` - Traditional editing projects
- `"Color Grading"` - Color correction work
- `"Motion Graphics"` - After Effects, animations
- `"Short-Form"` - TikTok, Reels, Shorts
- `"Storytelling"` - Narrative/documentary work

---

## 🚀 Quick Start Checklist

- [ ] Replace all 6 video URLs in `WorksSection.tsx`
- [ ] Update your name in Navigation and Footer
- [ ] Change location in Navigation
- [ ] Update Hero headline and subtitle
- [ ] Edit About section (background, approach, timeline)
- [ ] Add your portrait photo
- [ ] Update social media links
- [ ] Customize services if needed
- [ ] Review and update all text content

---

## 💡 Tips

1. **High-quality thumbnails**: YouTube automatically provides thumbnails, but you can upload custom ones for better control
2. **Video descriptions**: Keep them concise (1-2 sentences)
3. **Tags**: Use consistent tags for easy filtering
4. **Timeline**: Keep it to 3-5 entries for readability
5. **Mobile testing**: Always test on mobile devices

---

## 🔗 Placeholder Information

The current site uses placeholder data. Make sure to replace:
- Video URLs (currently pointing to a demo video)
- Your name "Saurav"
- Location "San Francisco, CA"
- Email and social links
- Portrait photo
- All text content in Hero, About, and Services sections

---

**Need help?** All components are modular and well-commented. Look for `// ✏️ EDIT` comments in the code for quick customization points.

Enjoy your new portfolio! 🎬✨
