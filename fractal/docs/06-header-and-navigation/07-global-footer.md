<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="global-footer-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-global-footer-design">
      Design Specifications
    </button>
    <button id="global-footer-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-global-footer-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-global-footer-design" tabindex="0" role="tabpanel" aria-labelledby="global-footer-design" class="ucla-doc-tabpanel ucla-prose">

{{> @global-footer-design}}

</article>
<article id="tab-global-footer-development" tabindex="0" role="tabpanel" aria-labelledby="global-footer-development" class="ucla-doc-tabpanel ucla-prose" hidden>
      
{{> @global-footer-development}}

</article>
  </section>
</div>