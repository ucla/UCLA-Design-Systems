<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="text-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-text-banner-design">
      Design Specifications
    </button>
    <button id="text-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-text-banner-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-text-banner-design" tabindex="0" role="tabpanel" aria-labelledby="text-banner-design" class="ucla-doc-tabpanel ucla-prose">

{{> @text-banner-design}}

</article>
<article id="tab-text-banner-development" tabindex="0" role="tabpanel" aria-labelledby="text-banner-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @text-banner-development}}

</article>
  </section>
</div>