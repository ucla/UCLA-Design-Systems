---
handle: typography-development
---
**Note: For accessibility purposes, we recommend that you do not use heading tags (`<h1>`, `<h2>`, ... , `<h6>`) for changing font sizes. Instead, we are providing these classes for font sizes:**

{{render '@typography--headline-extra-large'}}

```html
{{render '@typography--headline-extra-large'}}
```

{{render '@typography--headline-large'}}

```html
{{render '@typography--headline-large'}}
```

{{render '@typography--headline-medium'}}

```html
{{render '@typography--headline-medium'}}
```

{{render '@typography--headline-small'}}

```html
{{render '@typography--headline-small'}}
```

#### Body Copy

{{render '@typography--paragraph'}}

```html
{{render '@typography--paragraph'}}
```

{{render '@typography--paragraph-lead'}}

```html
{{render '@typography--paragraph-lead'}}
```

{{render '@typography--paragraph-small'}}

```html
{{render '@typography--paragraph-small'}}
```

#### Unordered Lists

<ul>
  <li>Unordered List Item</li>
  <li>Unordered List Item</li>
  <li>Nested Unordered List Item
    <ul>
      <li>Unordered List Item</li>
      <li>Unordered List Item</li>
      <li>Unordered List Item</li>
    </ul> 
  </li>
</ul>

```html
<ul>
  <li>Unordered List Item</li>
  <li>Unordered List Item</li>
  <li>Nested Unordered List Item
    <ul>
      <li>Unordered List Item</li>
      <li>Unordered List Item</li>
      <li>Unordered List Item</li>
    </ul> 
  </li>
</ul>
```

#### Unstyled List

{{ render '@lists--unordered-lists-plain' }}

```html
{{ render '@lists--unordered-lists-plain' }}
```

#### Inline List
{{ render '@lists--unordered-lists-inline' }}

```html
{{ render '@lists--unordered-lists-inline' }}
```

#### Ordered Lists

<ol>
  <li>Ordered List Item</li>
  <li>Ordered List Item</li>
  <li>Nested Ordered List Item
    <ol>
      <li>Ordered List Item</li>
      <li>Ordered List Item</li>
      <li>Ordered List Item</li>
    </ol>
  </li>
</ol>

```html
<ol>
  <li>Ordered List Item</li>
  <li>Ordered List Item</li>
  <li>Nested Ordered List Item
    <ol>
      <li>Ordered List Item</li>
      <li>Ordered List Item</li>
      <li>Ordered List Item</li>
    </ol>
  </li>
</ol>
```

#### Descriptive List

{{ render '@lists--description-list' }}

```html
{{ render '@lists--description-list' }}
```


#### Inline Styles

{{render '@typography--strong'}}

```html
{{render '@typography--strong'}}
```

{{render '@typography--emphasis'}}

```html
{{render '@typography--emphasis'}}
```

{{render '@typography--deleted'}}

```html
{{render '@typography--deleted'}}
```

{{render '@typography--inserted'}}

```html
{{render '@typography--inserted'}}
```

{{render '@typography--marked'}}

```html
{{render '@typography--marked'}}
```

{{render '@typography--code'}}

```html
{{render '@typography--code'}}
```

{{render '@typography--blockquote'}}

```html
{{render '@typography--blockquote'}}
```

#### Automatic styling for body copy

<hr />

<div class="ucla-prose">
  <h1>Want to make the world better? Let's go.</h1>
  <p>You’re idealistic, driven and creative. You love learning and hearing different points of view. You feel empathy for others and believe everyone deserves a fair shot. You see obstacles as a chance to grow. You are a changemaker, just like us. Together? We’re unstoppable.</p>
  <h2>Discover answers to Questions that matter</h2>
  <p>We know we must dig for the truth. Work tirelessly to overcome obstacles. And keep trying until we create change. Like giving hope to the homeless. Shedding light on the climate crisis. And inspiring inclusiveness through art. And knowledge is where it all begins.</p>
  <h3>Find yourself moving in the right direction</h3>
  <p>Love helping others? Or maybe you’re captivated by the arts and culture. Our range of majors and minors is always evolving and we encourage cross-pollination among different fields. This approach helps you tailor your education to build on your strengths, explore your passions and bring your goals to life.</p>
</div>

```html
<div class="ucla-prose">
  <h1>Want to make the world better? Let's go.</h1>
  <p>You’re idealistic, driven and creative. You love learning and hearing different points of view. You feel empathy for others and believe everyone deserves a fair shot. You see obstacles as a chance to grow. You are a changemaker, just like us. Together? We’re unstoppable.</p>
  <h2>Discover answers to Questions that matter</h2>
  <p>We know we must dig for the truth. Work tirelessly to overcome obstacles. And keep trying until we create change. Like giving hope to the homeless. Shedding light on the climate crisis. And inspiring inclusiveness through art. And knowledge is where it all begins.</p>
  <h3>Find yourself moving in the right direction</h3>
  <p>Love helping others? Or maybe you’re captivated by the arts and culture. Our range of majors and minors is always evolving and we encourage cross-pollination among different fields. This approach helps you tailor your education to build on your strengths, explore your passions and bring your goals to life.</p>
</div>
```