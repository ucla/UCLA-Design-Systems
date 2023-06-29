---
handle: chips-development
---
Chips can be used in multiple ways, whether you want to filter, input, or provide suggestions.

<button class="ucla-chip">Lorem ipsum</button>

```html
<button class="ucla-chip">Lorem ipsum</button>
```

#### Current state

To have the chip selected or to show the current state, simply add the `.ucla-chip__current` class to the button

<button class="ucla-chip ucla-chip__current">Lorem ipsum</button>

```html
<button class="ucla-chip ucla-chip__current">Lorem ipsum</button>
```

#### Icons

You can add a leading icon or a trailing icon to your chips. We suggest using one or the other. **Not both**.

##### Leading Icon

For leading icons, add the `.ucla-btn--icon-lead` class to your chip. Then add either the `<svg>` or `<img>` before the text.

<button class="ucla-chip ucla-btn--icon-lead">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L16 16L2 16L2 2L16 2ZM16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM11.14 8.86L8.14 12.73L6 10.14L3 14L15 14L11.14 8.86Z" />
    </svg>
    Lorem ipsum
</button>

```html
<button class="ucla-chip ucla-btn--icon-lead">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L16 16L2 16L2 2L16 2ZM16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM11.14 8.86L8.14 12.73L6 10.14L3 14L15 14L11.14 8.86Z" />
    </svg>
    Lorem ipsum
</button>
```

##### Trailing Icon

For trailing icons, add the `.ucla-btn--icon-trail` class to your chip. Then add either the `<svg>` or `<img>` after the text.

<button class="ucla-chip ucla-btn--icon-trail">
    Lorem ipsum
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6 1.22392e-07L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14L-1.22392e-07 12.6L5.6 7L-1.10153e-06 1.4L1.4 1.10153e-06L7 5.6L12.6 1.22392e-07Z" fill="#00598C" />
    </svg>
</button>

```html
<button class="ucla-chip ucla-btn--icon-trail">
    Lorem ipsum
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6 1.22392e-07L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14L-1.22392e-07 12.6L5.6 7L-1.10153e-06 1.4L1.4 1.10153e-06L7 5.6L12.6 1.22392e-07Z" fill="#00598C" />
    </svg>
</button>
```