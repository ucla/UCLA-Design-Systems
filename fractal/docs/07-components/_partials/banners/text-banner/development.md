---
handle: text-banner-development
---
The text banner is a solid-color background that's typically full-width but can be in a container if need be. Building the banner requires the following structure:

- `.ucla-banner__text` - Container for the banner
  - `.container` - Container to keep the width of the content
    - `.ucla` - Start of the grid column system
      - `.col.span_10_of_12.ucla-prose.mx-auto` - Sets the width and the typography for the content. Below is the breakdown of each class:

**Content class breakdown:**

- `.col` - Defines the element as a column
- `.span_10_of_12` - Defines the width of the column
- `.ucla-prose` - Sets the styles to all headers and paragraphs in this element. This is so you don't have to apply typography classes to each heading and paragraph.
- `.mx-auto` - Aligns the element to the middle of the page.

<div class="ucla-banner__text">
    <div class="container">
        <div class="ucla">
            <div class="col span_10_of_12 ucla-prose" style="margin: 0 auto;">
                <h3>Text banner to call your attention</h3>
                <p>This text banner helps focus people's attention on a single call to action. Limit copy in this banner to 200 characters or less. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                <a href="#" class="ucla-btn ucla-btn--primary-light">Button</a>
            </div>
        </div>
    </div>
</div>

```html
<div class="ucla-banner__text">
    <div class="container">
        <div class="ucla">
            <div class="col span_10_of_12 ucla-prose" style="margin: 0 auto;">
                <h3>Text banner to call your attention</h3>
                <p>This text banner helps focus people's attention on a single call to action. Limit copy in this banner to 200 characters or less. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                <a href="#" class="ucla-btn ucla-btn--primary-light">Button</a>
            </div>
        </div>
    </div>
</div>
```

#### Contained Text Banner

If you prefer the text banner to have the same width as your content, just apply it in the same column.

<div class="ucla campus mt-6">
    <div class="col span_9_of_12">
        <p class="example-content mb-3">Auto</p>
        <div class="ucla-banner__text">
            <div class="container">
                <div class="ucla">
                    <div class="col span_10_of_12 ucla-prose mx-auto">
                        <h3>Text banner to call your attention</h3>
                        <p>This text banner helps focus people's attention on a single call to action. Limit copy in this banner to 200 characters or less. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                        <a href="#" class="ucla-btn ucla-btn--primary-light">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <p class="example-content">Auto</p>
    </div>
</div>

```html
<!-- ... -->
<div class="col span_9_of_12">
    <p class="example-content mb-3">Auto</p>
    <!-- Start Text Banner -->
    <div class="ucla-banner__text">
        <div class="container">
            <div class="ucla">
                <div class="col span_10_of_12 ucla-prose mx-auto">
                    <h3>Text banner to call your attention</h3>
                    <p>This text banner helps focus people's attention on a single call to action. Limit copy in this banner to 200 characters or less. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                    <a href="#" class="ucla-btn ucla-btn--primary-light">Button</a>
                </div>
            </div>
        </div>
    </div>
    <!-- End Text Banner -->
</div>
<!-- ... -->
```

#### Full Width Text Banner in a Container

If you are in a container, you are able to add in a full-width text banner without closing the container with the `.ucla-banner__text-full-width`.


[Preview Example]({{path 'components/preview/banners--text-full-width'}})

```html
<div class="container">
  <div class="ucla">
    <div class="col span_12_of_12 ucla-prose">
      <!-- ... -->
      <div class="ucla-banner__text ucla-banner__text-full-width">
        <div class="container">
          <div class="ucla">
            <div class="col span_10_of_12" style="margin: 0 auto;">
              <h3>Text banner to call your attention</h3>
              <p>This text banner helps focus people's attention on a single
                call to action. Limit copy in this banner to 200 characters or
                less. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                sed do eiusmod.</p>
              <button class="ucla-btn ucla-btn--primary-light">Button</button>
            </div>
          </div>
        </div>
      </div>
      <!-- ... -->
    </div>
  </div>
</div>
```