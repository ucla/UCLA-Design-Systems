---
handle: search-development
---
The search component of the navigation starts with the `.ucla-main-nav__search-desktop` wrapper with the `#primary-nav-search`.

```html
<div class="ucla-main-nav__search-desktop" id="primary-nav-search"></div>
```

#### Search Button (Desktop)

The search button for desktop will only appear on viewpoints greater than 960px. Once clicked, the button icon will change to a close icon.

<div class="ucla-main-nav__search-desktop" id="primary-nav-search">
<button id="search-button" class="ucla-main-nav__search-desktop-button">
  <svg role="img" aria-label="Search Icon" class="ucla-main-nav__search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Search Icon</title>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-15.000000, -15.000000)">
              <g id="Nav-Item">
                  <g transform="translate(12.000000, 12.000000)">
                      <polygon class="Path-polygon" points="0 0 24 0 24 24 0 24"></polygon>
                      <path d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z" fill="#00598C" fill-rule="evenodd"></path>
                  </g>
              </g>
          </g>
      </g>
  </svg>
  <svg class="ucla-main-nav__search-close" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" xml:space="preserve" viewBox="10 10 28 28">
      <title>Close</title>
      <path d="M38 12.8 35.2 10 24 21.2 12.8 10 10 12.8 21.2 24 10 35.2l2.8 2.8L24 26.8 35.2 38l2.8-2.8L26.8 24 38 12.8z" fill="#ffffff" fill-rule="evenodd"></path>
  </svg>
</button>
</div>

```html
<button id="search-button" class="ucla-main-nav__search-desktop-button">
  <svg role="img" aria-label="Search Icon" class="ucla-main-nav__search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Search Icon</title>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-15.000000, -15.000000)">
              <g id="Nav-Item">
                  <g transform="translate(12.000000, 12.000000)">
                      <polygon class="Path-polygon" points="0 0 24 0 24 24 0 24"></polygon>
                      <path d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z" fill="#00598C" fill-rule="evenodd"></path>
                  </g>
              </g>
          </g>
      </g>
  </svg>
  <svg class="ucla-main-nav__search-close" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" xml:space="preserve" viewBox="10 10 28 28">
      <title>Close</title>
      <path d="M38 12.8 35.2 10 24 21.2 12.8 10 10 12.8 21.2 24 10 35.2l2.8 2.8L24 26.8 35.2 38l2.8-2.8L26.8 24 38 12.8z" fill="#ffffff" fill-rule="evenodd"></path>
  </svg>
</button>
```

#### Overlay and Text Field

The overlay is the container for the text field. To start off, you must first add the container `.ucla-main-nav__search-block-form`.

```html
<div class="ucla-main-nav__search-block-form" role="search"></div>
```

Inside the container, you'll need an element with the `.ucla-main-nav__search-form` class. Some Content Management Systems (CMS) will need a `<form>` for the search field. We provided the provision for it here but you can use any element:

```html
<form role="search" class="ucla-main-nav__search-form"></form>
```

Inside the form, you'll need a `<label>`, `<input>`, the submit button, and a `.visuallyhidden` text for accessibility.

_Note: for demonstration purposes, we used an `<input>` for the submit button. You can use a `<button>` if your application prefers it._

```html
<form role="search" class="ucla-main-nav__search-form">
  <label>
    <span class="ucla-main-nav__screen-reader-text visuallyhidden">Search for:</span>
    <input type="search" class="ucla-main-nav__search-field" placeholder="Search …" value="" name="s">
  </label>
  <input type="submit" class="ucla-main-nav__search-submit" value="Search">
</form>
```

Once you put everything together, you should have something like this:


```html
<div class="ucla-main-nav__search-desktop" id="primary-nav-search">
  <button id="search-button" class="ucla-main-nav__search-desktop-button">
      <svg role="img" aria-label="Search Icon" class="ucla-main-nav__search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Search Icon</title>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-15.000000, -15.000000)">
                  <g id="Nav-Item">
                      <g transform="translate(12.000000, 12.000000)">
                          <polygon class="Path-polygon" points="0 0 24 0 24 24 0 24"></polygon>
                          <path d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z" fill="#00598C" fill-rule="evenodd"></path>
                      </g>
                  </g>
              </g>
          </g>
      </svg>
      <svg class="ucla-main-nav__search-close" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" xml:space="preserve" viewBox="10 10 28 28">
          <title>Close</title>
          <path d="M38 12.8 35.2 10 24 21.2 12.8 10 10 12.8 21.2 24 10 35.2l2.8 2.8L24 26.8 35.2 38l2.8-2.8L26.8 24 38 12.8z" fill="#ffffff" fill-rule="evenodd"></path>
      </svg>
  </button>
  <div class="ucla-main-nav__search-block-form" id="block-search" role="search">
      <form role="search" method="get" class="ucla-main-nav__search-form" action="#" id="menu-search-desktop">
          <label>
              <span class="ucla-main-nav__screen-reader-text visuallyhidden">Search for:</span>
              <input type="search" class="ucla-main-nav__search-field" placeholder="Search …" value="" name="s">
          </label>
          <input type="submit" class="ucla-main-nav__search-submit" value="Search">
      </form>
  </div>
</div>
```