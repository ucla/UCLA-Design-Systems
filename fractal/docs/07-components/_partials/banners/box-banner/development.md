---
handle: box-banner-development
---
The Box Banner component is comprised with several parts:

- `.ucla-banner__box` and `.ucla-banner__box-left`/`.ucla-banner__box-right` - Container. Also defines if text box is on the left or right.
  - `.ucla-banner__box-image` - Featured image that spans half the container
  - `.ucla-banner__box-text.ucla-prose` - Container that houses content

<div class="ucla-banner__box ucla-banner__box-left">
    <img class="ucla-banner__box-image" src="/theme-assets/img/examples/featured-story-bill-and-john.jpg" alt="Bill Walton with a drawing of Coach John Wooden.">
    <article class="ucla-banner__box-text ucla-prose">
        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing</h3>
        <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay.</p>
        <button class="ucla-btn ucla-btn--primary-light">Button</button>
    </article>
</div>

```html
<div class="ucla-banner__box ucla-banner__box-left">
    <img class="ucla-banner__box-image" src="image.jpg" alt="Description describing the image">
    <article class="ucla-banner__box-text ucla-prose">
        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing</h3>
        <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay.</p>
        <a href="#" class="ucla-btn ucla-btn--primary-light">Button</a>
    </article>
</div>
```

#### Right-sided Box

If you prefer to have the image on the left and the content box on the right, simply replace `.ucla-banner__box-left` with `.ucla-banner__box-right`.

<div class="ucla-banner__box ucla-banner__box-right">
    <img class="ucla-banner__box-image" src="/theme-assets/img/examples/featured-story-bill-and-john.jpg" alt="Bill Walton with a drawing of Coach John Wooden.">
    <article class="ucla-banner__box-text ucla-prose">
        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing</h3>
        <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay.</p>
        <a href="#" class="ucla-btn ucla-btn--primary-light">Button</a>
    </article>
</div>

```html
<div class="ucla-banner__box ucla-banner__box-right">
    <!-- ... -->
</div>
```

#### White Background Variant

If you prefer to use the Text Banner with a white background. add `.ucla-banner__box-text-white` class to the `.ucla-banner__box-text` element.

<div class="ucla-banner__box ucla-banner__box-right">
    <img class="ucla-banner__box-image" src="/theme-assets/img/examples/featured-story-bill-and-john.jpg" alt="Bill Walton with a drawing of Coach John Wooden.">
    <article class="ucla-banner__box-text ucla-banner__box-text-white ucla-prose">
        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing</h3>
        <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay.</p>
        <a href="#" class="ucla-btn ucla-btn--primary-light">Button</a>
    </article>
</div>

```html
<!-- ... -->
  <article class="ucla-banner__box-text ucla-banner__box-text-white ucla-prose">
    <!-- ... -->
  </article>
<!-- ... -->
```