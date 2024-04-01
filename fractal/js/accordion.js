export function Accordion() {
  // static get methods () {
  //   return {
  //     init () {
  //       console.log('Accordion initialized');
  //     }
  //   }
  // }
  // static init () {
  //   console.log('Accordion initialized');
  // }
  let eventsAttached = false;
  const core = {
    init() {
      console.log('Accordion initialized')
      const defaults = {
        multiSelect: false, // show multiple elements at the same time {boolean}
        containerClass: 'accordion',
        triggerClass: 'accordion__heading-button',
        panelClass: 'accordion-item',
        activeClass: 'is-open',
        beforeOpen: () => {},
        onOpen: () => {},
        beforeClose: () => {},
        onClose: () => {}
      }
      this.options = Object.assign(defaults);
      this.createDefinitions();
      attachEvents();
    },
    createDefinitions() {
      const { containerClass, panelClass } = this.options;
      this.children = document.querySelector(cn(containerClass)).querySelectorAll(cn(panelClass));
      
      // console.log(getChildren);
    },

    toggleAccordion(el) {
      const { activeClass } = this.options;
      const isActive = children.classList.contains(activeClass);
      if (isActive) return;
      return isActive ? this.closeElement(el) : this.openElement(el)
    },

    closeElement(el) {
      const { panelClass, activeClass, beforeClose } = this.options;
      // const panel = el.querySelector(cn(panelClass));
      // const isActive = children.classList.contains(activeClass);
      el.classList.remove(activeClass)
      // if (!isActive) {
      //   beforeClose(el);
      // }
    },

    openElement(el) {
      el.classList.add(activeClass)
    },

    handleClick(event) {
      console.log('clicked');
      const target = event.currentTarget;
      this.children.forEach((child, index) => {
        this.currentFocusedIndex = index;
        this.toggleAccordion(child);
      })
    }
  }

  attachEvents = () => {
    if (eventsAttached) return;
    const { triggerClass, panelClass } = core.options;
    core.handleClick = core.handleClick.bind(core);
    core.children.forEach((element) => {
      const trigger = element.querySelector(cn(triggerClass));
      const panel = element.querySelector(cn(panelClass));

      trigger.addEventListener('click', core.handleClick);
    })
    eventsAttached = true;
  }
  // this.init = () => {
  //   console.log('Accordion initialized')
  //   const defaults = {
  //     multiSelect: false, // show multiple elements at the same time {boolean}
  //     containerClass: 'accordion',
  //     triggerClass: 'accordion__heading-button',
  //     panelClass: 'accordion-item',
  //     activeClass: 'is-open',
  //     beforeOpen: () => {},
  //     onOpen: () => {},
  //     beforeClose: () => {},
  //     onClose: () => {}
  //   }
  //   this.options = Object.assign(defaults);
  //   createDefinitions();
  // },
  const cn = (className) => `.${CSS.escape(className)}`;
  core.init();  
}

// Accordion.prototype = {
//   init:function() {
//     console.log('Accordion initialized');
//   }
// }