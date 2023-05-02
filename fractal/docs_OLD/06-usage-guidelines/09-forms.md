---
title: Forms
---
{{render '@support'}}

Collect information from users or filter content with form select and search fields.

## Usage

### Usability Guidance

* Tell people why you're collecting their information and what you're going to do with it.
* Immediately validate entries to reassure users they entered the information correctly. Don't wait until the form submission to communicate missing or erroneous information.
* Provide clear and non-judgmental error messages to help users correct their mistakes.
* Use placeholders or contextual tips in form fields to help people provide the right data.
* Auto-format data rather than asking users to match your standards, e.g. 3107941234 should auto-format to (310) 794-1234. Or separate data inputs to avoid this problem altogether, e.g. (`310`) `794`-`1234` x`555`.
* Use the right input type to aid with validation and substitute relevant keyboards. For instance, if you use `<input type="tel">`, mobile browsers will dynamically substitute a numeric keypad to enter a phone numbers. If you use `<input type="email">`  or `<input type="url">`, mobile browsers will display `@`, `.`, `/` and `.com` buttons for quicker entry.
* Divide long forms into multiple steps and indicate their progress, e.g. "Step 3 of 4: Payment Method".
* Clearly state if and when users can expect a response from your department.

### Accessibility Requirements

* Create tab order and focus states for keyboard navigation at a minimum.
* Style focus states for users who tab through form fields using their keyboard.
* Use `<fieldset>` containers and `<legend>` and `<label>` elements to denote sections and fields of the form.

## Text Inputs

### Code

```
{{view '@forms'}}
```

## Select Menus

### Code

```
{{view '@forms--select-menu'}}
```

## Checkboxes

### Code

```
{{view '@forms--checkbox'}}
```
## Radio Buttons

### Code

```
{{view '@forms--radio'}}
```

### Code

```
{{view '@forms--fieldset-legend'}}
```

## Error Handling

* To trigger errors, the "hasError" class name should be appended to the inputs's parent div. This feature is currently only available for the "select" and "text" inputs.

* Our script library includes a function that can be used to dynamically append error class names to these divs and show corresponding error messages. The function looks for 2 parameters, (1) the name of the input and (2) error message to be shown.

* Before checking and triggering errors, you should use the "clearErrors" function to clear the form of previous errors. This function looks for the form DOM object to be passed in to work correctly.

### Code

```
<form class="example-form">
<!-- this select class does not have an error -->
  <div class="select">
    <label class="select__label" for="solo_selection">Label</label>
    <select class="select__menu" name="solo_selection">
      <option class="select__placeholder" disabled selected>Make a selection</option>
    </select>
    <span class="select__help">Helpful text goes here</span>
    <span class="select__error"></span>
  </div>
  <!-- this text input class does not have an error -->
  <div class="text">
    <label class="text__label" for="example_textinput">Label</label>
    <input class="text__input" type="text" name="example_textinput">
    <span class="text__help">Helpful text goes here</span>
    <span class="text__error"></span>
  </div>
</form>

<script>
  $('.example-form').submit(function(e) {
    e.preventDefault();

    // call UCLA script function to clear previous errors
    // "this" or form DOM object must be passed as a parameter
    clearErrors(this);

    // call UCLA function to trigger error to input name and append error messages
    triggerError('solo_selection', 'This solo selection has an error');
    triggerError('example_textinput', 'This text input has an error');
    })
</script>
```

### Example of HTML After Errors are Triggered

```
<form class="example-form">
<!-- this select has an error -->
  <div class="select hasError">
    <label class="select__label" for="solo_selection">Label</label>
    <select class="select__menu" name="solo_selection">
      <option class="select__placeholder" disabled selected>Make a selection</option>
    </select>
    <span class="select__help">Helpful text goes here</span>
    <!-- The error message has been updated -->
    <span class="select__error">This solo selection has an error</span>
  </div>
  <!-- this text input class has an error -->
  <div class="text hasError">
    <label class="text__label" for="example_textinput">Label</label>
    <input class="text__input" type="text" name="example_textinput">
    <span class="text__help">Helpful text goes here</span>
    <!-- The error message has been updated -->
    <span class="text__error">This text input has an error</span>
  </div>
</form>
```
