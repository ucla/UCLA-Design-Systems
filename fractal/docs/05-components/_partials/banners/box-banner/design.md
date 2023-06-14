---
handle: box-banner-design
---
The box banner is a combination of a text box overlapped on top of an image.

#### When to use

Less emphasis on the image or when using a smaller, less horizontal image.

#### Anatomy

<img alt="Box Banner Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/banners/box-banner-anatomy.svg" />

**1. Title (required)**

**2. Text box container**

**3. Button**

**4. Text (required)**

**5. Image container (required)**

#### Examples

<select class="ucla-field__select my-5" onChange="changeIframe(value)">
  <option value="banners--box">Default Box Banner</option>
  <option value="banners--box-right">Box Banner Right</option>
  <option value="banners--box-white-background">Box Banner White Background</option>
</select>
<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

<div id="banners--box" class="design-code-examples">

```html
{{render '@banners--box'}}
```

</div>
<div id="banners--box-right" hidden class="design-code-examples">

```html
{{render '@banners--box-right'}}
```

</div>
<div id="banners--box-white-background" hidden class="design-code-examples">

```html
{{render '@banners--box-white-background'}}
```

</div>

#### Best practices

Use high-quality images that are visually striking and engaging. This will help grab the user's attention and set the tone for the page.

Choose images that are relevant to the page's message and help communicate the message or purpose.

Use clear, concise text that is easy to read and understand. This will help grab the user's attention and make it easy for them to understand the message of the banner.

Keep the text short and to the point. A text banner with too much text can be overwhelming for the user and make it difficult for them to understand the message.

<script>
  if (window.frctl.env === "static") {
    document.getElementById("docIframe").src = "../../../components/preview/banners--box.html"
  } else {
    document.getElementById("docIframe").src = "../../../components/preview/banners--box"
  }
</script>