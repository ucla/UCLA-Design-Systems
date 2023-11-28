---
handle: featured-story-card-development
---
The featured story card component has several elements nested in this format:

<ul class="docs-list">
<li><code>.ucla-card__story-featured</code> - The main card container<ul>
<li><code>.ucla-card__story-featured-image</code> - An image that spans half the width of the container</li>
<li><code>.ucla-card__story-featured-body</code> - A content container that overlaps the image<ul>
<li><code>.ucla-card__story-featured-title</code> - Left-aligned bolded text linking to an article</li>
<li><code>.ucla-card__story-author</code> - Author of the article</li>
<li><code>.ucla-card__story-featured-summary</code> - Summary of the article</li>
<li><code>.ucla-card__story-featured-source</code> - Source of the article</li>
</ul>
</li>
</ul>
</li>
</ul>

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