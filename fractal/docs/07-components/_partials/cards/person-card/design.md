---
handle: person-card-design
---
Profile cards are a visual way to display informational listings of people that adds importance. At minimum, they include a name and one other piece of associated information. May include image, title, department, year of accomplishment. A placeholder image can be used if a photo is missing among a group where the majority has photos. If the majority do not have photos, use a card without space for images.

#### Anatomy

<img alt="Person Card Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/cards/person-card-anatomy.svg" />

**1. Image**

**2. Name (required)**

**3. Pronouns**

**4. Title (required)**

**5. Description**

**6. Contact Information**

**7. Photo Credit**

**8. Container**


#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@cards--person'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/cards--person.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/cards--person"
  }
</script>