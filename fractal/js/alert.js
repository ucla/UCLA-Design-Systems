import Component from './component';

/**
 * An alert keeps users informed of important and sometimes time-sensitive changes.
 */

export default class Alert extends Component {

  /**
   * Gets the alert CSS class
   *
   * @static
   * @returns {string}
   */
  
  static get selector() {
    return '.ucla-alert';
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
       * Initialize alert
       */

      init() {
        this._initCloseButton();
        Component.bindMethod(this, 'dismiss', this.dismiss);
      },

      /**
       * Dismisses alert
       */

      dismiss() {
        if (!this._dismissEvent()) return;
        this.element.remove();
      },

      /**
       * Initializes alert close button
       *
       * @private
       */

      _initCloseButton() {
        this.closeButtonAttr = '.ucla-alert--close';
        this.closeButton = this.element.querySelector(this.closeButtonAttr);
      },

      /**
       * Handles click event for dismissal/close
       *
       * @param {Event} event - Click event
       */

      onClick(event) {
        if (this.closeButton && this.closeButton.contains(event.target)) {
          this.dismiss();
        }
      },

      /**
       * Returns true if alert dismiss event was dispatched
       *
       * @private
       * @returns {boolean} Event sucessfully dispatched
       */

      _dismissEvent() {
        const dispatch = Component.dispatchCustomEvent(
          'AlertDismissed',
          this.element
        );
        return dispatch;
      },
    };
  }
}
