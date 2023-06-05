---
handle: chips-design
---
A chip web component is a small, interactive element typically used to represent discrete pieces of information, such as tags, keywords, or actions.

#### When to use

Chips are like buttons but contextual to a piece of content. They communicate related actions, linkable tags, or content-specific filters. They can  link to a new page or trigger an inline display change or status message. They can also be created dynamically from user input.

#### Anatomy

![Chips Anatomy](/theme-assets/img/docs/components/chips/anatomy.svg)

**1. Leading Icon**

May be static or dynamic upon toggle. It can illustrate the content or denote status (ie. checkmark on or off, X to turn off or remove).

**2. Trailing Icon**

May be static or dynamic upon toggle. It can illustrate the content or denote status (ie. filter checkmark on or off).

**3. Text (required)**

Text is always present and does not change with action or state changes.

**4. Container (required)**

The entire element has the same link or action - elements within are not independently clickable.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@chips'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/chips.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/chips"
  }
</script>

#### Best practices &amp; Chip Types

Only use in groups of 2 or more. If there’s only one, a button or link may be more suitable.

**Action chips** are similar to buttons but contextual and repeatable.

**Tag chips** are also contextual to a piece of content. They can be similar to a button when used as a link or be an interactive element when used as a filter. When a chip is used to trigger an inline display change or status message, use the “current” state and/or add a checkmark or X to indicate it can toggle off.
