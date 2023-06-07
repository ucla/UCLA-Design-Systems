---
handle: featured-story-card-design
---
This card supports a leading or featured story. Use one per page. Headline, summary and image are required. Date and byline are optional.

#### When to use

To highlight a discrete piece of content outside of a row or series.

#### Anatomy

![Basic Card Anatomy](/theme-assets/img/docs/components/cards/featured-story-card-anatomy.svg)

**1. Date**

**2. Title Link (required)**

**3. Byline**

**4. Supporting Text**

**5. Text Container (required)**

**6. Image Link (required)**


#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@cards--featured-story'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/cards--featured-story.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/cards--featured-story"
  }
</script>