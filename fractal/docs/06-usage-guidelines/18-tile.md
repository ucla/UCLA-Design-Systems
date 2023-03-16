---
title: Tile
---
{{render '@support'}}

Large, descriptive link with optional ambient image.

## Usage

### Usability Guidance

* Use plain language when writing headlines and descriptions.
* Avoid technical language, acronyms or jargon people don't understand.
* Front-load the first 2 words of your headlines for [easy eye scanning](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/).
* Limit headlines to 1 phrase or 2 lines -- there is a suggested 32 maximum character limit.
* Use original images rather than stock images to maintain credibility and trust among your users.

### Accessibility Requirements

* Link the tile's headline, heading or title to provide the most succinct description to screen readers and search engines. Both technologies use links to understand and navigate document structure.
* Avoid using generic headlines like "read more" or "view details".
* Only use one link per tile.

**Further Reading**
* [Resources for developing accessible cards and tiles](https://www.webaxe.org/resources-for-developing-accessible-cards-tiles/) (Web Axe)
* [When to use null alt text](https://www.davidmacd.com/blog/what-is-pure-decoration-alt-text-in-wcag.html) (CanAdapt)

## Code

```
{{view '@tile'}}
```
