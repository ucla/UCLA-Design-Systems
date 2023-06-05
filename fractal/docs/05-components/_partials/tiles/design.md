---
handle: tiles-design
---
A tile is a component similar buttons but larger and can contain more information.

#### When to use

Tiles are flexible components that can be used for displaying additional information to a link. It is similar to card but not as complex.

#### Anatomy

![Tiles Anatomy](/theme-assets/img/docs/components/tiles/anatomy.svg)

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