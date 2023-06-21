---
handle: spacing-development
---
To add more spacing to any element or component, we've provided utility classes to override the default spacing.

#### Spacing Increments
<table class="ucla-table my-5 ucla-table__border docs-table">
  <thead>
    <tr>
      <th>Number</th>
      <th>Size</th>
      <th>Pixels</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0px</td>
      <td>0px</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0.125rem</td>
      <td>2px</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0.25rem</td>
      <td>4px</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0.5rem</td>
      <td>8px</td>
    </tr>
    <tr>
      <td>4</td>
      <td>0.75rem</td>
      <td>12px</td>
    </tr>
    <tr>
      <td>5</td>
      <td>1rem</td>
      <td>16px</td>
    </tr>
    <tr>
      <td>6</td>
      <td>1.5rem</td>
      <td>24px</td>
    </tr>
    <tr>
      <td>7</td>
      <td>2rem</td>
      <td>32px</td>
    </tr>
    <tr>
      <td>8</td>
      <td>3rem</td>
      <td>48px</td>
    </tr>
    <tr>
      <td>9</td>
      <td>4rem</td>
      <td>64px</td>
    </tr>
    <tr>
      <td>10</td>
      <td>5rem</td>
      <td>80px</td>
    </tr>
    <tr>
      <td>auto</td>
      <td>auto</td>
      <td>auto</td>
    </tr>
  </tbody>
</table>

#### Padding

To control the padding on one side of an element, use `p{t|l|b|r}-{size}`.

<div class="container" style="border: 1px solid #ccc;">
    <div class="ucla">
        <div class="col span_12_of_12">
            <p class="example-content pt-6">Padding Top 6</p>
        </div>
    </div>
    <div class="ucla" style="justify-content: space-between">
        <div class="col span_2_of_12">
            <p class="example-content pl-8">Padding Left 8</p>
        </div>
        <div class="col span_2_of_12">
            <p class="example-content pr-6">Padding Right 6</p>
        </div>
    </div>
    <div class="ucla">
        <div class="col span_12_of_12">
            <p class="example-content pb-3">Padding Bottom 3</p>
        </div>
    </div>
</div>

```html
<div class="pt-6 ...">Padding Top 6</div>
<div class="pl-8 ...">Padding Left 8</div>
<div class="pr-6 ...">Padding Right 6</div>
<div class="pb-3 ...">Padding Bottom 3</div>
```

#### Margin

To add margins to an element, use `m{t|l|b|r}-{size}`

<div class="container" style="border: 1px solid #ccc;">
    <div class="ucla">
        <div class="col span_12_of_12">
          <div class="docs-example-margin-padding">
            <p class="example-content mt-6">Margin Top 6</p>
          </div>
        </div>
    </div>
    <div class="ucla" style="justify-content: space-between">
        <div class="col span_2_of_12">
          <div class="docs-example-margin-padding">
            <p class="example-content ml-8">Margin Left 8</p>
          </div>
        </div>
        <div class="col span_2_of_12">
          <div class="docs-example-margin-padding">
            <p class="example-content mr-6">Margin Right 6</p>
          </div>
        </div>
    </div>
    <div class="ucla">
        <div class="col span_12_of_12">
          <div class="docs-example-margin-padding">
            <p class="example-content mb-3">Margin Bottom 3</p>
          </div>
        </div>
    </div>
</div>

```html
<div class="mt-6 ...">Margin Top 6</div>
<div class="ml-8 ...">Margin Left 8</div>
<div class="mr-6 ...">Margin Right 6</div>
<div class="mb-3 ...">Margin Bottom 3</div>
```

#### Vertical and Horizontal Spacing

Use the `*x` or `*y` label if you need to space out both left and right or top and bottom.

<div class="container" style="border: 1px solid #ccc;">
  <div class="ucla" style="justify-content: center">
      <div class="col span_6_of_12">
        <div class="docs-example-margin-padding">
            <p class="example-content p-4 mx-6">mx-6</p>
        </div>
      </div>
  </div>
  <div class="ucla" style="justify-content: center">
      <div class="col span_6_of_12">
        <div class="docs-example-margin-padding">
            <p class="example-content p-4 my-8">my-8</p>
        </div>
      </div>
  </div>
  <div class="ucla" style="justify-content: center">
      <div class="col span_3_of_12">
        <p class="example-content px-10">px-10</p>
      </div>
  </div>
  <div class="ucla" style="justify-content: center">
      <div class="col span_2_of_12">
        <p class="example-content py-10">py-10</p>
      </div>
  </div>
</div>