---
handle: callout-ranking-design
---
Rankings are lists or ratings that rank universities based on various criteria, such as academic reputation, research output, quality of education, student satisfaction, and graduate employability.

#### When to use

School rankings are typically published by organizations or publications that specialize in evaluating and comparing schools. These rankings can be published at regular intervals, such as annual or quarterly, and they are often used to highlight the school.

#### Anatomy

<img alt="Ranking Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/callouts/ranking-anatomy.svg" />

**1. Border (required)**

**2. Ranking (required)**

**3. Ranking Title (required)**

**4. Ranking Source (required)**

**5. Container (required)**

#### Best practices

When using rankings or statistacs touts, limit use to three across per section.

Provide a source if the data or ranking comes from another program or institution.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@callouts--ranking'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/callouts--ranking.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/callouts--ranking"
  }
</script>