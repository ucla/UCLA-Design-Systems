<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="tables-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-tables-design">
      Design Specifications
    </button>
    <button id="tables-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-tables-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-tables-design" tabindex="0" role="tabpanel" aria-labelledby="tables-design" class="ucla-doc-tabpanel ucla-prose">

{{> @tables-design}}

</article>
<article id="tab-tables-development" tabindex="0" role="tabpanel" aria-labelledby="tables-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @tables-development}}

</article>
  </section>
</div>