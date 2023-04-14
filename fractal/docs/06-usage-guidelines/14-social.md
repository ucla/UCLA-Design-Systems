---
title: Social
---
{{render '@support'}}

Display links to official social channels or embed related content.

## Usage

### Usability Guidance

Follow these best practices in social media content and marketing:

* Only create unique channels if you have a strategy in place to regularly communicate and engage with customers.
* Don't treat social channels like free advertising channels.
* Use social content to provide value to people.

If you don't have enough resources or content to maintain social channels, that's okay. Consider submitting your important content to official UCLA channels instead of investing resources in maintaining your own.

### Accessibility Requirements

* Wrap social media icons in the `<nav>` element with `aria-label="Social"` or `aria-label="@UCLA Social"` to identify links to your channels.

## Social Post Tiles

If you embed content from social channels on your website, we recommend displaying it with branded text- or image-based social tiles. Curate posts to match a specific theme, such as campus life, research discoveries, etc., versus a hodgepodge of everything. Regularly update featured posts to ensure content stays current.

### Code

```
{{ render '@social' }}
```
