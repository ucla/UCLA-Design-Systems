---
handle: secondary-story-card-development
---
The Secondary Story Card component has several elements nested in this format:

- `.ucla-card__story-secondary` - The main card container
  - `.story-card-image-link` - Image link to the article
    - `.ucla-card__story-image` - An image that spans half the width of the container
  - `.ucla-card__body` - A content container that overlaps the image
    - `.ucla-card__date` - Source of the article
    - `.ucla-card__title` - Left-aligned bolded text linking to an article
        - `.ucla-card__title-link` - Title link to the article
    - `.ucla-card__author` - Author of the article
    - `.ucla-card__description` - Summary of the article

<div>
  <article class="ucla-card ucla-card__story-secondary">
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
<article class="ucla-card ucla-card__story-secondary">
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