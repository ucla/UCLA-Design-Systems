<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="email-banner-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-email-banner-design">
      Design Specifications
    </button>
    <button id="email-banner-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-email-banner-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-email-banner-design" tabindex="0" role="tabpanel" aria-labelledby="email-banner-design" class="ucla-doc-tabpanel ucla-prose">

{{> @email-banner-design}}

</article>
<article id="tab-email-banner-development" tabindex="0" role="tabpanel" aria-labelledby="email-banner-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @email-banner-development }}

</article>
  </section>
</div>