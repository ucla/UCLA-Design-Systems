<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="box-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-box-banner-design">
      Design Specifications
    </button>
    <button id="box-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-box-banner-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-box-banner-design" tabindex="0" role="tabpanel" aria-labelledby="box-banner-design" class="ucla-doc-tabpanel ucla-prose">

{{> @box-banner-design}}

</article>
<article id="tab-box-banner-development" tabindex="0" role="tabpanel" aria-labelledby="box-banner-development" style="overflow-x:hidden" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @box-banner-development}}

</article>
  </section>
</div>