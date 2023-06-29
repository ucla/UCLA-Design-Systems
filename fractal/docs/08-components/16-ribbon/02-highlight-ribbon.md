<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="ribbon-highlight-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-ribbon-highlight-design">
      Design Specifications
    </button>
    <button id="ribbon-highlight-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-ribbon-highlight-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-ribbon-highlight-design" tabindex="0" role="tabpanel" aria-labelledby="ribbon-highlight-design" class="ucla-doc-tabpanel ucla-prose">

{{> @ribbon-highlight-design}}

</article>
<article id="tab-ribbon-highlight-development" tabindex="0" role="tabpanel" aria-labelledby="ribbon-highlight-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @ribbon-highlight-development}}

</article>
  </section>
</div>