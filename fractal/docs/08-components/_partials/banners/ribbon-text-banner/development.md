---
handle: ribbon-text-banner-development
---
The Ribbon Text Banner is a combination of the Ribbon Banner and the contained Text Banner. The text banner portion does have a negative `margin-top` to bring up the blue box.

The component is built with the following structure:

<ul class="docs-list">
<li><code>.ucla-banners__ribbon-text</code> - Container<ul>
<li><code>.ucla-banner__ribbon</code> - Start of ribbon component. <em>Background image goes on this element</em><ul>
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
<li><code>.ucla-banner__text</code> - Container for the banner<ul>
<li><code>.container</code> - Container to keep the width of the content<ul>
<li><code>.ucla</code> - Start of the grid column system<ul>
<li><code>.col.span_10_of_12.ucla-prose.mx-auto</code> - Sets the width and the typography for the content.</li>
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

<div class="ucla-dev-example-break-container">
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
</div>

```html
<!-- ... -->
  <div class="ucla-banner__text ucla-banner__text-white">
    <!-- ... -->
  </div>
<!-- ... -->
```