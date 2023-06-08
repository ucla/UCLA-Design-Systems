---
handle: side-navigation-design
---
Interior navigation helps people explore content within the same section of a website. Use this navigation in place of or in addition to dropdown menus.

#### When to use

Use with large, complex sites that have many pages and multiple levels of hierarchy.

#### Anatomy

![Side Navigation Anatomy](/theme-assets/img/docs/navigation/side-navigation-anatomy.svg)

**1. Tier 2 Navigation/Menu Link (required)**

**2. Border (required)**

**3. Container (required)**

**4. Tier 3 Navigation Link**

**5. Tier 4 Navigation Link**

#### Nested Menus

All Tier 2 menu items are always visible. However, the tier below a given section only displays when in that section and only the section immediate below it is visible. The display is highly contextual to the section a user is. The goal is to give them enough information to orient them to the complete set of options in a path/hierarchy without overloading them with too much peripheral information.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@side-navigation'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/side-navigation.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/side-navigation"
  }
</script>