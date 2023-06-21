---
status: has_js
---
<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="tab-doc-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-tab-doc-design">
      Design Specifications
    </button>
    <button id="tab-doc-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-tab-doc-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-tab-doc-design" tabindex="0" role="tabpanel" aria-labelledby="tab-doc-design" class="ucla-doc-tabpanel ucla-prose">

{{> @tab-doc-design}}

</article>
<article id="tab-tab-doc-development" tabindex="0" role="tabpanel" aria-labelledby="tab-doc-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @tab-doc-development}}

</article>
  </section>
</div>