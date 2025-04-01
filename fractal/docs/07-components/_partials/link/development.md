---
handle: link-development
---
A link connects pages in a website. They are navigational elements that direct visitors to other locations or another website.

**Example**

[Standalone Link](#)

Link [within](#) a body copy block

```html
<a href="#">Standalone Link</a>

<p>Link <a href="#">within</a>> a body copy block</p>
```

#### With Icon

To add an icon after a link, add the `.ucla-link__has-icon.ucla-link__has-icon--{icon}` to the `<a>` tag.

Refer to our [Icon page]( {{path '/docs/style-guide/iconography'}} ) for the icon name/modifier

<a href="#" class="ucla-link__has-icon ucla-link__has-icon--link-external">Link with Icon</a>

<h3><a href="#" class="ucla-link__has-icon ucla-link__has-icon--link-external">Heading link with icon</a></h3>

```html
<a href="#" class="ucla-link__has-icon ucla-link__has-icon--link-external">Link with Icon</a>

<h3><a href="#" class="ucla-link__has-icon ucla-link__has-icon--link-external">Heading link with icon</a></h3>
```

#### Best Practices

**Use `rel="noreferrer"` property on external links**

This will prevent browsers from leaking data and information about the original site.

**Encode email and phone links**

Some browsers do not display a link for email/phone numbers. Use the `mailto:` and `tel:` for email and phone numbers. Make sure to include the country code in phone numbers.

```html
<a href="mailto:department@university.edu">department@university.edu</a>
```

```html
<a href="tel:18004441234">1-800-444-1234</a>
```