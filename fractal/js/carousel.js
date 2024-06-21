const vendor = require('./vendors/splide');

class Carousel {
  init(options) {
    this.carouselOptions(options);
    this.setup();
  }

  setup() {
    let elm = document.querySelectorAll(this.options.carouselClass);
    for (let i = 0; i < elm.length; i++) {
      let data = elm[i].dataset;
      let sliderOptions = {
        ...(Object.keys(data).length === 0 ?
          this.options :
          {
            ...this.options,
            perPage: data.perPage ? data.perPage : 1,
            arrows: data.arrows ? data.arrows : false,
            breakpoints: {
              768: {
                perPage: data.perPageMd ? data.perPageMd : 2,
              },
              960: {
                perPage: data.perPageLg ? data.perPageLg : 3,
              },
            },
          }
        )
      }
      const slider = new vendor(elm[i], sliderOptions);
      slider.mount();
    }
  }
  defaults() {
    return {
      carouselClass: '.ucla-carousel',
      classes: {
        pagination: 'splide__pagination ucla-carousel__pagination',
        page: 'splide__pagination__page ucla-carousel__page',
      },
      mediaQuery: 'min',
      gap: '1.5rem',
      autoHeight: true,
      perPage: 1,
      arrows: false,
      breakpoints: {
        768: {
          perPage: 2,
        },
        960: {
          perPage: 3
        }
      }
    }
  }
  carouselOptions(options) {
    this.options = Object.assign(this.defaults(), options);
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Carousel;
} else {
  window.Carousel = Carousel;
}