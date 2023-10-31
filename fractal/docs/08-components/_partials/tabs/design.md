---
handle: tab-doc-design
---
Tabs provide the ability to navigate different views or facets of the same content. 

#### When to use

Use tabs to group related information into different categories, helping to reduce cognitive load.

#### Anatomy

<img alt="Tabs Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/tabs/anatomy.svg" />

**1. Title (required)**

**2. Yellow Border - Active (required)**

**3. Container (required)**

**4. Gray Border - Inactive (required)**

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@tabs'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/tabs.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/tabs"
  }
</script>

#### Best Practices

Limit to 2-6 tabs within each page or section.

Tabs should never be used for primary navigation. If tabs become too complex, consider using a standard navigation pattern.
