# Media Folder

Yahan apni videos, images, thumbnails rakho.

## Folder Structure

```
media/
├── videos/          ← Video files (.mp4, .webm)
├── thumbnails/      ← Thumbnail images (.jpg, .png)
├── posters/         ← Poster designs
├── logos/           ← Logo files
├── business-cards/  ← Business card designs
└── projects/        ← Project screenshots
```

## Kaise Use Karein

### Step 1: File Rakho
Apni file is folder mein rakho:
```
public/media/videos/my-video.mp4
```

### Step 2: URL Copy Karo
Browser mein ye type karo:
```
http://localhost:3000/media/videos/my-video.mp4
```

### Step 3: JSON Mein Paste Karo
`src/data/videos.json` mein URL daal do:
```json
{
  "videoUrl": "/media/videos/my-video.mp4"
}
```

## Important Note

- **Local Development:** `/media/videos/...` path kaam karega
- **Production (GitHub/Vercel):** Bade video files mat upload karo
  - YouTube/Vimeo pe upload karo
  - URL paste karo JSON mein
  - Example: `"videoUrl": "https://youtube.com/watch?v=xyz"`

## File Size Limits

| Platform | Max Size |
|----------|----------|
| GitHub | 100 MB per file |
| Vercel | 100 MB per deployment |
| Firebase | 1 GB per file |

**Recommendation:** Videos ko YouTube pe upload karo, URL JSON mein daalo.
