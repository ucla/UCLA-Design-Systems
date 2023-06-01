<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="event-card-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-event-card-design">
      Design Specifications
    </button>
    <button id="event-card-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-event-card-development">
      Developer Documentation
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-event-card-design" tabindex="0" role="tabpanel" aria-labelledby="event-card-design" class="ucla-doc-tabpanel ucla-prose">

{{> @event-card-design }}

</article>
<article id="tab-event-card-development" tabindex="0" role="tabpanel" aria-labelledby="event-card-development" class="ucla-doc-tabpanel" hidden>
      
{{> @event-card-development}}

</article>
  </section>
</div>