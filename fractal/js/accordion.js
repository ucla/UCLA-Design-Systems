import Component from './component';

/**
 * Display content in a compact manner. Accordions provide a space-saving technique for displaying content in your viewport.
 */
export default class Accordion extends Component {
  /**
   * Gets the accordion CSS class
   *
   * @static
   * @returns {string}
   */

  static get selector() {
    return '.accordion';
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
       * Initialize accordion
       */

      init() {
        this._initAttr();
        this._initElements();
        this._setTriggerId();
        this._setPanelId();

        Component.bindMethod(this, 'open', this.open);
        Component.bindMethod(this, 'close', this.close);
      },

      /**
       * Opens the accordion panel with the ID value
       *
       * @param {string} panelId - Panel ID
       */

      open(panelId) {
        let panel = document.querySelector(`#${panelId}`);
        if (!this._dispatchEvent('AccordionOpen', panel)) {
          return;
        }
        let panelItem = panel.closest('.accordion-item');
        let panelBody = panel.closest('.accordion__body');
        let trigger = document.querySelector(
          `#${panel.getAttribute('aria-labelledby')}`
        );

        if (this._isTransitioning || panelItem.classList.contains('is-open')) {
          return;
        }
        if (!this._isMultiOpen) {
          this._closeAllPanels();
        }
        panelItem.classList.add('is-opening');
        panelBody.style['height'] = 0;

        trigger.setAttribute('aria-expanded', true);

        this._isTransitioning = true;

        const completeTransition = () => {
          this._isTransitioning = false;
          panelItem.classList.remove('is-opening');
          panelItem.classList.add('is-open');
          panelBody.style['height'] = '';
        };
        Component._queueCallback(completeTransition, panelBody, true);
        panelBody.style['height'] = `${panel.scrollHeight}px`;
      },

      /**
       * Close the accordion panel with the ID value
       *
       * @param {panelId} panelId - Panel ID
       */

      close(panelId) {
        let panel = document.querySelector(`#${panelId}`);
        if (!this._dispatchEvent('AccordionClose', panel)) {
          return;
        }
        let panelItem = panel.closest('.accordion-item');
        let panelBody = panel.closest('.accordion__body');
        let trigger = document.querySelector(
          `#${panel.getAttribute('aria-labelledby')}`
        );
        if (this._isTransitioning) {
          return;
        }
        panelBody.style['height'] = `${
          panelBody.getBoundingClientRect()['height']
        }px`;
        panelBody.offsetHeight;
        panelItem.classList.remove('is-open');
        panelItem.classList.add('is-opening');
        trigger.setAttribute('aria-expanded', false);

        this._isTransitioning = true;
        const completeTransition = () => {
          this._isTransitioning = false;
          panelItem.classList.remove('is-opening');
        };
        panelBody.style['height'] = '';
        Component._queueCallback(completeTransition, panelBody, true);
      },

      /**
       * Handles click event for open/close
       *
       * @param {Event} event - Click event
       */

      onClick(event) {
        if (!event.target.closest('.accordion__heading-button')) {return}
        const id = event.target.closest('.accordion__heading-button').getAttribute('data-ucla-trigger');
        const panelItem = event.target.closest('.accordion-item');
        if (panelItem.classList.contains('is-open')) {
          this.close(id);
        } else {
          this.open(id);
          }
      },

      /**
       * Initialize accordion attributes based on CSS class
       *
       * @private
       */

      _initAttr() {
        this.triggerAttr = '.accordion__heading-button';
        this.panelAttr = '.accordion__content';
      },

      /**
       * Initialize all accordion panel elements and detects if multiselect
       *
       * @private
       */

      _initElements() {
        this.triggers = Array.from(
          this.element.querySelectorAll(this.triggerAttr)
        );
        this.panels = Array.from(this.element.querySelectorAll(this.panelAttr));
        this._isMultiOpen = this.element.classList.contains('is-multiselect');
      },

      /**
       * Assigns random IDs to the button that triggers the accordion panel if IDs were not specified in the element.
       *
       * @private
       */

      _setTriggerId() {
        this.triggers.forEach((trigger) => {
          const id = Component.generateUID();
          Component.setAttrIfNotSpecified(trigger, 'data-ucla-trigger', id);
          Component.setAttrIfNotSpecified(trigger, 'id', `${id}-label`);
        });
      },

      /**
       * Assigns rantom IDs to panels of the accordion if IDs were not specified in the element.
       *
       * @private
       */

      _setPanelId() {
        const numPanels = this.panels.length;

        for (let i = 0; i < numPanels; i++) {
          const trigger = this.triggers[i];
          const triggerId = trigger.getAttribute('id');
          const panelId = trigger.getAttribute('data-ucla-trigger');
          const panel = this.panels[i];
          Component.setAttrIfNotSpecified(trigger, 'aria-controls', panelId);
          Component.setAttrIfNotSpecified(panel, 'id', panelId);
          Component.setAttrIfNotSpecified(panel, 'aria-labelledby', triggerId);
        }
      },

      /**
       * Closes all accordion panels
       *
       * @private
       */

      _closeAllPanels() {
        this.panels.forEach((panel) => {
          let panelItem = panel.closest('.accordion-item');
          if (panelItem.classList.contains('is-open')) {
            let panelId = panel.getAttribute('id');
            this.close(panelId);
          }
        });
      },

      /**
       *
       * @param {string} name - Event name
       * @param {HTMLElement} panel - Accordion panel DOM element toggled by event
       * @returns {boolean} Event successfully dispatched
       */

      _dispatchEvent(name, panel) {
        const dispatch = Component.dispatchCustomEvent(name, this.element, {
          panel,
        });
        return dispatch;
      },
    };
  }
}
