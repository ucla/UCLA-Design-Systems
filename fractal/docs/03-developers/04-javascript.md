---
label: JavaScript
---
<div class="ucla-prose">

### Default

UCLA Design System components initializes using `Bruin.init()` method.

```html
<script src="ucla-lib-scripts.js"></script>
<script>Bruin.init();</script>
```

This will initialize all component's JavaScript ready to be called.

### Manual initialization

To manually initilize components, remove the `Bruin.init()` call.

Instead, each component must be called to initialize them.
- `Bruin.Accordion.init(selector)`
- `Bruin.Alert.init(selector)`
- `Bruin.Banner.init(selector)`
- `Bruin.Carousel.init(selector)`
- `Bruin.Navigation.init(selector)`
- `Bruin.Table.init(selector)`
- `Bruin.Tabs.init(selector)`

**Example**

```js
const alert = Bruin.Alert.init('.ucla-alert')
```

### Modules

If you want to import modules individually, you'll need to use the `esm` JavaScript file.

```html
ucla-design-system@2.2.0/js/ucla-lib-scripts.esm.js
```

**Example**
```html
<script type="module">
  import { Accordion } from 'ucla-design-system@2.2.0/js/ucla-lib-scripts.esm.js';
  Accordion.initAll();
</script>
```

</div>