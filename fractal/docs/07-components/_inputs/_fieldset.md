<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="form-fieldset-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-form-fieldset-design">
      Design Specifications
    </button>
    <button id="form-fieldset-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-form-fieldset-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-form-fieldset-design" tabindex="0" role="tabpanel" aria-labelledby="form-fieldset-design" class="ucla-doc-tabpanel ucla-prose">

{{> @fieldset-design}}

</article>
<article id="tab-form-fieldset-development" tabindex="0" role="tabpanel" aria-labelledby="form-fieldset-development" class="ucla-doc-tabpanel ucla-prose" hidden>

{{> @fieldset-development}}

</article>
  </section>
</div>