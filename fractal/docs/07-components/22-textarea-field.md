<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="form-textarea-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-form-textarea-design">
      Design Specifications
    </button>
    <button id="form-textarea-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-form-textarea-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-form-textarea-design" tabindex="0" role="tabpanel" aria-labelledby="form-textarea-design" class="ucla-doc-tabpanel ucla-prose">

{{> @textareafield-design}}

</article>
<article id="tab-form-textarea-development" tabindex="0" role="tabpanel" aria-labelledby="form-textarea-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @textareafield-development}}

</article>
  </section>
</div>