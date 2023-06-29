---
handle: text-banner-design
---
A text banner displays a banner of text on a web page. The text banner typically spans the width of the page and is used to display a short message or tagline that is related to the page's content.

#### When to use

Text banners are used when you want to grab the user's attention and provide them with a short message or tagline that is related to the page's content.

#### Anatomy

<img alt="Text Banner Anatomy" src="/theme-assets/img/docs/components/banners/text-banner-anatomy.svg" class="ucla-break-container" />

**1. Text Container (required)**

**2. Title (required)**

**3. Button**

**4. Text (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@banners--text'}}
```

#### Best practices

Use clear, concise text that is easy to read and understand. This will help grab the user's attention and make it easy for them to understand the message of the banner.

Keep the text short and to the point. A text banner with too much text can be overwhelming for the user and make it difficult for them to understand the message.

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/banners--text.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/banners--text"
  }
</script>