---
handle: callout-statistic-design
---
A statistic is a numerical value that describes a characteristic of a population or sample.

Elements include large number value with a description.

#### When to use

Statistics can highlight information about the performance and characteristics of a school. Some examples might include the number of students enrolled, the percentage of students who graduate, the average test scores, the student-to-teacher ratio, etc.

#### Anatomy

<img alt="Statistic Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/callouts/statistic-anatomy.svg" />

**1. Border (required)**

**2. Numeric Text (required)**

**3. Ranking Title (required)**

**4. Container (required)**

#### Best practices

When using rankings or statistics touts, limit use to three across per section.

Provide a source if the data or ranking comes from another program or institution.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@callouts--statistics'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/callouts--statistics.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/callouts--statistics"
  }
</script>