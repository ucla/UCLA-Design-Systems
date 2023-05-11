---
title: Accordion
---
{{render '@support'}}

Display content in a compact manner. Accordions provide a space-saving technique for displaying content in your viewport. Users can explore an overview of topics and then expand accordions as needed to see more information.

## Usage

### Usability Guidance

* Use accordions only when information doesn't need to be immediately visible, and you believe additional information will overwhelm users.
* Use accordions to a greater extent on mobile devices to help reduce scrolling.
* Use an icon or label on an accordion to visually indicate more information is available.
* Use an alternate icon or label on accordion to indicate an expanded state.

**Further Reading**
* [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/) (Nielsen Norman Group)
* [Accessible accordions & disclosure widgets](https://github.com/scottaohara/a11y_accordions) (The A11Y Project)

### Code Guidance

* Be sure include a class of `accordion-last` on the last element of your accordion.

### Accessibility Requirements

* Use `<dl>` with a nested `<button>` element.
* Only display one load more button per page or differentiate load more button text so screen readers can differentiate for non-sighted users.
* Apply ARIA roles so accordions are tab-able.
* Apply ARIA states to denote open headings and panels.