<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button onclick="openTab(event)" id="accordion-design" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-accordion-design">
      Design Specifications
    </button>
    <button onclick="openTab(event)" id="accordion-development" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-accordion-development">
      Developer Documentation
    </button>
    <button onclick="openTab(event)" id="accordion-etc" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-accordion-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-accordion-design" tabindex="0" role="tabpanel" aria-labelledby="accordion-design" class="ucla-doc-tabpanel ucla-prose">

{{> @accordion-design}}

</article>
<article id="tab-accordion-development" tabindex="0" role="tabpanel" aria-labelledby="accordion-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @accordion-developer}}

</article>
    <article id="tab-accordion-etc" tabindex="0" role="tabpanel" aria-labelledby="accordion-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>