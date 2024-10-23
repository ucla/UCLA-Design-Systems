<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="box-logo-header-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-box-logo-header-design">
      Design Specifications
    </button>
    <button id="box-logo-header-development" onclick="openTab(event);Bruin.init();" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-box-logo-header-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-box-logo-header-design" tabindex="0" role="tabpanel" aria-labelledby="box-logo-header-design" class="ucla-doc-tabpanel ucla-prose">

{{> @box-logo-header-design}}

</article>
<article id="tab-box-logo-header-development" tabindex="0" role="tabpanel" aria-labelledby="box-logo-header-development" class="ucla-doc-tabpanel ucla-prose" hidden>
  
{{> @box-logo-header-development}}

</article>
  </section>
</div>