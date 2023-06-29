---
handle: secondary-story-card-design
---
These cards support lower profile stories. Images are optional. We recommend using the slider component on mobile to minimize the use of vertical screen space.

#### When to use

For browsing articles, news, blog posts, or other editorial content.

Alternative horizontal format to story card with less emphasis on photo.

#### Anatomy

<img alt="Secondary Story Card Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/cards/secondary-story-card-anatomy.svg" />

**1. Border (required)**

**2. Image Link**

**3. Container (required)**

**4. Date**

**5. Title Link (required)**

**6. Byline**

**7. Supporting Text**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@cards--secondary-story'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/cards--secondary-story.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/cards--secondary-story"
  }
</script>