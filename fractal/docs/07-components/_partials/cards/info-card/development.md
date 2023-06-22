---
handle: info-card-development
---
The info card component has several elements nested in this format:

- `.ucla-card__info` - The main card container
  - `.ucla-card__body` - A content container that house any element and/or content
    - `.ucla-card__title` - Left-aligned bolded text
    - `.ucla-card__description` - Text for content
    - `.ucla-card__link` - Link to content or article

<div style="max-width: 376px; margin: 0 auto;">
    <article class="ucla-card ucla-card__info">
        <div class="ucla-card__body">
            <h3 class="ucla-card__title">How do parents embrace technology for kids, but prevent it from ruling the household?</h3>
            <p class="ucla-card__description">With schools closed and remote learning the norm, how many hours of digital technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…</p>
            <a class="ucla-card__link" href="#">CTA 1</a>
            <a class="ucla-card__link" href="#">CTA 2</a>
        </div>
    </article>
</div>

```html
<article class="ucla-card ucla-card__info">
    <div class="ucla-card__body">
        <h3 class="ucla-card__title">How do parents embrace technology for kids, but prevent it from ruling the household?</h3>
        <p class="ucla-card__description">With schools closed and remote learning the norm, how many hours of digital technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…</p>
        <a class="ucla-card__link" href="#">CTA 1</a>
        <a class="ucla-card__link" href="#">CTA 2</a>
    </div>
</article>
```