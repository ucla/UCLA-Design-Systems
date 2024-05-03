class Tabs {
  init(options) {
    this.tabOptions(options);
    this.setup();
  }

  setup() {
		const tabContainer = document.querySelectorAll(this.options.tabContainer);

		for (let i=0; i < tabContainer.length; i++) {
			const tabButtons = tabContainer[i].querySelector(this.options.tabGroup).querySelectorAll(this.options.tabElement);
			const tabPanelGroup = tabContainer[i].querySelector(this.options.paneGroup).querySelectorAll(this.options.paneElement);

			const activeTab = this.getActiveIndex(tabContainer[i].querySelector(this.options.tabGroup));

			this.resetTabs(tabButtons);
			this.resetPanes(tabPanelGroup);

			tabButtons.forEach((tabItem, index) => {
				this.addTabAttributes(tabItem, i);
				this.addTabPanelAttributes(tabItem, tabPanelGroup[index]);

				tabItem.addEventListener(this.options.trigger, event => {
					this.activate(event.currentTarget, tabPanelGroup, tabContainer[i])
				})

				tabItem.addEventListener('keydown', e => {
					this.eventKey(e);
				})
				
				if (activeTab !== null) {
					this.activateTab([ ...tabButtons ][activeTab]);
					this.activatePane([...tabPanelGroup][activeTab]);
				}
			})
		}
  }

  eventKey(e) {
		if ([ 13, 37, 38, 39, 40 ].includes(e.keyCode)) {
			e.preventDefault();
		}

		if (e.keyCode == 13) {
			e.currentTarget.click();
		} else if ([ 39, 40 ].includes(e.keyCode)) {
			this.step(e, 1);
		} else if ([ 37, 38 ].includes(e.keyCode)) {
			this.step(e, -1);
		}
	}
  step(e, direction) {
		const children = e.currentTarget.parentElement.children;
		this.resetTabindex(children);

		let el = children[this.pos(e.currentTarget, children, direction)];
		el.focus();
		el.setAttribute('tabindex', 0);
	}
  pos(tab, children, direction) {
		let pos = this.index(tab);
		pos += direction;

		if (children.length <= pos) {
			pos = 0;
		} else if (pos == -1) {
			pos = children.length - 1;
		}

		return pos;
	}

  // set active tab
  getActiveIndex(groupTabs) {
    let el = groupTabs.querySelector(this.options.tabActive);
    if (!el) {
      el = groupTabs.querySelector('[aria-selected="true"]');
    }
    if (el) {
      return this.index(el);
    } else if (this.options.tabActiveFallback !== false) {
      return this.options.tabActiveFallback;
    } else {
      return false;
    }
  }

  index(el) {
		return [ ...el.parentElement.children ].indexOf(el);
	}

  addTabAttributes(tab, index) {
    const tabIndex = this.index(tab);
    const prefix = this.options.prefix;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', `${prefix ? `${prefix}-` : ''}panel-${index}-tab-${tabIndex}`);
    tab.setAttribute('id', `${prefix ? `${prefix}-` : ''}panel-${index}-${tabIndex}`)
  }

  addTabPanelAttributes(tab, pane) {
    pane.setAttribute('role', 'tabpanel');
		pane.setAttribute('aria-labelledby', tab.getAttribute('id'));
		pane.setAttribute('id', tab.getAttribute('aria-controls'));
		pane.setAttribute('tabindex', '0');
  }

  resetTabindex(children) {
		[ ...children ].forEach((child) => {
			child.setAttribute('tabindex', '-1');
		});
	}

  resetTabs(tabs) {
		tabs.forEach((el) => {
			el.setAttribute('aria-selected', 'false');
			el.classList.remove(this.options.tabActive)
		});
		this.resetTabindex(tabs);
	}

  resetPanes(panes) {
		panes.forEach((el) => el.setAttribute('hidden', ''));
	}

  activate(tab, paneGroup, container) {
		let attr = tab.getAttribute('aria-controls');
		const pane = container.querySelector(`#${attr}`);

		this.resetTabs([...tab.parentNode.children]);
		this.resetPanes(paneGroup);

		this.activateTab(tab);
		this.activatePane(pane);

		this.emitEvent(tab, pane);
	}

  // Activate tab
	activateTab(tab) {
		tab.setAttribute('aria-selected', 'true');
		tab.setAttribute('tabindex', '0');
    tab.classList.add(this.options.tabActive)
	}

	// Activate pane
	activatePane(pane) {
		//console.log(pane);
		pane.removeAttribute('hidden');
	}

  emitEvent(tab, pane) {
		let event = new CustomEvent('Tabs', {
			bubbles: true,
			detail: {
				tab: tab,
				pane: pane
			}
		});

		tab.dispatchEvent(event);
	}
  
  defaults() {
		return {
			tabGroup: '.ucla-tabslist',
			tabElement: 'button',
			paneGroup: '.ucla-tabpanels',
			paneElement: 'article',
			prefix: '',
			tabActive: 'is-active',
			tabActiveFallback: 0,
			trigger: 'click',
			tabContainer: '.ucla-tabs'
		};
	}
  tabOptions(options) {
		this.options = Object.assign(this.defaults(), options);
	}
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Tabs;
} else {
  window.Tabs = Tabs;
}