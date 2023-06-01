<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="dept-footer-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-dept-footer-design">
      Design Specifications
    </button>
    <button id="dept-footer-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-dept-footer-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-dept-footer-design" tabindex="0" role="tabpanel" aria-labelledby="dept-footer-design" class="ucla-doc-tabpanel ucla-prose">

{{> @dept-footer-design}}

</article>
<article id="tab-dept-footer-development" tabindex="0" role="tabpanel" aria-labelledby="dept-footer-development" class="ucla-doc-tabpanel ucla-prose" hidden>
      
{{> @dept-footer-development}}

</article>
</div>