---
handle: image-banner-development
---

The image banner can be used as a full-width banner or inside a container. This requires the following structure:

<ul class="docs-list">
  <li><code>&lt;figure&gt;</code>
    <ul>
      <li><code>.ucla-banner</code></li>
    </ul>
  </li>
</ul>

<div class="ucla-dev-example-break-container">
{{render '@banners'}}
</div>

```html
<figure>
  <img class="ucla-banner" src="image.jpg" alt="Description of the image" />
</figure>
```

By default, the image banner spans the full-width of the page. If you prefer to keep it contained within the content width, you may add it inside the grid:

```html
<div class="ucla">
  <div class="col">
    <figure>
      <img class="ucla-banner" src="image.jpg" alt="Description of the image" />
    </figure>
  </div>
</div>
```
