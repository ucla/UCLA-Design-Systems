---
handle: basic-card-design
---
A card often represents a discrete piece of content among a series of a common content type. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links and can lead to more detailed information. 

An individual card is typically a member of a collection of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form and with a visual separation or container.

Finally, a card is modular, which means you can vary the order of cards in a collection without destroying any individual card’s meaning.

#### When to use

**Collections of related content.** Cards help present a collection of related groups of content, like articles or sections of a website.

To organize related information.

To shorten pages and reduce scrolling when content is not crucial to read in full, especially on a mobile interface or in a side panel.

#### Anatomy

![Basic Card Anatomy](/theme-assets/img/docs/components/cards/basic-card-anatomy.svg)

**1. Image**

**2. Title (required)**

**3. Supporting Text (required)**

**4. Link**

**5. Container (required)**

#### Best practices

Include information that is pertinent to user's interest and helps them understand what kind of content they're looking at quickly.

Color contrast is very important for legibility. To meet current accessibility standards, use only approved color combinations. Use 80% grey for text on white background to reduce eye strain.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@cards'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../../components/preview/cards.html"
  } else {
  document.getElementById("docIframe").src = "../../../components/preview/cards"
  }
</script>