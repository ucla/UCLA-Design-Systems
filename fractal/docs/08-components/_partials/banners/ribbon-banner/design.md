---
handle: ribbon-banner-design
---
A ribbon banner is an image banner that has a text ribbon overlaid on top of it. THe text ribbon typically contains a short message or tagline that is related to the image, and is positioned in a prominent location on the banner.

#### When to use

Used to convey additional information or context to the user, and can help grab their attention and draw them into the page's content.

#### Anatomy

<img alt="Ribbon Banner Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/banners/ribbon-banner-anatomy.svg" />

**1. Ribbon (required)**

**2. Image container (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>
<div id="banners--ribbon" class="design-code-examples">

```html
{{render '@banners--ribbon'}}
```

</div>

#### Best practices

Use high-quality images that are visually striking and engaging. This will help grab the user's attention and set the tone for the page.

Choose images that are relevant to the page's content and help communicate the message or purpose.

Limit 1 - 2 ribbons per page and focus on your most  important message.

Keep ribbon length between 25 - 30 characters and between 3 - 5 lines.

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/banners--ribbon.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/banners--ribbon"
  }
</script>