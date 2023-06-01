<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="images-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-images-design">
      Design Specifications
    </button>
    <button id="images-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-images-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-images-design" tabindex="0" role="tabpanel" aria-labelledby="images-design" class="ucla-doc-tabpanel ucla-prose">

{{> @images-design}}

</article>
<article id="tab-images-development" tabindex="0" role="tabpanel" aria-labelledby="images-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @images-development}}

</article>
  </section>
</div>