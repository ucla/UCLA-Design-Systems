---
handle: callout-ranking-development
---
The Ranking Callout can be built with the following structure:

- `.ucla-callout__ranking` - Main Container
  - `.ucla-callout__number` - Large number that's vertically align with the body.
  - `.ucla-callout__body` - Bolded text that is left align and vertically align with the number
    - `<cite>` - Grey text below the body and vertically aligned with the number

<div style="max-width: 540px" class="mx-auto">
  <aside class="ucla-callout ucla-callout__ranking">
    <span class="ucla-callout__number">#9</span>
    <div class="ucla-callout__body">
        in the world for mathematics
        <cite>
          Academic Ranking of World Universities (2019)
        </cite>
    </div>
  </aside>
</div>

```html
<aside class="ucla-callout ucla-callout__ranking">
  <span class="ucla-callout__number">#9</span>
  <div class="ucla-callout__body">
    in the world for mathematics
    <cite>Academic Ranking of World Universities (2019)</cite>
  </div>
</aside>
```