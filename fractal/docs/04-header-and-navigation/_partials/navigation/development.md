---
handle: navigation-development
---
The navigation component can support up to 4-tier navigation, however desktop will only display up to 2-tier.

#### Mobile Menu Button

To start off, you must first add the mobile navigation button.

***Note: The mobile navigation button will only be visible on viewports smaller than 768px. The example below is for demonstration purposes only.***

<button style="display: inline-block;margin-top: 1.5rem;margin-bottom: 1.5rem" class="hamburger" type="button" aria-controls="nav-main" aria-expanded="false" alt="navigation and search">
    <span class="hamburger__box">
        <span class="hamburger__inner"></span>
    </span>
</button>

```html
<button id="primary-ham" class="hamburger" type="button" aria-controls="nav-main" aria-expanded="false" alt="navigation and search">
    <span class="hamburger__box">
        <span class="hamburger__inner"></span>
    </span>
</button>
```

The `#primary-ham` ID is required since it is being targeted by JavaScript's `eventListener`.

#### Primary Navigation

The primary navigation starts off with the `.ucla-main-nav` class container with a `#nav-main` ID.

```html
<nav id="nav-main" class="ucla-main-nav" aria-label="Main Menu"></nav>
```

The navigation will be inside this container in the following structure:

- `.ucla-main-nav__list` - `<ul>`
  - `.ucla-main-nav__item` - `<li>` add the class `.ucla-main-nav__item--has-children` if item has sublist
    - `.ucla-main-nav__link` - `<a>` add the class `.ucla-main-nav__link--current-page` if link is the current page
    <!-- - `.ucla-main-nav__toggle` - `<button>` to toggle sublist -->
    <!-- - `.ucla-main-nav__sublist` - `<ul>` for sublist -->

It should look like this:

<nav class="ucla-main-nav" aria-label="Main Menu" style="margin-top: 1.5rem;margin-bottom: 1.5rem">
  <ul class="ucla-main-nav__list">
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
</nav>

```html
<nav id="nav-main" class="ucla-main-nav" aria-label="Main Menu">
  <ul class="ucla-main-nav__list">
    <li class="ucla-main-nav__item">
      <a class="ucla-main-nav__link" href="#">Nav Item</a>
    </li>
    <!-- ... -->
  </ul>
</nav>
```

**Sub navigation**

If your primary navigation has dropdowns, you will need to structure your `.ucla-main-nav__item` to the following:

- `.ucla-main-nav__item--has-children` - Add this class to the `li.ucla-main-nav__item`
  - `.ucla-main-nav__link` - `<a>` add the class `.ucla-main-nav__link--current-page` if link is the current page
  - `.ucla-main-nav__toggle` - `<button>` to toggle sublist visibility
  - `.ucla-main-nav__sublist` - `<ul>` for the sublist dropdown
    - `.ucla-main-nav__item.ucla-nav_sublist--has-children` - `<li>` item if you have more than 2 tiers of navigation.

<nav class="ucla-main-nav" aria-label="Main Menu" style="margin-top: 1.5rem;margin-bottom: 180px">
  <ul class="ucla-main-nav__list">
    <li class="ucla-main-nav__item ucla-main-nav__item--has-children is-open">
      <a class="ucla-main-nav__link" href="#">Parent Item</a>
      <button class="ucla-main-nav__toggle" aria-expanded="false" aria-label="toggle">
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="12 17.2 24 14.8">
              <title>Arrow Down</title>
              <path class="down-arrow--blue" d="m14.8 17.2 9.2 9.2 9.2-9.2L36 20 24 32 12 20l2.8-2.8z"></path>
          </svg>
      </button>
      <ul class="ucla-main-nav__sublist">
        <li class="ucla-main-nav__item">
            <a class="ucla-main-nav__link" href="#">Child Item</a>
        </li>
        <li class="ucla-main-nav__item">
            <a class="ucla-main-nav__link" href="#">Child Item</a>
        </li>
        <li class="ucla-main-nav__item">
            <a class="ucla-main-nav__link" href="#">Child Item</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

```html
<!-- ... -->
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
      <!-- ... -->
    </ul>
</li>
<!-- ... -->
```