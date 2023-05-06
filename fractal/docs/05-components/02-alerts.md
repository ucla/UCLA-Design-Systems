<div class="ucla-c-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-c-tabslist" role="tablist" aria-label="content-tabs">
    <button id="alert-design" onclick="openTab(event)" class="ucla-c-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-alert-design">
      Design Specifications
    </button>
    <button id="alert-development" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-alert-development">
      Developer Documentation
    </button>
    <button id="alert-etc" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-alert-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-c-tabpanels">
<article id="tab-alert-design" tabindex="0" role="tabpanel" aria-labelledby="alert-design" class="ucla-c-tabpanel ucla-prose">

{{> @alerts-design}}

</article>
    <article id="tab-alert-development" tabindex="0" role="tabpanel" aria-labelledby="alert-development" class="ucla-c-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-alert-etc" tabindex="0" role="tabpanel" aria-labelledby="alert-etc" class="ucla-c-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>