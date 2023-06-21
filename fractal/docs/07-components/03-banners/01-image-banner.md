<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="img-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-img-banner-design">
      Design Specifications
    </button>
    <button id="img-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-img-banner-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-img-banner-design" tabindex="0" role="tabpanel" aria-labelledby="img-banner-design" class="ucla-doc-tabpanel ucla-prose">

{{> @image-banner-design}}

</article>
<article id="tab-img-banner-development" tabindex="0" role="tabpanel" aria-labelledby="img-banner-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @image-banner-development}}

</article>
  </section>
</div>