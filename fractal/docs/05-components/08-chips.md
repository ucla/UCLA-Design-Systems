<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="chips-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-chips-design">
      Design Specifications
    </button>
    <button id="chips-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-chips-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-chips-design" tabindex="0" role="tabpanel" aria-labelledby="chips-design" class="ucla-doc-tabpanel ucla-prose">

{{> @chips-design}}

</article>
<article id="tab-chips-development" tabindex="0" role="tabpanel" aria-labelledby="chips-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @chips-development}}

</article>
  </section>
</div>