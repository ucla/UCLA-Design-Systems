---
handle: quote-banner-development
---
The quote banner uses a solid-color background with a contained width content. You may either set the width of this banner inside a container or use it as a full-width banner.

- `.ucla-banner__quote` - Container that sets the background color
  - `.container` - Container that sets the width of the content
    - `.ucla` - Container that houses the columns
      - `.col.span_10_of_12` - Column that spans the full width of the container
        - `.ucla-banner__quote-body` - Container that houses the quote contents
          - `.ucla-banner__quote-image` - Avatar image of the person quoted
          - `.ucla-banner__quote-content` - Container for the quote

<div class="ucla-banner__quote">
    <div class="container">
        <div class="ucla">
            <div class="col span_10_of_12" style="margin: 0 auto;">
                <div class="ucla-banner__quote-body">
                    <img class="ucla-banner__quote-image" src="/theme-assets/img/examples/person-card-gene.jpg" />
                    <div class="ucla-banner__quote-content">
                        <figure>
                            <blockquote cite="https://www.ucla.edu">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh praesent tristique.</p>
                            </blockquote>
                            <figcaption><cite>Name, Title</cite></figcaption>
                        </figure>
                        <button class="ucla-btn ucla-btn--secondary-light ucla-btn--icon-trail">Button Label
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 16L2 16L2 2L9 2V0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.1 18 18 17.1 18 16L18 9L16 9V16ZM11 0V2L14.59 2L4.76 11.83L6.17 13.24L16 3.41L16 7H18V0L11 0Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="ucla-banner__quote">
    <div class="container">
        <div class="ucla">
            <div class="col span_10_of_12" style="margin: 0 auto;">
                <div class="ucla-banner__quote-body">
                    <img class="ucla-banner__quote-image" src="image.jpg" />
                    <div class="ucla-banner__quote-content">
                        <figure>
                            <blockquote cite="https://www.ucla.edu">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh praesent tristique.</p>
                            </blockquote>
                            <figcaption><cite>Name, Title</cite></figcaption>
                        </figure>
                        <a href="#" class="ucla-btn ucla-btn--secondary-light ucla-btn--icon-trail">Button Label
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 16L2 16L2 2L9 2V0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.1 18 18 17.1 18 16L18 9L16 9V16ZM11 0V2L14.59 2L4.76 11.83L6.17 13.24L16 3.41L16 7H18V0L11 0Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Full width Quote Banner in a Container

If you are in a container, you are able to add in a full-width quote banner without closing the container with the `.ucla-banner__quote-full-width`.

[Preview Example](../../../components/preview/banners--quote-full-width.html)

```html
<div class="container">
  <div class="ucla">
    <div class="col span_12_of_12 ucla-prose">
      <!-- ... -->
      <div class="ucla-banner__quote">
        <div class="container">
            <div class="ucla">
                <div class="col span_10_of_12" style="margin: 0 auto;">
                    <div class="ucla-banner__quote-body">
                        <img class="ucla-banner__quote-image" src="image.jpg" />
                        <div class="ucla-banner__quote-content">
                            <figure>
                                <blockquote cite="https://www.ucla.edu">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh praesent tristique.</p>
                                </blockquote>
                                <figcaption><cite>Name, Title</cite></figcaption>
                            </figure>
                            <a href="#" class="ucla-btn ucla-btn--secondary-light ucla-btn--icon-trail">Button Label
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 16L2 16L2 2L9 2V0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.1 18 18 17.1 18 16L18 9L16 9V16ZM11 0V2L14.59 2L4.76 11.83L6.17 13.24L16 3.41L16 7H18V0L11 0Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <!-- ... -->
    </div>
  </div>
</div>
```