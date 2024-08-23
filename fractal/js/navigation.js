import Component from './component';

export default class Navigation extends Component {
  static get selector() {
    return '#header-wrap';
  }
  static get methods() {
    return {
      init() {
        this._initAttr();
        this._initElements();
        this._attachEventListener();
      },
      _initAttr() {
        this.navItemHasChildrenSelector = '.ucla-main-nav__item--has-children';
        this.subNavItemHasChildrenSelector = '.ucla-nav_sublist--has-children';
        this.navItemToggle = '.ucla-main-nav__toggle';
        this.subNavSelector = '.ucla-main-nav__sublist';
        this.navItemList = '.ucla-main-nav__item';
        this.navItemLink = '.ucla-main-nav__link';
        this.mainNavAttr = '#nav-main';
        this.searchButtonAttr = '#search-button';
        this.navSearchAttr = '#primary-nav-search';
        this.hamburgerButtonAttr = '#primary-ham';
      },
      _initElements() {
        this.parentNavItems = Array.from(
          this.element.querySelectorAll(this.navItemHasChildrenSelector)
        );
        this.subNav = Array.from(
          this.element.querySelectorAll(this.subNavSelector)
        );
        this.triggers = Array.from(
          this.element.querySelectorAll(this.navItemToggle)
        );
        this.navItems = Array.from(
          this.element.querySelectorAll(this.navItemList)
        );
        this.navLinks = Array.from(
          this.element.querySelectorAll(this.navItemLink)
        );
        this.mainNav = this.element.querySelector(this.mainNavAttr);
        this.hamburgerButton = this.element.querySelector(
          this.hamburgerButtonAttr
        );
        this.searchButton = this.element.querySelector(this.searchButtonAttr);
        this.navSearch = this.element.querySelector(this.navSearchAttr);
      },
      open(el) {
        el.classList.add('is-open');
        el.querySelector('button').setAttribute('aria-expanded', true);
      },
      close(el) {
        el.classList.remove('is-open');
        el.querySelector('button').setAttribute('aria-expanded', false);
      },
      onClick(event) {
        if (this.triggers && this._eventInsideNavToggle(event)) {
          if (
            event.target.closest(this.navItemList).classList.contains('is-open')
          ) {
            this.close(event.target.closest(this.navItemList));
          } else {
            this.open(event.target.closest(this.navItemList));
          }
        }
        if (this.searchButton.contains(event.target)) {
          const parent = event.target.closest('.ucla-main-nav__search-desktop');
          if (parent.classList.contains('is-open')) {
            this.close(parent);
          } else {
            this.open(parent);
          }
        }
        if (this.hamburgerButton.contains(event.target)) {
          if (this.element.classList.contains('is-open')) {
            this.close(this.element);
          } else {
            this.open(this.element);
          }
        }
      },
      onFocusout(event) {
        const currNavList = event.target.closest(this.navItemList);
        if (currNavList?.closest(this.subNavSelector)) {
          const isChild = currNavList
            .closest(this.navItemHasChildrenSelector)
            .querySelector(this.subNavSelector);
          if (isChild.contains(event.relatedTarget)) return;
          this.close(currNavList.closest(this.navItemHasChildrenSelector));
        }
      },
      onKeydown(event) {
        event.stopPropagation();
        switch (event.keyCode) {
          case 27: // escape
            this._handleEscapeKey(event);
            break;
          case 40: // down
            this._handleDownKey(event);
            break;
          case 38: // up
            this._handleUpKey(event);
            break;
          case 37: // left
            this._handleLeftKey(event);
            break;
          case 39: // right
            this._handleRightKey(event);
            break;
          default:
            return;
        }
      },
      _attachEventListener() {
        window.addEventListener('resize', () => {
          this.parentNavItems.forEach((el) => this.close(el));
          this.close(this.element);
          this.close(this.navSearch);
        });
        document.addEventListener('click', (event) => {
          if (!document.getElementById('nav-main').contains(event.target)) {
            this.close(this.navSearch);
          }
          if (
            !this.mainNav.contains(event.target) &&
            !this.hamburgerButton.contains(event.target)
          ) {
            this.close(this.element);
          }
        });
      },
      _handleEscapeKey(event) {
        this.subNav?.forEach((menu) => {
          if (menu.contains(event.target)) {
            menu
              .closest(this.navItemHasChildrenSelector)
              .querySelector(this.navItemLink)
              .focus();
          }
        });
        if (this.navSearch?.contains(event.target)) {
          this.close(this.navSearch);
          this.searchButton.focus();
        }
      },
      _handleDownKey(event) {
        this.navLinks?.forEach((link) => {
          if (link.contains(event.target)) {
            const parentCls = event.target.closest(
              this.navItemHasChildrenSelector
            );
            const cls = event.target.closest(this.navItemList);
            switch (true) {
              case cls.matches(this.navItemHasChildrenSelector):
                this.open(cls);
                cls
                  .querySelector(`${this.subNavSelector} ${this.navItemLink}`)
                  .focus();
                break;
              case parentCls?.matches(this.navItemHasChildrenSelector):
                if (!cls.nextElementSibling) {
                  if (
                    !cls.closest(this.navItemHasChildrenSelector)
                      .nextElementSibling
                  ) {
                    this.searchButton.focus();
                    return;
                  }
                  cls
                    .closest(this.navItemHasChildrenSelector)
                    .nextElementSibling.querySelector(this.navItemLink)
                    .focus();
                  return;
                }
                cls.nextElementSibling.querySelector(this.navItemLink).focus();
                break;
              default:
                cls.nextElementSibling.querySelector(this.navItemLink).focus();
                break;
            }
          }
        });
      },
      _handleUpKey(event) {
        this.navLinks?.forEach((link) => {
          if (link.contains(event.target)) {
            const cls = event.target.closest(this.navItemList);
            const prevParent = cls.previousElementSibling;
            switch (true) {
              case cls.matches(
                `${this.subNavSelector}>${this.navItemList}:first-child`
              ):
                event.target
                  .closest(this.navItemHasChildrenSelector)
                  .querySelector(this.navItemLink)
                  .focus();
                // this.close(
                //   event.target.closest(this.navItemHasChildrenSelector)
                // );
                break;
              case prevParent?.matches(this.navItemHasChildrenSelector):
                this.open(prevParent);
                prevParent
                  .querySelector(
                    `${this.subNavSelector}>${this.navItemList}:last-child>${this.navItemLink}`
                  )
                  .focus();
                break;
              default:
                if (!prevParent) return;
                prevParent.querySelector(this.navItemLink).focus();
                break;
            }
          }
        });
      },
      _handleLeftKey(event) {
        this.navLinks?.forEach((link) => {
          if (link.contains(event.target)) {
            const cls = event.target.closest(this.navItemList);
            const parentCls = cls.closest(this.subNavSelector);
            switch (true) {
              case parentCls?.matches(this.subNavSelector):
                const hasParent = cls.closest(
                  this.navItemHasChildrenSelector
                ).previousElementSibling;
                if (hasParent) {
                  cls
                    .closest(this.navItemHasChildrenSelector)
                    .previousElementSibling.querySelector(this.navItemLink)
                    .focus();
                } else {
                  cls
                    .closest(this.navItemHasChildrenSelector)
                    .querySelector(this.navItemLink)
                    .focus();
                }
                break;
              default:
                if (!cls.previousElementSibling) return;
                cls.previousElementSibling
                  .querySelector(this.navItemLink)
                  .focus();
                break;
            }
          }
        });
      },
      _handleRightKey(event) {
        this.navLinks?.forEach((link) => {
          if (link.contains(event.target)) {
            const cls = event.target.closest(this.navItemList);
            const parentCls = cls.closest(this.subNavSelector);
            switch (true) {
              case parentCls?.matches(this.subNavSelector):
                const hasParent = cls.closest(
                  this.navItemHasChildrenSelector
                ).nextElementSibling;
                if (hasParent) {
                  cls
                    .closest(this.navItemHasChildrenSelector)
                    .nextElementSibling.querySelector(this.navItemLink)
                    .focus();
                } else {
                  this.searchButton.focus();
                }
                break;
              default:
                if (!cls.nextElementSibling) {
                  this.searchButton.focus();
                } else {
                  cls.nextElementSibling
                    .querySelector(this.navItemLink)
                    .focus();
                }
                break;
            }
          }
        });
      },
      _eventInsideNavToggle(event) {
        return event.target.closest(this.navItemToggle);
      },
    };
  }
}
