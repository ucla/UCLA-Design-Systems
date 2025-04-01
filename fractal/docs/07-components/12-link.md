<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="link-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-link-design">
      Design Specifications
    </button>
    <button id="link-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-link-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-link-design" tabindex="0" role="tabpanel" aria-labelledby="link-design" class="ucla-doc-tabpanel ucla-prose">

{{> @link-design}}

</article>
<article id="tab-link-development" tabindex="0" role="tabpanel" aria-labelledby="link-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @link-development}}

</article>
  </section>
</div>