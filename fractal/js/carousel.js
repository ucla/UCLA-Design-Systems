import Swiper from 'swiper';
import { Pagination, A11y, Keyboard } from 'swiper/modules';
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
        this.slidePerPage = 'data-ucla-per-page';
        this.slidePerPageMd = 'data-ucla-per-page-md';
        this.slidePerPageLg = 'data-ucla-per-page-lg';
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
        const defaults = {
          modules: [Pagination, A11y, Keyboard],
          a11y: {
            scrollOnFocus: false,
          },
          keyboard: {
            enabled: true,
          },
          slidesPerView: slidePerPage ? slidePerPage : 1,
          spaceBetween: 24,
          pagination: {
            el: this.pagination,
            clickable: true,
            bulletClass: `${this.paginationBullet} swiper-pagination-bullet`,
            bulletActiveClass: 'is-active',
          },
          breakpoints: {
            768: {
              slidesPerView: slidePerPageMd ? slidePerPageMd : 2,
            },
            960: {
              slidesPerView: slidePerPageLg ? slidePerPageLg : 3,
            },
          },
        };
        this.sliderOptions = Object.assign(defaults, options);
      },

      /**
       * Initialize swiper instance
       * 
       * @private
       */
      _initSlider() {
        const swiper = new Swiper(this.slider, this.sliderOptions);
      },
    };
  }
}
