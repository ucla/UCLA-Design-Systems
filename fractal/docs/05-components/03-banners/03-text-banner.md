<div class="ucla-c-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-c-tabslist" role="tablist" aria-label="content-tabs">
    <button id="text-banner-design" onclick="openTab(event)" class="ucla-c-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-text-banner-design">
      Design Specifications
    </button>
    <button id="text-banner-development" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-text-banner-development">
      Developer Documentation
    </button>
    <button id="text-banner-etc" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-text-banner-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-c-tabpanels">
<article id="tab-text-banner-design" tabindex="0" role="tabpanel" aria-labelledby="text-banner-design" class="ucla-c-tabpanel ucla-prose">

{{> @text-banner-design}}

</article>
    <article id="tab-text-banner-development" tabindex="0" role="tabpanel" aria-labelledby="text-banner-development" class="ucla-c-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-text-banner-etc" tabindex="0" role="tabpanel" aria-labelledby="text-banner-etc" class="ucla-c-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>