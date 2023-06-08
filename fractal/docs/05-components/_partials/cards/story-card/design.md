---
handle: story-card-design
---
These cards support story previews with images. You can remove text elements such as the date, byline, or description. The headline and image are required.

#### When to use

For browsing articles, news, blog posts, or other editorial content.

#### Anatomy

![Basic Card Anatomy](/theme-assets/img/docs/components/cards/story-card-anatomy.svg)

**1. Image (required)**

**2. Date**

**3. Title (required)**

**4. Byline**

**5. Supporting Text**

**6. Container (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@cards--story'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/cards--story.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/cards--story"
  }
</script>