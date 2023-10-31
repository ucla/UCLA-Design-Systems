---
handle: text-header-development
---
The Text Header has many parts that is organized in the following structure:

#### UCLA Logo

1. Start with a container with the `.ucla-header` and `.ucla-header--college` class.

```html
<header class="ucla-header ucla-header--college"></header>
```

2. Add the border with the UCLA logo with the follow HTML:

**The UCLA logo must link to https://www.ucla.edu**

```html
<header class="ucla-header ucla-header--college">
  <div class="ucla-header__logo-container">
      <div class="ucla-header__logo">
          <a href="https://www.ucla.edu/">
              <img class="ucla-header__logo-image" src="https://www.ucla.edu/img/logo-ucla.svg" alt="UCLA Logo" />
          </a>
      </div>
  </div>
</header>
```

#### Department Signature

Add in the `.ucla-header__container` with the `#header-wrap` inside the `.ucla-header` element.

```html
<header class="ucla-header ucla-header--college">
  <!-- ... -->
  <div class="ucla-header__container" id="header-wrap"></div>
</header>
```

This `.ucla-header__container` element contains the header content in a responsive width. JavaScript targets the `#header-wrap` to open the menu on a mobile/touch device.

Inside the `.ucla-header__container` will have a `.ucla-header__site-name` element with a link to the site homepage:

```html
  <!-- ... -->
  <div class="ucla-header__container" id="header-wrap">
    <div class="ucla-header__site-name">
        <a href="#" title="Department Name" rel="home">Department Name</a>
    </div>
  </div>
  <!-- ... -->
```

#### With navigation and search

```html
<header class="ucla-header ucla-header--college">
    <div class="ucla-header__logo-container">
        <div class="ucla-header__logo">
            <a href="https://www.ucla.edu/">
                <img class="ucla-header__logo-image" src="https://www.ucla.edu/img/logo-ucla.svg" alt="UCLA Logo" />
            </a>
        </div>
    </div>
    <div class="ucla-header__container" id="header-wrap">
        <div class="ucla-header__site-name">
            <a href="#" title="Department Name" rel="home">Department Name</a>
        </div>
        <nav id="nav-second" class="ucla-secondary-nav" aria-label="Secondary Menu">
            <ul class="ucla-secondary-nav__list">
                <li class="ucla-secondary-nav__item">
                    <a class="ucla-secondary-nav__link" href="#">Nav Item</a>
                </li>
                <li class="ucla-secondary-nav__item">
                    <a class="ucla-secondary-nav__link" href="#">Nav Item</a>
                </li>
                <li class="ucla-secondary-nav__item">
                    <a class="ucla-secondary-nav__link ucla-secondary-nav__link--active" href="#">Nav Item</a>
                </li>
            </ul>
        </nav> <button id="primary-ham" class="hamburger" type="button" aria-controls="nav-main" aria-expanded="false" alt="navigation and search">
            <span class="hamburger__box">
                <span class="hamburger__inner"></span>
            </span>
        </button>
        <nav aria-labelledby="primary-ham" id="nav-main" class="ucla-main-nav" aria-label="Main Menu">
            <ul class="ucla-main-nav__list" role="menubar" data-menubar-item-expanded="true">
                <li class="ucla-main-nav__item ucla-main-nav__item--has-children" aria-haspopup="true">
                    <a class="ucla-main-nav__link ucla-main-nav__link--current-page" href="#">Parent Item</a>
                    <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8">
                            <title>Arrow Down</title>
                            <path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path>
                        </svg>
                    </button>
                    <ul class="ucla-main-nav__sublist">
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link ucla-main-nav__link--current-page" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                    </ul>
                </li>
                <li class="ucla-main-nav__item" aria-haspopup="true">
                    <a class="ucla-main-nav__link" href="#">Nav Item</a>
                </li>
                <li class="ucla-main-nav__item ucla-main-nav__item--has-children" aria-haspopup="true">
                    <a class="ucla-main-nav__link" href="#">Parent Item</a>
                    <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8">
                            <title>Arrow Down</title>
                            <path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path>
                        </svg>
                    </button>
                    <ul class="ucla-main-nav__sublist">
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item ucla-nav_sublist--has-children">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                            <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8">
                                    <title>Arrow Down</title>
                                    <path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path>
                                </svg>
                            </button>
                            <ul class="ucla-main-nav__sublist" id="third-level">
                                <li class="ucla-main-nav__item">
                                    <a class="ucla-main-nav__link" href="#">Nav Item</a>
                                </li>
                                <li class="ucla-main-nav__item ucla-nav_sublist--has-children">
                                    <a class="ucla-main-nav__link" href="#">Nav Item</a>
                                    <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
                                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8">
                                            <title>Arrow Down</title>
                                            <path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path>
                                        </svg>
                                    </button>
                                    <ul class="ucla-main-nav__sublist" id="forth-level">
                                        <li class="ucla-main-nav__item">
                                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                                        </li>
                                        <li class="ucla-main-nav__item">
                                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="ucla-main-nav__item ucla-main-nav__item--has-children" aria-haspopup="true">
                    <a class="ucla-main-nav__link" href="#">Parent Item</a>
                    <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8">
                            <title>Arrow Down</title>
                            <path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path>
                        </svg>
                    </button>
                    <ul class="ucla-main-nav__sublist">
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                    </ul>
                </li>
                <li class="ucla-main-nav__item ucla-main-nav__item--has-children" aria-haspopup="true">
                    <a class="ucla-main-nav__link" href="#">Parent Item</a>
                    <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8">
                            <title>Arrow Down</title>
                            <path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path>
                        </svg>
                    </button>
                    <ul class="ucla-main-nav__sublist">
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                    </ul>
                </li>
                <li class="ucla-main-nav__item ucla-main-nav__item--has-children" aria-haspopup="true">
                    <a class="ucla-main-nav__link" href="#">Parent Item</a>
                    <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8">
                            <title>Arrow Down</title>
                            <path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path>
                        </svg>
                    </button>
                    <ul class="ucla-main-nav__sublist">
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                        <li class="ucla-main-nav__item">
                            <a class="ucla-main-nav__link" href="#">Nav Item</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="ucla-secondary-nav__list">
                <li class="ucla-secondary-nav__item">
                    <a class="ucla-secondary-nav__link" href="#">Nav Item</a>
                </li>
                <li class="ucla-secondary-nav__item">
                    <a class="ucla-secondary-nav__link" href="#">Nav Item</a>
                </li>
                <li class="ucla-secondary-nav__item">
                    <a class="ucla-secondary-nav__link ucla-secondary-nav__link--active" href="#">Nav Item</a>
                </li>
            </ul>
            <div class="ucla-main-nav__search-desktop" id="primary-nav-search">
                <button id="search-button" aria-expanded="false" class="ucla-main-nav__search-desktop-button">
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
        </nav>
    </div>
</header>
```