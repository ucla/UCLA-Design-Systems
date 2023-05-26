---
handle: checkbox-development
---
To build a checkbox, use the following structure:

- `.ucla-field__checkbox-label`
  - `.ucla-field__checkbox`

<label class="ucla-field__checkbox-label" for="exampleCheckbox">
    <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckbox" />
    Remember Me
</label>

```html
<label class="ucla-field__checkbox-label" for="exampleCheckbox">
    <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckbox" />
    Remember Me
</label>
```

#### Field

To add any validation, a `.ucla-field` wrapper is needed:

```html
<div class="ucla-field">
  <label class="ucla-field__checkbox-label" for="exampleCheckbox">
      <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckbox" />
      Remember Me
  </label>
</div>
```

#### States

To add different states to a checkbox, a contextual class must be added to the `.ucla-field` element depending on the state:

##### Warning

Add the `.ucla-is-warning` to the `.ucla-field` element.

<div class="ucla-field ucla-is-warning">
  <label class="ucla-field__checkbox-label" for="exampleCheckboxWarning">
      <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckboxWarning" />
      Remember Me
  </label>
</div>

```html
<div class="ucla-field ucla-is-warning">
  <label class="ucla-field__checkbox-label" for="exampleCheckboxWarning">
      <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckboxWarning" />
      Remember Me
  </label>
</div>
```

##### Error

Add the `.ucla-is-error` to the `.ucla-field` element.

<div class="ucla-field ucla-is-error">
  <label class="ucla-field__checkbox-label" for="exampleCheckboxError">
      <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckboxError" />
      Remember Me
  </label>
</div>

```html
<div class="ucla-field ucla-is-error">
  <label class="ucla-field__checkbox-label" for="exampleCheckboxError">
      <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckboxError" />
      Remember Me
  </label>
</div>
```

##### Disable

For the disabled state, simply add the `disabled` attribute to both the `<label>` and the `<input>` element.

<label class="ucla-field__checkbox-label" for="exampleCheckboxDisabled" disabled>
    <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckboxDisabled" disabled />
    Remember Me
</label>

```html
<label class="ucla-field__checkbox-label" for="exampleCheckboxDisabled" disabled>
    <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckboxDisabled" disabled />
    Remember Me
</label>
```
