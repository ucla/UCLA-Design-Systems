<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="pagination-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-pagination-design">
      Design Specifications
    </button>
    <button id="pagination-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-pagination-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-pagination-design" tabindex="0" role="tabpanel" aria-labelledby="pagination-design" class="ucla-doc-tabpanel ucla-prose">

{{> @pagination-design}}

</article>
<article id="tab-pagination-development" tabindex="0" role="tabpanel" aria-labelledby="pagination-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @pagination-development}}

</article>
  </section>
</div>