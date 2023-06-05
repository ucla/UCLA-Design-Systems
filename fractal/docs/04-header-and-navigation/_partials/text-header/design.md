---
handle: text-header-design
---
The UCLA Text header is a header and navigation component using text for the departments title.

#### When to use

The text header can be used when the department does not require a signature, or logo lockup. This is common for administrative units such as campus resources, housing, etc.

#### Anatomy

![Text Header Anatomy](/theme-assets/img/docs/navigation/text-header-anatomy.svg)

**1. Blue Border (required)**

- May container visual device or functional code to incorporate global emergency messaging

**2. UCLA Box Logo (required)**

- Logo links to ucla.edu

**3. Container (required)**

**4. Department Name (required)**

- Text links to department home page

**5. Border (required)**

![Text Header Mobile Anatomy](/theme-assets/img/docs/navigation/text-header-mobile-anatomy.svg)

**1. Blue Border (required)**
- May container visual device or functional code to incorporate global emergency messaging

**2. UCLA Box Logo (required)**

- Logo links to ucla.edu

**3. Department Name (required)**

- Text links to department home page

**4. Container (required)**

**5. Border (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@navigation'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/navigation.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/navigation"
  }
</script>