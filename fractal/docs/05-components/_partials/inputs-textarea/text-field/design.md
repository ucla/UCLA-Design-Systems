---
handle: textfield-design
---

A text input allows users to enter any combination of letters, numbers, or symbols.

#### When to use

When you need to receive brief text-based input from a user.

#### Anatomy

![Text Field Anatomy](/theme-assets/img/docs/components/forms/text-field-anatomy.svg)

**1. Label**

**2. Placeholder**

**3. Leading Icon**

**4. Assistive Text**

**5. Text box (required)**

**6. Trailing Icon**


#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@forms'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/forms.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/forms"
  }
</script>

#### Best practices

Use placeholders or contextual tips in form fields to help people provide the right data.