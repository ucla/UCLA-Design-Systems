class Navigation {
  init(options) {
    this.navigationOptions(options)
    this.setup();
  }

  setup() {
    const hamburger = document.getElementById('primary-ham');
    const header = document.getElementById("header-wrap");
    const $navPrimaryHasChildren = this._getAll(".ucla-main-nav__item--has-children");
    const $navPrimaryItem = this._getAll(".ucla-main-nav__item");
    
    hamburger.addEventListener('click', event => {
      event.stopPropagation();
      this.toggleOffCanvas(header, hamburger);
    })

    $navPrimaryHasChildren.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.setAttribute('aria-expanded', "true")
      })
      item.addEventListener('mouseout', () => {
        item.setAttribute('aria-expanded', "false")
      })
    });

    $navPrimaryItem.forEach($el => {
      $el.addEventListener('keydown', e => {
        this.eventKey(e);
      })
    });

    document.addEventListener('click', e => {
      if (!document.getElementById('nav-main').contains(e.target)) {
        this.hideOffCanvas(header, hamburger);
      }
    })
  }

  toggleOffCanvas(container, e) {
    const isActive = container.classList.contains('is-open')
    return !isActive ? this.showOffCanvas(container, e) : this.hideOffCanvas(container, e);
  }

  showOffCanvas(el, hamburgerEl) {
    const { onCanvasOpen } = this.options;
    el.classList.add('is-open');
    hamburgerEl.setAttribute('aria-expanded', 'true')
    onCanvasOpen(el);
  }

  hideOffCanvas(el, hamburgerEl) {
    const { onCanvasClose } = this.options;
    el.classList.remove('is-open');
    hamburgerEl.setAttribute('aria-expanded', 'false')
    onCanvasClose(el);
  }

  eventKey(e) {
    if ([ 13, 37, 38, 39, 40 ].includes(e.keyCode)) {
			e.preventDefault();
      if (e.keyCode === 40 || e.key === 'ArrowDown') {
        if (e.target.parentElement.classList.contains('ucla-main-nav__item--has-children')) {
          this.openSubMenu(e.target);
          e.target.parentElement.querySelector('.ucla-main-nav__sublist > li > a').focus();
          //console.log(e.target)
        } else {
          // e.target.parentElement.nextElementSibling.querySelector('.ucla-main-nav__link') ? e.target.parentElement.nextElementSibling.querySelector('.ucla-main-nav__link').focus() : e.target.closest('.ucla-main-nav__item--has-children').nextElementSibling.querySelector('.ucla-main-nav__link').focus();
          console.log(e.target.parentElement)
          if (e.target.parentElement.classList.contains('ucla-main-nav__sublist')) {
            console.log('contains ucla-main-nav__sublist')
            e.target.parentElement.nextElementSibling.querySelector('.ucla-main-nav__link').focus()
          } else {
            e.target.closest('.ucla-main-nav__item--has-children').nextElementSibling.querySelector('.ucla-main-nav__link').focus()
          }
        }
      }
      
		}
  }

  toggleSubMenu(el) {
    let isActive = el.target.parentElement.classList.contains('is-open')
    return isActive ? this.closeSubMenu(el) : this.openSubMenu(el);
  }

  openSubMenu(el) {
    let menuListItem = el.parentElement;
    menuListItem.classList.add('is-open');
    menuListItem.setAttribute('aria-expanded', 'true');
  }

  closeSubMenu(el) {console.log('close', el)}

  _getAll(selector) {
    let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }

  defaults() {
    return {
      onCanvasOpen: () => {},
      onCanvasClose: () => {}
    }
  }

  navigationOptions(options) {
		this.options = Object.assign(this.defaults(), options);
	}
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Navigation;
} else {
  window.Navigation = Navigation;
}