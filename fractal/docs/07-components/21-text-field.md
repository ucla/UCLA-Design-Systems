<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="form-text-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-form-text-design">
      Design Specifications
    </button>
    <button id="form-text-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-form-text-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-form-text-design" tabindex="0" role="tabpanel" aria-labelledby="form-text-design" class="ucla-doc-tabpanel ucla-prose">

{{> @textfield-design}}

</article>
<article id="tab-form-text-development" tabindex="0" role="tabpanel" aria-labelledby="form-text-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @textfield-development}}

</article>
  </section>
</div>