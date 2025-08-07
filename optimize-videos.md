# Video Optimization Guide

## Using FFmpeg for Video Compression

If you need to compress the videos to improve loading times, you can use FFmpeg. Here are the recommended commands:

### 1. Install FFmpeg
**Windows:**
```bash
# Download from https://ffmpeg.org/download.html
# Or use chocolatey: choco install ffmpeg
```

**macOS:**
```bash
brew install ffmpeg
```

**Linux:**
```bash
sudo apt update
sudo apt install ffmpeg
```

### 2. Compress MP4 Videos

**For 1080p videos (recommended for hero sections):**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart output.mp4
```

**For 720p videos (smaller file size):**
```bash
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart output.mp4
```

**For web-optimized videos (smallest file size):**
```bash
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 96k -movflags +faststart output.mp4
```

### 3. Convert to WebM (Alternative Format)

**For better compression:**
```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 128k output.webm
```

### 4. Recommended Video Specifications

**For Hero Section Videos:**
- Resolution: 1920x1080 or 1280x720
- Bitrate: 2-4 Mbps for 1080p, 1-2 Mbps for 720p
- Format: MP4 with H.264 codec
- Target file size: 5-10MB maximum
- Duration: 10-30 seconds for hero sections

**For Background Videos:**
- Resolution: 1280x720
- Bitrate: 1-2 Mbps
- Format: MP4 with H.264 codec
- Target file size: 3-5MB maximum

### 5. Batch Processing Script

Create a script to process all videos at once:

**Windows (batch file):**
```batch
@echo off
mkdir optimized
ffmpeg -i "The Acres Hero Section.mp4" -vf scale=1280:720 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart "optimized/The Acres Hero Section.mp4"
ffmpeg -i "Citywalk-video.mp4" -vf scale=1280:720 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart "optimized/Citywalk-video.mp4"
```

**Linux/macOS (bash script):**
```bash
#!/bin/bash
mkdir -p optimized

# Process The Acres video
ffmpeg -i "The Acres Hero Section.mp4" \
  -vf scale=1280:720 \
  -c:v libx264 -crf 23 -preset medium \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "optimized/The Acres Hero Section.mp4"

# Process City Walk video
ffmpeg -i "Citywalk-video.mp4" \
  -vf scale=1280:720 \
  -c:v libx264 -crf 23 -preset medium \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "optimized/Citywalk-video.mp4"
```

### 6. Current Large Video Files

The following videos should be optimized:

1. `/Meraas/The Acres Hero Section.mp4` (18MB)
2. `/Meraas/City Walk/Citywalk-video.mp4` (13MB)
3. `/Meraas/NASG/NASG-1920x1080-WEB Stack Video_0.mp4`
4. `/Meraas/MJL/MJL_Development Page and MJL Residence page.mp4`
5. `/Meraas/Bluewaters/Bluewaters_Drone-.mp4`
6. `/deyaar/ELEVE/Eleve_Launch_Video_60s_FINAL_HD-1.mp4`

### 7. Quality Settings Explained

- **CRF (Constant Rate Factor):** 18-28 range
  - 18: Visually lossless
  - 23: High quality (recommended)
  - 28: Good quality, smaller file
  - 30+: Lower quality, much smaller file

- **Preset:** Controls encoding speed vs compression
  - `slow`: Better compression, slower encoding
  - `medium`: Balanced (recommended)
  - `fast`: Faster encoding, larger file

### 8. Testing Compressed Videos

After compression, test the videos:
1. Check file sizes (should be 5-10MB max)
2. Verify visual quality is acceptable
3. Test playback on different devices
4. Ensure autoplay still works
5. Check loading times on slow connections

### 9. Implementation Notes

If you compress the videos:
1. Replace the original files with optimized versions
2. Keep the same file names to avoid code changes
3. Test thoroughly before deployment
4. Consider implementing progressive loading for very large videos

### 10. Alternative Solutions

If video optimization is not possible:
1. Use static images as fallbacks
2. Implement lazy loading
3. Use a CDN for video delivery
4. Consider using video hosting services (YouTube, Vimeo) 