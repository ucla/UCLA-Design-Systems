<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="story-card-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-story-card-design">
      Design Specifications
    </button>
    <button id="story-card-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-story-card-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-story-card-design" tabindex="0" role="tabpanel" aria-labelledby="story-card-design" class="ucla-doc-tabpanel ucla-prose">

{{> @story-card-design}}

</article>
<article id="tab-story-card-development" tabindex="0" role="tabpanel" aria-labelledby="story-card-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @story-card-development}}

</article>
  </section>
</div>