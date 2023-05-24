---
handle: related-links-development
---
To create a related link component is simple. Simply add `ucla-related-link` to an `<a>`.

```html
<a class="ucla-related-link" href="#">Related Link</a>
```
<div style="max-width: 476px" class="mb-5">
<a class="ucla-related-link" href="#">Related Link</a>
</div>

#### Icon

To add an icon to a related link, simply add the `<svg>` inside the `<a>` after the text:

```html
<a class="ucla-related-link" href="#">
    Lorem ipsum
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <-- ... -->
    </svg>
</a>
```

<div style="max-width: 476px">
<a class="ucla-related-link" href="#">
    Related Link
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16L2 16L2 2L9 2V0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.1 18 18 17.1 18 16L18 9L16 9V16ZM11 0V2L14.59 2L4.76 11.83L6.17 13.24L16 3.41L16 7H18V0L11 0Z" />
    </svg>
</a>
</div>