---
title: Footer and Email Signup
label: 'Footer and Email Signup'
---
{{render '@support'}}

Display your signature, contact information, and links to practical information. Treat the footer as your toolbox. You don't need to include lots of links, but the ones you do include should be utilitarian and helpful.

## Usage

### Usability Guidance

* Display your department's physical address and main contact information.
* Include links to essential services and information about your department.
* If displaying more than 5-6 links, divide them into columns with clearly categorized headings.

### Code Guidance

* Be sure to include the "tabindex='1'" global attribute and value to the global footer's social media links. This will ensure the social media links are focused in the correct order when being tabbed through.

### Accessibility Requirements

* Include a link to accessibility resources, either in your footer or the global footer for UCLA.
* Use the `<footer>` element to clearly differentiate the container from your main content.
* Use the `<address>` element for your contact information and `<nav>` for any footer menus.

## Department Footer

### Code

```
{{view '@footer-and-email-signup--global'}}
```

## Email Signup

### Code

```
{{view '@footer-and-email-signup--email'}}
```
