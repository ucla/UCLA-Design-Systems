---
handle: tiles-development
---
The tile is built using the following structure:

- `.ucla-tile` - Main container with colored background and yellow border
  - `.ucla-tile__body` - Container for title and text
    - `.ucla-tile__title` - Left-aligned bolded text
    - `.ucla-title__text` - Left-aligned regular text

<div style="width: 276px" class="mx-auto">
    <a href="#" class="ucla-tile">
        <div class="ucla-tile__body">
            <h4 class="ucla-tile__title">
                Link text lorem ipsum dolor
            </h4>
            <p class="ucla-tile__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </a>
</div>

```html
<a href="#" class="ucla-tile">
    <div class="ucla-tile__body">
        <h4 class="ucla-tile__title">
            Link text lorem ipsum dolor
        </h4>
        <p class="ucla-tile__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</a>
```