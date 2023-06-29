---
handle: featured-story-card-development
---
The featured story card component has several elements nested in this format:

- `.ucla-card__story-featured` - The main card container
  - `.ucla-card__story-featured-image` - An image that spans half the width of the container
  - `.ucla-card__story-featured-body` - A content container that overlaps the image
    - `.ucla-card__story-featured-title` - Left-aligned bolded text linking to an article
    - `.ucla-card__story-author` - Author of the article
    - `.ucla-card__story-featured-summary` - Summary of the article
    - `.ucla-card__story-featured-source` - Source of the article

<div style="max-width: 1176px" class="mx-auto">
    <article class="ucla-card ucla-card__story-featured">
        <a href="#" tabindex="-1">
            <img class="ucla-card__story-featured-image" src="/theme-assets/img/examples/featured-story-bill-and-john.jpg" alt="Bill Walton with a drawing of Coach John Wooden.">
        </a>
        <div class="ucla-card__story-featured-body">
            <h3 class="ucla-card__story-featured-title"><a class="link" href="#">Featured Story</a></h3>
            <p class="ucla-card__story-author">By Joe Bruin</p>
            <p class="ucla-card__story-featured-summary">Hall of Famer Bill Walton '74 recently talked about his approach to life, what
                he's learned and his love for his alma mater.</p>
            <p class="ucla-card__story-featured-source">Source: <a class="link" href="#"><cite>UCLA Magazine</cite></a></p>
        </div>
    </article>
</div>

```html
<article class="ucla-card ucla-card__story-featured">
    <a href="#" tabindex="-1">
        <img class="ucla-card__story-featured-image" src="/theme-assets/img/examples/featured-story-bill-and-john.jpg" alt="Bill Walton with a drawing of Coach John Wooden.">
    </a>
    <div class="ucla-card__story-featured-body">
        <h3 class="ucla-card__story-featured-title"><a class="link" href="#">Featured Story</a></h3>
        <p class="ucla-card__story-author">By Joe Bruin</p>
        <p class="ucla-card__story-featured-summary">Hall of Famer Bill Walton '74 recently talked about his approach to life, what
            he's learned and his love for his alma mater.</p>
        <p class="ucla-card__story-featured-source">Source: <a href="#"><cite>UCLA Magazine</cite></a></p>
    </div>
</article>
```