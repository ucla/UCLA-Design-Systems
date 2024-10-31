---
handle: video-banner-design
---
The video banner contains a self-hosted video that extends the width of the page.

#### When to use
Use the video banner component to feature a video as a banner on a page.

#### Anatomy

<img alt="Video Banner Anatomy" src="/theme-assets/img/docs/components/banners/video-banner-anatomy.svg" class="ucla-break-container" />

**1. Video (required)**

**2. Play/Pause Button (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@banners--video'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/banners--video.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/banners--video"
  }
</script>