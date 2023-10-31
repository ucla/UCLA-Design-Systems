---
handle: ribbon-highlight-design
---
Highlight ribbons are used to callout a piece fact, ranking, or accolade that is secondary to the main content.

#### When to use

This is used for information that is secondary to the
main content being communicated as opposed to Stat Bars or Factiod components that are the main content.

#### Anatomy

<img alt="Image Banner Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/ribbon/ribbon-highlight-anatomy.svg" />

**1. Text (required)**

**2. Background color (required)**


#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@ribbons--highlight'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/ribbons--highlight.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/ribbons--highlight"
  }
</script>

#### Best Practices

Limit 1-2 ribbons per page and focus on your most important message.