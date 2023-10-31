<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="form-checkbox-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-form-checkbox-design">
      Design Specifications
    </button>
    <button id="form-checkbox-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-form-checkbox-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-form-checkbox-design" tabindex="0" role="tabpanel" aria-labelledby="form-checkbox-design" class="ucla-doc-tabpanel ucla-prose">

{{> @checkbox-design}}

</article>
<article id="tab-form-checkbox-development" tabindex="0" role="tabpanel" aria-labelledby="form-checkbox-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @checkbox-development}}

</article>
  </section>
</div>