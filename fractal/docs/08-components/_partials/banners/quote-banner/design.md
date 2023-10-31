---
handle: quote-banner-design
---
A quote banner is a type of text banner that displays a quote in large, prominent text that spans the width of the banner.

#### When to use

Quote banners can be used to highlight a quote of someone notable that is related to the page's content.

#### Anatomy

<img alt="Quote Banner Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/banners/quote-banner-anatomy.svg" />

#### Examples


<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@banners--quote'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/banners--quote.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/banners--quote"
  }
</script>