---
title: Backgrounds
---
{{render '@support'}}

You can set the background of any element using the `has-background-*` class. Using the background utility class will not change the color of text. Please use the text utility class `.has-white-text` when necessary.

Available class utilities |  Hex color
------------ | -------------
.has-background-grey-20 | #CCCCCC
.has-background-grey-05 | #F2F2F2
.has-background-grey-03 | #F7F7F7
.has-background-light-grey | #E7E7E8
.has-background-light-grey-08 | #EBEBEB
.has-background-ucla-blue | #2774AE
.has-background-white | #FFFFFF
.has-background-darker-blue | #005587
.has-background-darkest-blue | #003B5C

### Accessibility Requirements

When using a background color the foreground text requires a contrast ratio minimum level AA according to WCAG standards and UCLA's DCP. In order to help meet this requirement the class `.has-white-text` has been added to the library and should be applied when necessary. You can test your color ratios for compliance with [Web Aim's contrast checker](https://webaim.org/resources/contrastchecker/).

## Examples

### Add background to row
```
<div class="ucla campus has-background-ucla-blue has-white-text">
  <div class="col span_1_of_2">
    <h2>Column 1 Content Title</h2>
    <p>The utility class ʻ.has-background-ucla-blueʼ has been added so only the row has a modified background color. A second utility class `.has-white-text` has been added to turn the text white.</p>
  </div>
  <div class="col span_1_of_2">
    <h2>Column 2 Content Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  </div>
</div>
```

### Add background to column
```
<div class="ucla campus">
  <div class="col span_1_of_2 has-background-ucla-blue has-white-text">
    <h2>Column 1 Content Title</h2>
    <p>The utility class ʻ.has-background-ucla-blueʼ has been added so only the first column has a modified background color. A second utility class `.has-white-text` has been added to turn the text white.</p>
  </div>
  <div class="col span_1_of_2">
   <h2>Column 2 Content Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  </div>
</div>
```

### Add background to single element
```
<div class="ucla campus">
  <div class="col span_1_of_2">
    <h2>Column 1 Content Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  </div>
  <div class="col span_1_of_2">
    <h2 class="has-background-ucla-blue has-white-text">Column 2 Content Title</h2>
    <p>The utility class ʻ.has-background-ucla-blueʼ has been added so only the title in the second column has a modified background color. A second utility class `.has-white-text` has been added to turn the text white.</p>
  </div>
</div>
```

[See visual examples](/build/%!CurrentVersion%!/components/detail/backgrounds).
