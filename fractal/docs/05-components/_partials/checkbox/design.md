---
handle: checkbox-design
---
Checkboxes are an easily understandable way to indicate that users can select one or more answers to a question or items from a list. They're always followed by a label or instructions that clearly indicate what checking the box represents.

Each checkbox has two different states: selected or unselected, which are similar to an on and off switch. If a checkbox label says "Yes, send me an email," it's clear what checking that box (or not checking it) will accomplish.

Checkboxes also visibly show users what's been selected and makes it easy for them to "uncheck" an option, which can be difficult with other selection methods on a form (such as radio buttons or select menus). It's common to include "check all that apply" instructions with checkboxes to let users know it's okay to select more than one option at a time.

#### When to use

**To display multiple answers.** When a user can select any number of choices from a list.

**To allow users to toggle answers.** When a user needs to acknowledge acceptance of something (like terms of service) or switch between two opposite states, such as unchecked = "no" and checked = "yes".

#### Anatomy

<img alt="Checkbox Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/forms/checkbox-anatomy.svg" />

**1. Checkbox (required)**

**2. Label (required)**

#### Best Practices

**Make the label selectable.** Users should be able to select either the text label or the checkbox to select or deselect an option.

**List options vertically.** Horizontal listings can make it difficult to tell which label pertains to which checkbox.

**Use positive statements.** Negative language in labels can be counterintuitive. For example, use "I want to receive a promotional email" instead of "I don't want to receive a promotional email."

**Use logical labels.** Make sure that the label makes both states — checked and unchecked — clear to the user. If that's not possible, consider using a radio button with two individual options instead. Then both states can have their own clearly marked label.

**Use adequate touch targets.** Make sure selections are adequately spaced for touch screens. Consider using the tile variant for larger touch targets.

**Don't mix default and tile variants.** Pick one implementation and stick with it. When mixed, tiles can appear to indicate a bias or preference toward that option.

**Use a logical order.** Make sure the selection options are organized in a meaningful way, like alphabetical or most-frequent to least-frequent. This helps users easily find the option they're looking for.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@forms--checkbox'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/forms--checkbox.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/forms--checkbox"
  }
</script>