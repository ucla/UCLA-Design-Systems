<div class="ucla-c-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-c-tabslist" role="tablist" aria-label="content-tabs">
    <button id="info-card-design" onclick="openTab(event)" class="ucla-c-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-info-card-design">
      Design Specifications
    </button>
    <button id="info-card-development" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-info-card-development">
      Developer Documentation
    </button>
    <button id="info-card-etc" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-info-card-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-c-tabpanels">
<article id="tab-info-card-design" tabindex="0" role="tabpanel" aria-labelledby="info-card-design" class="ucla-c-tabpanel ucla-prose">

This card provides a brief snipped of information. Heading and either a summary or a list of related links is required.

#### When to use

**Collections of related content.** Cards help present a collection of related groups of content, like articles or sections of a website.

#### Anatomy

![Basic Card Anatomy](/theme-assets/img/docs/components/cards/info-card-anatomy.svg)

**1. Title (required)**

**2. Supporting Text**

**3. Text Link**

**4. Border (required)**

**5. Container (required)**

</article>
    <article id="tab-info-card-development" tabindex="0" role="tabpanel" aria-labelledby="info-card-development" class="ucla-c-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-info-card-etc" tabindex="0" role="tabpanel" aria-labelledby="info-card-etc" class="ucla-c-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>