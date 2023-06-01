<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="ribbon-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-ribbon-banner-design">
      Design Specifications
    </button>
    <button id="ribbon-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-ribbon-banner-development">
      Developer Documentation
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
  </section>
</div>