# Using BEM Naming Convention

---

## Table of Contents

* [Block](#block)
* [Element](#element)
* [Modifier](#modifier)

---
BEM stands for Blocks, Elements, and Modifiers. We are using the BEM naming convention for classes. A linter has been installed for scripts and scss to help ensure quality. Strict BEM naming rules can be found on the [BEM documentation site.](http://getbem.com/naming/)

# Block

## Naming
  - Block names consist of Latin letters, digits, and dashes.

## HTML
  - Any DOM node can be a block if it accepts a class name.
```
<div class="block">...</div>
```

## CSS
  - Use class name selector only.
  - No tag name or ids.
  - No dependency on other blocks/elements on a page.

---

# Element

## Naming
  - Element names consist of Latin letters, digits, and dashes.
  - CSS class is formed by block name followed by two underscores and element name.
```
.block__elem
```

## HTML
- Any DOM node within a block can be an element.
```
<div class="block">
  ...
  <span class="block__elem"></span>
</div>
```

## CSS
  - Use class name selector only.
  - No tag name or ids.
  - No dependency on other blocks/elements on a page.

---

# Modifier

## Naming
  - Element names consist of Latin letters, digits, and dashes.
  - CSS class is formed by block's or element's name followed by two dashes
```
.block--mod
.block__elem--mod
.block--color-black
```

## HTML
  - Add modifier to block/element DOM node as extra class name.
```
<div class="block block--mod">...</div>
```

## CSS
  - Use modifier class name as selector.
```
.block--hidden { }
```
  - Alter elements based on block-level modifier.
```
.block--mod .block__elem { }
```
  - Element modifier:
```
.block__elem--mod { }
```

---

:arrow_left: [Go Back to Main README](../../README.md)