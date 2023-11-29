---
handle: callout-ranking-development
---
The Ranking Callout can be built with the following structure:

<ul class="docs-list">
<li><code>.ucla-callout__ranking</code> - Main Container<ul>
<li><code>.ucla-callout__number</code> - Large number that’s vertically align with the body.</li>
<li><code>.ucla-callout__body</code> - Bolded text that is left align and vertically align with the number<ul>
<li><code>&lt;cite&gt;</code> - Grey text below the body and vertically aligned with the number</li>
</ul>
</li>
</ul>
</li>
</ul>

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