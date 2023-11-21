<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="side-navigation-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-side-navigation-design">
      Design Specifications
    </button>
    <button id="side-navigation-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-side-navigation-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-side-navigation-design" tabindex="0" role="tabpanel" aria-labelledby="side-navigation-design" class="ucla-doc-tabpanel ucla-prose">

{{> @side-navigation-design}}

</article>
<article id="tab-side-navigation-development" tabindex="0" role="tabpanel" aria-labelledby="side-navigation-development" class="ucla-doc-tabpanel ucla-prose" hidden>
      
{{> @side-navigation-development}}

</article>
  </section>
</div>