<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="story-card-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-story-card-design">
      Design Specifications
    </button>
    <button id="story-card-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-story-card-development">
      Developer Documentation
    </button>
    <button id="story-card-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-story-card-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-story-card-design" tabindex="0" role="tabpanel" aria-labelledby="story-card-design" class="ucla-doc-tabpanel ucla-prose">

{{> @story-card-design}}

</article>
<article id="tab-story-card-development" tabindex="0" role="tabpanel" aria-labelledby="story-card-development" class="ucla-doc-tabpanel" hidden>
  
{{> @story-card-development}}

</article>
    <article id="tab-story-card-etc" tabindex="0" role="tabpanel" aria-labelledby="story-card-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>