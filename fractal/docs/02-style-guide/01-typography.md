<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="typography-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-typography-design">
      Design Specifications
    </button>
    <button id="typography-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-typography-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-typography-design" tabindex="0" role="tabpanel" aria-labelledby="typography-design" class="ucla-doc-tabpanel ucla-prose">

{{> @typography-design}}

</article>
<article id="tab-typography-development" tabindex="0" role="tabpanel" aria-labelledby="typography-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @typography-development}}

</article>
  </section>
</div>