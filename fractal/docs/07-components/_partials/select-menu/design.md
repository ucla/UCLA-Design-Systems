---
handle: select-menu-field-design
---
Select is a type of input that is used in forms, where a user is submitting data and chooses one option from a list.

#### When to use

Use the select component inside a form where users are making a single selection from a list of options and submitting data.

Use the dropdown component to filter or sort content on a page.

For when to use a select menu rather than a radio button, see the following article for considerations: [7 Rules of Using Radio Buttons vs Drop-Down Menus](https://blog.prototypr.io/7-rules-of-using-radio-buttons-vs-drop-down-menus-fddf50d312d1)

#### Anatomy

<img alt="Select Menu Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/forms/select-field-anatomy.svg" />

**1. Label**

**2. Container (required)**

**3. Placeholder (required)**

**4. Down arrow (required)**

**5. Up arrow (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@forms--select-menu'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/forms--select-menu.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/forms--select-menu"
  }
</script>

#### Best Practices

**Labels.** Labels are essential to the usability of forms. Do not place a label inside a select element. Use sentence case and no more than three words.

**Order.** The order of the select list should be based on the frequency of use. If applicable, the list should be in increasing order relative to the content. In cases of forms, alternative orders such as alphabetical may be more fitting. A horizontal rule can be used to group similar items together.

**Default Selection.** You can set a default choice if one is recommended or you don’t expect users to change it. If you don’t want to influence their selection you can start it with the phrase “Make a selection” or similar that is not selectable once they change it.