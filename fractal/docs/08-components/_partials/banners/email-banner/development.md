---
handle: email-banner-development
---
Them Email banner uses a grey background with a contained form inside the content. To build, you must use the following structure:

<ul class="docs-list">
<li><code>.ucla-banner__email.ucla-prose</code> Main container that gives the colored background and typography styles<ul>
<li><code>.container</code> - Container that sets the width of the content<ul>
<li><code>.ucla</code> - Container that houses the columns<ul>
<li><code>.col</code> - Column that spans the full width of the container<ul>
<li><code>.ucla-banner__email-title</code> - Title for the form</li>
<li><code>.ucla-banner__email-form</code> - Start of the <code>&lt;form&gt;</code> element<ul>
<li><code>.ucla-field</code> - Container for the <code>&lt;label&gt;</code> and <code>&lt;input&gt;</code> field<ul>
<li><code>.ucla-field__label</code> - <code>&lt;label&gt;</code> for input field</li>
<li><code>.ucla-field__control</code> - Container to wrap the form controls<ul>
<li><code>.ucla-field__input</code> - <code>&lt;input&gt;</code> field</li>
</ul>
</li>
</ul>
</li>
<li><code>.ucla-field</code> - Container for the submit <code>&lt;input&gt;</code> or <code>&lt;button&gt;</code><ul>
<li><code>&lt;button&gt;</code> or <code>&lt;input&gt;</code> to submit form</li>
</ul>
</li>
</ul>
</li>
<li><code>.ucla-banner__email-text</code> - Secondary text for details, warnings, or errors</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>

<div class="ucla-dev-example-break-container">
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