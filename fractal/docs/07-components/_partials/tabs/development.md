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
  <button class="ucla-tablink"  aria-selected="false" role="tab">
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
  <article tabindex="0" role="tabpanel" class="ucla-tabpanel">
    <!-- ... -->
  </article>
</section>
<!-- ... -->
```

[Preview Example]({{path '/components/preview/tabs'}})

#### JavaScript

**Methods**

`activateTab(panelID)`

Activates the tab item with the ID value of `.ucla-tabpanels"`.

```js
const tabs = document.querySelector('your tabs component');
tabs.activateTab('your tab panel ID');
```

**Events**

`bruinTabActivated`

Emits when an tab panel is activated.

```js
document.addEventListener('bruinTabActivated', function() {
  // Your JavaScript here
})
```