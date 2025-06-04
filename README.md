# VLC Web Player - README

![Screenshot 2025-06-04 180559](https://github.com/user-attachments/assets/cfced79f-a213-4863-8c22-0f8d6e00baca)

## Overview
A lightweight web-based media player inspired by VLC, with playback controls, speed adjustment, and volume management.

## Live Demo
🔗 [View Live Demo](https://capable-jelly-134c81.netlify.app)


## Features

- **Media Playback**:
  - Supports video and audio files
  - Play/pause functionality
  - Time display (current time/duration)

- **Playback Controls**:
  - Speed adjustment (+/- 0.1x increments)
  - Volume control (mute/unmute, volume up/down)
  - Keyboard shortcuts (space, arrows, mute)

- **File Management**:
  - Open local media files
  - File type validation

- **UI Features**:
  - Clean, responsive interface
  - Visual feedback for controls
  - Loading/error states

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6)
- Font Awesome icons

## Setup Instructions

1. Open in browser:
- Option 1: Run a local server (recommended):
  ```bash
  npx live-server
  ```
- Option 2: Open `index.html` directly in browser

## Usage

1. Click "Open File" to select a media file
2. Use the controls to:
   - Adjust playback speed
   - Change volume
   - Mute/unmute
3. Keyboard shortcuts:
   - Space: Play/Pause
   - Arrow Up/Down: Volume control
   - Arrow Left/Right: Seek ±5 seconds
   - M: Mute/Unmute

## Browser Support

Works best in modern browsers (Chrome, Firefox, Edge). For local file access, Chrome is recommended.

## License

MIT License - Free to use and modify

## Future Improvements

- Playlist support
- Fullscreen mode
- Subtitles support
- More keyboard shortcuts
- Mobile responsiveness enhancements
