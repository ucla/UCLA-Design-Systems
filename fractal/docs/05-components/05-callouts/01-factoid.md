<div class="ucla-c-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-c-tabslist" role="tablist" aria-label="content-tabs">
    <button id="callout-factoid-design" onclick="openTab(event)" class="ucla-c-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-callout-factoid-design">
      Design Specifications
    </button>
    <button id="callout-factoid-development" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-callout-factoid-development">
      Developer Documentation
    </button>
    <button id="callout-factoid-etc" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-callout-factoid-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-c-tabpanels">
<article id="tab-callout-factoid-design" tabindex="0" role="tabpanel" aria-labelledby="callout-factoid-design" class="ucla-c-tabpanel ucla-prose">

{{> @callout-factoid-design}}

</article>
    <article id="tab-callout-factoid-development" tabindex="0" role="tabpanel" aria-labelledby="callout-factoid-development" class="ucla-c-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-callout-factoid-etc" tabindex="0" role="tabpanel" aria-labelledby="callout-factoid-etc" class="ucla-c-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>