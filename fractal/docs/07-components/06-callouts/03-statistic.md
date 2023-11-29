<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="callout-statistics-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-callout-statistics-design">
      Design Specifications
    </button>
    <button id="callout-statistics-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-callout-statistics-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-callout-statistics-design" tabindex="0" role="tabpanel" aria-labelledby="callout-statistics-design" class="ucla-doc-tabpanel ucla-prose">

{{> @callout-statistic-design}}

</article>
<article id="tab-callout-statistics-development" tabindex="0" role="tabpanel" aria-labelledby="callout-statistics-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @callout-statistic-development}}  

</article>
  </section>
</div>