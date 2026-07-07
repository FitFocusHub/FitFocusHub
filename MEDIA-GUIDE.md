# Media Folder Usage Guide

## Quick Start

### Step 1: Files Rakho
Apni files `public/media/` folder mein rakho:

```
public/media/
├── videos/
│   ├── my-video.mp4
│   └── my-video-thumb.jpg
├── thumbnails/
│   └── my-thumbnail.jpg
├── posters/
│   └── my-poster.jpg
├── logos/
│   └── my-logo.png
├── business-cards/
│   └── my-card.jpg
└── projects/
    └── my-project.jpg
```

### Step 2: URL Generate Karo
Browser mein ye type karo (development ke liye):
```
http://localhost:3000/media/videos/my-video.mp4
```

### Step 3: JSON Mein Paste Karo
`src/data/videos.json` mein:
```json
{
  "id": 1,
  "title": "My Video",
  "videoUrl": "/media/videos/my-video.mp4",
  "thumbnail": "/media/thumbnails/my-video-thumb.jpg"
}
```

---

## Production Ke Liye (GitHub, Vercel, Firebase)

### Problem:
- GitHub pe 100MB se badi file upload nahi hoti
- Vercel pe deployment slow ho jayega

### Solution:
Badi files cloud pe upload karo:

#### Option 1: YouTube (Free)
```json
{
  "videoUrl": "https://www.youtube.com/embed/VIDEO_ID"
}
```

#### Option 2: Cloudinary (Free Tier)
1. https://cloudinary.com pe signup karo
2. Video upload karo
3. URL copy karo:
```json
{
  "videoUrl": "https://res.cloudinary.com/demo/video/upload/sample.mp4"
}
```

#### Option 3: Vimeo
```json
{
  "videoUrl": "https://player.vimeo.com/video/VIDEO_ID"
}
```

---

## Examples

### Video Add Karna
```json
// src/data/videos.json
{
  "id": 7,
  "title": "My New Video",
  "description": "Video description here",
  "category": "Promotional",
  "duration": "2:30",
  "thumbnail": "/media/thumbnails/new-video-thumb.jpg",
  "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ"
}
```

### Thumbnail Add Karna
```json
// src/data/thumbnails.json
{
  "id": 8,
  "title": "My Thumbnail",
  "category": "Gaming",
  "image": "/media/thumbnails/gaming-thumb.jpg"
}
```

### Project Screenshot Add Karna
```json
// src/data/projects.json
{
  "id": 11,
  "name": "My New Project",
  "thumbnail": "/media/projects/my-project.jpg",
  "gallery": [
    "/media/projects/my-project-1.jpg",
    "/media/projects/my-project-2.jpg"
  ]
}
```

---

## File Naming Convention

| Type | Format | Example |
|------|--------|---------|
| Videos | `name.mp4` | `brand-promo.mp4` |
| Thumbnails | `name-thumb.jpg` | `brand-promo-thumb.jpg` |
| Posters | `name-poster.jpg` | `sale-poster.jpg` |
| Logos | `name-logo.png` | `tech-logo.png` |
| Projects | `name.jpg` | `gym-website.jpg` |

---

## Quick Commands

### Local Development
```bash
npm run dev
# Then visit: http://localhost:3000/media/
```

### Check Files
```bash
# Windows
dir public\media\videos

# Mac/Linux
ls public/media/videos
```
