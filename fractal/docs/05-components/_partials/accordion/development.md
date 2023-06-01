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
<div class="accordion">
    <div class="accordion-item is-open">
        <h4 class="accordion__heading">
            <button
                type="button"
                class="accordion__heading-button"
                id="accordionOneButton"
                aria-expanded="true"
                aria-controls="accordionOne"
            >
            Royce Hall
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.41L16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41Z" fill="#333333"/>
            </svg>
            </button>
        </h4>
        <div aria-labelledby="accordionOneButton" class="accordion__content" id="accordionOne">
            <p>
                Royce Hall is a building on the campus of the University of California, Los Angeles. Designed by the Los Angeles firm of Allison &amp; Allison and completed in 1929, it is one of the four original buildings on UCLA's Westwood campus and has come to be the defining image of the university.
            </p>
        </div>
    </div>
    <div class="accordion-item">
        <h4 class="accordion__heading">
            <button
                type="button"
                class="accordion__heading-button"
                id="accordionTwoButton"
                aria-expanded="false"
                aria-controls="accordionTwo"
            >
            Fowler Museum
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.41L16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41Z" fill="#333333"/>
            </svg>
            </button>
        </h4>
        <div class="accordion__content" aria-labelledby="accordionTwoButton" id="accordionTwo">
            <p>
                The Fowler Museum at UCLA, commonly known as The Fowler, and formerly Museum of Cultural History and Fowler Museum of Cultural History, is a museum on the campus of the University of California, Los Angeles (UCLA) which explores art and material culture primarily from Africa, Asia and the Pacific, and the Americas, past and present.
            </p>
        </div>
    </div>
    <div class="accordion-item">
        <h4 class="accordion__heading">
            <button
                type="button"
                class="accordion__heading-button"
                id="accordionThreeButton"
                aria-expanded="false"
                aria-controls="accordionThree"
            >
            Luskin Conference Center
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.41L16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41Z" fill="#333333"/>
            </svg>
            </button>
        </h4>
        <div aria-labelledby="accordionThreeButton" class="accordion__content" id="accordionThree">
            <p>
                The UCLA Meyer and Renee Luskin School of Public Affairs, commonly known as the UCLA Luskin School of Public Affairs, is the public affairs/public service graduate school at the University of California, Los Angeles. The school consists of three graduate departments—Public Policy, Social Welfare, and Urban Planning—and an undergraduate program in Public Affairs that began accepting students in 2018. In all, the school offers three undergraduate minors, the undergraduate major, three master's degrees, and two doctoral degrees.
            </p>
        </div>
    </div>
</div>
```