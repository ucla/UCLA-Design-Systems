import Swiper from 'swiper';
import { Pagination, A11y, Keyboard } from 'swiper/modules';
import Component from './component';

export default class Carousel extends Component {
  static get selector() {
    return '.ucla-carousel';
  }
  static get methods() {
    return {
      init(options) {
        this._initSelector();
        this._initOptions(options);
        this._initSlider();
      },
      _initSelector() {
        this.slider = '.ucla-carousel';
        this.pagination = '.ucla-carousel__pagination';
        this.paginationBullet = 'ucla-carousel__page';
        this.slidePerPage = 'data-ucla-per-page';
        this.slidePerPageMd = 'data-ucla-per-page-md';
        this.slidePerPageLg = 'data-ucla-per-page-lg';
      },
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
      _initSlider() {
        const swiper = new Swiper(this.slider, this.sliderOptions);
      },
    };
  }
}
