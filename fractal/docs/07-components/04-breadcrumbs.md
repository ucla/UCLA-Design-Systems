<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button onclick="openTab(event)" id="breadcrumbs-design" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-breadcrumbs-design">
      Design Specifications
    </button>
    <button onclick="openTab(event)" id="breadcrumbs-development" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-breadcrumbs-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-breadcrumbs-design" tabindex="0" role="tabpanel" aria-labelledby="breadcrumbs-design" class="ucla-doc-tabpanel ucla-prose">

{{> @breadcrumbs-design}}

</article>
<article id="tab-breadcrumbs-development" tabindex="0" role="tabpanel" aria-labelledby="breadcrumbs-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @breadcrumbs-development}}

</article>
  </section>
</div>