<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="form-textbox-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-form-textbox-design">
      Design Specifications
    </button>
    <button id="form-textbox-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-form-textbox-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-form-textbox-design" tabindex="0" role="tabpanel" aria-labelledby="form-textbox-design" class="ucla-doc-tabpanel ucla-prose">

{{> @select-menu-field-design}}

</article>
<article id="tab-form-textbox-development" tabindex="0" role="tabpanel" aria-labelledby="form-textbox-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @select-menu-field-development}}  

</article>
  </section>
</div>