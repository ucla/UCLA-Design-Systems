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

##### Fieldset

The `<fieldset>` element is used to contain related form controls. The `<legend>` element acts as a heading to identify the group.

<fieldset class="ucla-fieldset">
    <legend class="ucla-fieldset__legend">Checkbox group</legend>
    <div class="ucla-field">
      <div class="ucla-field__control">
            <label class="ucla-field__checkbox-label" for="exampleCheckboxFieldset">
                <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckboxFieldset" />
                Remember Me
            </label>
        </div>
    </div>
</fieldset>

```html
<fieldset class="ucla-fieldset">
    <legend class="ucla-fieldset__legend">Radio group</legend>
    <div class="ucla-field">
      <div class="ucla-field__control">
            <label class="ucla-field__checkbox-label" for="exampleCheckboxFieldset">
                <input type="checkbox" class="ucla-field__checkbox" id="exampleCheckboxFieldset" />
                Remember Me
            </label>
        </div>
    </div>
</fieldset>
```

##### Helper Text

You can add a helper text with the `.ucla-field__help` class inside the `.ucla-field` element.

```html
<div class="ucla-field">
    <!-- ... -->
    <p class="ucla-field__help">Helper Text</p>
</div>    
```

The helper text will change color depending on the state of the checkbox. In order to have a corresponding icon to the state, you will need to add a `.ucla-field__radio-checkbox-help-has-icon` to the `.ucla-field__help`.

```html
<div class="ucla-field">
    <!-- ... -->
    <p class="ucla-field__help ucla-field__radio-checkbox-help-has-icon">This helper text will have an icon on error and warning state.</p>
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
