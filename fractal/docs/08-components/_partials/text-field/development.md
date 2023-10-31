---
handle: textfield-development
---
Any form field should be following this format:

- `<label class="ucla-field__label" for="inputId">`
- `.ucla-field__input`

<label class="ucla-field__label" for="exampleTextField1">Label</label>
<input class="ucla-field__input" id="exampleTextField1" type="text" placeholder="Text input">

```html
<label class="ucla-field__label" for="exampleTextField1">Label</label>
<input class="ucla-field__input" id="exampleTextField1" type="text" placeholder="Text input">
```

#### Field

To add any validation or helper text, a `.ucla-field` wrapper is needed:

<div class="ucla-field">
    <label class="ucla-field__label" for="exampleTextField2">Label</label>
    <input class="ucla-field__input" id="exampleTextField2" type="text" placeholder="Text input">
    <p class="ucla-field__help">Assistive/Helper text goes here</p>
</div>

```html
<div class="ucla-field">
    <label class="ucla-field__label" for="exampleTextField">Label</label>
    <input class="ucla-field__input" id="exampleTextField" type="text" placeholder="Text input">
    <p class="ucla-field__help">Assistive/Helper text goes here</p>
</div>
```

#### States

To add different states to the input, a contextual class must be added depending on the state.  For accessibility, it is recommended to provide a helper text with an ID and have the `<input>` element target it with the `aria-describedby` attribute.

##### Warning

Add the `.ucla-is-warning` to the `.ucla-field` element.

<div class="ucla-field ucla-is-warning">
    <label class="ucla-field__label" for="exampleWarningField">Label</label>
    <input class="ucla-field__input" id="exampleWarningField" type="text" placeholder="Text input" aria-describedby="exampleWarningHelper">
    <p class="ucla-field__help" id="exampleWarningHelper">Warning helper text</p>
</div>

##### Error

Add the `.ucla-is-error` to the `.ucla-field` element.

<div class="ucla-field ucla-is-error">
    <label class="ucla-field__label" for="exampleErrorField">Label</label>
        <input class="ucla-field__input" id="exampleErrorField" type="text" placeholder="Text input" aria-describedby="exampleErrorHelper">
    <p class="ucla-field__help" id="exampleErrorHelper">Error helper text</p>
</div>

##### Disable

For the disabled state, simply add the `disabled` attribute to the input.

<input class="ucla-field__input" id="exampleTextFieldDisabled" type="text" value="Disabled State" placeholder="Text input" disabled>

```html
<input class="ucla-field__input" id="exampleTextFieldDisabled" type="text" value="Disabled State" placeholder="Text input" disabled>
```

#### Readonly

A `readonly` will look like a normal input field but will be non-editable. To add, simply add the `readonly` attribute to the input.

<input class="ucla-field__input" id="exampleTextFieldReadonly" type="text" value="This text is readonly" readonly>

```html
<input class="ucla-field__input" id="exampleTextFieldReadonly" type="text" value="This text is readonly" readonly>
```

#### Icons

To add icons inside the input field, there are a couple things to add.

1. Wrap the input in a `ucla-field__control` element.

2. `.ucla-has-left-icon` or `.ucla-has-right-icon` to the `.ucla-field__control` element.

3. `<span class="ucla-field__icon-right">` after the `<input>` with an `<svg>` icon inside.

<div class="ucla-field">
    <label class="ucla-field__label" for="exampleIconLeft">Label</label>
    <div class="ucla-field__control ucla-has-left-icon">
        <input class="ucla-field__input" id="exampleIconLeft" type="text" placeholder="Text input" />
        <span class="ucla-field__icon-left">
            <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16L0 0L20 0L20 16L0 16ZM10 9L18 4V2L10 7L2 2L2 4L10 9Z" fill="#333333" />
            </svg>
        </span>
    </div>
</div>

```html
<!-- ... -->
<div class="ucla-field__control ucla-has-left-icon">
    <input class="ucla-field__input" id="exampleIconLeft" type="text" placeholder="Text input" />
    <span class="ucla-field__icon-left">
        <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16L0 0L20 0L20 16L0 16ZM10 9L18 4V2L10 7L2 2L2 4L10 9Z" fill="#333333" />
        </svg>
    </span>
</div>
<!-- ... -->
```

<div class="ucla-field">
    <label class="ucla-field__label" for="exampleIconRight">Label</label>
    <div class="ucla-field__control ucla-has-right-icon">
        <input class="ucla-field__input" id="exampleIconRight" type="text" placeholder="Text input" />
        <span class="ucla-field__icon-right">
            <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16L0 0L20 0L20 16L0 16ZM10 9L18 4V2L10 7L2 2L2 4L10 9Z" fill="#333333" />
            </svg>
        </span>
    </div>
</div>

```html
<!-- ... -->
<div class="ucla-field__control ucla-has-right-icon">
    <input class="ucla-field__input" id="exampleIconRight" type="text" placeholder="Text input" />
    <span class="ucla-field__icon-right">
        <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16L0 0L20 0L20 16L0 16ZM10 9L18 4V2L10 7L2 2L2 4L10 9Z" fill="#333333" />
        </svg>
    </span>
</div>
<!-- ... -->
```