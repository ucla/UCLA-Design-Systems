---
handle: primary-button-development
---
A button can be one of three elements depending on what your application needs are:

- `<a>`
- `<button>`
- `<input>`

To style them to look and have interaction, the following class must be applied:

```html
<a href="#" class="ucla-btn ucla-btn--primary">Primary Link</a>
<button class="ucla-btn ucla-btn--primary">Primary Button</button>
<input class="ucla-btn ucla-btn--primary" type="submit || reset" value="Primary Input" />
```

<a href="#" class="ucla-btn ucla-btn--primary">Primary Link</a>
<button class="ucla-btn ucla-btn--primary">Primary Button</button>
<input class="ucla-btn ucla-btn--primary" type="reset" value="Primary Input" />

##### Dark Background

For backgrounds with a darker color, you must use the `light` variant of the button

```html
<a href="#" class="ucla-btn ucla-btn--primary-light">Primary Link</a>
<button class="ucla-btn ucla-btn--primary-light">Primary Button</button>
<input class="ucla-btn ucla-btn--primary-light" type="submit || reset" value="Primary Input" />
```

<div style="background-color: #2774ae" class="pt-5 pb-5 mb-5">
<a href="#" class="ucla-btn ucla-btn--primary-light">Primary Link</a>
<button class="ucla-btn ucla-btn--primary-light">Primary Button</button>
<input class="ucla-btn ucla-btn--primary-light" type="reset" value="Primary Input" />
</div>

#### Icons

You can add a leading icon or a trailing icon to your button. We suggest using one or the other. **Not both**.

_Note: For `<input>`, you would have to add the icon as a background image._

##### Leading

For leading icons, add the `.ucla-btn--icon-lead` class to your `<button>` or `<a>`. Then add either the `<svg>` or `<img>` before the button text.

<button class="ucla-btn ucla-btn--primary ucla-btn--icon-lead mt-5">
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 14.5L14.5 10L7.5 5.5L7.5 14.5ZM10 20C8.61666 20 7.31666 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31266 15.1167 0.787998 13.9C0.262665 12.6833 -1.99033e-06 11.3833 -1.74846e-06 10C-1.50659e-06 8.61667 0.262665 7.31667 0.787999 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787001C7.31667 0.262335 8.61667 1.50659e-06 10 1.74846e-06C11.3833 1.99033e-06 12.6833 0.262335 13.9 0.787002C15.1167 1.31234 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88334 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76666 18 10 18Z" />
  </svg>
  Button Label
</button>

```html
<button class="ucla-btn ucla-btn--primary ucla-btn--icon-lead">
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- ... -->
  </svg>
  Button Label
</button>
```

##### Trailing

For trailing icons, add the `.ucla-btn--icon-trail` class to your `<button>` or `<a>`. Then add either the `<svg>` or `<img>` after the button text.

<button class="ucla-btn ucla-btn--primary ucla-btn--icon-trail mt-5">
  Button Label
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 14.5L14.5 10L7.5 5.5L7.5 14.5ZM10 20C8.61666 20 7.31666 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31266 15.1167 0.787998 13.9C0.262665 12.6833 -1.99033e-06 11.3833 -1.74846e-06 10C-1.50659e-06 8.61667 0.262665 7.31667 0.787999 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787001C7.31667 0.262335 8.61667 1.50659e-06 10 1.74846e-06C11.3833 1.99033e-06 12.6833 0.262335 13.9 0.787002C15.1167 1.31234 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88334 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76666 18 10 18Z" />
  </svg>
</button>

```html
<button class="ucla-btn ucla-btn--primary ucla-btn--icon-trail">
  Button Label
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- ... -->
  </svg>
</button>
```