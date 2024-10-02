import Component from './component';

/**
 * Header navigation is a robust component offering standardized navigation, search, and accessibility.
 */
export default class Navigation extends Component {

  /**
   * Gets the header CSS ID
   *
   * @static
   * @returns {string}
   */
  static get selector() {
    return '#header-wrap';
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
       * Initialize navigation
       */
      init() {
        this._initAttr();
        this._initElements();
        this._attachEventListener();
      },

      /**
       * Initialize navigation attributes based on CSS class or ID
       *
       * @private
       */
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

      /**
       * Initialize all navigation elements
       *
       * @private
       */
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

      /**
       * Triggers the element to be opened.
       * 
       * @param {HTMLElement} el - Parent navigation list-item
       */
      open(el) {
        el.classList.add('is-open');
        el.querySelector('button').setAttribute('aria-expanded', true);
      },

      /**
       * Triggers the element to be closed.
       * 
       * @param {HTMLElement} el - Parent navigation list-item (must be opened)
       */
      close(el) {
        el.classList.remove('is-open');
        el.querySelector('button').setAttribute('aria-expanded', false);
      },

      /**
       * Handles onclick events in the navigation
       * 
       * @param {Event} event - Onclick event
       */
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

      /**
       * Handles onfocusout events in the navigation
       * 
       * @param {Event} event - Onfocusout event
       */
      // onFocusout(event) {
      //   const currNavList = event.target.closest(this.navItemList);
      //   if (currNavList?.closest(this.subNavSelector)) {
      //     console.log('closest ucla-main-nav__sublist', currNavList.closest(this.subNavSelector))
      //     const isChild = currNavList
      //       .closest(this.navItemHasChildrenSelector)
      //       .querySelector(this.subNavSelector);
      //     console.log('isChild', isChild);
      //     if (isChild.contains(event.relatedTarget)) return;
      //     // this.close(currNavList.closest(this.navItemHasChildrenSelector));
      //     console.log('this should close')
      //   }
      // },

      /**
       * Handles keydown events in the navigation
       * 
       * @param {Event} event - Keydown event
       */
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
          case 9: // tab
            if (event.shiftKey) {
              this._handleShiftTabKey(event);
            } else {
              this._handleTabKey(event);
            }
            break;
          default:
            return;
        }
      },

      /**
       * Attaches event listeners on instances outside of component.
       * 
       * @private
       */
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

      /**
       * Handles user's Escape key press when in sub-menu or in nav search dropdown
       * 
       * @private
       * @param {Event} event - Keydown event
       */
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

      /**
       * Handles user's Down arrow press when in sub-menu or in nav search dropdown
       * 
       * @private
       * @param {Event} event - Keydown event
       */
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
                  this.close(cls
                    .closest(this.navItemHasChildrenSelector));
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

      /**
       * Handles user's Up arrow press when in sub-menu or in nav search dropdown
       * 
       * @private
       * @param {Event} event - Keyup event
       */
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
                this.close(
                  event.target.closest(this.navItemHasChildrenSelector)
                );
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

      /**
       * Handles user's Left arrow press when in sub-menu or in nav search dropdown
       * 
       * @private
       * @param {Event} event - Keydown event
       */
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
                this.close(cls
                  .closest(this.navItemHasChildrenSelector));
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

      /**
       * Handles user's Right arrow press when in sub-menu or in nav search dropdown
       * 
       * @private
       * @param {Event} event - Keydown event
       */
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
                this.close(cls
                  .closest(this.navItemHasChildrenSelector));
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

      /**
       * Handles user's tab press when in sub-menu
       * 
       * @private
       * @param {Event} event - Keydown event
       */
      _handleTabKey(event) {
        const currNavList = event.target.closest(this.navItemList);
        const isDesktop = window.matchMedia('(min-width: 960px)')
        if (currNavList?.closest(this.subNavSelector)) {
          if (!currNavList.nextElementSibling && isDesktop.matches) {
            this.close(currNavList
              .closest(this.navItemHasChildrenSelector));
          }
        }
      },

      _handleShiftTabKey(event) {
        const currNavList = event.target.closest(this.navItemList);
        const isDesktop = window.matchMedia('(min-width: 960px)')
        if (currNavList?.matches(`${this.subNavSelector}>${this.navItemList}:first-child`) && isDesktop.matches) {
          this.close(currNavList
            .closest(this.navItemHasChildrenSelector));
        }
      },

      /**
       * Returns true if click event originated inside nav item caret
       * 
       * @param {Event} event - Click event
       * @returns {boolean} Click originated inside content area
       */
      _eventInsideNavToggle(event) {
        return event.target.closest(this.navItemToggle);
      },
    };
  }
}
