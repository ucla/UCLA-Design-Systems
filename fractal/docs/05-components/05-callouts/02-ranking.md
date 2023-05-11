<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="callout-ranking-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-callout-ranking-design">
      Design Specifications
    </button>
    <button id="callout-ranking-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-callout-ranking-development">
      Developer Documentation
    </button>
    <button id="callout-ranking-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-callout-ranking-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-callout-ranking-design" tabindex="0" role="tabpanel" aria-labelledby="callout-ranking-design" class="ucla-doc-tabpanel ucla-prose">

{{> @callout-ranking-design}}

</article>
    <article id="tab-callout-ranking-development" tabindex="0" role="tabpanel" aria-labelledby="callout-ranking-development" class="ucla-doc-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-callout-ranking-etc" tabindex="0" role="tabpanel" aria-labelledby="callout-ranking-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>