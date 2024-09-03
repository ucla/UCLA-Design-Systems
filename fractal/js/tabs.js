import Component from './component';

/**
 * Tabs provide the ability to navigate different views or facets of the same content.
 */
export default class Tabs extends Component {

  /**
   * Gets the tabs CSS class
   *
   * @static
   * @returns {string}
   */
  static get selector() {
    return '.ucla-tabs';
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
       * Initialize tabs
       */
      init() {
        this._initAttr();
        this._initElements();
        this._setTabIds();
        this._setPanelIds();

        Component.bindMethod(this, 'activateTab', this.activateTab);
      },

      /**
       * Initialize tab attributes based on CSS class
       *
       * @private
       */
      _initAttr() {
        this.tabAttr = '.ucla-tablink';
        this.tabPanelAttr = '.ucla-tabpanel';
      },

      /**
       * Initialize tab and tabpanel elements
       *
       * @private
       */
      _initElements() {
        this.tabs = Array.from(this.element.querySelectorAll(this.tabAttr));
        this.panels = Array.from(
          this.element.querySelectorAll(this.tabPanelAttr)
        );
      },
      
      /**
       * Assigns unique IDs to tabs and reference for tab panels
       * 
       * @private
       */
      _setTabIds() {
        this.tabs.forEach((tab) => {
          const id = Component.generateUID();
          Component.setAttrIfNotSpecified(tab, 'data-ucla-tab', id);
          Component.setAttrIfNotSpecified(tab, 'id', `${id}-tab`);
        });
      },

      /**
       * Assigns IDs to tabpanels based off of tab reference
       * 
       * @private
       */
      _setPanelIds() {
        const numPanels = this.panels.length;
        for (let i = 0; i < numPanels; i++) {
          const tab = this.tabs[i];
          const panelId = tab.getAttribute('data-ucla-tab');
          const panel = this.panels[i];
          panel.setAttribute('aria-labelledby', tab.getAttribute('id'));
          Component.setAttrIfNotSpecified(panel, 'id', panelId);
        }
      },

      /**
       * Activates the tab panel with the given panel ID value.
       * 
       * @param {string} panelId - Panel ID
       */
      activateTab(panelId) {
        const tabToBeActive = this.element.querySelector(`#${panelId}-tab`);
        const panelToBeActive = this.element.querySelector(`#${panelId}`);
        if (!this._tabActivatedEvent()) return;
        tabToBeActive.classList.add('is-active');
        tabToBeActive.setAttribute('aria-selected', true);
        tabToBeActive.removeAttribute('tabindex');
        panelToBeActive.removeAttribute('hidden');
      },

      /**
       * Deactivates all tab panels.
       * 
       * @private
       */
      _deactivateAllTabs() {
        this.tabs.forEach((tab) => {
          tab.setAttribute('aria-selected', false);
          tab.setAttribute('tabindex', -1);
          tab.classList.remove('is-active');
        });
        this.panels.forEach((panel) => {
          panel.setAttribute('hidden', '');
        });
      },

      /**
       * Handles onClick events in the tabs
       * 
       * @param {Event} event - onClick event
       */
      onClick(event) {
        if (this.tabs && this.tabs.includes(event.target)) {
          const id = event.target.getAttribute('data-ucla-tab');
          this._deactivateAllTabs();
          this.activateTab(id);
        }
      },

      /**
       * Handles keydown events inside the tabs
       * 
       * @param {Event} event - Keydown event
       */
      onKeydown(event) {
        if (!event.target.closest(this.tabAttr)) return;
        const currTab = event.target.closest(this.tabAttr);
        this.prevTabIndex = this.tabs.indexOf(currTab) - 1;
        this.nextTabIndex = this.tabs.indexOf(currTab) + 1;
        switch (event.keyCode) {
          case 37: // left
            event.preventDefault();
            this.tabs[this.prevTabIndex]
              ? this.tabs[this.prevTabIndex].focus()
              : this.tabs[this.tabs.length - 1].focus();
            break;
          case 39: // right
            event.preventDefault();
            this.tabs[this.nextTabIndex]
              ? this.tabs[this.nextTabIndex].focus()
              : this.tabs[0].focus();
            break;
        }
      },

      /**
       * Returns true if custom  event is dispatched.
       * 
       * @private
       * @returns {boolean} - Event successfully dispatched
       */
      _tabActivatedEvent() {
        const dispatch = Component.dispatchCustomEvent(
          'TabActivated',
          this.element,
          { tab: this.tabToBeActive }
        );
        return dispatch;
      },
    };
  }
}
