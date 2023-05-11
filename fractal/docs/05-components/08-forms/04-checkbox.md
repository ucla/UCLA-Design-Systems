<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="form-checkbox-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-form-checkbox-design">
      Design Specifications
    </button>
    <button id="form-checkbox-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-form-checkbox-development">
      Developer Documentation
    </button>
    <button id="form-checkbox-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-form-checkbox-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-form-checkbox-design" tabindex="0" role="tabpanel" aria-labelledby="form-checkbox-design" class="ucla-doc-tabpanel ucla-prose">

{{> @checkbox-design}}

</article>
    <article id="tab-form-checkbox-development" tabindex="0" role="tabpanel" aria-labelledby="form-checkbox-development" class="ucla-doc-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-form-checkbox-etc" tabindex="0" role="tabpanel" aria-labelledby="form-checkbox-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>