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
  data-ucla-per-page="1"
  data-ucla-per-page-md="2"
  data-ucla-per-page-lg="3"
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
  data-ucla-per-page="1"
  data-ucla-per-page-md="2"
  data-ucla-per-page-lg="3"
>
```

- `data-ucla-per-page` - Mobile slide per page
- `data-ucla-per-page-md` - Tablet slide per page
- `data-ucla-per-page-lg` - Desktop slide per page

<section
  class="ucla-carousel swiper doc-slider-is-overflow"
  role="group"
  data-ucla-per-page="2"
  data-ucla-per-page-md="1"
  data-ucla-per-page-lg="4"
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
  data-ucla-per-page="2"
  data-ucla-per-page-md="1"
  data-ucla-per-page-lg="4"
>
```

#### Navigation

**Pagination**

To add pagination to the carousel, add `<div class="swiper-pagination ucla-carousel__pagination"></div>` after the `.swiper-wrapper` element in your carousel.

```html
<section class="swiper ucla-carousel" aria-label="My Carousel">
  <div class="swiper-wrapper">
    <!-- ... -->
  </div>
  <div class="swiper-pagination ucla-carousel__pagination"></div>
</section>
```

**Arrows**

To add arrow navigation to the carousel, add the following HTML elements after the `.swiper-wrapper` element in your carousel:

- `<div class="swiper-button-prev ucla-carousel__prev"></div>`
- `<div class="swiper-button-next ucla-carousel__next"></div>`

```html
<section class="swiper ucla-carousel" aria-label="My Carousel">
  <div class="swiper-wrapper">
    <!-- ... -->
  </div>
  <div class="swiper-button-prev ucla-carousel__prev"></div>
  <div class="swiper-button-next ucla-carousel__next"></div>
</section>
```

#### Autoplay

To enable autoplay to your carousel, add the `data-ucla-carousel-loop` attribute to the `.ucla-carousel` element and set it to true.

```html
  <section class="swiper ucla-carousel" data-ucla-carousel-loop="true">
    <!-- ... -->
  </section>
```

**Adjust autoplay delay**

By default, the autoplay automatically slides to the next slide every 5 seconds. To change the delay, add the `data-ucla-carousel-autoplay-delay` and set the number value in milliseconds.

```html
  <section class="swiper ucla-carousel" data-ucla-carousel-loop="true" data-ucla-carousel-autoplay-delay="3000">
    <!-- ... -->
  </section>
```

#### Other Swiper options

If you want to use other [Swiper Parameters](https://swiperjs.com/swiper-api#parameters), you can use add the `data-swiper` attribute to the carousel and add the parameters as a JSON object:

```html
  <section
    class="swiper ucla-carousel"
    data-swiper="{
      'spaceBetween': 24,
      'threshold': 3,
      'scrollbar': true
    }">
    <!-- ... -->
  </section>
```