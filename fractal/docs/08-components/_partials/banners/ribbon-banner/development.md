---
handle: ribbon-banner-development
---
The ribbon banner is comprised of a background image and a contained Ribbon component. The required structure of this component is as follows:

<ul class="docs-list">
<li><code>.ucla-banner__ribbon</code> - This will have the <code>background-image</code> property with your image<ul>
<li><code>.container</code> - Container that sets the width of the content<ul>
<li><code>.ucla</code> - Container that houses the columns<ul>
<li><code>.col.span_12_of_12</code> - Column that spans the full width of the container<ul>
<li><code>.ucla-ribbon.ucla-ribbon--brand</code> - Start of the Brand Ribbon component<ul>
<li><code>.ucla-ribbon__text</code> - Text for the ribbon</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>

<div class="ucla-dev-example-break-container">
  <div class="ucla-banner__ribbon" style="background-image: url(/theme-assets/img/examples/home-hero-desktop.jpg)">
    <div class="container">
      <div class="ucla">
        <div class="col span_12_of_12">
          <div class="ucla-ribbon ucla-ribbon--brand">
            <h2 class="ucla-ribbon__text">Lorem ispum dolor sit amet consectetuer adipiscing</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="ucla-banner__ribbon" style="background-image: url('image.jpg')">
  <div class="container">
    <div class="ucla">
      <div class="col span_12_of_12">
        <div class="ucla-ribbon ucla-ribbon--brand">
          <h2 class="ucla-ribbon__text">Lorem ispum dolor sit amet consectetuer adipiscing</h2>
        </div>
      </div>
    </div>
  </div>
</div>
```