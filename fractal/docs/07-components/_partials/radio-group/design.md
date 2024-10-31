---
handle: radio-group-design
---
Radio groups are a common way to allow users to make a single selection from a list of options. Since only one radio button can be selected at a time (within the same group), each available choice must be its own item and label. 

#### When to use

**To display a single selection.** When users need to select only one option from a set of mutually exclusive choices. It differs from a Select Menu in that all choices are ever-present.

#### Anatomy

<img alt="Radio Buttons Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/forms/radio-buttons-anatomy.svg" />

**1. Title (required)**

**2. Radio Button (required)**

**3. Label (required)**


Radio groups can be either horizontal or vertical. When radio button selection is required it should be reflected in the fieldset label.

<img alt="Radio Buttons Variation" class="ucla-break-container" src="/theme-assets/img/docs/components/forms/radio-buttons-variations.svg" />


#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@forms--radio'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/forms--radio.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/forms--radio"
  }
</script>

#### Best Practices

**Use the label as a target.** Users should be able to select either the text label or the radio button to select or deselect an option.

**List items vertically.** Vertically-listed options are easier to read than those that are listed horizontally. A horizontal layout can make it difficult to tell which label belongs to which radio button.

**Use adequate spacing.** Make sure selections are adequately spaced for touch screens. Consider using the tile variant for larger touch targets.

**Set default values with caution.** Setting a default value can bias a decision, seem pushy, or alienate users who don’t fit your assumptions. Only use a default selection if you have data to back it up.

**Don’t mix default and tile variants.** Pick one implementation and stick with it. When mixed, tiles can appear to indicate a bias or preference toward that option.

**Use a logical order.** Make sure the selection options are organized in a meaningful way, like alphabetical or most-frequent to least-frequent. This helps users easily find the option they’re looking for.