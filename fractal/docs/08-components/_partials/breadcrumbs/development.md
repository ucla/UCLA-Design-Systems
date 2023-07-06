---
handle: breadcrumbs-development
---
The breadcrumb is a simple navigation component that's built using the following structure:

<ul class="docs-list">
<li><code>.ucla-breadcrumb</code> - Main container<ul>
<li><code>.ucla-breadcrumb__list</code> - Start of breadcrumb list<ul>
<li><code>.ucla-breadcrumb__list-itme</code> - Breadcrumb Item<ul>
<li><code>.ucla-breadcrumb__link</code> - Breadcrumb Link</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>

<nav class="ucla-breadcrumb">
    <ul class="ucla-breadcrumb__list">
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Home</a>
        </li>
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Level 1</a>
        </li>
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Level 2</a>
        </li>
    </ul>
</nav>

```html
<nav class="ucla-breadcrumb">
    <ul class="ucla-breadcrumb__list">
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Home</a>
        </li>
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Level 1</a>
        </li>
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Level 2</a>
        </li>
    </ul>
</nav>
```

**Note:** Do not include the current page in the breadcrumb. Instead, the breadcrumb should sit right above the page title.

<nav class="ucla-breadcrumb">
    <ul class="ucla-breadcrumb__list">
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Home</a>
        </li>
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Level 1</a>
        </li>
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Level 2</a>
        </li>
    </ul>
</nav>
<h1 class="headline-text__xl">Current Page Title</h1>

```html
<nav class="ucla-breadcrumb">
    <ul class="ucla-breadcrumb__list">
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Home</a>
        </li>
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Level 1</a>
        </li>
        <li class="ucla-breadcrumb__list-item">
            <a class="ucla-breadcrumb__link" href="#">Level 2</a>
        </li>
    </ul>
</nav>
<h1 class="headline-text__xl">Current Page Title</h1>
```