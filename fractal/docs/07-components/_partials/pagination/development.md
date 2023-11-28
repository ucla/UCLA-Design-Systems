---
handle: pagination-development
---
The pagination is much like a navigation. A list of links with icons or text. Use the following structure to build:

- `.ucla-pagination` - Container
  - `.ucla-pagination--list` - List for pagination links
    - `.ucla-pagination--list-item` - List Item for Pagination links
      - `.ucla-pagination--page` - Pagination Link

<nav class="ucla-pagination" aria-label="Pagination">
    <ul class="ucla-pagination--list">
        <li class="ucla-pagination--list-item">
            <a class="ucla-pagination--page" href="#" aria-label="First Page">
                <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 1.23266e-07L3.29016e-06 6L6 12Z" fill="#00598C" />
                    <path d="M11 12L12.41 10.59L7.83 6L12.41 1.41L11 1.23266e-07L5 6L11 12Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item">
            <a class="ucla-pagination--page" href="#" aria-label="Previous">
                <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 1.23266e-07L3.29016e-06 6L6 12Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">1</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">2</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">3</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">4</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#" aria-label="Next">
                <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#" aria-label="Last Page">
                <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#00598C" />
                    <path d="M6.41 0L5 1.41L9.58 6L5 10.59L6.41 12L12.41 6L6.41 0Z" fill="#00598C" />
                </svg>
            </a>
        </li>
    </ul>
</nav>

```html
<nav class="ucla-pagination" aria-label="Pagination">
    <ul class="ucla-pagination--list">
        <li class="ucla-pagination--list-item">
            <a class="ucla-pagination--page" href="#" aria-label="First Page">
                <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 1.23266e-07L3.29016e-06 6L6 12Z" fill="#00598C" />
                    <path d="M11 12L12.41 10.59L7.83 6L12.41 1.41L11 1.23266e-07L5 6L11 12Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item">
            <a class="ucla-pagination--page" href="#" aria-label="Previous">
                <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 1.23266e-07L3.29016e-06 6L6 12Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">1</a></li>

        <!-- ... -->

        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#" aria-label="Next">
                <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#" aria-label="Last Page">
                <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#00598C" />
                    <path d="M6.41 0L5 1.41L9.58 6L5 10.59L6.41 12L12.41 6L6.41 0Z" fill="#00598C" />
                </svg>
            </a>
        </li>
    </ul>
</nav>
```

#### Current Page

To indicate the current page a user is on, simply add a `.ucla-pagination--page--current` class to the `<a>` element.

<nav class="ucla-pagination" aria-label="Pagination">
    <ul class="ucla-pagination--list">
        <li class="ucla-pagination--list-item">
            <a class="ucla-pagination--page" href="#" aria-label="First Page">
                <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 1.23266e-07L3.29016e-06 6L6 12Z" fill="#00598C" />
                    <path d="M11 12L12.41 10.59L7.83 6L12.41 1.41L11 1.23266e-07L5 6L11 12Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item">
            <a class="ucla-pagination--page" href="#" aria-label="Previous">
                <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 1.23266e-07L3.29016e-06 6L6 12Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">1</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">2</a></li>
        <li class="ucla-pagination--list-item" aria-current="page"><a class="ucla-pagination--page ucla-pagination--page--current" href="#">3</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">4</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#" aria-label="Next">
                <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#" aria-label="Last Page">
                <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#00598C" />
                    <path d="M6.41 0L5 1.41L9.58 6L5 10.59L6.41 12L12.41 6L6.41 0Z" fill="#00598C" />
                </svg>
            </a>
        </li>
    </ul>
</nav>

```html
<!-- ... -->
  <li class="ucla-pagination--list-item" aria-current="page"><a class="ucla-pagination--page ucla-pagination--page--current" href="#">3</a></li>
<!-- ... -->
```

#### Disable Pages

If a page needs to be disabled, add the `.ucla-is-disabled` class to the `<li>` item.

<nav class="ucla-pagination" aria-label="Pagination">
    <ul class="ucla-pagination--list">
        <li class="ucla-pagination--list-item ucla-is-disabled">
            <a class="ucla-pagination--page" href="#" aria-label="First Page">
                <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 1.23266e-07L3.29016e-06 6L6 12Z" fill="#00598C" />
                    <path d="M11 12L12.41 10.59L7.83 6L12.41 1.41L11 1.23266e-07L5 6L11 12Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item ucla-is-disabled">
            <a class="ucla-pagination--page" href="#" aria-label="Previous">
                <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 1.23266e-07L3.29016e-06 6L6 12Z" fill="#00598C" />
                </svg>
            </a>
        </li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">1</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">2</a></li>
        <li class="ucla-pagination--list-item"><a class="ucla-pagination--page" href="#">3</a></li>
    </ul>
</nav>

```html
<!-- ... -->
  <li class="ucla-pagination--list-item ucla-is-disabled">
    <!-- ... -->
  </li>
<!-- ... -->
```
