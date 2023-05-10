---
handle: grid-developer
---
Using the grid is simple.

1. Add a `.ucla` container
2. Add as many `.col` elements as needed. Each `.col` will have an equal width, no matter how many there are.

{{view '@grid--auto-column' }}

```html
{{view '@grid--auto-column' }}
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

{{view '@grid'}}
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

{{view '@grid--nested-columns'}}

```html
{{view '@grid--nested-columns'}}
```

#### CSS Grid

While the default grid system is built around flexbox, we've added the another grid system utilizing CSS Grid.

- Change `.ucla` to `.ucla-grid`

{{view '@grid--css-grid'}}

```html
{{view '@grid--css-grid'}}
```