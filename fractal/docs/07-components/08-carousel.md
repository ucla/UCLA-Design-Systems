---
status: has_js
---
<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button onclick="openTab(event)" id="carousel-design" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-carousel-design">
      Design Specifications
    </button>
    <button onclick="openTab(event)" id="carousel-development" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-carousel-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-carousel-design" tabindex="0" role="tabpanel" aria-labelledby="carousel-design" class="ucla-doc-tabpanel ucla-prose">

{{> @carousel-design}}

</article>
<article id="tab-carousel-development" tabindex="0" role="tabpanel" aria-labelledby="carousel-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @carousel-development}}

</article>
  </section>
</div>