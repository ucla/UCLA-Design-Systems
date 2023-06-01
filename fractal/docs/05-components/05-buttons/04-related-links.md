<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="related-links-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-related-links-design">
      Design Specifications
    </button>
    <button id="related-links-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-related-links-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-related-links-design" tabindex="0" role="tabpanel" aria-labelledby="related-links-design" class="ucla-doc-tabpanel ucla-prose">

{{> @related-links-design}}

</article>
<article id="tab-related-links-development" tabindex="0" role="tabpanel" aria-labelledby="related-links-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @related-links-development}}

</article>
  </section>
</div>