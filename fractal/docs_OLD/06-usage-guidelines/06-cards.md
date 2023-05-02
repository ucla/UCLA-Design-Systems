---
title: Cards
---
{{render '@support'}}

Preview articles, topics and events in a visual way.

## Usage

### Usability Guidance

* Use plain language when writing headlines and descriptions.
* Avoid technical language, acronyms or jargon people don't understand.
* Front-load the first 2 words of your headlines for [easy eye scanning](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/).
* Limit descriptions below headlines to one sentence or 2-3 lines.
* Use original images rather than stock images to maintain credibility and trust among your users.

**Further Reading**

* [Cards](https://inclusive-components.design/cards/) (Inclusive Components)
* [5 Tips for Writing Headlines That Convert](https://www.nngroup.com/articles/headings-pickup-lines/) (Nielsen Norman Group)
* [First 2 Words: A Signal for the Scanning Eye](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/) (Nielsen Norman Group)

### Accessibility Requirements

* Link the card's headline, heading or title to provide the most succinct description to screen readers and search engines. Both technologies use links to understand and navigate document structure.
* Wrap your link around the image if you decide to include one.
* Only use one link per card.
* Write [alt text](https://webaim.org/techniques/alttext/) for any images you include.
* Avoid linking from buttons with generic labels like "read more" or "view details." Screen readers cannot differentiate card topics with the same link text.

## Basic Card

### Do’s and Don’ts

#### Do’s

* Do adjust the container color of the card to grey-05 if it’s being used on a white background.

#### Don’ts

* Don’t adjust the container color to a color other than white or grey-05.
* Don’t use primary or secondary buttons in cards.

### Code

Use the `<article>` element to denote your card as a standalone element within the body of your page. Basic Card backgrounds will have a white background by default and should be used on dark backgrounds. For usage on light backgrounds, change the component's parent "basic-card" class to "basic-card-grey."


```
{{view '@cards'}}
```

## Event Card

### Code

Use the `<article>` element to denote your card as a standalone element within the body of your page.


```
{{view '@cards--event'}}
```

## Featured Story Card

### Do’s and Don’ts

#### Do’s

* Only use one featured card per section.

#### Don’ts

* Don’t stack multiple featured cards in one section.

### Code

Use the `<article>` element to denote your card as a standalone element within the body of your page. Featured story cards should be included within a parent "section" or "div" tag with the class, "story." Non-featured story cards (shown in the next section) can be included below featured stories.

```
{{view '@cards--featured-story'}}
```

## Story Card

### Code

Use the `<article>` element to denote your card as a standalone element within the body of your page.

```
{{view '@cards--story'}}
```

## Person Card

### Code

Use the `<article>` element to denote your card as a standalone element within the body of your page. A person card's background will have a white background by default and should be used on dark backgrounds. For usage on light backgrounds, change the component's parent "person-card" class to "person-card-grey."


```
{{view '@cards--person'}}
```
