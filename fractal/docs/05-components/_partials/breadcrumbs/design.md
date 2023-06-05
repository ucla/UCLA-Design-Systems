---
handle: breadcrumbs-design
---
A breadcrumb provides a trail of links indicating the user's current location within a website's hierarchy. It typically appears near the top of a web page or at the top of a content section, serving as a secondary navigation aid.

#### When to use

Use breadcrumbs on your website if you have a hierarchical structure of pages, such as categories and subcategories.

#### Anatomy

![Breadcrumbs Anatomy](/theme-assets/img/docs/components/breadcrumbs/anatomy.svg)

**1. Breadcrumb**
  - Includes link to home page and every subsequent tier up to 4 that leads to current

**2. Separator**
  - Static "/" used to separate breadcrumb items

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@breadcrumbs'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/breadcrumbs.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/breadcrumbs"
  }
</script>