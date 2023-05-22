<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="search-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-search-design">
      Design Specifications
    </button>
    <button id="search-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-search-development">
      Developer Documentation
    </button>
    <button id="search-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-search-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-search-design" tabindex="0" role="tabpanel" aria-labelledby="search-design" class="ucla-doc-tabpanel ucla-prose">

{{> @search-design}}

</article>
<article id="tab-search-development" tabindex="0" role="tabpanel" aria-labelledby="search-development" class="ucla-doc-tabpanel ucla-prose" hidden>
      
{{> @search-development}}

</article>
    <article id="tab-search-etc" tabindex="0" role="tabpanel" aria-labelledby="search-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>