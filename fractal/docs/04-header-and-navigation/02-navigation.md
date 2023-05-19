<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="navigation-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-navigation-design">
      Design Specifications
    </button>
    <button id="navigation-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-navigation-development">
      Developer Documentation
    </button>
    <button id="navigation-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-navigation-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-navigation-design" tabindex="0" role="tabpanel" aria-labelledby="navigation-design" class="ucla-doc-tabpanel ucla-prose">

{{> @navigation-design}}

</article>
<article id="tab-navigation-development" tabindex="0" role="tabpanel" aria-labelledby="navigation-development" class="ucla-doc-tabpanel ucla-prose" hidden>
      
{{> @navigation-development}}

</article>
    <article id="tab-navigation-etc" tabindex="0" role="tabpanel" aria-labelledby="navigation-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>