---
handle: fieldset-design
---
A fieldset is an element that is used to group together related form elements.

#### When to use

The fieldset element is useful for organizing and labeling groups of form controls, making it easier for users to understand the purpose of the form and the relationships between different form elements.

#### Anatomy

![Fieldset Anatomy](/theme-assets/img/docs/components/forms/fieldset-anatomy.svg)


#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@forms--fieldset-legend'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/forms--fieldset-legend.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/forms--fieldset-legend"
  }
</script>

#### Best Practices

Tell people why you’re collecting their information and what you’re going to do with it.

If fieldset includes a submission button, include an alert or new page that indicates to the user if form was submitted successfully.

Clearly state if and when users can expect a response from your department.