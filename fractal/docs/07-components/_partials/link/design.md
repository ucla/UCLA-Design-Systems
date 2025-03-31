---
handle: link-design
---
Links are navigational elements that direct visitors to other locations, either on the same page or to a different page or site. They can be inline or separate from the text flow. Since every link is a potential user interaction, too many links can be overwhelming. Be judicious with links to better identify necessary calls to action.

#### When to use

You use inline links when you want to provide a hyperlink within a block of text. Some common situations include providing additional information, referencing a source, promoting a product or service, or creating a call-to-action.

#### Anatomy

<img alt="Link Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/link/anatomy.svg" />

**1. Inline link**

**2. Icon (optional)**

<div class="ucla-grid cols-2-md mt-5 ucla-link-grid">
  <div>
    <img alt="Link Light background" style="width:100%" class="ucla-img-responsive" src="/theme-assets/img/docs/components/link/inline-light.svg" />
  </div>
  <div>
    <img alt="Link Dark background" style="width:100%" class="ucla-img-responsive" src="/theme-assets/img/docs/components/link/inline-dark.svg" />
  </div>
</div>

#### Icon Sizing

<div class="ucla-grid ucla-gap-8 cols-2-md mt-5">
  <div>
    <svg style="display:block" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" fill="#333333"/></svg>
    <p><strong>16px icons</strong></p>
    <ul>
      <li>Use a 16px icon for text that is 16px Regular or smaller.</li>
      <li>This size ensures visual balance and a clean look for body text, captions, and supplementary information.</li>
    </ul>
  </div>
  <div>
    <svg style="display:block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" fill="#333333"/></svg>
    <p><strong>24px icons</strong></p>
    <ul>
      <li>Use a 24px icon for text that is 16px Bold or larger.</li>
      <li>This size complements headings, buttons, and call-to-actions, providing clear visual emphasis.</li>
    </ul>
  </div>
</div>

#### Best Practices

- Clearly identify external links.
- Use unique, meaningful link text.
- Simplify link placement in body text.
- Link directly to the most relevant page.
- Indicate nonpublic links that require authentication.
- If you use an external link indicator, use it consistently for all text links.
- Provide text context for external links.
- Show file type and size for links to non-HTML content.
- Identify jump links in body text.
- Write out email and phone links.
- Encode email and phone links.

#### Examples

<iframe id="docIframe" style="min-height: 35rem" class="docs-iframe mt-5"
  src="{{path '../../components/preview/link'}}"
></iframe>

```html
{{render '@link'}}
```

<!--script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/link.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/link"
  }
</script-->