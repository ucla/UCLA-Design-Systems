---
handle: info-card-design
---
This card provides a brief snipped of information. Heading and either a summary or a list of related links is required.

#### When to use

**Collections of related content.** Cards help present a collection of related groups of content, like articles or sections of a website.

#### Anatomy

<img alt="Info Card Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/cards/info-card-anatomy.svg" />

**1. Title (required)**

**2. Supporting Text**

**3. Text Link**

**4. Border (required)**

**5. Container (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@cards--info'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/cards--info.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/cards--info"
  }
</script>