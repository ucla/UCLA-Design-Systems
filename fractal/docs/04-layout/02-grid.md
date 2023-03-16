---
title: Grid
---
{{render '@support'}}

Our fully responsive grid for UCLA digital properties has 12 columns and 5 breakpoints. It has been designed to easily adapt to different screen sizes and to ensure consistent layouts across devices.

The grid has three main parts: **columns**, **gutters** and **margins**

* **Columns**
  * Columns contain the content.
  * They act as invisible guides while setting typography and aligning elements to establish a visual rhythm.
* **Gutters**
  * Gutters are the spaces between columns.
  * They provide breathing room around elements so your content can be easily consumed.
* **Margins**
  * Margins are the spaces between the 1) content area and 2) the left and right edges of the screen. (We do not use top and bottom margins for our grids.)
  * Margins define the content area from within the viewable area.

### Viewports and Breakpoints

We have defined commonly used breakpoints to make development for all screen sizes more efficient. These variables are used through our grid and spacing class names.

We created shorthand variables for common breakpoints in the following chart.

Viewports | Viewport Width | SCSS Breakpoint Variable
------------ | ------------- | -------------
n/a | 0px | "na"
Extra Small / Mobile Devices | 480px | "xs"
Small / Mobile Devices | 600px | "sm"
Medium / Tablet Devices | 768px | "md"
Large / Desktop or Laptop Devices | 1024px | "lg"
Extra Large / Presentation Mode | 1280px | "xl"

### Breakpoint Examples

```
// CSS Example Breakpoint Usage
@media (min-width: 768px) {
  display: inline-block;
}

// SCSS Example Breakpoint Usage
@media (min-width: breakpoint-min(md)) {
  display: inline-block;
}

```

### Columns

In order to use the column grid you must wrap the page area with the “ucla campus” class.

* The “ucla” class splits the page horizontally. It will help you break up rows of content or can be used as your main content wrapper. It has no padding or margins.
* The “campus” class forces the element to self-clear its children, a.k.a [the Clearfix hack](https://css-tricks.com/snippets/css/clear-fix/). This is used to support older browser versions.
* The “col” class divides the row into columns. All columns except the first child have a margin-left of 1.6%.
* The “span_x_of_x” class defines the width of the column using percentages. The second “x” has a maximum of 12. This allows the grid to be fluid at all breakpoints.

```
// Full Width
{{ render '@grid--two' }}
{{ render '@grid--three' }}
{{ render '@grid--four' }}
{{ render '@grid--five' }}
{{ render '@grid--six' }}
{{ render '@grid--seven' }}
{{ render '@grid--eight' }}
{{ render '@grid--nine' }}
{{ render '@grid--ten' }}
{{ render '@grid--eleven' }}
{{ render '@grid--twelve' }}
{{ render '@grid--column-span' }}
{{ render '@grid--nested-columns' }}
// Two Columns
{{view '@grid--two'}}
// Three Columns
{{view '@grid--three'}}
// Twelve Columns Responsive EXAMPLE
{{view '@grid--twelve'}}
```

You can place columns within columns.

```
// Body Layout
{{view '@grid--nested-columns'}}
```
