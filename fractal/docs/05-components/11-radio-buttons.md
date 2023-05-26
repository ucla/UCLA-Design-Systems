<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="form-radio-buttons-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-form-radio-buttons-design">
      Design Specifications
    </button>
    <button id="form-radio-buttons-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-form-radio-buttons-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-form-radio-buttons-design" tabindex="0" role="tabpanel" aria-labelledby="form-radio-buttons-design" class="ucla-doc-tabpanel ucla-prose">

{{> @radio-buttons-design}}

</article>
<article id="tab-form-radio-buttons-development" tabindex="0" role="tabpanel" aria-labelledby="form-radio-buttons-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @radio-buttons-development}}  

</article>
  </section>
</div>