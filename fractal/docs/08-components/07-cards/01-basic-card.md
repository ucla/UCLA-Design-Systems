<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="basic-card-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-basic-card-design">
      Design Specifications
    </button>
    <button id="basic-card-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-basic-card-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-basic-card-design" tabindex="0" role="tabpanel" aria-labelledby="basic-card-design" class="ucla-doc-tabpanel ucla-prose">

{{> @basic-card-design}}

</article>
<article id="tab-basic-card-development" tabindex="0" role="tabpanel" aria-labelledby="basic-card-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @basic-card-development}}

</article>
</section>
</div>