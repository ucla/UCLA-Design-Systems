<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button onclick="openTab(event)" id="progress-bar-design" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-progress-bar-design">
      Design Specifications
    </button>
    <button onclick="openTab(event)" id="progress-bar-development" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-progress-bar-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-progress-bar-design" tabindex="0" role="tabpanel" aria-labelledby="progress-bar-design" class="ucla-doc-tabpanel ucla-prose">

{{> @progress-bar-design}}

</article>
<article id="tab-progress-bar-development" tabindex="0" role="tabpanel" aria-labelledby="progress-bar-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @progress-bar-development}}

</article>
  </section>
</div>