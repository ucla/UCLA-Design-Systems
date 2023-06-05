---
handle: carousel-design
---
A carousel component is a user interface element that allows you to display multiple items, such as images, content, or cards, in a rotating or sliding manner.

#### When to use

A carousel component can be used in various situations where you want to showcase multiple items or content within a specific area on a page.

#### Anatomy

![Carousel Anatomy](/theme-assets/img/docs/components/carousel/anatomy.svg)

**1. Carousel Indicator**
- The indicators are the little dots at the bottom of each slide (which indicates how many slides there are in the carousel, and which slide the user is currently viewing).

**2. Carousel Dot**
- A carousel dot refers to a small indicator or navigation element used in a carousel or slideshow component on a website or mobile application. Each dot corresponds to a specific slide and provides a visual indication of the user's current position within the carousel.

#### Best Practices

It's important to use a carousel sparingly and with purpose. Avoid using it for critical information or essential navigation as it can be easily overlooked or missed by users.

#### Examples

<iframe id="docIframe" style="min-height: 35rem" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@carousel'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/carousel.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/carousel"
  }
</script>