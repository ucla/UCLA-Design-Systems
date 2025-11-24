---
status: has_js
---
<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button onclick="openTab(event)" id="toc-design" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-toc-design">
      Design Specifications
    </button>
    <button onclick="openTab(event)" id="toc-development" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-toc-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-toc-design" tabindex="0" role="tabpanel" aria-labelledby="toc-design" class="ucla-doc-tabpanel ucla-prose">

{{> @toc-design}}

</article>
<article id="tab-toc-development" tabindex="0" role="tabpanel" aria-labelledby="toc-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @toc-developer}}

</article>
  </section>
</div>