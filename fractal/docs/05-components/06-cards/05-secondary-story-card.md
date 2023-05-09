<div class="ucla-c-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-c-tabslist" role="tablist" aria-label="content-tabs">
    <button id="secondary-story-card-design" onclick="openTab(event)" class="ucla-c-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-secondary-story-card-design">
      Design Specifications
    </button>
    <button id="secondary-story-card-development" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-secondary-story-card-development">
      Developer Documentation
    </button>
    <button id="secondary-story-card-etc" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-secondary-story-card-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-c-tabpanels">
<article id="tab-secondary-story-card-design" tabindex="0" role="tabpanel" aria-labelledby="secondary-story-card-design" class="ucla-c-tabpanel ucla-prose">

These cards support lower profile stories. Images are optional. We recommend using the slider component on mobile to minimize the use of vertical screen space.

#### When to use

For browsing articles, news, blog posts, or other editorial content.

Alternative horizontal format to story card with less emphasis on photo.

#### Anatomy

![Basic Card Anatomy](/theme-assets/img/docs/components/cards/secondary-story-card-anatomy.svg)

**1. Border (required)**

**2. Image Link**

**3. Container (required)**

**4. Date**

**5. Title Link (required)**

**6. Byline**

**7. Supporting Text**

</article>
    <article id="tab-secondary-story-card-development" tabindex="0" role="tabpanel" aria-labelledby="secondary-story-card-development" class="ucla-c-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-secondary-story-card-etc" tabindex="0" role="tabpanel" aria-labelledby="secondary-story-card-etc" class="ucla-c-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>