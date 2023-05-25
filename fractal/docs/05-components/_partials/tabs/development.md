---
handle: tab-doc-development
---
The tabs component has two parts. The navigation and the panels. To build, you must first start with the `.ucla-tabs` container:

```html
<div class="ucla-tabs"></div>
```

#### Navigation

The first part of the tabs component is the navigation. It's comprised of inline buttons that are clicked to reveal it's corresponding content. To build, you must use the following structure:

- `.ucla-tabslist` - Container for buttons
  - `.ucla-tablink` - Link for displaying tab content

```html
<!-- ... -->
<nav class="ucla-tabslist" role="tablist" aria-label="content-tabs">
  <button id="panel-01" class="ucla-tablink"  aria-selected="false" aria-controls="panel-01-tab">
    Tab 1
  </button>
  <!-- ... -->
</nav>
<!-- ... -->
```

_Note: The `aria-controls` and `id` for the tab content needs to be `{Button ID}-tab`.

#### Tab Content

The second part of the tabs component is the content. Like the navigation, the tab content also has a container with the content nested inside:

- `.ucla-tabpanels` - Container for the Tab Panels
  - `.ucla-tabpanel` - Element that houses the content

```html
<!-- ... -->
<section class="ucla-tabpanels">
  <article id="panel-01-tab" tabindex="0" role="tabpanel" aria-labelledby="panel-01" class="ucla-tabpanel">
    <!-- ... -->
  </article>
</section>
<!-- ... -->
```

_Note: The id of the `.ucla-tabpanel` must match the `aria-controls` in order for the tabs to function. See example below:

```html
<div class="ucla-tabs">
  <nav class="ucla-tabslist" role="tablist" aria-label="content-tabs">
    <button id="panel-01" class="ucla-tablink"  aria-selected="false" aria-controls="panel-01-tab">
      Tab 1
    </button>
  </nav>
  <section class="ucla-tabpanels">
    <article id="panel-01-tab" tabindex="0" role="tabpanel" aria-labelledby="panel-01" class="ucla-tabpanel">
      <!-- ... -->
    </article>
  </section>
</div>
```

[Preview Example](/components/preview/tabs)