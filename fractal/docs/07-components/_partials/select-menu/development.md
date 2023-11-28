---
handle: select-menu-field-development
---
Any form field should be following this format:

- `<label class="ucla-field__label" for="selectId">`
- `.ucla-field__select`
    - `<option>`

<label class="ucla-field__label" for="exampleSelection1">Label</label>
<select class="ucla-field__select" id="exampleSelection1">
    <option disabled selected>Make a selection</option>
    <option value="Epsum">Epsum factorial non deposit quid</option>
    <option value="Pro">Pro quo hic escorol olypian</option>
    <option value="Et">Et gorilla congolium sic</option>
    <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
</select>

```html
<label class="ucla-field__label" for="exampleSelection1">Label</label>
<select class="ucla-field__select" id="exampleSelection1">
    <option disabled selected>Make a selection</option>
    <option value="Epsum">Epsum factorial non deposit quid</option>
    <option value="Pro">Pro quo hic escorol olypian</option>
    <option value="Et">Et gorilla congolium sic</option>
    <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
</select>
```

#### Field

To add any validation or helper text, a `.ucla-field` wrapper is needed:

<div class="ucla-field">
    <label class="ucla-field__label" for="exampleSelection2">Label</label>
    <select class="ucla-field__select" id="exampleSelection2">
        <option disabled selected>Make a selection</option>
        <option value="Epsum">Epsum factorial non deposit quid</option>
        <option value="Pro">Pro quo hic escorol olypian</option>
        <option value="Et">Et gorilla congolium sic</option>
        <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
    </select>
    <p class="ucla-field__help">This is a help text.</p>
</div>

```html
<div class="ucla-field">
    <label class="ucla-field__label" for="exampleSelection">Label</label>
    <select class="ucla-field__select" id="exampleSelection">
        <option disabled selected>Make a selection</option>
        <option value="Epsum">Epsum factorial non deposit quid</option>
        <option value="Pro">Pro quo hic escorol olypian</option>
        <option value="Et">Et gorilla congolium sic</option>
        <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
    </select>
    <p class="ucla-field__help">This is a help text.</p>
</div>
```

#### States

To add different states to the select menu, a contextual class must be added depending on the state:

##### Warning

Add the `.ucla-is-warning` to the `.ucla-field` element. For accessibility, it is recommended to provide a helper text with an ID and have the `<select>` element target it with the `aria-describedby` attribute.

<div class="ucla-field ucla-is-warning">
    <label class="ucla-field__label" for="exampleSelectionWarning">Label</label>
    <select class="ucla-field__select" id="exampleSelectionWarning" aria-describedby="exampleSelectHelperWarning">
        <option disabled selected>Make a selection</option>
        <option value="Epsum">Epsum factorial non deposit quid</option>
        <option value="Pro">Pro quo hic escorol olypian</option>
        <option value="Et">Et gorilla congolium sic</option>
        <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
    </select>
    <p class="ucla-field__help" id="exampleSelectHelperWarning">Warning helper text.</p>
</div>

```html
<div class="ucla-field ucla-is-warning">
    <label class="ucla-field__label" for="exampleSelectionWarning">Label</label>
    <select class="ucla-field__select" id="exampleSelectionWarning" aria-describedby="exampleSelectHelperWarning">
        <option disabled selected>Make a selection</option>
        <option value="Epsum">Epsum factorial non deposit quid</option>
        <option value="Pro">Pro quo hic escorol olypian</option>
        <option value="Et">Et gorilla congolium sic</option>
        <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
    </select>
    <p class="ucla-field__help" id="exampleSelectHelperWarning">Warning helper text.</p>
</div>
```

##### Error

Add the `.ucla-is-error` to the `.ucla-field` element. For accessibility, it is recommended to provide a helper text with an ID and have the `<select>` element target it with the `aria-describedby` attribute.

<div class="ucla-field ucla-is-error">
    <label class="ucla-field__label" for="exampleSelectionError">Label</label>
    <select class="ucla-field__select" id="exampleSelectionError" aria-describedby="exampleSelectHelperError">
        <option disabled selected>Make a selection</option>
        <option value="Epsum">Epsum factorial non deposit quid</option>
        <option value="Pro">Pro quo hic escorol olypian</option>
        <option value="Et">Et gorilla congolium sic</option>
        <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
    </select>
    <p class="ucla-field__help" id="exampleSelectHelperError">Error helper text.</p>
</div>

```html
<div class="ucla-field ucla-is-error">
    <label class="ucla-field__label" for="exampleSelectionError">Label</label>
    <select class="ucla-field__select" id="exampleSelectionError" aria-describedby="exampleSelectHelperError">
        <option disabled selected>Make a selection</option>
        <option value="Epsum">Epsum factorial non deposit quid</option>
        <option value="Pro">Pro quo hic escorol olypian</option>
        <option value="Et">Et gorilla congolium sic</option>
        <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
    </select>
    <p class="ucla-field__help" id="exampleSelectHelperError">Error helper text.</p>
</div>
```

##### Disable

For the disabled state, simply add the `disabled` attribute to the `<select>` element.

<select class="ucla-field__select" name="exampleSelectionDisabled" disabled>
    <option disabled selected>Make a selection</option>
    <option value="Epsum">Epsum factorial non deposit quid</option>
    <option value="Pro">Pro quo hic escorol olypian</option>
    <option value="Et">Et gorilla congolium sic</option>
    <option value="Ad">Ad nauseum souvlaki ignitus carborundum</option>
</select>

```html
<select class="ucla-field__select" name="exampleSelectionDisabled" disabled>
  <!-- ... -->
</select>
```