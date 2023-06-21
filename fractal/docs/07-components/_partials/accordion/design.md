---
handle: accordion-design
---
Display content in a compact manner. Accordions provide a space-saving technique for displaying content in your viewport. Users can explore an overview of topics and then expand accordions as needed to see more information.

#### When to use

Use accordions only when information doesn’t need to be immediately visible, and you believe additional information will overwhelm users.
Use accordions to a greater extent on mobile devices to help reduce scrolling.

#### Anatomy

<img alt="Accordion Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/accordion/anatomy.svg" />

**1. Title (required)**

 Entire header is selectable. Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.

**2. Container (required)**

**3. Arrow Icon (required)**

 Default/closed state is arrow down. Toggles to arrow up on expansion.

**4. Content (required)** 

Accordions can accommodate of variety of content types. make sure interactive elements within the collapsible region are far enough from the headers that users don't accidentally trigger a collapse. (The exact distance depends on the device.)

#### Example


<select class="ucla-field__select my-5" onChange="changeIframe(value)">
  <option value="accordion">Default Accordion</option>
  <option value="accordion--multi">Multi-Open Accordion</option>
</select>

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

<div id="accordion" class="design-code-examples">

```html
{{view '@accordion'}}
```

</div>
<div id="accordion--multi" hidden class="design-code-examples">

```html
{{view '@accordion--multi'}}
```

</div>

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/accordion.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/accordion"
  }
</script>