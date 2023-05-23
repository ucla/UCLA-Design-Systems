<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="quote-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-quote-banner-design">
      Design Specifications
    </button>
    <button id="quote-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-quote-banner-development">
      Developer Documentation
    </button>
    <button id="quote-banner-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-quote-banner-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-quote-banner-design" tabindex="0" role="tabpanel" aria-labelledby="quote-banner-design" class="ucla-doc-tabpanel ucla-prose">

{{> @quote-banner-design}}

</article>
<article id="tab-quote-banner-development" tabindex="0" role="tabpanel" aria-labelledby="quote-banner-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @quote-banner-development}}

</article>
<article id="tab-quote-banner-etc" tabindex="0" role="tabpanel" aria-labelledby="quote-banner-etc" class="ucla-doc-tabpanel" hidden>
  <p>Panel 3: Adjunct</p>
  <p>Include content about your department's adjunct faculty here.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
  <p>
      <a href="#">Example of inline link</a>.
  </p>
</article>
  </section>
</div>