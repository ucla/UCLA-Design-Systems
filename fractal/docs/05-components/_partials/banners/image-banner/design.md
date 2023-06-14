---
handle: image-banner-design
---
An image banner displays an image at the top of a web page or application. The banner image is typically a large, full-width image that spans the top of the page and serves as a visual header or introduction to the page's content.'

#### When to use

Image banners are often used to display a hero image or other visually striking content that helps to grab the user's attention and set the tone for the page.

#### Anatomy

<img alt="Image Banner Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/banners/img-banner-anatomy.svg" />

**1. Image container (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@banners'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/banners.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/banners"
  }
</script>

#### Best practices

Use high-quality images that are visually striking and engaging. This will help grab the user's attention and set the tone for the page.

Choose images that are relevant to the page's content and help to communicate the page's message or purpose.