---
handle: global-footer-development
---
The global footer consist of the following parts: main container, inner container, copyright, emergency links, and social media links.

#### Container

The container for the global footer has two parts. A main container that provides the color and the inner container that sets the width of the contents.

```html
  <div class="ucla-global-footer">
    <div class="ucla-global-footer__container"></div>
  </div>
```

#### Copyright

The copyright text is a `<p>` text with a link to http://www.universityofcalifornia.edu.

```html
<!-- ... -->
<p class="ucla-global-footer__copyright">&copy; 2022 Regents of the <a class="copy__link-a dark" href="http://www.universityofcalifornia.edu/">University of California</a></p>
<!-- ... -->
```

#### Emergency Link

The emergency links is a simple inline navigation list. To build it, simply follow this structure:

- `.ucla-global-footer__list` - `<ul>`
  - `.ucla-global-footer__list-item` - `<li>`
    - `.ucla-global-footer__link` - `<a>`

```html
<!-- ... -->
<ul class="ucla-global-footer__list">
    <li class="ucla-global-footer__list-item"><a class="ucla-global-footer__link" href="https://www.bso.ucla.edu/">Emergency</a></li>
    <li class="ucla-global-footer__list-item"><a class="ucla-global-footer__link" href="/accessibility">Accessibility</a></li>
    <li class="ucla-global-footer__list-item"><a class="ucla-global-footer__link" href="https://ucla-gme-advocate.symplicity.com/public_report/index.php/pid855869">Report Misconduct</a></li>
    <li class="ucla-global-footer__list-item"><a class="ucla-global-footer__link" href="/terms-of-use/">Privacy &amp; Terms of Use</a></li>
</ul>
<!-- ... -->
```

#### Social Media Links

These social media links are the campus-wide accounts.

_For department social media links, please refer to the Department Footer_

This is built with the following structure:

- `.ucla-social`- `<ul>`
  - `.ucla-social__item` - `<li>`
    - `.ucla-social__link` - `<a>`
      - `.visuallyhidden` - Accessibility Text
      - `<svg>` - Logo icon for corresponding social media

```html
<!-- ... -->
<ul class="ucla-social">
  <li class="ucla-social__item">
      <a href="#" class="ucla-social__link">
          <span class="visuallyhidden">Social Media</span>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- ... -->
          </svg>
      </a>
  </li>
  <!-- ... -->
</ul>
<!-- ... -->
```

Put it all together and you should have something like this:


[Preview Example](/components/preview/footer--global)