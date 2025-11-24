---
handle: toc-developer
---
The Table of Contents component combines the Side Navigation and Accordion components. The component will be using the accordion for the expand/collapse functionality on smaller devices while using the Side Navigation styles. To start, you must add these classes to the Accordion component.

`.ucla-table-of-contents` to `.accordion`

`.ucla-table-of-contents__wrapper` to `.accordion-item`

`.ucla-table-of-contents__on-this-page` to `.accordion__heading`

`.ucla-table-of-contents__on-this-page_button` to `.accordion__heading-button`

`.ucla-table-of-contents__body` to `.accordion__body`

`.ucla-table-of-contents__content` to `.accordion__content`

#### Example
```html
<div class="ucla-table-of-contents accordion">
  <div class="ucla-table-of-contents__wrapper accordion-item">
    <h4 class="ucla-table-of-contents__on-this-page accordion__heading">
      <button
        type="button"
        class="ucla-table-of-contents__on-this-page_button accordion__heading-button"
        aria-expanded="true"
      >On this page:
      <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9.41L16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41Z"
            fill="#333333"
          />
        </svg>
      </button>
    </h4>
    <div class="ucla-table-of-contents__body accordion__body">
      <div
        class="ucla-table-of-contents__content accordion__content"
        tabindex="0"
      >
        <!-- ... -->
      </div>
    </div>
  </div>
</div>
```

The additional classes will keep the accordion always expanded on desktop and it's default behavior on smaller devices.

### Anchor Links
Inside the accordion, we will be using the side navigation as the anchor links. Since this is suppose to be a table of contents, we recommend only anchor links and not actual links to navigate to another page.

```html
<!-- ... -->
<div
  class="ucla-table-of-contents__content accordion__content"
  tabindex="0"
>
  <nav class="ucla-side-navigation">
    <ul class="ucla-side-navigation__list">

      <!-- ... -->

      <li class="ucla-side-navigation__list-item">
        <a href="#section-1" class="ucla-side-navigation__link">Section 1</a>
      </li>

      <!-- ... -->
       
    </ul>
</div>
<!-- ... -->
```