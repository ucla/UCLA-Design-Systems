<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="colors-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-colors-design">
      Design Specifications
    </button>
    <button id="colors-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-colors-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-colors-design" tabindex="0" role="tabpanel" aria-labelledby="colors-design" class="ucla-doc-tabpanel ucla-prose">

{{> @colors-design}}

</article>
<article id="tab-colors-development" tabindex="0" role="tabpanel" aria-labelledby="colors-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @colors-development}}  

</article>
  </section>
</div>