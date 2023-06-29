<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="ribbon-brand-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-ribbon-brand-design">
      Design Specifications
    </button>
    <button id="ribbon-brand-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-ribbon-brand-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-ribbon-brand-design" tabindex="0" role="tabpanel" aria-labelledby="ribbon-brand-design" class="ucla-doc-tabpanel ucla-prose">

{{> @ribbon-brand-design}}

</article>
<article id="tab-ribbon-brand-development" tabindex="0" role="tabpanel" aria-labelledby="ribbon-brand-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @ribbon-brand-development}}

</article>
  </section>
</div>