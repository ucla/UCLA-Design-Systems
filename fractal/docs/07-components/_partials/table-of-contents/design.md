---
handle: toc-design
---
A Table of Contents is a navigational component that lists key sections or headings within a single page, allowing users to jump directly to each section using anchor links (jump links).

#### When to use

Use a TOC when a page contains long-form content—such as documentation, reports, blog posts, or guides—where users benefit from a quick overview and the ability to navigate efficiently between sections without scrolling.

#### Anatomy

<img alt="Table of Contents Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/table-of-contents/anatomy.svg" />

**1. Title**

**2. Jump Link**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@table-of-contents'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/table-of-contents.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/table-of-contents"
  }
</script>