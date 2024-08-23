<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="text-header-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-text-header-design">
      Design Specifications
    </button>
    <button id="text-header-development" onclick="openTab(event);Bruin.initAll();" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-text-header-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-text-header-design" tabindex="0" role="tabpanel" aria-labelledby="text-header-design" class="ucla-doc-tabpanel ucla-prose">

{{> @text-header-design}}

</article>
<article id="tab-text-header-development" tabindex="0" role="tabpanel" aria-labelledby="text-header-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @text-header-development}}

</article>
  </section>
</div>