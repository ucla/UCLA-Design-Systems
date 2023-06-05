---
handle: email-banner-design
---
An email signup form to encourage email subscriptions to a list your department manages.

#### When to use

Email banners can be used to encourage email subscriptions to a list your department manages.

#### Anatomy

![Email Banner Anatomy](/theme-assets/img/docs/components/banners/email-banner-anatomy.svg)

**1. CTA Title (required)**

A CTA (Call To Action) encourages users to sign-up

**2. Description Text**

Description text can explain the content and frequency they can expect after signing-up. The more detailed and accurate the better.

**3. Fields**

If fields are used, email is required. Use the least amount of fields you need for your list, asking or requiring too much may hinder sign-ups

**4. Button (required)**

If fields are used, this button submits information and an inline confirmation message is displayed. If there are no fields and a separate or 3rd-party sign-up is required, this can link to another page.

**5. Detailed text**

Supplementary or secondary system use information.

#### Examples


<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@banners--email'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/banners--email.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/banners--email"
  }
</script>