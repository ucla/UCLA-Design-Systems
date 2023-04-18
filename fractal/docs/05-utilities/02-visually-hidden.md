---
title: Visually Hidden
---
{{render '@support'}}

The `.visuallyhidden` class keeps content in the DOM, but hides it visually. This is important for screenreaders to get context (e.g. skip navigation, a caption or h1 heading) that isn't in the design mock-up.

This is located in the `_helper.scss` stylesheet at `src/scss/utilities/_helper.scss`.

## Examples

### Caption for table
```
<table class="fixed-table__wrapper">
	<caption class="visuallyhidden">UCLA Freshman and Transfer important dates for applying.</caption>
    <thead>
      ...
    </thead>
    <tbody>
      ...
    </tbody>
</table>
```

### Heading for pop-up modal
```
<div class='cookie'>
    <h2 class="visuallyhidden">Cookie Policy</h2>
    <p class="cookie__copy">...</p>
    <button class="cbtn cookie__btn--accept" type="button" id="cookie-policy-btn">I Accept</button>
</div>
```
