---
handle: global-footer-design
---
The global footer ends a web page and contains information for copyright, emergency, accessibility, and terms of use.

#### When to use

The global footer ends a page and is placed below the department footer.

#### Anatomy

<img alt="Global Footer Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/navigation/global-footer-anatomy.svg" />

**1. Copyright (required)**

**2. University of California Link (required)**
  - Links to https://www.universityofcalifornia.edu

**3. Emergency Link (required)**
  - Links to https://bso.ucla.edu

**4. Accessibility Link (required)**
  - Links to https://www.ucla.edu/accessibility

**5. Report Misconduct Link (required)**
  - Links to https://equity.ucla.edu/report-an-incident

**6. Privacy &amp; Terms of Use Link (required)**
  - Links to https://www.ucla.edu/terms-of-use

**7. Campus Wide Social Media Links**
- https://www.facebook.com/UCLA/
- https://www.instagram.com/ucla/
- https://www.linkedin.com/school/ucla
- https://twitter.com/ucla
- https://www.youtube.com/user/UCLA
- https://www.tiktok.com/@ucla?lang=en
- https://story.snapchat.com/@uclaofficial

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