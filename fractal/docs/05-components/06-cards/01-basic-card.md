<div class="ucla-c-tabs">
  <!-- .tablist is the container for tabs only -->
  <nav class="ucla-c-tabslist" role="tablist" aria-label="content-tabs">
    <button id="basic-card-design" onclick="openTab(event)" class="ucla-c-tablink is-active" role="tab" aria-selected="true" aria-controls="tab-basic-card-design">
      Design Specifications
    </button>
    <button id="basic-card-development" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-basic-card-development">
      Developer Documentation
    </button>
    <button id="basic-card-etc" onclick="openTab(event)" class="ucla-c-tablink" role="tab" aria-selected="false" aria-controls="tab-basic-card-etc">
      Change Log
    </button>
  </nav>
  <!-- .tabcontent contain panels of content -->
<section class="ucla-c-tabpanels">
<article id="tab-basic-card-design" tabindex="0" role="tabpanel" aria-labelledby="basic-card-design" class="ucla-c-tabpanel ucla-prose">

A card often represents a discrete piece of content among a series of a common content type. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links and can lead to more detailed information. 

An individual card is typically a member of a collection of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form and with a visual separation or container.

Finally, a card is modular, which means you can vary the order of cards in a collection without destroying any individual card’s meaning.

#### When to use

**Collections of related content.** Cards help present a collection of related groups of content, like articles or sections of a website.

To organize related information.

To shorten pages and reduce scrolling when content is not crucial to read in full, especially on a mobile interface or in a side panel.

#### Anatomy

![Basic Card Anatomy](/theme-assets/img/docs/components/cards/basic-card-anatomy.svg)

**1. Image**

**2. Title (required)**

**3. Supporting Text (required)**

**4. Link**

**5. Container (required)**

#### Best practices

Include information that is pertinent to user's interest and helps them understand what kind of content they're looking at quickly.

Color contrast is very important for legibility. To meet current accessibility standards, use only approved color combinations. Use 80% grey for text on white background to reduce eye strain.


</article>
    <article id="tab-basic-card-development" tabindex="0" role="tabpanel" aria-labelledby="basic-card-development" class="ucla-c-tabpanel" hidden>
      <p>Panel 2: Tenured</p>
      <p>Include content about your department's tenured faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
    <article id="tab-basic-card-etc" tabindex="0" role="tabpanel" aria-labelledby="basic-card-etc" class="ucla-c-tabpanel" hidden>
      <p>Panel 3: Adjunct</p>
      <p>Include content about your department's adjunct faculty here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem neque, pulvinar ac bibendum eget, hendrerit a dolor. Nulla nec ex nulla.</p>
      <p>
          <a href="#">Example of inline link</a>.
      </p>
    </article>
  </section>
</div>