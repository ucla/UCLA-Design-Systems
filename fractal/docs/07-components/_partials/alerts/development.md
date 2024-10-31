---
handle: alerts-development
---
The alert component is avaiable with an optional close button and icon.

<div class="ucla-alert ucla-alert--primary" style="margin: 1.4rem 0" role="alert">
    <svg class="ucla-alert--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xml:space="preserve" role="img" aria-label="Information:">
        <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
    </svg>
    A simple primary alert-check it out!
    <button class="ucla-alert--close" title="Close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xml:space="preserve">
            <title>Close</title>
            <path class="close--black" d="M38 12.8 35.2 10 24 21.2 12.8 10 10 12.8 21.2 24 10 35.2l2.8 2.8L24 26.8 35.2 38l2.8-2.8L26.8 24 38 12.8z" />
        </svg>
    </button>
</div>

There are 4 contextual options for alerts:

**Primary**

<div class="ucla-alert ucla-alert--primary" role="alert">
    A simple primary alert-check it out!
</div>

```html
<div class="ucla-alert ucla-alert--primary" role="alert">
    A simple primary alert-check it out!
</div>
```

**Secondary**

<div class="ucla-alert ucla-alert--secondary" role="alert">
    A simple secondary alert-check it out!
</div>

```html
<div class="ucla-alert ucla-alert--secondary" role="alert">
    A simple secondary alert-check it out!
</div>
```

**Success**

<div class="ucla-alert ucla-alert--success" role="alert">
    A simple success alert-check it out!
</div>

```html
<div class="ucla-alert ucla-alert--success" role="alert">
    A simple success alert-check it out!
</div>
```

**Warning**

<div class="ucla-alert ucla-alert--warning" role="alert">
    A simple warning alert-check it out!
</div>

```html
<div class="ucla-alert ucla-alert--warning" role="alert">
    A simple warning alert-check it out!
</div>
```

**Error**

<div class="ucla-alert ucla-alert--error" role="alert">
    A simple error alert-check it out!
</div>

```html
<div class="ucla-alert ucla-alert--error" role="alert">
    A simple error alert-check it out!
</div>
```

#### Icon

An icon can be added to the alert by simply adding the `<svg>` with the `.ucla-alert--icon` class.

<div class="ucla-alert ucla-alert--success" role="alert">
    <svg class="ucla-alert--icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" role="img" aria-label="Success:"><path fill="#333" d="m10.6 16.6 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4 4.25 4.25ZM12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.732 9.732 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Z"/></svg>
    A simple success alert-check it out!
</div>

An `<img>` may also be used instead of an `<svg>`, but the `src` must be colored beforehand.

<div class="ucla-alert ucla-alert--success" role="alert">
    <img class="ucla-alert--icon" src="{{path '/icons/alert/success.svg'}}">
    A simple success alert-check it out!
</div>

#### JavaScript

**Methods**

`dismiss()`

Dismisses the alert with the ID value of `.ucla-alert`

```js
const alert = document.querySelector('your alert')
alert.dismiss()
```

**Events**

`bruinAlertDismissed`

Emits when an alert is dismissed.

```js
document.addEventListener('bruinAlertDismissed', function(event) {
    // Your JavaScript here
})
```