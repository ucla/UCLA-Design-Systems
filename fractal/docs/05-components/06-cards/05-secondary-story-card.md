<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="secondary-story-card-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-secondary-story-card-design">
      Design Specifications
    </button>
    <button id="secondary-story-card-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-secondary-story-card-development">
      Developer Documentation
    </button>
    <button id="secondary-story-card-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-secondary-story-card-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-secondary-story-card-design" tabindex="0" role="tabpanel" aria-labelledby="secondary-story-card-design" class="ucla-doc-tabpanel ucla-prose">

{{> @secondary-story-card-design }}

</article>
<article id="tab-secondary-story-card-development" tabindex="0" role="tabpanel" aria-labelledby="secondary-story-card-development" class="ucla-doc-tabpanel" hidden>
 
{{> @secondary-story-card-development}} 

</article>
<article id="tab-secondary-story-card-etc" tabindex="0" role="tabpanel" aria-labelledby="secondary-story-card-etc" class="ucla-doc-tabpanel" hidden>
  <p>Panel 3: Adjunct</p>
  <p>Include content about your department's adjunct faculty here.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
  <p>
      <a href="#">Example of inline link</a>.
  </p>
</article>
  </section>
</div>