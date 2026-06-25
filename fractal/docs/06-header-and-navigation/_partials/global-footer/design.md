---
handle: global-footer-design
---
The global footer appears at the bottom of every page and provides access to essential institutional and legal information. It includes the current copyright year and links to key resources such as Regents of the University of California, Emergency, Accessibility, Report Misconduct, Privacy & Terms of Use, and Cookie Settings.

#### When to use

Use the global footer on every page of a website or application to provide consistent access to required institutional, legal, and support links.

#### Anatomy

<img alt="Global Footer Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/navigation/global-footer-anatomy.svg" />

**1. Copyright (required)**

**2. Reagents of the University of California Link (required)**
  - Links to https://www.universityofcalifornia.edu

**3. UCLA link**
  - Links to https://www.ucla.edu

**4. Emergency Link (required)**
  - Links to https://bso.ucla.edu

**5. Accessibility Link (required)**
  - Links to https://www.ucla.edu/accessibility

**6. Report Misconduct Link (required)**
  - Links to https://ucla-ocr.caseiq.app/portal/reportonline

**7. Privacy &amp; Terms of Use Link (required)**
  - Links to https://www.ucla.edu/terms-of-use

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@footer--global'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/footer--global.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/footer--global"
  }
</script>