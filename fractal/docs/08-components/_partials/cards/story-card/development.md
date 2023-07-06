---
handle: story-card-development
---
The story card component has several elements nested in this format:

<ul class="docs-list">
<li><code>.ucla-card__story</code> - The main card container<ul>
<li><code>.story-card-image-link</code> - Image link to the article<ul>
<li><code>.ucla-card__story-image</code> - An image that spans half the width of the container</li>
</ul>
</li>
<li><code>.ucla-card__body</code> - A content container that overlaps the image<ul>
<li><code>.ucla-card__date</code> - Source of the article</li>
<li><code>.ucla-card__title</code> - Left-aligned bolded text linking to an article<ul>
<li><code>.ucla-card__title-link</code> - Title link to the article</li>
</ul>
</li>
<li><code>.ucla-card__author</code> - Author of the article</li>
<li><code>.ucla-card__description</code> - Summary of the article</li>
</ul>
</li>
</ul>
</li>
</ul>

<div style="max-width: 376px;" class="mx-auto">
<article class="ucla-card ucla-card__story">
    <a class="story-card-image-link" href="#">
        <img class="ucla-card__image" src="/theme-assets/img/examples/story-danielle.jpg" alt="Danielle Dupuy, assistant director of the Ralph J. Bunche Center for African American Studies" />
    </a>
    <div class="ucla-card__body">
        <p class="ucla-card__date">September 02, 2021</p>
        <h3 class="ucla-card__title"><a class="ucla-card__title-link" href="#">Society, Struggle, Scholarship</a></h3>
        <p class="ucla-card__author">By Joe Bruin</p>
        <p class="ucla-card__description">As UCLA’s four ethnic studies centers celebrate their 50th anniversary, their mission  —
             to use advanced research to bring about social justice  —  takes on added urgency.</p>
    </div>
</article>
</div>

```html
<article class="ucla-card ucla-card__story">
    <a class="story-card-image-link" href="#">
        <img class="ucla-card__image" src="/theme-assets/img/examples/story-danielle.jpg" alt="Danielle Dupuy, assistant director of the Ralph J. Bunche Center for African American Studies" />
    </a>
    <div class="ucla-card__body">
        <p class="ucla-card__date">September 02, 2021</p>
        <h3 class="ucla-card__title"><a class="ucla-card__title-link" href="#">Society, Struggle, Scholarship</a></h3>
        <p class="ucla-card__author">By Joe Bruin</p>
        <p class="ucla-card__description">As UCLA’s four ethnic studies centers celebrate their 50th anniversary, their mission  —
             to use advanced research to bring about social justice  —  takes on added urgency.</p>
    </div>
</article>
```
