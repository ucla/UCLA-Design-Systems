---
handle: textareafield-design
---
A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.

#### When to use

A user needs to input text-based information that is longer or cannot be divided into discrete fields.

#### Anatomy

<img alt="Textarea Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/forms/textbox-field-anatomy.svg" />

**1. Label**

**2. Placeholder**

**3. Assistive Text**

**4. Container (required)**


#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@forms--textarea'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/forms--textarea.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/forms--textarea"
  }
</script>

#### Best Practices

Use placeholders or contextual tips in form fields to help people provide the right data.
