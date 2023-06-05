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

Use fieldset elements to group together related form controls, such as radio buttons or checkboxes. This will help users understand the relationships between different form elements and the purpose of the form.

Include a legend element within the fieldset to provide a brief description of the form controls within the fieldset. The legend should be concise and descriptive, and should clearly indicate the purpose of the fieldset.

Use fieldset and legend elements to create a logical and intuitive structure for the form. This will make it easier for users to understand and navigate the form.