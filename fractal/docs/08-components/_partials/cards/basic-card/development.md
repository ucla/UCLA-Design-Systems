---
handle: basic-card-development
---
The basic card component has several elements nested in this format:

<ul class="docs-list">
<li><code>.ucla-card</code> - The main card container<ul>
<li><code>.ucla-card__image</code> - An image that spans the entire width of the card</li>
<li><code>.ucla-card__body</code> - A content container that house any element and/or content<ul>
<li><code>.ucla-card__title</code> - Left-aligned bolded text</li>
<li><code>.ucla-card__description</code> - Text for content</li>
</ul>
</li>
</ul>
</li>
</ul>

<div style="max-width: 376px; margin: 0 auto;">
    <article class="ucla-card">
        <img class="ucla-card__image" src="/theme-assets/img/examples/event-card-example-1.jpg" alt="Two children on their phones under the blankets">
        <div class="ucla-card__body">
            <h1 class="ucla-card__title">How do parents embrace technology for kids, but prevent it from ruling the household?</h1>
            <p class="ucla-card__description">With schools closed and remote learning the norm, how many hours of digital technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…</p>
            <button class="ucla-btn ucla-btn--primary">
                CTA 1
            </button>
            <button class="ucla-btn ucla-btn--primary">
                CTA 2
            </button>
        </div>
    </article>
</div>

```html
<article class="ucla-card">
    <img class="ucla-card__image" src="/theme-assets/img/examples/event-card-example-1.jpg" alt="Two children on their phones under the blankets">
    <div class="ucla-card__body">
        <h1 class="ucla-card__title">How do parents embrace technology for kids, but prevent it from ruling the household?</h1>
        <p class="ucla-card__description">With schools closed and remote learning the norm, how many hours of digital technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…</p>
        <button class="ucla-btn ucla-btn--primary">
            CTA 1
        </button>
        <button class="ucla-btn ucla-btn--primary">
            CTA 2
        </button>
    </div>
</article>
```
