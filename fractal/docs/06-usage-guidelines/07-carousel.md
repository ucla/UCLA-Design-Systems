---
title: Carousel
---
{{render '@support'}}

This carousel has been forked from [SplideJs](https://splidejs.com) and themed to fit the needs of UCLA. The SplideJS carousel was chosen for its high accessibility support and its ability to be modified. SplideJS supports images, captions, video, grids and a wide variety of features. For additional support beyond this documentation please look to the SplideJS [documentation](https://splidejs.com/documents/).

## Usage

### Usability Guidance

The javascript for this carousel is already installed in the library. To create a slider, use the follwing html structure and mount the slider by adding your javascript.

***HTML***
```
<div id="example-slider-one" class="splide">
    <div class="splide__track">
        <ul class="splide__list">
            <li class="splide__slide">
                <div class="splide__slide__container">
                    <img src="/img/examples/tile-example-1.jpg">
                </div>
                Lorem Ipsum Slide 1
            </li>
            <li class="splide__slide">
                <div class="splide__slide__container">
                    <img src="/img/examples/tile-example-1.jpg">
                </div>
                Lorem Ipsum Slide 2
            </li>
            <li class="splide__slide">
                <div class="splide__slide__container">
                    <img src="/img/examples/tile-example-1.jpg">
                </div>
                Lorem Ipsum Slide 3
            </li>
        </ul>
    </div>
</div>
```

Next, add the javascript to your page.

***Javascript***
```
new Splide('#example-slider-one').mount();
```

[See Working Examples](/components/detail/carousel--default)

**Further Reading**

- [Splide Getting Started](https://splidejs.com/getting-started/)
- [Slipde Options](https://splidejs.com/options/)
- [Splide API](https://splidejs.com/apis/)
- [Splide Tutorials](https://splidejs.com/category/tutorials/)

### Accessibility Requirements

- [Splide Accessibility](https://splidejs.com/accessibility/)
* [Splide i18n](https://splidejs.com/i18n/)
