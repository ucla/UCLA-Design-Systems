---
handle: ribbon-banner-development
---
The ribbon banner is comprised of a background image and a contained Ribbon component. The required structure of this component is as follows:

- `.ucla-banner__ribbon` - This will have the `background-image` property with your image
  - `.container` - Container that sets the width of the content
    - `.ucla` - Container that houses the columns
      - `.col.span_12_of_12` - Column that spans the full width of the container
        - `.ucla-ribbon.ucla-ribbon--brand` - Start of the Brand Ribbon component
          - `.ucla-ribbon__text` - Text for the ribbon

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