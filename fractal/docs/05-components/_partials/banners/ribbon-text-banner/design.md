---
handle: ribbon-text-banner-design
---
A ribbon text banner is a combination of the ribbon banner and the text banner.

#### When to use

The ribbon text banner is used on the home page or landing page of the website.

#### Anatomy

<img alt="Ribbon Text Banner Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/banners/ribbon-text-banner-anatomy.svg" />

**1. Ribbon (required)**

**2. Image (required)**

**3. Text Container (required)**

**4. Button**

**5. Text (required)**

#### Examples

<select class="ucla-field__select my-5" onChange="changeIframe(value)">
  <option value="banners--ribbon-text">Default Ribbon Text</option>
  <option value="banners--ribbon-text-white-background">Ribbon Text White Background</option>
</select>
<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>
<div id="banners--ribbon-text" class="design-code-examples">

```html
{{render '@banners--ribbon-text'}}
```

</div>
<div id="banners--ribbon-text-white-background" hidden class="design-code-examples">

```html
{{render '@banners--ribbon-text-white-background'}}
```

</div>

#### Best practices

Use high-quality images that are visually striking and engaging. This will help grab the user's attention and set the tone for the page.

Choose images that are relevant to the page's content and help communicate the message or purpose.

Limit 1 - 2 ribbons per page and focus on your most  important message.

Keep ribbon length between 25 - 30 characters and between 3 - 5 lines.

Use clear, concise text that is easy to read and understand. This will help grab the user's attention and make it easy for them to understand the message of the banner.

Keep the text short and to the point. A text banner with too much text can be overwhelming for the user and make it difficult for them to understand the message.

<script>
  if (window.frctl.env === "static") {
    document.getElementById("docIframe").src = "../../../components/preview/banners--ribbon-text.html"
  } else {
    document.getElementById("docIframe").src = "../../../components/preview/banners--ribbon-text"
  }
</script>