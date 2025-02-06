---
handle: box-logo-header-development
---
The Box Logo Header has many parts that is organized in the following structure:

#### Container

1. Start with a container with the `.ucla-header` and `.ucla-header--school` class.

```html
<header class="ucla-header ucla-header--school"></header>
```

This is element displays the blue border on top of the page.

2. Add a `.ucla-header__container` element with the ID `#header-wrap`.

```html
<header class="ucla-header ucla-header--school">
    <div class="ucla-header__container" id="header-wrap"></div>
</header>
```

This `.ucla-header__container` element contains the header content in a responsive width. JavaScript targets the `#header-wrap` to open the menu on a mobile/touch device.

#### Logo and Department Signature

The UCLA boxed logo starts inside the `.ucla-header__container`.

**The UCLA logo must link to https://www.ucla.edu**

_Note: In this example, we used an SVG for the UCLA boxed logo. You can use an `<img>` if you prefer._

```html
<!-- ... -->
<a class="ucla-header--school__logo-link" href="https://www.ucla.edu">
  <svg xmlns="http://www.w3.org/2000/svg" id="ucla-box-black" viewBox="0 0 360 168.84">
    <title>UCLA</title>
    <defs></defs>
    <rect class="cls-1" width="360" height="168.84" fill="#2774ae" />
    <path fill="#ffffff" d="M57.57,100.65a72.15,72.15,0,0,1-.18-8.51l4.06-46H76.52L72.39,92.54c-.89,10,3,17.22,13.08,17.22,10.26,0,15.68-7.29,16.57-16.21l4.28-47.44h15.06L117.21,93c-1.68,18-13.64,31.54-33,31.54-15.08,0-24.8-9.75-26.65-23.85" />
    <path fill="#ffffff" d="M124.84,85.07c2-22.1,16.87-40.42,42.62-40.42a35.32,35.32,0,0,1,19.79,5.73l-1.72,18.25c-5.94-7.81-13-9.08-19.51-9.08-16,0-24.81,11.13-26.07,25.22-1.21,13.71,5.87,24.87,21.39,24.87,6.78,0,14-2,21.48-9.47l-1.66,18.73c-7.33,4-14.14,5.78-21,5.78-25.48,0-37.15-18.93-35.32-39.61" />
    <path fill="#ffffff" d="M199.28,46.11h15l-5.48,62.5h21.53c1.52,0,6.65-.08,8-.16-.08.75-1.37,14.44-1.37,14.44H192.46Z" />
    <path fill="#ffffff" d="M277.57,74.77a18,18,0,0,0,1.11-3.22h.24a18.25,18.25,0,0,0,.57,3.25c.83,3.5,6.68,22.94,6.68,22.94h-19s10.17-22.46,10.37-23m3.85-32.18-1,0-41.15,80.28h16L261,110.71h29l3.62,12.18h15.93Z" />
  </svg>
</a>
<!-- ... -->
```

The department signature is located next to the UCLA logo and links to the site's homepage:

```html
<!-- ... -->
<a class="ucla-header--school__site-title-link" href="#">
  Department Signature
</a>
<!-- ... -->
```

**If `<svg>` is prefered for Department Signature**

If you prefer to use an `<svg>` for your signature, you will need two variants: one for desktop and one for mobile. Both logos will need it's own class: `.ucla-header--school__site-title-link-mobile` and `ucla-header--school__site-title-link-desktop`.

```html
<a class="ucla-header--school__logo-link" href="https://www.ucla.edu">
  <svg class="ucla-header--school__site-title-link-mobile" xmlns="http://www.w3.org/2000/svg">
    <!-- ... -->
  </svg>
  <svg class="ucla-header--school__site-title-link-desktop" xmlns="http://www.w3.org/2000/svg">
    <!-- ... -->
  </svg>
</a>
```

Put it all together and you should have something like this:

<div class="ucla-dev-example-break-container">
    <header class="ucla-header ucla-header--school" style="margin-bottom: 64px">
        <div class="ucla-header__container">
        <a class="ucla-header--school__logo-link" href="https://www.ucla.edu">
            <svg xmlns="http://www.w3.org/2000/svg" id="ucla-box-black" viewBox="0 0 360 168.84">
            <title>UCLA</title>
            <defs></defs>
            <rect class="cls-1" width="360" height="168.84" fill="#2774ae" />
            <path fill="#ffffff" d="M57.57,100.65a72.15,72.15,0,0,1-.18-8.51l4.06-46H76.52L72.39,92.54c-.89,10,3,17.22,13.08,17.22,10.26,0,15.68-7.29,16.57-16.21l4.28-47.44h15.06L117.21,93c-1.68,18-13.64,31.54-33,31.54-15.08,0-24.8-9.75-26.65-23.85" />
            <path fill="#ffffff" d="M124.84,85.07c2-22.1,16.87-40.42,42.62-40.42a35.32,35.32,0,0,1,19.79,5.73l-1.72,18.25c-5.94-7.81-13-9.08-19.51-9.08-16,0-24.81,11.13-26.07,25.22-1.21,13.71,5.87,24.87,21.39,24.87,6.78,0,14-2,21.48-9.47l-1.66,18.73c-7.33,4-14.14,5.78-21,5.78-25.48,0-37.15-18.93-35.32-39.61" />
            <path fill="#ffffff" d="M199.28,46.11h15l-5.48,62.5h21.53c1.52,0,6.65-.08,8-.16-.08.75-1.37,14.44-1.37,14.44H192.46Z" />
            <path fill="#ffffff" d="M277.57,74.77a18,18,0,0,0,1.11-3.22h.24a18.25,18.25,0,0,0,.57,3.25c.83,3.5,6.68,22.94,6.68,22.94h-19s10.17-22.46,10.37-23m3.85-32.18-1,0-41.15,80.28h16L261,110.71h29l3.62,12.18h15.93Z" />
            </svg>
            Department Signature
        </a>
        </div>
    </header>
</div>

#### With all the navigation and search

<div class="ucla-dev-example-break-container">
    <header class="ucla-header ucla-header--school mt-6">
        <div class="ucla-header__container" id="header-wrap">
            <a class="ucla-header--school__logo-link" href="https://www.ucla.edu">
                <svg xmlns="http://www.w3.org/2000/svg" id="ucla-box-black" viewBox="0 0 360 168.84">
                    <defs></defs>
                    <rect class="cls-1" width="360" height="168.84" fill="#2774ae" />
                    <path fill="#ffffff" d="M57.57,100.65a72.15,72.15,0,0,1-.18-8.51l4.06-46H76.52L72.39,92.54c-.89,10,3,17.22,13.08,17.22,10.26,0,15.68-7.29,16.57-16.21l4.28-47.44h15.06L117.21,93c-1.68,18-13.64,31.54-33,31.54-15.08,0-24.8-9.75-26.65-23.85" />
                    <path fill="#ffffff" d="M124.84,85.07c2-22.1,16.87-40.42,42.62-40.42a35.32,35.32,0,0,1,19.79,5.73l-1.72,18.25c-5.94-7.81-13-9.08-19.51-9.08-16,0-24.81,11.13-26.07,25.22-1.21,13.71,5.87,24.87,21.39,24.87,6.78,0,14-2,21.48-9.47l-1.66,18.73c-7.33,4-14.14,5.78-21,5.78-25.48,0-37.15-18.93-35.32-39.61" />
                    <path fill="#ffffff" d="M199.28,46.11h15l-5.48,62.5h21.53c1.52,0,6.65-.08,8-.16-.08.75-1.37,14.44-1.37,14.44H192.46Z" />
                    <path fill="#ffffff" d="M277.57,74.77a18,18,0,0,0,1.11-3.22h.24a18.25,18.25,0,0,0,.57,3.25c.83,3.5,6.68,22.94,6.68,22.94h-19s10.17-22.46,10.37-23m3.85-32.18-1,0-41.15,80.28h16L261,110.71h29l3.62,12.18h15.93Z" />
                </svg>
                Department Signature
            </a>
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
            <nav id="nav-main" class="ucla-main-nav" aria-label="Main Menu">
                <ul class="ucla-main-nav__list">
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
            </nav>
        </div>
    </header>
</div>

```html
<header class="ucla-header ucla-header--school">
    <div class="ucla-header__container" id="header-wrap">
        <a class="ucla-header--school__logo-link" href="https://www.ucla.edu">
            <svg xmlns="http://www.w3.org/2000/svg" id="ucla-box-black" viewBox="0 0 360 168.84">
                <title>UCLA</title>
                <defs></defs>
                <rect class="cls-1" width="360" height="168.84" fill="#2774ae" />
                <path fill="#ffffff" d="M57.57,100.65a72.15,72.15,0,0,1-.18-8.51l4.06-46H76.52L72.39,92.54c-.89,10,3,17.22,13.08,17.22,10.26,0,15.68-7.29,16.57-16.21l4.28-47.44h15.06L117.21,93c-1.68,18-13.64,31.54-33,31.54-15.08,0-24.8-9.75-26.65-23.85" />
                <path fill="#ffffff" d="M124.84,85.07c2-22.1,16.87-40.42,42.62-40.42a35.32,35.32,0,0,1,19.79,5.73l-1.72,18.25c-5.94-7.81-13-9.08-19.51-9.08-16,0-24.81,11.13-26.07,25.22-1.21,13.71,5.87,24.87,21.39,24.87,6.78,0,14-2,21.48-9.47l-1.66,18.73c-7.33,4-14.14,5.78-21,5.78-25.48,0-37.15-18.93-35.32-39.61" />
                <path fill="#ffffff" d="M199.28,46.11h15l-5.48,62.5h21.53c1.52,0,6.65-.08,8-.16-.08.75-1.37,14.44-1.37,14.44H192.46Z" />
                <path fill="#ffffff" d="M277.57,74.77a18,18,0,0,0,1.11-3.22h.24a18.25,18.25,0,0,0,.57,3.25c.83,3.5,6.68,22.94,6.68,22.94h-19s10.17-22.46,10.37-23m3.85-32.18-1,0-41.15,80.28h16L261,110.71h29l3.62,12.18h15.93Z" />
            </svg>
            Department Signature
        </a>
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
        <nav id="nav-main" class="ucla-main-nav" aria-label="Main Menu">
            <ul class="ucla-main-nav__list">
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
        </nav>
    </div>
</header>
```