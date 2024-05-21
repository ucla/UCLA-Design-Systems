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
    if ([ 13, 37, 38, 39, 40 ].includes(e.keyCode) || ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(e.key)) {
			e.preventDefault();
      let parentListItem = e.target.parentElement;
      let firstTierListItem = e.target.closest('.ucla-main-nav__item--has-children');

      if (e.keyCode === 40 || e.key === 'ArrowDown') {
        if (parentListItem.classList.contains('ucla-main-nav__item--has-children')) {
          this.openSubMenu(e.target);
          parentListItem.querySelector('.ucla-main-nav__sublist > li > a').focus();
        } else if (parentListItem.closest('ul').classList.contains('ucla-main-nav__sublist')) {
          if (parentListItem.nextElementSibling === null) {
            if (firstTierListItem.nextElementSibling !== null) {
              firstTierListItem.nextElementSibling.querySelector('.ucla-main-nav__link').focus();
            } else {
              document.getElementById('search-button').focus();
            }
            this.closeSubMenu(e.target.closest('.ucla-main-nav__sublist'));
          } else {
            parentListItem.nextElementSibling.querySelector('.ucla-main-nav__link').focus();
          }
        } else {
          if (parentListItem.nextElementSibling !== null) {
            parentListItem.nextElementSibling.querySelector('.ucla-main-nav__link').focus();
          } else {
            document.getElementById('search-button').focus();
          }
        }
      }

      if (e.keyCode === 39 || e.key === 'ArrowRight') {
        if (parentListItem.classList.contains('ucla-main-nav__item--has-children')) {
          if (parentListItem.nextElementSibling === null) {
            document.getElementById('search-button').focus();
          } else {
            parentListItem.nextElementSibling.querySelector('.ucla-main-nav__link').focus();
          }
        } else if (parentListItem.closest('ul').classList.contains('ucla-main-nav__sublist')) {
          if (firstTierListItem.nextElementSibling !== null) {
            firstTierListItem.nextElementSibling.querySelector('.ucla-main-nav__link').focus();
          } else {
            document.getElementById('search-button').focus();
          }
          this.closeSubMenu(e.target.closest('.ucla-main-nav__sublist'));
        } else {
          if (parentListItem.nextElementSibling === null) {
            document.getElementById('search-button').focus();
          } else {
            parentListItem.nextElementSibling.querySelector('.ucla-main-nav__link').focus();
          }
        }
      }
      if (e.keyCode === 38 || e.key === 'ArrowUp') {
        if (parentListItem.classList.contains('ucla-main-nav__item--has-children')) {
          if (parentListItem.previousElementSibling !== null) {
            if (parentListItem.previousElementSibling.classList.contains('ucla-main-nav__item--has-children')) {
              this.openSubMenu(parentListItem.previousElementSibling.querySelector('.ucla-main-nav__link'))
              parentListItem.previousElementSibling.querySelector('.ucla-main-nav__sublist > li:last-of-type > a').focus();
            } else {
              parentListItem.previousElementSibling.querySelector('.ucla-main-nav__link').focus();
            }
          } else {return;}
        } else if (parentListItem.closest('ul').classList.contains('ucla-main-nav__sublist')) {
          if (parentListItem.previousElementSibling === null) {
            firstTierListItem.querySelector('.ucla-main-nav__link').focus();
            this.closeSubMenu(e.target.closest('.ucla-main-nav__sublist'));
          } else {
            parentListItem.previousElementSibling.querySelector('.ucla-main-nav__link').focus();
          }
        } else {
          if (parentListItem.previousElementSibling.classList.contains('ucla-main-nav__item--has-children')) {
            this.openSubMenu(parentListItem.previousElementSibling.querySelector('.ucla-main-nav__link'))
            parentListItem.previousElementSibling.querySelector('.ucla-main-nav__sublist > li:last-of-type > a').focus();
          } else {
            parentListItem.previousElementSibling.querySelector('.ucla-main-nav__link').focus();
          }
        }
      }
      if (e.keyCode === 37 || e.key === 'ArrowLeft') {
        if (parentListItem.classList.contains('ucla-main-nav__item--has-children')) {
          if (parentListItem.previousElementSibling === null) {
            return;
          } else {
            parentListItem.previousElementSibling.querySelector('.ucla-main-nav__link').focus();
          }
        } else if (parentListItem.closest('ul').classList.contains('ucla-main-nav__sublist')) {
          if (firstTierListItem.previousElementSibling !== null) {
            firstTierListItem.previousElementSibling.querySelector('.ucla-main-nav__link').focus();
            this.closeSubMenu(e.target.closest('.ucla-main-nav__sublist'));
          } else {
            return;
          }
        } else {
          parentListItem.previousElementSibling.querySelector('.ucla-main-nav__link').focus();
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

  closeSubMenu(el) {
    let menuListItem = el.parentElement;
    menuListItem.classList.remove('is-open');
    menuListItem.setAttribute('aria-expanded', 'false');
  }

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