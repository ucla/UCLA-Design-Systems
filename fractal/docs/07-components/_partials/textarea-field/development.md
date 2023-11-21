---
handle: textareafield-development
---
Any form field should be following this format:


- `<label class="ucla-field__label" for="textareaId">`
- `.ucla-field__textarea`


<label class="ucla-field__label" for="exampleTextarea1">Label</label>
<textarea class="ucla-field__textarea" id="exampleTextarea2" placeholder="Textarea"></textarea>

#### Field

To add any validation or helper text, a `.ucla-field` wrapper is needed:

<div class="ucla-field">
  <label class="ucla-field__label" for="exampleTextarea2">Label</label>
  <textarea class="ucla-field__textarea" id="exampleTextarea2" placeholder="Textarea" aria-describedby="exampleAssistHelper"></textarea>
  <p class="ucla-field__help" id="exampleAssistHelper">Assistive text goes here</p>
</div>

```html
<div class="ucla-field">
  <label class="ucla-field__label" for="exampleTextarea">Label</label>
  <textarea class="ucla-field__textarea" id="exampleTextarea" placeholder="Textarea" aria-describedby="exampleAssistHelper"></textarea>
  <p class="ucla-field__help" id="exampleAssistHelper">Assistive text goes here</p>
</div>
```

#### States

To add different states to the textarea, a contextual class must be added depending on the state. For accessibility, it is recommended to provide a helper text with an ID and have the `<textarea>` element target it with the `aria-describedby` attribute.

##### Warning

Add the `.ucla-is-warning` to the `.ucla-field` element.

<div class="ucla-field ucla-is-warning">
  <label class="ucla-field__label" for="exampleWarningTextarea">Label</label>
  <textarea class="ucla-field__textarea" id="exampleWarningTextarea" placeholder="Textarea" aria-describedby="exampleWarningHelper"></textarea>
  <p class="ucla-field__help" id="exampleWarningHelper">Warning helper text</p>
</div>

```html
<div class="ucla-field ucla-is-warning">
  <label class="ucla-field__label" for="exampleWarningTextarea">Label</label>
  <textarea class="ucla-field__textarea" id="exampleWarningTextarea" placeholder="Textarea" aria-describedby="exampleWarningHelper"></textarea>
  <p class="ucla-field__help" id="exampleWarningHelper">Warning helper text</p>
</div>
```

##### Error

Add the `.ucla-is-error` to the `.ucla-field` element.

<div class="ucla-field ucla-is-error">
  <label class="ucla-field__label" for="exampleErrorTextarea">Label</label>
  <textarea class="ucla-field__textarea" id="exampleErrorTextarea" placeholder="Textarea" aria-describedby="exampleErrorHelper"></textarea>
  <p class="ucla-field__help" id="exampleErrorHelper">Error helper text</p>
</div>

```html
<div class="ucla-field ucla-is-error">
  <label class="ucla-field__label" for="exampleErrorTextarea">Label</label>
  <div class="ucla-field__control">
      <textarea class="ucla-field__textarea" id="exampleErrorTextarea" placeholder="Textarea" aria-describedby="exampleErrorHelper"></textarea>
  </div>
  <p class="ucla-field__help" id="exampleErrorHelper">Error helper text</p>
</div>
```

##### Disable

For the disabled state, simply add the `disabled` attribute to the textarea.

<textarea class="ucla-field__textarea" id="exampleTextareaDisabled" placeholder="Textarea" disabled></textarea>

```html
<textarea class="ucla-field__textarea" id="exampleTextareaDisabled" placeholder="Textarea" disabled></textarea>
```

#### Readonly

A `readonly` will look like a normal textarea field but will be non-editable. To add, simply add the `readonly` attribute to the textarea.

<textarea class="ucla-field__textarea" id="exampleTextareaDisabled" placeholder="Textarea" readonly>This content is not editable</textarea>

```html
<textarea class="ucla-field__textarea" id="exampleTextareaDisabled" placeholder="Textarea" readonly>This content is not editable</textarea>
```