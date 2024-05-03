class Accordion {
  init(options) {
    this.accordionOptions(options);
    this.setup();
  }

  setup() {
    const accordionContainer = document.querySelectorAll(this.options.accordionContainer);

    for (let i = 0; i < accordionContainer.length; i++) {
      const accordionItems = accordionContainer[i].querySelectorAll(this.options.accordionItem);
      accordionItems.forEach((item, index) => {

        const accordionButtons = item.querySelector(this.options.accordionButton);
        accordionButtons.addEventListener('click', event => {
          this.handleClick(event);
        })
      });
    }
  }

  toggleAccordion(item) {
    const {openClass, collapse, accordionItem} = this.options;
    const isActive = item.closest(accordionItem).classList.contains(openClass);
    if (isActive && !collapse) return;
    return isActive ? this.closeAccordion(item) : this.openAccordion(item)
  }

  closeAllAccordions(accordion) {
    const { openClass, multiSelect } = this.options;
    if (multiSelect) return;
    [...accordion.children].forEach((child, index) => {
      const isActive = child.classList.contains(openClass);
        if (isActive && index !== this.currentFocusedIndex) {
        this.closeAccordion(child);
      }
    });
  }

  openAccordion(item) {
    const { openClass, onOpen, accordionButton } = this.options;
    item.querySelector(accordionButton).setAttribute('aria-expanded', 'true');
    item.classList.add(openClass);
    onOpen(item);
  }

  closeAccordion(item) {
    const { openClass, onClose, accordionButton } = this.options;
    item.querySelector(accordionButton).setAttribute('aria-expanded', 'false');
    item.classList.remove(openClass)
    onClose(item);
  }

  handleClick(event) {
    const target = event.currentTarget;
    let accordionParent = target.closest(this.options.accordionContainer);
    [...accordionParent.children].forEach((child, index) => {
      if (child.contains(target)) {
        this.currentFocusedIndex = index;
        this.closeAllAccordions(accordionParent);
        this.toggleAccordion(child);
      }
    });
  }

  defaults() {
    return {
      accordionContainer: '.accordion',
      accordionHeading: '.accordion__heading',
      accordionButton: '.accordion__heading-button',
      accordionItem: '.accordion-item',
      multiSelect: false,
      collapse: true,
      openClass: 'is-open',
      prefix: '',
      onOpen: () => {},
      onClose: () => {}
    }
  }

  accordionOptions(options) {
		this.options = Object.assign(this.defaults(), options);
	}
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Accordion;
} else {
  window.Accordion = Accordion;
}