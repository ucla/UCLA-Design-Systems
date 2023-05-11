<div class="ucla-doc-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-doc-tabslist" role="tablist" aria-label="content-tabs">
    <button id="event-card-design" onclick="openTab(event)" class="ucla-doc-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-event-card-design">
      Design Specifications
    </button>
    <button id="event-card-development" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-event-card-development">
      Developer Documentation
    </button>
    <button id="event-card-etc" onclick="openTab(event)" class="ucla-doc-tablink" role="tab" aria-selected="false" aria-controls="tab-event-card-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-doc-tabpanels">
<article id="tab-event-card-design" tabindex="0" role="tabpanel" aria-labelledby="event-card-design" class="ucla-doc-tabpanel ucla-prose">

Event cards are individual units with the following elements- day/date- event title-  event start time - end time- location- short description

#### When to use

For event listings, event cards can create a row. Example shown has 4 across with horizontal arrows that can show additional cards. Title can be Display Header as shown or a different heading type.

#### Anatomy

![Event Card Anatomy](/theme-assets/img/docs/components/cards/event-card-anatomy.svg)

**1. Image Link**

**2. Date (required)**

**3. Time (required)**

**4. Location (required)**

**5. Text**

**6. Title (required)**

**7. Container (required)**

#### Best practices

Image can be a placeholder or event category if photos are not evailable. A variant can have no images if there are never/rarely images available. Tags or categories can be added below description but must have a destination page if linked.

</article>
    <article id="tab-event-card-development" tabindex="0" role="tabpanel" aria-labelledby="event-card-development" class="ucla-doc-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-event-card-etc" tabindex="0" role="tabpanel" aria-labelledby="event-card-etc" class="ucla-doc-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>