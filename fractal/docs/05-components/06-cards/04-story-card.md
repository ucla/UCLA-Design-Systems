<div class="ucla-c-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-c-tabslist" role="tablist" aria-label="content-tabs">
    <button id="story-card-design" onclick="openTab(event)" class="ucla-c-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-story-card-design">
      Design Specifications
    </button>
    <button id="story-card-development" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-story-card-development">
      Developer Documentation
    </button>
    <button id="story-card-etc" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-story-card-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-c-tabpanels">
<article id="tab-story-card-design" tabindex="0" role="tabpanel" aria-labelledby="story-card-design" class="ucla-c-tabpanel ucla-prose">

These cards support story previews with images. You can remove text elements such as the date, byline, or description. The headline and image are required.

#### When to use

For browsing articles, news, blog posts, or other editorial content.

#### Anatomy

![Basic Card Anatomy](/theme-assets/img/docs/components/cards/story-card-anatomy.svg)

**1. Image (required)**

**2. Title Link (required)**

**3. Byline (required)**

**4. Supporting Text**

**5. Text Container (required)**

**6. Image Link (required)**

</article>
    <article id="tab-story-card-development" tabindex="0" role="tabpanel" aria-labelledby="story-card-development" class="ucla-c-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-story-card-etc" tabindex="0" role="tabpanel" aria-labelledby="story-card-etc" class="ucla-c-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>