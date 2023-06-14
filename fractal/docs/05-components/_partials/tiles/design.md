---
handle: tiles-design
---
A tile is a link component similar to buttons but larger and can contain contextual information on the link. It is also similar to card but not as complex.

#### When to use

Use to feature a small number of link destinations more prominently as core content.

#### Anatomy

<img alt="Tiles Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/tiles/anatomy.svg" />

**1. Yellow Border (required)**

**2. Title (required)**

**3. Text**

Additional description or contextual text if needed.

**4. Container (required)**

The entire element is clickable to a single link.

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@tile'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/tile.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/tile"
  }
</script>