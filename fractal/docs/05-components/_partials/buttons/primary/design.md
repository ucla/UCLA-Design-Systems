---
handle: primary-button-design
---
Buttons draw attention to important actions, content or next steps. Button tags `<button>` are used for internal page actions. Links, or `<a>` tags, are used for linking to an external page.

#### When to use

**Important actions.** Use buttons for the most important actions you want users to take on your site, such as Download, Sign up or Log out.

**Primary buttons** are styled as solid buttons and open important content, such as calls-to-action (CTAs) or initiates functionality. Icons are used to the right or left to clarify the content or action type. Type + icon are centered.

#### Anatomy

![Buttons Anatomy](/theme-assets/img/docs/components/buttons/anatomy.svg)

**1. Container (required)**

**2. Text**

**3. Leading Icon**

**4. Trailing Icon**

**5. Icon**

#### Best practices

Write button labels so they make sense without reading the copy around them so they are accessible to screen readers.

Don't write button labels that are generic or not specific to the content being presented.

Avoid more than one instance of generic text like "Read More". Screen readers can't disambiguate multiple buttons with the same or similar text.

Do use the button color scheme provided. It is ADA compliant.

Link headlines in Store Cards or Event Cards rather than adding buttons with generic text.

#### Examples

<select class="ucla-field__select my-5" onChange="changeIframe(value)">
  <option value="button">Default</option>
  <option value="button--dark">Dark Background</option>
</select>

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

<div id="button" class="design-code-examples">

```html
{{render '@button'}}
```

</div>
<div id="button--dark" class="design-code-examples" hidden>

```html
{{render '@button--dark'}}
```

</div>

<script>
  if (window.frctl.env === "static") {
    document.getElementById("docIframe").src = "../../../components/preview/button.html"
  } else {
    document.getElementById("docIframe").src = "../../../components/preview/button"
  }
</script>