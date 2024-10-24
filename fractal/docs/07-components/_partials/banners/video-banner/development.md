---
handle: video-banner-development
---
The video banner is a video that plays in the background while having other elements on top of it. Building the banner requires the following structure:

<ul class="docs-list">
  <li><code>.ucla-banner__video</code> - Container for the banner
    <ul>
      <li><code>.ucla-banner__video_overlay.ucla-opacity-60.ucla-has-background-black</code> - Colored overlay to darken
        video</li>
      <li><code>button.ucla-banner__video_button-control</code> - Video controls to pause/play<ul>
          <li><code>svg</code> - Play/Pause icon</li>
        </ul>
      </li>
      <li><code>video</code> - Video player
        <ul>
          <li><code>source[src=*.webm]</code> - webm video file (optional but recommended)</li>
          <li><code>source[src=*.mp4]</code> - mp4 video file (required)</li>
        </ul>
      </li>
      <li><code>.ucla-banner__video_content</code> - Content inside the video banner</li>
    </ul>
  </li>
</ul>

<div class="ucla-dev-example-break-container">
<div class="ucla-banner__video" style="min-height: 436px">
  <span aria-hidden="true" class="ucla-banner__video_overlay ucla-opacity-60 ucla-has-background-black"></span>
  <button class="ucla-banner__video_button-control playing">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" title="Pause Video" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_0_1)">
        <circle cx="19.9994" cy="19.9994" r="19.9994" fill="black" fill-opacity="0.65" />
      </g>
      <path d="M13 29H18V11H13V29Z" fill="white" />
      <path d="M22 29H27V11H22V29Z" fill="white" />
      <defs>
        <filter id="filter0_b_0_1" x="-4" y="-4" width="47.9988" height="47.9988" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape" />
        </filter>
      </defs>
    </svg>
  </button>
  <video autoplay loop muted>
    <source src="{{path '/theme-assets/video/video-example.webm'}}" />
    <source src="{{path '/theme-assets/video/video-example.mp4'}}" />
  </video>
  <div class="ucla-banner__video_content py-9 mx-auto">
    <div class="container">
      <div class="ucla-grid cols-2">
        <h2 class="ucla-text-color-white">Lorem
          ipsum dolor sit amet consectetuer adipiscing</h2>
      </div>
    </div>
  </div>
</div>
</div>

```html
<div class="ucla-banner__video" style="min-height: 436px">
  <span aria-hidden="true" class="ucla-banner__video_overlay ucla-opacity-60 ucla-has-background-black"></span>
  <button class="ucla-banner__video_button-control playing">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" title="Pause Video" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_0_1)">
        <circle cx="19.9994" cy="19.9994" r="19.9994" fill="black" fill-opacity="0.65" />
      </g>
      <path d="M13 29H18V11H13V29Z" fill="white" />
      <path d="M22 29H27V11H22V29Z" fill="white" />
      <defs>
        <filter id="filter0_b_0_1" x="-4" y="-4" width="47.9988" height="47.9988" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape" />
        </filter>
      </defs>
    </svg>
  </button>
  <video autoplay loop muted>
    <source src="{{path '/theme-assets/video/video-example.webm'}}" />
    <source src="{{path '/theme-assets/video/video-example.mp4'}}" />
  </video>
  <div class="ucla-banner__video_content py-9 mx-auto">
    <div class="container">
      <div class="ucla-grid cols-2">
        <h2 class="ucla-text-color-white">Lorem
          ipsum dolor sit amet consectetuer adipiscing</h2>
      </div>
    </div>
  </div>
</div>
```

#### Video Banner Content

You can insert any content in the `.ucla-banner__video_content`. However, it is recommended to use the [Grid System]({{path '/docs/layout/grid'}}) inside the element and space it out using the [spacing]({{path '/docs/layout/spacing'}}) reference in the Developer Documenation tab.

```html
<!-- ... -->
  <div class="ucla-banner__video_content py-9 mx-auto">
    <div class="container">
      <!-- ... -->
    </div>
  </div>
<!-- ... -->
```

#### Video Banner Height

The `min-height` is set as an inline-style on the container element `.ucla-banner__video`. We did this so you can have the flexibility to set the height you need.

##### Responsive Height

To have an adjustable height, you will need to do so in a CSS file with media-queries. *Note: You must remove the inline-style so that it doesn't override the CSS*

```css
.ucla-banner__video {
  min-height: /* your height here */
}

@media (/* your target media */) {
  .ucla-banner__video {
    min-height: /* your height here */
  }
}
```

#### Video Files

It is recommended to compress the video file as much as possible without reducing quality. Fortunately the `<video>` element supports multiple sources as a child. [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

You can use any video file but make sure to use `mp4` as a fallback just in case your desired video format isn't supported by a browser.

```html
<!-- ... -->
  <video autoplay loop muted>
    <source src="/video-example.webm" />
    <source src="/video-example.mp4" />
  </video>
<!-- ... -->
```

#### Overlay

To meet WCAG 2.1 AA, the contrast ratio of text needs to be at least 4.5:1. You must adjust the overlay so that it meets this requirement by adjusting the `.ucla-opacity-{number}` class. Refer to our [Colors]({{path '/docs/style-guide/colors'}}) for opacity settings.

<div class="ucla-dev-example-break-container">
<div class="ucla-banner__video" style="min-height: 436px">
  <span aria-hidden="true" class="ucla-banner__video_overlay ucla-opacity-0 ucla-has-background-black"></span>
  <button class="ucla-banner__video_button-control playing">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" title="Pause Video" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_0_1)">
        <circle cx="19.9994" cy="19.9994" r="19.9994" fill="black" fill-opacity="0.65" />
      </g>
      <path d="M13 29H18V11H13V29Z" fill="white" />
      <path d="M22 29H27V11H22V29Z" fill="white" />
      <defs>
        <filter id="filter0_b_0_1" x="-4" y="-4" width="47.9988" height="47.9988" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape" />
        </filter>
      </defs>
    </svg>
  </button>
  <video autoplay loop muted>
    <source src="{{path '/theme-assets/video/video-example.webm'}}" />
    <source src="{{path '/theme-assets/video/video-example.mp4'}}" />
  </video>
  <div class="ucla-banner__video_content py-9 mx-auto">
    <div class="container">
      <div class="ucla-grid">
        <div class="ucla-ribbon ucla-ribbon--brand"><h2 class="ucla-ribbon__text">Lorem
          ipsum dolor sit amet consectetuer adipiscing</h2></div>
        </div>
    </div>
  </div>
</div>
</div>

```html
<!--...-->
  <span aria-hidden="true" class="ucla-banner__video_overlay ucla-opacity-0 ucla-has-background-black"></span>
<!--...-->
```