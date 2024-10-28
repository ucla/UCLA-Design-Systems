---
handle: carousel-development
---
Before utilizing a carousel, please read the messages from this [site](https://shouldiuseacarousel.com/). 

**Note: The carousel is extending a third-party library [Swiper](https://swiperjs.com/). If you like to extend the carousel, please refer to [Swiper Documentation](https://swiperjs.com/get-started)**

In order to build a carousel, start with the following HTML:

```html
<section class="swiper ucla-carousel" aria-label="My Carousel">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 01</div>
    <div class="swiper-slide">Slide 02</div>
    <div class="swiper-slide">Slide 03</div>
  </div>
  <div class="swiper-pagination ucla-carousel__pagination"></div>
</section>
```

<section
  class="ucla-carousel swiper doc-slider-is-overflow"
  role="group"
  data-per-page="1"
  data-per-page-md="2"
  data-per-page-lg="3"
  aria-label="Basic UCLA Slider"
>
  <div class="swiper-wrapper">
      <div class="swiper-slide">
        {{render "@cards--event"}}
      </div>
      <div class="swiper-slide">
        {{render "@cards--event"}}
      </div>
      <div class="swiper-slide">
        {{render "@cards--event"}}
      </div>
      <div class="swiper-slide">
        {{render "@cards--event"}}
      </div>
      <div class="swiper-slide">
        {{render "@cards--event"}}
      </div>
      <div class="swiper-slide">
        {{render "@cards--event"}}
      </div>
      <div class="swiper-slide">
        {{render "@cards--event"}}
      </div>
  </div>
  <div class="swiper-pagination ucla-carousel__pagination"></div>
</section>

#### Number of Slides Per Page

By default, we have set the following number of slides per page:

Desktop: 3 Slides per page
Tablet: 2 Slides per page
Mobile: 1 Slide per page

If you would like to override these, add the following attribute to the `.ucla-carousel` element:

```html
<section
  class="swiper ucla-carousel"
  data-per-page="1"
  data-per-page-md="2"
  data-per-page-lg="3"
>
```

- `data-per-page` - Mobile slide per page
- `data-per-page-md` - Tablet slide per page
- `data-per-page-lg` - Desktop slide per page

<section
  class="ucla-carousel swiper doc-slider-is-overflow"
  role="group"
  data-per-page="2"
  data-per-page-md="1"
  data-per-page-lg="4"
  aria-label="Basic UCLA Slider"
>
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      {{render "@cards--event"}}
    </div>
    <div class="swiper-slide">
      {{render "@cards--event"}}
    </div>
    <div class="swiper-slide">
      {{render "@cards--event"}}
    </div>
    <div class="swiper-slide">
      {{render "@cards--event"}}
    </div>
    <div class="swiper-slide">
      {{render "@cards--event"}}
    </div>
    <div class="swiper-slide">
      {{render "@cards--event"}}
    </div>
    <div class="swiper-slide">
      {{render "@cards--event"}}
    </div>
  </div>
  <div class="swiper-pagination ucla-carousel__pagination"></div>
</section>

```html
<section
  class="ucla-carousel swiper"
  data-per-page="2"
  data-per-page-md="1"
  data-per-page-lg="4"
>
```