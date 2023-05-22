---
handle: ribbon-text-banner-development
---
The Ribbon Text Banner is a combination of the Ribbon Banner and the contained Text Banner. The text banner portion does have a negative `margin-top` to bring up the blue box.

The component is built with the following structure:

- `.ucla-banners__ribbon-text` - Container
  - `.ucla-banner__ribbon` - Start of ribbon component. _Background image goes on this element_
    - `.container` - Container that sets the width of the content
      - `.ucla` - Container that houses the columns
        - `.col.span_12_of_12` - Column that spans the full width of the container
          - `.ucla-ribbon.ucla-ribbon--brand` - Start of the Brand Ribbon component
            - `.ucla-ribbon__text` - Text for the ribbon
  - `.ucla-banner__text` - Container for the banner
    - `.container` - Container to keep the width of the content
      - `.ucla` - Start of the grid column system
        - `.col.span_10_of_12.ucla-prose.mx-auto` - Sets the width and the typography for the content.

<div class="ucla-banners__ribbon-text">
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
    <div class="container">
        <div class="ucla">
            <div class="col span_12_of_12">
                <div class="ucla-banner__text">
                    <div class="container">
                        <div class="ucla">
                            <div class="col span_10_of_12 ucla-prose" style="margin: 0 auto;">
                                <p class="lead">This text banner helps focus people's attention on a single call to action. Limit copy in this banner to 200 characters or less. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                                <button class="ucla-btn ucla-btn--primary-light">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="ucla-banners__ribbon-text">
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
    <div class="container">
        <div class="ucla">
            <div class="col span_12_of_12">
                <div class="ucla-banner__text">
                    <div class="container">
                        <div class="ucla">
                            <div class="col span_10_of_12 ucla-prose" style="margin: 0 auto;">
                                <p class="lead">This text banner helps focus people's attention on a single call to action. Limit copy in this banner to 200 characters or less. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                                <button class="ucla-btn ucla-btn--primary-light">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### White Background Variant

If you prefer to use the Text Banner with a white background, add `.ucla-banner__text-white` class to the `.ucla-banner__text` element.

<div class="ucla-banners__ribbon-text">
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
    <div class="container">
        <div class="ucla">
            <div class="col span_12_of_12">
                <div class="ucla-banner__text ucla-banner__text-white">
                    <div class="container">
                        <div class="ucla">
                            <div class="col span_10_of_12 ucla-prose" style="margin: 0 auto;">
                                <p class="lead">This text banner helps focus people's attention on a single call to action. Limit copy in this banner to 200 characters or less. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                                <button class="ucla-btn ucla-btn--primary-light">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<!-- ... -->
  <div class="ucla-banner__text ucla-banner__text-white">
    <!-- ... -->
  </div>
<!-- ... -->
```