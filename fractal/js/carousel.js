import Swiper from 'swiper';
import { Pagination, A11y, Keyboard, Navigation, Autoplay } from 'swiper/modules';
import Component from './component';

/**
 * A carousel refers to content that’s navigable in a horizontal orientation with an indicator that tells a user where they are in a sequence and accounts for the number of additional content elements accessible to the left or right.
 */

export default class Carousel extends Component {

  /**
   * Gets the Carousel CSS class
   *
   * @static
   * @returns {string}
   */

  static get selector() {
    return '.ucla-carousel';
  }

  /**
   * Gets an object containing methods attached to the DOM element.
   *
   * @static
   * @returns {Object}
   */

  static get methods() {
    return {

      /**
       * Initialize carousel
       * 
       * @param {object} options - Swiper options
       */
      init(options) {
        this._initSelector();
        this._initOptions(options);
        this._initSlider();
      },

      /**
       * Initialize carousel element attributes
       *
       * @private
       */
      _initSelector() {
        this.slider = '.ucla-carousel';
        this.pagination = '.ucla-carousel__pagination';
        this.paginationBullet = 'ucla-carousel__page';
        this.navNext = '.ucla-carousel__next';
        this.navPrev = '.ucla-carousel__prev';
        this.slidePerPage = 'data-ucla-per-page';
        this.slidePerPageMd = 'data-ucla-per-page-md';
        this.slidePerPageLg = 'data-ucla-per-page-lg';
        this.slidePerGroup = 'data-ucla-per-group';
        this.slidePerGroupMd = 'data-ucla-per-group-md';
        this.slidePerGroupLg = 'data-ucla-per-group-lg';
        this.sliderAutoPlay = 'data-ucla-carousel-autoplay';
        this.sliderAutoPlayDelay = 'data-ucla-carousel-autoplay-delay';
        this.sliderLoop = 'data-ucla-carousel-loop';
      },

      /**
       * Initialize carousel options
       * 
       * @private
       * @param {object} options - Swiper options
       * @see https://swiperjs.com/swiper-api#initialize-swiper
       */
      _initOptions(options) {
        const slidePerPage = this.element.getAttribute(this.slidePerPage);
        const slidePerPageMd = this.element.getAttribute(this.slidePerPageMd);
        const slidePerPageLg = this.element.getAttribute(this.slidePerPageLg);
        const slidePerGroup = this.element.getAttribute(this.slidePerGroup);
        const slidePerGroupMd = this.element.getAttribute(this.slidePerGroupMd);
        const slidePerGroupLg = this.element.getAttribute(this.slidePerGroupLg);
        const sliderAutoPlay = this.element.getAttribute(this.sliderAutoPlay);
        const sliderAutoPlayDelay = this.element.getAttribute(this.sliderAutoPlayDelay);
        const sliderLoop = (this.element.getAttribute(this.sliderLoop)==='true');
        const defaults = {
          modules: [Pagination, A11y, Keyboard, Navigation, Autoplay],
          a11y: {
            scrollOnFocus: false,
          },
          keyboard: {
            enabled: true,
          },
          slidesPerView: slidePerPage ? slidePerPage : 1,
          slidesPerGroup: slidePerGroup ? slidePerGroup : 1,
          spaceBetween: 24,
          pagination: {
            el: this.pagination,
            clickable: true,
            bulletClass: `${this.paginationBullet} swiper-pagination-bullet`,
            bulletActiveClass: 'is-active',
          },
          navigation: {
            nextEl: this.navNext,
            prevEl: this.navPrev
          },
          ...(sliderAutoPlay && {
            autoplay: {
              ...(sliderAutoPlayDelay ? {delay: parseInt(sliderAutoPlayDelay)} : {delay: 5000})
            }
          }),
          ...(sliderLoop && {
            loop: sliderLoop
          }),
          breakpoints: {
            768: {
              slidesPerView: slidePerPageMd ? slidePerPageMd : 2,
              slidesPerGroup: slidePerGroupMd ? slidePerGroupMd : 2,
            },
            960: {
              slidesPerView: slidePerPageLg ? slidePerPageLg : 3,
              slidesPerGroup: slidePerGroupLg ? slidePerGroupLg : 3,
            },
          },
        };
        const optionsData = this.element.dataset.swiper ? JSON.parse(this.element.dataset.swiper) : {}
        const overrideOptions = {
          ...options,
          ...optionsData
        }
        this.sliderOptions = Object.assign(defaults, overrideOptions);
      },

      /**
       * Initialize swiper instance
       * 
       * @private
       */
      _initSlider() {
        const swiper = new Swiper(this.element, this.sliderOptions);
      },
    };
  }
}
