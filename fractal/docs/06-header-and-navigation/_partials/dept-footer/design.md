---
handle: dept-footer-design
---
The department footer appears above the global footer and provides department-specific information, navigation, and actions. It is designed to support local needs while complementing the global footer.

#### When to use

Use the department footer on all website pages to provide consistent department-level information, navigation, and actions. It should appear above the global footer and be included on every page to ensure a complete and structured page ending across UCLA websites and applications.

If a department logo is not available, the UCLA logo must be used as the default identifier. Always use the official logo lockup artwork provided in the UCLA Strategic Communcations.

#### Anatomy

<img alt="Department Footer Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/navigation/dept-footer-anatomy.png" />

**1. UCLA logo(required)**

**2. Contact Information (required)**
  - Link email and phone if available

**3. Column Header**
  - static header that gives a category or context to show link below

**4. Department Social Media**
  - Link to Department specific social media channel profile pages if available.

**5. Container (required)**

**6. Links**
  - These can be shortcuts to often-used interior pages, secondary/tertiary audience pages, or external related links
  - DO not repeat main navigation items
  - See variants by number of columns

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@footer--department'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/footer--department.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/footer--department"
  }
</script>