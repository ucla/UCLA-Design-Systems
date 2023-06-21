<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="icons-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-icons-design">
      Design Specifications
    </button>
    <button id="icons-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-icons-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-icons-design" tabindex="0" role="tabpanel" aria-labelledby="icons-design" class="ucla-doc-tabpanel ucla-prose">

{{> @icons-design}}

</article>
<article id="tab-icons-development" tabindex="0" role="tabpanel" aria-labelledby="icons-development" class="ucla-doc-tabpanel ucla-prose" hidden>

{{> @icons-development}}

</article>
  </section>
</div>