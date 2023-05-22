<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="ribbon-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-ribbon-banner-design">
      Design Specifications
    </button>
    <button id="ribbon-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-ribbon-banner-development">
      Developer Documentation
    </button>
    <button id="ribbon-banner-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-ribbon-banner-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-ribbon-banner-design" tabindex="0" role="tabpanel" aria-labelledby="ribbon-banner-design" class="ucla-doc-tabpanel ucla-prose">

{{> @ribbon-banner-design}}

</article>
<article id="tab-ribbon-banner-development" tabindex="0" role="tabpanel" aria-labelledby="ribbon-banner-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @ribbon-banner-development}}

</article>
<article id="tab-ribbon-banner-etc" tabindex="0" role="tabpanel" aria-labelledby="ribbon-banner-etc" class="ucla-doc-tabpanel" hidden>
  <p>Panel 3: Adjunct</p>
  <p>Include content about your department's adjunct faculty here.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
  <p>
      <a href="#">Example of inline link</a>.
  </p>
</article>
  </section>
</div>