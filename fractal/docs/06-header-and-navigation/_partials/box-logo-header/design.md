---
handle: box-logo-header-design
---
The UCLA Box Logo header is a header and navigation component using the departments signature logo.

#### When to use

The Box Logo header can be used when the school has a signature, or logo lockup. This is offers a more branded approach that may be more suitable for schools like Nursing, Law, etc.

#### Anatomy

#### Desktop

<img alt="Box Header Logo Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/navigation/box-logo-header-anatomy.png" />

**1. Blue Border (required)**
<ul class="doc-list">
  <li>Adds visual consistency with full bar version</li>
  <li>May container visual device or functional code to incorporate global emergency messaging</li>
</ul>

**2. UCLA Box Logo (required)**

- Text links to department home page

**3. Container (required)**

**4. Border (required)**

#### Mobile

<img alt="Box Header Logo Mobile Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/navigation/box-logo-header-mobile-anatomy.png" />

**1. Blue Border (required)**
- May container visual device or functional code to incorporate global emergency messaging

**2. UCLA Box Logo (required)**
- Logo links to department home page

**3. Container (required)**

**4. Border (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@navigation--school'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/navigation--school.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/navigation--school"
  }
</script>