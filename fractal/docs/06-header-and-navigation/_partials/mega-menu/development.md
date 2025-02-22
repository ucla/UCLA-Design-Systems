---
handle: mega-menu-development
---
The mega menu component adapts a large number of options or to show lower-level pages at first sight.

### Parent Nav Item

The parent navigation item inherits CSS classes from the primary navigation item with children. The `.ucla-main-nav__item--has-mega-menu` CSS class is added to the `<li>` element.

<li class="ucla-main-nav__item ucla-main-nav__item--has-children ucla-main-nav__item--has-mega-menu"><a style="transition: none" href="#" class="ucla-main-nav__link">Parent Item</a><button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8"><title>Arrow Down</title><path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path></svg></button></li>

```html
<!-- ... -->
<li class="ucla-main-nav__item ucla-main-nav__item--has-children ucla-main-nav__item--has-mega-menu">
  <a style="transition: none" href="#" class="ucla-main-nav__link">Parent Item</a>
  <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8"><title>Arrow Down</title><path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path></svg>
  </button>
  <!-- ... -->
</li>
<!-- ... -->
```

### Mega Menu Container

The mega menu container is the full-width dropdown that holds the content in your mega menu sub-navigation. This will be nested inside the `<li>` element.

```html
<!-- ... -->
<li class="ucla-main-nav__item ucla-main-nav__item--has-children ucla-main-nav__item--has-mega-menu">
  <!-- ... -->
  <div class="ucla-main-nav__mega-menu">
    <!-- ... -->
  </div>
</li>
<!-- ... -->
```

### Mega Menu Content

**Columns**

The content inside the mega menu container supports any element in the Design System. You would utilize this by using the [Grid System]({{path '/docs/layout/grid'}}) with a container. The example below is using a 4-Column Grid.

<ul style="position:relative;margin-bottom:8rem" class="ucla-main-nav__list" role="menubar" data-menubar-item-expanded="true">
<li class="ucla-main-nav__item ucla-main-nav__item--has-children ucla-main-nav__item--has-mega-menu is-open"><a style="transition: none" href="#" class="ucla-main-nav__link">Parent Item</a><button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8"><title>Arrow Down</title><path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path></svg></button>
<div class="ucla-main-nav__mega-menu" style="width: 996px">
    <div class="container">
    <div class="ucla-grid cols-4-lg">
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
      <div>Column 4</div>
    </div>
  </div>
</div>
</li>
</ul>


```html
<!-- ... -->
  <div class="ucla-main-nav__mega-menu">
    <div class="container">
      <div class="ucla-grid cols-4-lg">

        <div> <!-- ... --> </div>
        <div> <!-- ... --> </div>
        <div> <!-- ... --> </div>
        <div> <!-- ... --> </div>

      </div>
    </div>
  </div>
<!-- ... -->
```

**Navigation Headers and Links**

For navigation headers, you can use the `.ucla-main-nav__mega-menu-header` class on any text element. Please follow the W3C Standards for heading ranks.

The navigation list structure is as follows:

- `.ucla-main-nav__mega-menu-list` - `<ul>`
  - `.ucla-main-nav__mega-menu-item` - `<li>`
    - `.ucla-main-nav__mega-menu-link` - `<a>`

<ul style="position:relative;margin-bottom:45rem" class="ucla-main-nav__list" role="menubar" data-menubar-item-expanded="true">
<li class="ucla-main-nav__item ucla-main-nav__item--has-children ucla-main-nav__item--has-mega-menu is-open"><a style="transition: none" href="#" class="ucla-main-nav__link">Parent Item</a><button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8"><title>Arrow Down</title><path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path></svg></button>
<div class="ucla-main-nav__mega-menu" style="width: 996px">
    <div class="container">
    <div class="ucla-grid cols-4-lg">
      <div>
        <p class="ucla-main-nav__mega-menu-header">General Info</p>
        <ul class="ucla-main-nav__mega-menu-list">
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Facts &amp; Figures</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Leadership</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Academic Senate</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Rankings</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">History</a>
          </li>
        </ul>
      </div>
      <div>
        <p class="ucla-main-nav__mega-menu-header">Mission &amp; Values</p>
        <ul class="ucla-main-nav__mega-menu-list">
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Mission &amp; Values</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Strategic Plan</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Equity, Diversity &amp; Inclusion</a>
          </li>
        </ul>
        <p class="ucla-main-nav__mega-menu-header">Impact</p>
        <ul class="ucla-main-nav__mega-menu-list">
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Contributions &amp; Discoveries</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Global Engagement</a>
          </li>
        </ul>
      </div>
      <div>
        <p class="ucla-main-nav__mega-menu-header">Recognition</p>
        <ul class="ucla-main-nav__mega-menu-list">
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Awards &amp; Honors</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Athletic Championships &amp; Medals</a>
          </li>
          <li class="ucla-main-nav__mega-menu-item">
            <a class="ucla-main-nav__mega-menu-link" href="#">Notable Bruins</a>
          </li>
        </ul>
      </div>
      <div><div style="max-width: 376px;" class="mx-auto">
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
      </div></div>
    </div>
  </div>
</div>
</li>
</ul>

```html
<!-- ... -->
  <div class="ucla-grid cols-4-lg">
    <!-- ... -->

    <div>
      <p class="ucla-main-nav__mega-menu-header">Mega Menu Heading</p>
      <ul class="ucla-main-nav__mega-menu-list">
        <li class="ucla-main-nav__mega-menu-item">
          <a class="ucla-main-nav__mega-menu-link" href="#">Nav Item</a>
        </li>

        <!-- ... -->

      </ul>
    <div>

    <!-- ... -->

  </div>
<!-- ... -->
```