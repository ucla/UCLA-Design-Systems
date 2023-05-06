<div class="ucla-c-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-c-tabslist" role="tablist" aria-label="content-tabs">
    <button id="person-card-design" onclick="openTab(event)" class="ucla-c-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-person-card-design">
      Design Specifications
    </button>
    <button id="person-card-development" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-person-card-development">
      Developer Documentation
    </button>
    <button id="person-card-etc" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-person-card-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-c-tabpanels">
<article id="tab-person-card-design" tabindex="0" role="tabpanel" aria-labelledby="person-card-design" class="ucla-c-tabpanel ucla-prose">

Profile cards are a visual way to display informational listings of people that adds importance. At minimum, they include a name and one other piece of associated information. May include image, title, department, year of accomplishment. A placeholder image can be used if a photo is missing among a group where the majority has photos. If the majority do not have photos, use a card without space for images.

#### Anatomy

![Person Card Anatomy](/theme-assets/img/docs/components/cards/person-card-anatomy.svg)

**1. Image**

**2. Name (required)**

**3. Pronouns**

**4. Title (required)**

**5. Description**

**6. Contact Information**

**7. Photo Credit**

**8. Container**

</article>
    <article id="tab-person-card-development" tabindex="0" role="tabpanel" aria-labelledby="person-card-development" class="ucla-c-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-person-card-etc" tabindex="0" role="tabpanel" aria-labelledby="person-card-etc" class="ucla-c-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>