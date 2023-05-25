<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="grid-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-grid-design">
      Design Specifications
    </button>
    <button id="grid-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-grid-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-grid-design" tabindex="0" role="tabpanel" aria-labelledby="grid-design" class="ucla-doc-tabpanel ucla-prose">

{{> @grid-design}}

</article>
<article id="tab-grid-development" tabindex="0" role="tabpanel" aria-labelledby="grid-development" class="ucla-doc-tabpanel ucla-prose" hidden>
      
{{> @grid-developer}}

</article>
  </section>
</div>