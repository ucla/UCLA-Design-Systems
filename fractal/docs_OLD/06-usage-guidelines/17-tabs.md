---
title: Tabs
---
{{render '@support'}}

Navigate content within a page or section of your site. Tabs provide the ability to navigate different views or facets of the same content. For example, on one tab you could show a list of cards while another contains paragraphs of text. Rather than listing those views in your navigation, you could divide them into tabs.

Tabs can represent static pages or dynamic views of one page, with a single or multiple URL for each view. UCLA's tabs have been forked and themed for our uses from the [W3.org tab examples](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html).

## Usage

### Usability Guidance

* Limit to 2-6 tabs within each page or section.
* Use succinct labels of 1-2 words in length for each tab.
* Visually distinguish current and other tabs with active, hover and focus states.

### Accessibility Requirements

* Wrap your tabs in a container with ARIA `role="tablist"` and an `aria-label`.
* Use the button `<button>` element for tabs with ARIA `role="tab"` and `aria-selected="true"` or `"false"`.
* Use the button `<button>` element if tabs change the content view within the same page.
* Use the anchor `<a>` element if tabs link to other pages with a unique URL.
* Ensure component is keyboard accessible. User should be able to focus on tabs with right/left arrows.

**Further Reading**

* [ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role) (Mozilla)

## Code

### HTML

```
{{ render '@tabs' }}
```

### JavaScript

Javascript to make the tabs functional and accessible is included in the javascript cdn.
