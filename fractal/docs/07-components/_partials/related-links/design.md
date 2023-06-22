---
handle: related-links-design
---
Links are navigational elements that direct visitors to other locations, either on the same page or to a different page or site. They can be inline or separate from the text flow. Since every link is a potential user interaction, too many links can be overwhelming. Be judicious with links to better identify necessary calls to action.

#### When to use

Linking between a site’s pages. Use regular links instead.

If the action is less popular or less important. Less popular or less important actions may be visually styled as links.

For longer inline text links, use descriptive language in place of generic links like “Learn More“ or “Click Here”.

#### Anatomy

<img alt="Related Links Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/buttons/related-links-anatomy.svg" />

**1. Title (required)**

**2. Trailing Icon**

**3. Container (required)**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@button--related-links'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/button--related-links.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/button--related-links"
  }
</script>

#### Best Practices

<div class="ucla">
<div class="col">

- Clearly identify external links.
- Provide required notification for non-federal external links.
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
- Check with your IT security department regarding email link best practices.

</div>
<div class="col">

- Don’t rely on color alone to distinguish links.
- Don’t roadblock external links with a modal window or dialog box.
- Don’t use generic link text.
- Don’t use the same link text for different URLs on the same page.

</div>
</div>