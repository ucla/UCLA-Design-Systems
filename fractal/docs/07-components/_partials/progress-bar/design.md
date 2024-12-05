---
handle: progress-bar-design
---
A progress bar component visually communicates the status of an ongoing processes.

#### When to use

A progress bar should be used to visually indicate task completion, provide feedback during lengthy operations, guide users through multi-step processes, or display percentage metrics.

#### Anatomy

<img alt="Alerts Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/progress-bar/anatomy.svg" />

**1. Label (required)**

**2. Assistive text**

Assistive or contextual information about the process taking place.

**3. Bar (required)**

Bar indicates how much the process has progressed.

**4. Track (required)**

The area that the bar fills or moves across.

**5. Value**

A percentage, fraction, or number to indicate progress.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@progress-bar'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/progress-bar.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/progress-bar"
  }
</script>