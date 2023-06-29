<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="featured-story-card-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-featured-story-card-design">
      Design Specifications
    </button>
    <button id="featured-story-card-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-featured-story-card-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-featured-story-card-design" tabindex="0" role="tabpanel" aria-labelledby="featured-story-card-design" class="ucla-doc-tabpanel ucla-prose">

{{> @featured-story-card-design}}

</article>
<article id="tab-featured-story-card-development" tabindex="0" role="tabpanel" aria-labelledby="featured-story-card-development" class="ucla-doc-tabpanel" hidden>
  
{{> @featured-story-card-development}}

</article>
  </section>
</div>