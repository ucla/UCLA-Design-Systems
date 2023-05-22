---
handle: grid-developer
---
Using the grid is simple.

1. Add a `.ucla` container
2. Add as many `.col` elements as needed. Each `.col` will have an equal width, no matter how many there are.

<div class="ucla">
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
</div>

```html
<div class="ucla campus">
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
    <div class="col">
        <p class="example-content example-content--highlight">Auto</p>
    </div>
</div>
```

#### Column Sizes

If you want to change the size of a single (or multiple) column(s), you can use the following classes:

* `span_1_of_12`
* `span_2_of_12`
* `span_3_of_12`
* `span_4_of_12`
* `span_5_of_12`
* `span_6_of_12`
* `span_7_of_12`
* `span_8_of_12`
* `span_9_of_12`
* `span_10_of_12`
* `span_11_of_12`
* `span_12_of_12`

<div class="ucla campus">
  <div class="col span_1_of_12-md">
    <p class="example-content example-content--highlight">1 of 12</p>
  </div>
  <div class="col">
    <p class="example-content">Auto</p>
  </div>
</div>
{{view '@grid--two'}}
{{view '@grid--three'}}
{{view '@grid--four'}}
{{view '@grid--five'}}
{{view '@grid--six'}}
{{view '@grid--seven'}}
{{view '@grid--eight'}}
{{view '@grid--nine'}}
{{view '@grid--ten'}}
{{view '@grid--eleven'}}
{{view '@grid--twelve'}}

#### Responsive Columns

You can define a column size for each viewport size using the `-md` and/or `-lg` suffix to the column size.

_By default, auto columns stack on top of each other on **mobile**. A column must be specified if you want it to work on mobile_

<div class="ucla">
    <div class="col span_6_of_12 span_12_of_12-md span_3_of_12-lg">
        <p class="example-content example-content--highlight">6 of 12 Mobile<br />12 of 12 Tablet<br />3 of 12 Desktop</p>
    </div>
    <div class="col">
        <p class="example-content">Auto</p>
    </div>
</div>

```html
<div class="ucla">
    <div class="col span_6_of_12 span_12_of_12-md span_3_of_12-lg">
        <p class="example-content example-content--highlight">6 of 12 Mobile<br />12 of 12 Tablet<br />3 of 12 Desktop</p>
    </div>
    <div class="col">
        <p class="example-content">Auto</p>
    </div>
</div>
```

#### Nesting

To nest your content, add a new `.ucla` and a set of `.col` columns inside of an existing `.col` element.

<div class="ucla campus example">
  <div class="col span_9_of_12-md" style="background-color:#8bb8e8; border-radius: 4px">
    <div class="ucla campus">
      <div class="col span_12_of_12-md">
        <p class="example-content">Body Content 12 of 12</p>
      </div>
    </div>
    <div class="ucla campus">
      <div class="col span_6_of_12-md">
        <p class="example-content">Body Content 6 of 6</p>
      </div>
      <div class="col span_6_of_12-md">
        <p class="example-content">Body Content 6 of 6</p>
      </div>
    </div>
  </div>
  <div class="col span_3_of_12-md" style="background-color:#2774ae; border-radius: 4px">
    <p class="example-content">Menu content</p>
  </div>
</div>

```html
<div class="ucla campus example">
  <div class="col span_9_of_12-md" style="background-color:#8bb8e8; border-radius: 4px">
    <div class="ucla campus">
      <div class="col span_12_of_12-md">
        <p class="example-content">Body Content 12 of 12</p>
      </div>
    </div>
    <div class="ucla campus">
      <div class="col span_6_of_12-md">
        <p class="example-content">Body Content 6 of 6</p>
      </div>
      <div class="col span_6_of_12-md">
        <p class="example-content">Body Content 6 of 6</p>
      </div>
    </div>
  </div>
  <div class="col span_3_of_12-md" style="background-color:#2774ae; border-radius: 4px">
    <p class="example-content">Menu content</p>
  </div>
</div>
```

#### CSS Grid

While the default grid system is built around flexbox, we've added the another grid system utilizing CSS Grid.

- Change `.ucla` to `.ucla-grid`
- Add `.col-{num}` to the `.ucla-grid` to define how many columns in the grid.

##### Column Span

You can set a single column to take up a specified number of rows with the `.ucla-grid_span-{num}` class. This number must not exceed the `.col-{num}`.

Grid set to 3 Columns

<div class="ucla-grid cols-3">
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div class="ucla-grid_span-2">
        <p class="example-content">Span 2 Columns</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div class="ucla-grid_span-3">
        <p class="example-content">Span 3 Columns</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
</div>

Grid Set to 5 Columns

<div class="ucla-grid cols-5">
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div class="ucla-grid_span-2">
        <p class="example-content">Span 2 Columns</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div class="ucla-grid_span-3">
        <p class="example-content">Span 3 Columns</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
</div>

```html
<p>Grid set to 3 Columns</p>
<div class="ucla-grid cols-3">
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div class="ucla-grid_span-2">
        <p class="example-content">Span 2 Columns</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div class="ucla-grid_span-3">
        <p class="example-content">Span 3 Columns</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
</div>
<p>Grid set to 5 Columns</p>
<div class="ucla-grid cols-5">
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div class="ucla-grid_span-2">
        <p class="example-content">Span 2 Columns</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
    <div class="ucla-grid_span-3">
        <p class="example-content">Span 3 Columns</p>
    </div>
    <div>
        <p class="example-content">Auto</p>
    </div>
</div>
```