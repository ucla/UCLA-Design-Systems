---
handle: callout-factoid-design
---
A factoid is a piece of information that is used to highlight information.

Factoids should not begin with a prominent number or symbol ($, %).

#### When to use

A factoid should be used for something that is particularly relevant, interesting, or important in the context in which it is being discussed.

#### Anatomy

![Buttons Anatomy](/theme-assets/img/docs/components/callouts/factoid-anatomy.svg)

**1. Border (required)**

**2. Factoid Text (required)**

**3. Container (required)**

#### Best practices

When using rankings or statistacs touts, limit use to three across per section.

When using factoids, limit use to one per section

All three variations are designed to be responsive &mdash; they will stack on mobile.

Provide a source if the data or ranking comes from another program or institution.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@callouts'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/callouts.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/callouts"
  }
</script>