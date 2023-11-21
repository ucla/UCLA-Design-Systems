---
handle: accordion-developer
---
The container element for the accordion needs to have the `.accordion` class. We used `<div>` for demonstration purposes but you can use any element you prefer.

```html
<div class="accordion"></div>
```

Inside the `.accordion`, child elements with the `.accordion-item` must be placed to hold the content. To have an `.accordion-item` open by default, add the `.is-open` class to it.

##### Accordion Title

For branding purposes, we suggest you add an element with the class `.accordion__heading` inside the `.accordion-item`. This is what applies the styling for the Design System.

A `<button>` with the class `.accordion__heading-button` should be placed inside the  `.accordion__heading` with a corresponding arrow svg. This element is what triggers the content to expand or collapse.

##### Accordion Content

An element with the class `.accordion__content` needs to be the Accordion Title sibling. This will hold the content you are going to display/hide when the Title is clicked.


```html
<div class="accordion">
    <div class="accordion-item is-open">
        <!-- Accordion Title -->
        <h4 class="accordion__heading">
            <button class="accordion__heading-button">
                Accordion 1

                <!-- Arrow SVG -->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9.41L16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41Z" fill="#333333"/>
                </svg>
            <button>
        </h4>
        <!-- Accordion Content -->
        <div class="accordion__content">
            <p>Lorem Ipsum</p>
        </div>
    </div>
    <!-- ... -->
</div>
```

Once the accordion is constructed, it should look like the example below.

_Note: we strongly recommend adding `aria-expanded`, `aria-controls` to the `<button>` and `aria-labelledby` to the Accordion Content for accessibility purposes._

{{view '@accordion'}}

```html
{{view '@accordion'}}
```

#### Multi-open Accordion

By default, the accordion will only open one panel at a time. If you would like to open multiple panels without the other one closing, simply add the `.is-multiselect` class to the `.accordion` element.

{{view '@accordion--multi'}}

```html
{{view '@accordion--multi'}}
```