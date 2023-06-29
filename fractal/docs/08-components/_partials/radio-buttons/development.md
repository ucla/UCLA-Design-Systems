---
handle: radio-buttons-development
---
To build a radio button, use the following structure:

- `.ucla-field__radio-label`
  - `.ucla-field__radio`


There are a couple things to keep in mind.

1. The `<input>` must be wrapped in the `<label>`.
2. The `name` attribute in the `<input>` must be the same value in order to have only one selection.

<label class="ucla-field__radio-label" for="exampleRadio1">
    <input id="exampleRadio1" class="ucla-field__radio" type="radio" name="radio" value="radio1">
    Radio 1
</label>
<label class="ucla-field__radio-label" for="exampleRadio2">
    <input id="exampleRadio2" class="ucla-field__radio" type="radio" name="radio" value="radio2">
    Radio 2
</label>

```html
<label class="ucla-field__radio-label" for="exampleRadio1">
    <input id="exampleRadio1" class="ucla-field__radio" type="radio" name="radio" value="radio1">
    Radio 1
</label>
<label class="ucla-field__radio-label" for="exampleRadio2">
    <input id="exampleRadio2" class="ucla-field__radio" type="radio" name="radio" value="radio2">
    Radio 2
</label>
```

#### Field

To add any validation, a `.ucla-field` wrapper is needed:

```html
<div class="ucla-field">
  <label class="ucla-field__radio-label" for="exampleRadio1">
      <input id="exampleRadio1" class="ucla-field__radio" type="radio" name="radio" value="radio1">
      Radio 1
  </label>
  <label class="ucla-field__radio-label" for="exampleRadio2">
      <input id="exampleRadio2" class="ucla-field__radio" type="radio" name="radio" value="radio2">
      Radio 2
  </label>
</div>
```

#### States

To add different states to the radio buttons, a contextual class must be added to the `.ucla-field` element depending on the state:

##### Warning

Add the `.ucla-is-warning` to the `.ucla-field` element.

<div class="ucla-field ucla-is-warning">
  <label class="ucla-field__radio-label" for="exampleRadioWarning1">
      <input id="exampleRadioWarning1" class="ucla-field__radio" type="radio" name="radio-warning" value="radio1">
      Radio 1
  </label>
  <label class="ucla-field__radio-label" for="exampleRadioWarning2">
      <input id="exampleRadioWarning2" class="ucla-field__radio" type="radio" name="radio-warning" value="radio2">
      Radio 2
  </label>
</div>

```html
<div class="ucla-field ucla-is-warning">
  <label class="ucla-field__radio-label" for="exampleRadioWarning1">
      <input id="exampleRadioWarning1" class="ucla-field__radio" type="radio" name="radio-warning" value="radio1">
      Radio 1
  </label>
  <label class="ucla-field__radio-label" for="exampleRadioWarning2">
      <input id="exampleRadioWarning2" class="ucla-field__radio" type="radio" name="radio-warning" value="radio2">
      Radio 2
  </label>
</div>
```

##### Error

Add the `.ucla-is-error` to the `.ucla-field` element.

<div class="ucla-field ucla-is-error">
  <label class="ucla-field__radio-label" for="exampleRadioError1">
      <input id="exampleRadioError1" class="ucla-field__radio" type="radio" name="radio-error" value="radio1">
      Radio 1
  </label>
  <label class="ucla-field__radio-label" for="exampleRadioError2">
      <input id="exampleRadioError2" class="ucla-field__radio" type="radio" name="radio-error" value="radio2">
      Radio 2
  </label>
</div>

```html
<div class="ucla-field ucla-is-error">
  <label class="ucla-field__radio-label" for="exampleRadioError1">
      <input id="exampleRadioError1" class="ucla-field__radio" type="radio" name="radio-error" value="radio1">
      Radio 1
  </label>
  <label class="ucla-field__radio-label" for="exampleRadioError2">
      <input id="exampleRadioError2" class="ucla-field__radio" type="radio" name="radio-error" value="radio2">
      Radio 2
  </label>
</div>
```

##### Disable

For the disabled state, simply add the `disabled` attribute to both the `<label>` and the `<input>` element.

<div class="ucla-field">
  <label class="ucla-field__radio-label" for="exampleRadioDisabled1" disabled>
      <input id="exampleRadioDisabled1" class="ucla-field__radio" type="radio" name="radio-disabled" value="radio1" disabled>
      Radio 1
  </label>
  <label class="ucla-field__radio-label" for="exampleRadioDisabled2" disabled>
      <input id="exampleRadioDisabled2" class="ucla-field__radio" type="radio" name="radio-disabled" value="radio2" disabled>
      Radio 2
  </label>
</div>

```html
<div class="ucla-field">
  <label class="ucla-field__radio-label" for="exampleRadioDisabled1" disabled>
      <input id="exampleRadioDisabled1" class="ucla-field__radio" type="radio" name="radio-disabled" value="radio1" disabled>
      Radio 1
  </label>
  <label class="ucla-field__radio-label" for="exampleRadioDisabled2" disabled>
      <input id="exampleRadioDisabled2" class="ucla-field__radio" type="radio" name="radio-disabled" value="radio2" disabled>
      Radio 2
  </label>
</div>
```