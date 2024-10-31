---
status: has_js
---
<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="video-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-video-banner-design">
      Design Specifications
    </button>
    <button id="video-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-video-banner-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-video-banner-design" tabindex="0" role="tabpanel" aria-labelledby="video-banner-design" class="ucla-doc-tabpanel ucla-prose">

{{> @video-banner-design}}

</article>
<article id="tab-video-banner-development" tabindex="0" role="tabpanel" aria-labelledby="video-banner-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @video-banner-development }}

</article>
  </section>
</div>