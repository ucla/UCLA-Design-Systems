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
<div class="ucla">
    <div class="col">Auto</div>
    <div class="col">Auto</div>
    <div class="col">Auto</div>
    <div class="col">Auto</div>
    <div class="col">Auto</div>
</div>
```

#### Container

Using the `.container` class will give your content some `padding` on the edge of your viewport and a set `max-width` of `1176px`. Simply wrap your `.ucla` grid with the `.container`.

```html
<div class="container">
	<div class="ucla">
		<!-- ... -->
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

<div class="ucla">
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
        6 of 12 Mobile
        12 of 12 Tablet
        3 of 12 Desktop
    </div>
    <div class="col">Auto</div>
</div>
```

#### Offset

You can offset columns to create horizontal space between or before a `.col` element. To offset columns, use the `.offset_{num}_of_12` class in your `.col` element. You can also add the `-md` and/or `-lg` suffix if you need the offset to be responsive.

<div class="ucla">
  <div class="col span_1_of_12">
    <p class="example-content">1 of 12</p>
  </div>
  <div class="col span_4_of_12 offset_2_of_12">
    <p class="example-content example-content--highlight">4 of 12<br />Offset 2 columns</p>
  </div>
</div>
<div class="ucla">
  <div class="col span_4_of_12 offset_4_of_12">
    <p class="example-content example-content--highlight">4 of 12<br />Offset 4 columns</p>
  </div>
</div>

```html
<div class="ucla">
  <div class="col span_1_of_12">1 of 12</div>
  <div class="col span_4_of_12 offset_2_of_12">
    4 of 12
    Offset 2 columns
  </div>
</div>
<div class="ucla">
  <div class="col span_4_of_12 offset_4_of_12">
    4 of 12
    Offset 4 columns
  </div>
</div>
```

#### Nesting

To nest your content, add a new `.ucla` and a set of `.col` columns inside of an existing `.col` element.

<div class="ucla example">
  <div class="col span_9_of_12-md" style="background-color:#8bb8e8; border-radius: 4px">
    <div class="ucla">
      <div class="col span_12_of_12-md">
        <p class="example-content">Body Content 12 of 12</p>
      </div>
    </div>
    <div class="ucla">
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
<div class="ucla example">
  <div class="col span_9_of_12-md" style="background-color:#8bb8e8; border-radius: 4px">
    <div class="ucla">
      <div class="col span_12_of_12-md">Body Content 12 of 12</div>
    </div>
    <div class="ucla">
      <div class="col span_6_of_12-md">Body Content 6 of 6</div>
      <div class="col span_6_of_12-md">Body Content 6 of 6</div>
    </div>
  </div>
  <div class="col span_3_of_12-md" style="background-color:#2774ae; border-radius: 4px">Menu content</div>
</div>
```

#### Column Order

If you want to change the order of a specific column, you'll need to add the `.ucla-order-{num}` to the column element.

<div class="ucla example">
  <div class="col ucla-order-1">
      <p class="example-content example-content--highlight">1st Column</p>
  </div>
  <div class="col ucla-order-0">
      <p class="example-content example-content--highlight">2nd Column</p>
  </div>  
</div>

```html
<div class="ucla example">
  <div class="col ucla-order-1">
      <p class="example-content example-content--highlight">1st Column</p>
  </div>
  <div class="col ucla-order-0">
      <p class="example-content example-content--highlight">2nd Column</p>
  </div>  
</div>
```

##### Responsive Column Order

To have a specific order for a certain viewpoint, you will need to add the `-md-` and/or `-lg-` modifier to the `.ucla-order` class. Example: `.ucla-order-md-2`

<div class="ucla example">
  <div class="col ucla-order-2 ucla-order-lg-1">
      <p class="example-content example-content--highlight">1st Column</p>
  </div>
  <div class="col ucla-order-0 ucla-order-lg-2">
      <p class="example-content example-content--highlight">2nd Column</p>
  </div>
  <div class="col ucla-order-1 ucla-order-lg-0">
      <p class="example-content example-content--highlight">3rd Column</p>
  </div>  
</div>

```html
<div class="ucla example">
  <div class="col ucla-order-2 ucla-order-lg-1">
      <p class="example-content example-content--highlight">1st Column</p>
  </div>
  <div class="col ucla-order-0 ucla-order-lg-2">
      <p class="example-content example-content--highlight">2nd Column</p>
  </div>
  <div class="col ucla-order-1 ucla-order-lg-0">
      <p class="example-content example-content--highlight">3rd Column</p>
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
    <div>Auto<</div>
    <div class="ucla-grid_span-2">Span 2 Columns</div>
    <div>Auto</div>
    <div>Auto</div>
    <div>Auto</div>
    <div class="ucla-grid_span-3">Span 3 Columns</div>
    <div>Auto</div>
</div>
<p>Grid set to 5 Columns</p>
<div class="ucla-grid cols-5">
    <div>Auto</div>
    <div class="ucla-grid_span-2">Span 2 Columns</div>
    <div>Auto</div>
    <div>Auto</div>
    <div>Auto</div>
    <div class="ucla-grid_span-3">Span 3 Columns</div>
    <div>Auto</div>
</div>
```