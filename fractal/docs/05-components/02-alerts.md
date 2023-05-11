<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button onclick="openTab(event)" id="alert-design" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="alert-design-tab">
      Design Specifications
    </button>
    <button onclick="openTab(event)" id="alert-development" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="alert-development-tab">
      Developer Documentation
    </button>
    <button onclick="openTab(event)" id="alert-etc" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="alert-etc-tab">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="alert-design-tab" tabindex="0" role="tabpanel" aria-labelledby="alert-design" class="ucla-doc-tabpanel ucla-prose">

{{> @alerts-design}}

</article>
    <article id="alert-development-tab" tabindex="0" role="tabpanel" aria-labelledby="alert-development" class="ucla-doc-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="alert-etc-tab" tabindex="0" role="tabpanel" aria-labelledby="alert-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>