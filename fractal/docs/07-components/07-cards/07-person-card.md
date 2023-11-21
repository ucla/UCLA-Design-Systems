<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="person-card-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-person-card-design">
      Design Specifications
    </button>
    <button id="person-card-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-person-card-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-person-card-design" tabindex="0" role="tabpanel" aria-labelledby="person-card-design" class="ucla-doc-tabpanel ucla-prose">

{{> @person-card-design}}

</article>
<article id="tab-person-card-development" tabindex="0" role="tabpanel" aria-labelledby="person-card-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @person-card-development}}

</article>
  </section>
</div>