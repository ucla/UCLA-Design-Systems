---
handle: progress-bar-development
---
The progress bar component is built with 2 HTML elements, one for the label and the other for the bar itself.

<ul class="docs-list">
<li><code>.ucla-progress</code> - Main container<ul>
<li><code>.ucla-progress__info</code> - Container for the progress bar label<ul>
<li><code>label.ucla-progress__label</code> - Progress bar label
</li>
<li><code>.ucla-progress__percent</code> - Progress bar value
</li>
</ul>
</li>
<li><code>progress.ucla-progress__bar</code> - Progress bar
</li>
<li><code>.ucla-progress__assistive</code> - Assistive Text
</li>
</ul>
</li>
</ul>

#### Bar sizing

Use the following CSS classes in the `<progress>` tag for the different bar size:
- `.ucla-progress__bar--thin`
- `.ucla-progress__bar--thick`
- `.ucla-progress__bar--thicker`

<div class="ucla-progress mt-8 mb-6" style="display:flex;flex-direction:column;">
    <div class="ucla-progress__info">
        <label for="progress-default" class="ucla-progress__label">Default</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar" id="progress-default" max="100" value="70"></progress>
</div>
<div class="ucla-progress mb-6" style="display:flex;flex-direction:column;">
    <div class="ucla-progress__info">
        <label for="progress-thin" class="ucla-progress__label">Thin</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--thin" id="progress-thin" max="100" value="70"></progress>
</div>
<div class="ucla-progress mb-6" style="display:flex;flex-direction:column;">
    <div class="ucla-progress__info">
        <label for="progress-thick" class="ucla-progress__label">Thick</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--thick" id="progress-thick" max="100" value="70"></progress>
</div>
<div class="ucla-progress mb-6" style="display:flex;flex-direction:column;">
    <div class="ucla-progress__info">
        <label for="progress-thicker" class="ucla-progress__label">Thicker</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--thicker" id="progress-thicker" max="100" value="70"></progress>
</div>

```html
<!-- Default Progress Bar -->
<div class="ucla-progress">
    <div class="ucla-progress__info">
        <label for="progress-default" class="ucla-progress__label">Default</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar" id="progress-default" max="100" value="70"></progress>
</div>

<!-- Thin Progress Bar -->
<div class="ucla-progress">
    <div class="ucla-progress__info">
        <label for="progress-thin" class="ucla-progress__label">Thin</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--thin" id="progress-thin" max="100" value="70"></progress>
</div>

<!-- Thick Progress Bar -->
<div class="ucla-progress">
    <div class="ucla-progress__info">
        <label for="progress-thick" class="ucla-progress__label">Thick</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--thick" id="progress-thick" max="100" value="70"></progress>
</div>

<!-- Thicker Progress Bar -->
<div class="ucla-progress">
    <div class="ucla-progress__info">
        <label for="progress-thicker" class="ucla-progress__label">Thicker</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--thicker" id="progress-thicker" max="100" value="70"></progress>
</div>
```

#### Bar color

Use the following CSS classes in the `<progress>` tag for the different bar colors:
- `.ucla-progress__bar--yellow`
- `.ucla-progress__bar--light-blue`
- `.ucla-progress__bar--ucla-blue`

<div class="ucla-progress mt-8 mb-6" style="display:flex;flex-direction:column;">
    <div class="ucla-progress__info">
        <label for="progress-color-default" class="ucla-progress__label">Default Color</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar" id="progress-default-color" max="100" value="70"></progress>
</div>
<div class="ucla-progress mb-6" style="display:flex;flex-direction:column;">
    <div class="ucla-progress__info">
        <label for="progress-color-gold" class="ucla-progress__label">UCLA Gold</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--gold" id="progress-color-gold" max="100" value="70"></progress>
</div>
<div class="ucla-progress mb-6" style="display:flex;flex-direction:column;">
    <div class="ucla-progress__info">
        <label for="progress-color-light-blue" class="ucla-progress__label">Light Blue</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--light-blue" id="progress-color-light-blue" max="100" value="70"></progress>
</div>
<div class="ucla-progress mb-6" style="display:flex;flex-direction:column;">
    <div class="ucla-progress__info">
        <label for="progress-color-blue" class="ucla-progress__label">UCLA Blue</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--ucla-blue" id="progress-color-blue" max="100" value="70"></progress>
</div>

```html
<!-- Default Color -->
<div class="ucla-progress">
    <div class="ucla-progress__info">
        <label for="progress-color-default" class="ucla-progress__label">Default Color</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar" id="progress-default-color" max="100" value="70"></progress>
</div>

<!-- UCLA Gold Color -->
<div class="ucla-progress">
    <div class="ucla-progress__info">
        <label for="progress-color-gold" class="ucla-progress__label">UCLA Gold</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--gold" id="progress-color-gold" max="100" value="70"></progress>
</div>

<!-- Light Blue Color -->
<div class="ucla-progress">
    <div class="ucla-progress__info">
        <label for="progress-color-light-blue" class="ucla-progress__label">Light Blue</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--light-blue" id="progress-color-light-blue" max="100" value="70"></progress>
</div>

<!-- UCLA Blue Color -->
<div class="ucla-progress">
    <div class="ucla-progress__info">
        <label for="progress-color-blue" class="ucla-progress__label">UCLA Blue</label>
        <div class="ucla-progress__percent">100%</div>
    </div>
    <progress class="ucla-progress__bar ucla-progress__bar--ucla-blue" id="progress-color-blue" max="100" value="70"></progress>
</div>
```