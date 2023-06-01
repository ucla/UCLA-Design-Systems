<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="tertiary-button-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-tertiary-button-design">
      Design Specifications
    </button>
    <button id="tertiary-button-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-tertiary-button-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-tertiary-button-design" tabindex="0" role="tabpanel" aria-labelledby="tertiary-button-design" class="ucla-doc-tabpanel ucla-prose">

{{> @primary-button-design}}

</article>
<article id="tab-tertiary-button-development" tabindex="0" role="tabpanel" aria-labelledby="tertiary-button-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @tertiary-button-development}}

</article>
  </section>
</div>