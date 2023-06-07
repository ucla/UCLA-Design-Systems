---
handle: side-navigation-development
---
A side navigation is a vertical list of links that is on the left side of an interior page.

**Note: Side navigation will only display on viewports larger `768px`. On mobile, this navigation will be in the primary navigation triggered by the hamburger menu**

To build, simply follow the this structure:

- `.ucla-side-navigation` - Main container
  - `.ucla-side-navigation__list` - Start of navigation list
    - `.ucla-side-navigation__list-item` - Single list item for the navigation
      - `.ucla-side-navigation__link` - Link to a page

```html
<nav class="ucla-side-navigation">
    <ul class="ucla-side-navigation__list">
        <li class="ucla-side-navigation__list-item">
            <a href="#" class="ucla-side-navigation__link">Side navigation link</a>
        </li>
        <!-- ... -->
    </ul>
</nav>
```

#### Nested Lists

For the 3+ Tiers, you can nest a `.ucla-side-navigation__list` inside the `.ucla-side-navigation__list-item`:

```html
<!-- ... -->
<li class="ucla-side-navigation__list-item">
    <a href="#" class="ucla-side-navigation__link">Side navigation link</a>
    <ul class="ucla-side-navigation__list">
        <li class="ucla-side-navigation__list-item">
            <a href="#" class="ucla-side-navigation__link">Side navigation link</a>
        </li>
    </ul>
</li>
<!-- ... -->
```

#### Current Item

To display the current list item, simply add the `.ucla-side-navigation__list-item--current` to a list item:

```html
<li class="ucla-side-navigation__list-item ucla-side-navigation__list-item--current">
    <a href="#" class="ucla-side-navigation__link">Side navigation link</a>
</li>
```