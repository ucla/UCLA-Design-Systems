---
title: Headings
---
{{render '@support'}}

These are heading styles. The UCLA title headings are Helvetica with bold font-styles applied. This combination is used for high readability across digital devices.

#### Do’s

* Use the correct header tags when possible
* Use the respective "h1" - "h6" classnames to inherit respective header styles (i.e with CMS that makes it hard to customize HTML semantics)

#### Don’ts

* Don't use "h1" - "h6" classnames to incorrectly alter styles astray from the brand guidelines


{{view '@typography'}}
```
<!--
Desktop: font-size: 2.25rem; line-height: 1.125;
Mobile: font-size: 1.75rem; line-height: 1.125; -->
{{view '@typography'}}
```

{{view '@typography--h2'}}
```
<!--
Desktop: font-size: 1.75rem; line-height: 1.125px;
Mobile: font-size: 1.75rem; line-height: 1.125; -->
{{view '@typography--h2'}}
```

{{view '@typography--h3'}}
```
<!-- Desktop & Mobile: font-size: 1.5rem; line-height: 1.125; -->
{{view '@typography--h3'}}
```

{{view '@typography--h4'}}
```
<!-- Desktop & Mobile: font-size: 1.25rem; line-height: 1.125; -->
{{view '@typography--h4'}}
```

{{view '@typography--h5'}}
```
<!-- Desktop & Mobile: font-size: 1rem; line-height: 1.125; -->
{{view '@typography--h5'}}
```

{{view '@typography--h6'}}
```
<!-- Desktop & Mobile: font-size: 0.8rem; line-height: 1.125; -->
{{view '@typography--h6'}}
```
