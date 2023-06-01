---
handle: carousel-development
---
Before utilizing a carousel, please read the messages from this [site](https://shouldiuseacarousel.com/). 

**Note: The carousel is extending a third-party library [Splide](https://splidejs.com/). If you like to extend the carousel, please refer to [Splide Documentation](https://splidejs.com/documents/)**

In order to build a carousel, start with the following HTML:

```html
<section class="splide ucla-carousel" aria-label="My Carousel">
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">Slide 01</li>
			<li class="splide__slide">Slide 02</li>
			<li class="splide__slide">Slide 03</li>
		</ul>
  </div>
</section>
```

<section
  class="ucla-carousel splide doc-slider-is-overflow"
  role="group"
  data-per-page="1"
  data-per-page-md="2"
  data-per-page-lg="3"
  aria-label="Basic UCLA Slider"
>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
    </ul>
  </div>
</section>

#### Number of Slides Per Page

By default, we have set the following number of slides per page:

Desktop: 3 Slides per page
Tablet: 2 Slides per page
Mobile: 1 Slide per page

If you would like to override these, add the following attribute to the `.ucla-carousel` element:

```html
<section
  class="splide ucla-carousel"
  data-per-page="1"
  data-per-page-md="2"
  data-per-page-lg="3"
>
```

- `data-per-page` - Mobile slide per page
- `data-per-page-md` - Tablet slide per page
- `data-per-page-lg` - Desktop slide per page

<section
  class="ucla-carousel splide doc-slider-is-overflow"
  role="group"
  data-per-page="2"
  data-per-page-md="1"
  data-per-page-lg="4"
  aria-label="Basic UCLA Slider"
>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
      <li class="splide__slide">
        {{render "@cards--event"}}
      </li>
    </ul>
  </div>
</section>

```html
<section
  class="ucla-carousel splide"
  data-per-page="2"
  data-per-page-md="1"
  data-per-page-lg="4"
>
```