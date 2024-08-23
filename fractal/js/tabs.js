import Component from './component';

export default class Tabs extends Component {
  static get selector() {
    return '.ucla-tabs';
  }
  static get methods() {
    return {
      init() {
        this._initAttr();
        this._initElements();
        this._setTabIds();
        this._setPanelIds();

        Component.bindMethod(this, 'activateTab', this.activateTab);
      },
      _initAttr() {
        this.tabAttr = '.ucla-tablink';
        this.tabPanelAttr = '.ucla-tabpanel';
      },
      _initElements() {
        this.tabs = Array.from(this.element.querySelectorAll(this.tabAttr));
        this.panels = Array.from(
          this.element.querySelectorAll(this.tabPanelAttr)
        );
      },
      _setTabIds() {
        this.tabs.forEach((tab) => {
          const id = Component.generateUID();
          Component.setAttrIfNotSpecified(tab, 'data-ucla-tab', id);
          Component.setAttrIfNotSpecified(tab, 'id', `${id}-tab`);
        });
      },
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
      activateTab(panelId) {
        const tabToBeActive = this.element.querySelector(`#${panelId}-tab`);
        const panelToBeActive = this.element.querySelector(`#${panelId}`);
        if (!this._tabActivatedEvent()) return;
        tabToBeActive.classList.add('is-active');
        tabToBeActive.setAttribute('aria-selected', true);
        tabToBeActive.removeAttribute('tabindex');
        panelToBeActive.removeAttribute('hidden');
      },
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
      onClick(event) {
        if (this.tabs && this.tabs.includes(event.target)) {
          const id = event.target.getAttribute('data-ucla-tab');
          this._deactivateAllTabs();
          this.activateTab(id);
        }
      },
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
