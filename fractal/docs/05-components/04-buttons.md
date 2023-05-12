<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="buttons-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-buttons-design">
      Design Specifications
    </button>
    <button id="buttons-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-buttons-development">
      Developer Documentation
    </button>
    <button id="buttons-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-buttons-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-buttons-design" tabindex="0" role="tabpanel" aria-labelledby="buttons-design" class="ucla-doc-tabpanel ucla-prose">

Buttons draw attention to important actions, content or next steps. Button tags `<button>` are used for internal page actions. Links, or `<a>` tags, are used for linking to an external page.

#### When to use

**Important actions.** Use buttons for the most important actions you want users to take on your site, such as Download, Sign up or Log out.

**Primary buttons** are styled as solid buttons and open important content, such as calls-to-action (CTAs) or initiates functionality. Icons are used to the right or left to clarify the content or action type. Type + icon are centered.

**Secondary buttons** are styled as outline buttons and encourage content exploration.

**Tertiary buttons** are styled without a box and are similar in style and priority to inline links but stand out from copy.

#### Anatomy

![Buttons Anatomy](/theme-assets/img/docs/components/buttons/anatomy.svg)

**1. Container (required)**

**2. Text**

**3. Leading Icon**

**4. Trailing Icon**

**5. Icon**

#### Best practices

Write button labels so they make sense without reading the copy around them so they are accessible to screen readers.

Don't write button labels that are generic or not specific to the content being presented.

Avoid more than one instance of generic text like "Read More". Screen readers can't disambiguate multiple buttons with the same or similar text.

Do use the button color scheme provided. It is ADA compliant.

Link headlines in Store Cards or Event Cards rather than adding buttons with generic text.

#### States

![Button States](/theme-assets/img/docs/components/buttons/states.svg)

</article>
    <article id="tab-buttons-development" tabindex="0" role="tabpanel" aria-labelledby="buttons-development" class="ucla-doc-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-buttons-etc" tabindex="0" role="tabpanel" aria-labelledby="buttons-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>