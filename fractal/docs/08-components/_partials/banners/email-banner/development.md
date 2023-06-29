---
handle: email-banner-development
---
Them Email banner uses a grey background with a contained form inside the content. To build, you must use the following structure:

- `.ucla-banner__email.ucla-prose` Main container that gives the colored background and typography styles
  - `.container` - Container that sets the width of the content
    - `.ucla` - Container that houses the columns
      - `.col` - Column that spans the full width of the container
        - `.ucla-banner__email-title` - Title for the form
        - `.ucla-banner__email-form` - Start of the `<form>` element
          - `.ucla-field` - Container for the `<label>` and `<input>` field
            - `.ucla-field__label` - `<label>` for input field
            - `.ucla-field__control` - Container to wrap the form controls
              - `.ucla-field__input` - `<input>` field
          - `.ucla-field` - Container for the submit `<input>` or `<button>`
            - `<button>` or `<input>` to submit form
        - `.ucla-banner__email-text` - Secondary text for details, warnings, or errors

<div class="ucla-banner__email ucla-prose">
    <div class="container">
        <div class="ucla">
            <div class="col">
                <h4 class="ucla-banner__email-title">Sign up</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices semper fringilla. Ut viverra lacinia vestibulum. Vestibulum accumsan id massa ut volutpat.</p>
                <form class="ucla-banner__email-form">
                    <div class="ucla-field">
                        <label class="ucla-field__label" for="uclaEmailField">Email</label>
                        <div class="ucla-field__control">
                            <input class="ucla-field__input" id="uclaEmailField" type="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="ucla-field">
                        <label class="ucla-field__label" for="uclaFirstName">First Name</label>
                        <div class="ucla-field__control">
                            <input class="ucla-field__input" id="uclaFirstName" type="text" placeholder="First Name">
                        </div>
                    </div>
                    <div class="ucla-field">
                        <label class="ucla-field__label" for="uclaLastName">Last Name</label>
                        <div class="ucla-field__control">
                            <input class="ucla-field__input" id="uclaLastName" type="text" placeholder="Last Name">
                        </div>
                    </div>
                    <div class="ucla-field">
                        <label class="ucla-field__label" for="uclaZipCode">Zip Code</label>
                        <div class="ucla-field__control">
                            <input class="ucla-field__input" id="uclaZipCode" type="text" placeholder="Text input">
                        </div>
                    </div>
                    <div class="ucla-field">
                        <button class="ucla-btn ucla-btn--primary">Sign up</button>
                    </div>
                </form>
                <p class="ucla-banner__email-text">You may unsubscribe at any time. Zip code is used to improve the content we share. Refer to our Terms of Use for more information on how we store and protect your data.</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="ucla-banner__email ucla-prose">
    <div class="container">
        <div class="ucla">
            <div class="col">
                <h4 class="ucla-banner__email-title">Sign up</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices semper fringilla. Ut viverra lacinia vestibulum. Vestibulum accumsan id massa ut volutpat.</p>
                <form class="ucla-banner__email-form">
                    <div class="ucla-field">
                        <label class="ucla-field__label" for="uclaEmailField">Email</label>
                        <div class="ucla-field__control">
                            <input class="ucla-field__input" id="uclaEmailField" type="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="ucla-field">
                        <label class="ucla-field__label" for="uclaFirstName">First Name</label>
                        <div class="ucla-field__control">
                            <input class="ucla-field__input" id="uclaFirstName" type="text" placeholder="First Name">
                        </div>
                    </div>
                    <div class="ucla-field">
                        <label class="ucla-field__label" for="uclaLastName">Last Name</label>
                        <div class="ucla-field__control">
                            <input class="ucla-field__input" id="uclaLastName" type="text" placeholder="Last Name">
                        </div>
                    </div>
                    <div class="ucla-field">
                        <label class="ucla-field__label" for="uclaZipCode">Zip Code</label>
                        <div class="ucla-field__control">
                            <input class="ucla-field__input" id="uclaZipCode" type="text" placeholder="Text input">
                        </div>
                    </div>

                    <div class="ucla-field">
                        <button class="ucla-btn ucla-btn--primary">Sign up</button>
                    </div>
                </form>
                <p class="ucla-banner__email-text">You may unsubscribe at any time. Zip code is used to improve the content we share. Refer to our Terms of Use for more information on how we store and protect your data.</p>
            </div>
        </div>
    </div>
</div>
```