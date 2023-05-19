<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="text-header-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-text-header-design">
      Design Specifications
    </button>
    <button id="text-header-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-text-header-development">
      Developer Documentation
    </button>
    <button id="text-header-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-text-header-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-text-header-design" tabindex="0" role="tabpanel" aria-labelledby="text-header-design" class="ucla-doc-tabpanel ucla-prose">

{{> @text-header-design}}

</article>
<article id="tab-text-header-development" tabindex="0" role="tabpanel" aria-labelledby="text-header-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @text-header-development}}

</article>
<article id="tab-text-header-etc" tabindex="0" role="tabpanel" aria-labelledby="text-header-etc" class="ucla-doc-tabpanel" hidden>
  <p>Panel 3: Adjunct</p>
  <p>Include content about your department's adjunct faculty here.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
  <p>
      <a href="#">Example of inline link</a>.
  </p>
</article>
  </section>
</div>