# HTML Multimedia (Images, Audio, Video)

## Key Concepts
- **Images:** `<img>` tag for embedding images. Use `src`, `alt`, `width`, `height`, `loading`, `srcset` for responsive and performant images.
- **Audio:** `<audio>` tag for sound files. Use `controls`, `autoplay`, `loop`, `muted`, and multiple `<source>` for format fallback.
- **Video:** `<video>` tag for video files. Use `controls`, `autoplay`, `loop`, `muted`, `poster`, `<track>` for captions/subtitles, and multiple `<source>` for format fallback.
- **Responsive Media:** Use `srcset`, `<picture>`, and CSS for responsive images and videos.
- **Accessibility:** Always provide `alt` text for images and captions for audio/video.
- **Performance:** Use lazy loading (`loading="lazy"`), optimize file sizes, and use modern formats (WebP, AVIF, MP3, MP4).

## Real-World Example
- Embedding a responsive image and a video player in a web page.
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Sample" width="400" loading="lazy">
</picture>
<video controls width="400" poster="preview.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <track kind="captions" src="captions_en.vtt" srclang="en" label="English">
  Sorry, your browser doesn't support embedded videos.
</video>
```
- Use `<audio>` for podcasts, music, and notifications.

## Best Practices
- Always use descriptive `alt` text for images.
- Provide captions and transcripts for audio/video for accessibility.
- Use multiple formats for broad browser support.
- Optimize media for web delivery (compression, lazy loading).

## Interview Q&A
**Q: What is the purpose of the `alt` attribute on images?**
A: Provides alternative text for accessibility and SEO, and is shown if the image fails to load.

**Q: How do you add controls to an audio or video element?**
A: Use the `controls` attribute to display play, pause, and volume controls.

**Q: How do you make images responsive?**
A: Use `srcset`, `<picture>`, and CSS (`max-width: 100%`).

## References
- [HTML Multimedia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## Relevant Image
![HTML Multimedia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img/html-multimedia.png)
