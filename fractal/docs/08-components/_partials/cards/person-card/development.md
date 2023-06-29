---
handle: person-card-development
---
The Event Card component has several elements nested in this format:

- `.ucla-card__person` - The main card container
  - `.ucla-card__image--link` - Image link to the person's detail page
    - `.ucla-card__image` - An image or avatar of the person
  - `.ucla-card__body` - A content container that holds the person's information
    - `.ucla-card__title` - Left-aligned bolded text
        - `.ucla-card__name-link` - Title link to the person's detail page
    - `.ucla-card__person-pronouns` - Text for person's selected pronouns
    - `.ucla-card__person-department` - Bolded text of the department the person is in
    - `.ucla-card__description` - Short summary of the person
    - `.ucla-card__person-contact` - Description list of person's contact information
    - `.ucla-card__person-credit` - Photo credit of person's image/photo

<div style="max-width: 376px" class="mx-auto">
    <article class="ucla-card ucla-card__person">
        <img class="ucla-card__image" src="/theme-assets/img/examples/person-card-gene.jpg" alt="Headshot of Gene Block">
        <div class="ucla-card__body">
            <h1 class="ucla-card__title">Gene Block</h1>
            <h2 class="ucla-card__person-pronouns">They/Them</h2>
            <h2 class="ucla-card__person-department">Title, Department</h2>
            <p class="ucla-card__description">With schools closed and remote learning the norm, how many hours of digital
                technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…</p>
            <dl class="ucla-card__person-contact">
                <dt>Email</dt>
                <dd>myemail@ucla.edu</dd>
                <dt>Phone</dt>
                <dd>(555) 555-5555 ext. 555</dd>
                <dt>Office</dt>
                <dd>1111 Murphy Hall</dd>
                <dt>Mail</dt>
                <dd>410 Charles E.Young Drive<br />Los Angeles, CA 90024</dd>
            </dl>
            <em class="ucla-card__person-credit">Photo Credit: lorem ipsum dolore</em>
        </div>
    </article>
</div>

```html
<article class="ucla-card ucla-card__person">
    <img class="ucla-card__image" src="/theme-assets/img/examples/person-card-gene.jpg" alt="Headshot of Gene Block">
    <div class="ucla-card__body">
        <h1 class="ucla-card__title">Gene Block</h1>
        <h2 class="ucla-card__person-pronouns">They/Them</h2>
        <h2 class="ucla-card__person-department">Title, Department</h2>
        <p class="ucla-card__description">With schools closed and remote learning the norm, how many hours of digital
            technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…</p>
        <dl class="ucla-card__person-contact">
            <dt>Email</dt>
            <dd>myemail@ucla.edu</dd>
            <dt>Phone</dt>
            <dd>(555) 555-5555 ext. 555</dd>
            <dt>Office</dt>
            <dd>1111 Murphy Hall</dd>
            <dt>Mail</dt>
            <dd>410 Charles E.Young Drive<br />Los Angeles, CA 90024</dd>
        </dl>
        <em class="ucla-card__person-credit">Photo Credit: lorem ipsum dolore</em>
    </div>
</article>
```