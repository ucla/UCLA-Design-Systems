<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="search-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-search-design">
      Design Specifications
    </button>
    <button id="search-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-search-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-search-design" tabindex="0" role="tabpanel" aria-labelledby="search-design" class="ucla-doc-tabpanel ucla-prose">

{{> @search-design}}

</article>
<article id="tab-search-development" tabindex="0" role="tabpanel" aria-labelledby="search-development" class="ucla-doc-tabpanel ucla-prose" hidden>
      
{{> @search-development}}

</article>
  </section>
</div>