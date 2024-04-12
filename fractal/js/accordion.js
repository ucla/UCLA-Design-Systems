export function Accordion(selector, userOptions) {
  let eventsAttached = false;

  if (Array.isArray(selector)) {
    if (selector.length) {
      return selector.map(single => new Accordion(single, userOptions));
    }
  }

  const core = {
    init() {
      const defaults = {
        multiSelect: false, // show multiple elements at the same time {boolean}
        containerClass: 'accordion',
        triggerClass: 'accordion__heading-button',
        activeClass: 'is-open',
        panelClass: 'accordion-item',
        collapse: true,
        onOpen: () => {},
        onClose: () => {}
      }
      this.options = Object.assign(defaults, userOptions);

      const isString = (typeof selector === 'string');

      this.container = isString ? document.querySelector(selector) : selector;

      this.createDefinitions();
      attachEvents();
    },
    createDefinitions() {
      const { containerClass, panelClass } = this.options;
      const getAllAccordions = document.querySelectorAll(cn(containerClass));
      // https://github.com/michu2k/Accordion/blob/master/src/accordion.js
      this.children = document.querySelector(cn(containerClass)).querySelectorAll(cn(panelClass));
      
    },

    toggleAccordion(el) {
      const { activeClass, collapse } = this.options;
      const isActive = el.classList.contains(activeClass);
      if (isActive && !collapse) return;
      return isActive ? this.closeElement(el) : this.openElement(el)
    },

    closeElement(el) {
      const { activeClass, onClose } = this.options;
      el.classList.remove(activeClass)
      onClose(el);
    },

    closeAllElements() {
      const { activeClass, multiSelect } = this.options;
      if (multiSelect) return;

      this.children.forEach((child, index) => {
        const isActive = child.classList.contains(activeClass);
        if (isActive && index !== this.currentFocusedIndex) {
          this.closeElement(child);
        }
      })
    },

    openElement(el) {
      const { activeClass, onOpen } = this.options;
      el.classList.add(activeClass);
      onOpen(el);
    },

    handleClick(event) {
      const target = event.currentTarget;
      this.children.forEach((child, index) => {
        if (child.contains(target)) {
          this.currentFocusedIndex = index;
          this.closeAllElements();
          this.toggleAccordion(child);
        }
      })
    }
  }

  attachEvents = () => {
    if (eventsAttached) return;
    const { triggerClass } = core.options;
    core.handleClick = core.handleClick.bind(core);
    core.children.forEach((element) => {
      const trigger = element.querySelector(cn(triggerClass));
      trigger.addEventListener('click', core.handleClick);
    })
    eventsAttached = true;
  }

  detachEvents = () => {
    if (!eventsAttached) return;
    const { triggerClass } = core.options;

    core.children.forEach((element) => {
      const trigger = element.querySelector(cn(triggerClass));
      trigger.removeEventListener('click', core.handleClick);
    })
    eventsAttached = false;
  }
  
  const cn = (className) => `.${CSS.escape(className)}`;
  core.init();  
}