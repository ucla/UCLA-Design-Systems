---
handle: event-card-design
---
Event cards are individual units with the following elements- day/date- event title-  event start time - end time- location- short description

#### When to use

For event listings, event cards can create a row. Example shown has 4 across with horizontal arrows that can show additional cards. Title can be Display Header as shown or a different heading type.

#### Anatomy

<img alt="Image Banner Anatomy" class="ucla-break-container" src="/theme-assets/img/docs/components/cards/event-card-anatomy.svg" />

**1. Image Link**

**2. Date (required)**

**3. Time (required)**

**4. Location (required)**

**5. Text**

**6. Title (required)**

**7. Container (required)**

#### Best practices

Image can be a placeholder or event category if photos are not evailable. A variant can have no images if there are never/rarely images available. Tags or categories can be added below description but must have a destination page if linked.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@cards--event'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/cards--event.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/cards--event"
  }
</script>