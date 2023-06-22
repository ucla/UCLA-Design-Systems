<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button onclick="openTab(event)" id="alert-design" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-alert-design">
      Design Specifications
    </button>
    <button onclick="openTab(event)" id="alert-development" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-alert-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-alert-design" tabindex="0" role="tabpanel" aria-labelledby="alert-design" class="ucla-doc-tabpanel ucla-prose">

{{> @alerts-design}}

</article>
<article id="tab-alert-development" tabindex="0" role="tabpanel" aria-labelledby="alert-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @alerts-development}}

</article>
  </section>
</div>