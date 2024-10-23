---
status: has_js
---
<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="navigation-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-navigation-design">
      Design Specifications
    </button>
    <button id="navigation-development" onclick="openTab(event);Bruin.init();" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-navigation-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-navigation-design" tabindex="0" role="tabpanel" aria-labelledby="navigation-design" class="ucla-doc-tabpanel ucla-prose">

{{> @navigation-design}}

</article>
<article id="tab-navigation-development" tabindex="0" role="tabpanel" aria-labelledby="navigation-development" class="ucla-doc-tabpanel ucla-prose" hidden>
      
{{> @navigation-development}}

</article>
  </section>
</div>