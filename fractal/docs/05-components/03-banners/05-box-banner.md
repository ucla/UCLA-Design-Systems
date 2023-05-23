<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="box-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-box-banner-design">
      Design Specifications
    </button>
    <button id="box-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-box-banner-development">
      Developer Documentation
    </button>
    <button id="box-banner-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-box-banner-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-box-banner-design" tabindex="0" role="tabpanel" aria-labelledby="box-banner-design" class="ucla-doc-tabpanel ucla-prose">

{{> @box-banner-design}}

</article>
<article id="tab-box-banner-development" tabindex="0" role="tabpanel" aria-labelledby="box-banner-development" style="overflow-x:hidden" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @box-banner-development}}

</article>
<article id="tab-box-banner-etc" tabindex="0" role="tabpanel" aria-labelledby="box-banner-etc" class="ucla-doc-tabpanel" hidden>
  <p>Panel 3: Adjunct</p>
  <p>Include content about your department's adjunct faculty here.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
  <p>
      <a href="#">Example of inline link</a>.
  </p>
</article>
  </section>
</div>