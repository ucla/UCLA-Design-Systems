---
title: Secondary Button
---
<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="secondary-button-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-secondary-button-design">
      Design Specifications
    </button>
    <button id="secondary-button-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-secondary-button-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-secondary-button-design" tabindex="0" role="tabpanel" aria-labelledby="secondary-button-design" class="ucla-doc-tabpanel ucla-prose">

{{> @secondary-button-design}}

</article>
<article id="tab-secondary-button-development" tabindex="0" role="tabpanel" aria-labelledby="secondary-button-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @secondary-button-development}}

</article>
  </section>
</div>