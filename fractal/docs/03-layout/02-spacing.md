<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="spacing-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-spacing-design">
      Design Specifications
    </button>
    <button id="spacing-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-spacing-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-spacing-design" tabindex="0" role="tabpanel" aria-labelledby="spacing-design" class="ucla-doc-tabpanel ucla-prose">

{{> @spacing-design}}

</article>
<article id="tab-spacing-development" tabindex="0" role="tabpanel" aria-labelledby="spacing-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @spacing-development}}  

</article>
  </section>
</div>