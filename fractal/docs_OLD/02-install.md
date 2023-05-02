---
title: Download Components
---
{{render '@support'}}

This repository is available for official UCLA websites only. Your domain must be a subdomain of [ucla.edu](https://ucla.edu) and have been created through the [411 domain policy](http://www.adminpolicies.ucla.edu/APP/Number/411.0).

### Install with CDN

CDN is the recommended type of installation.

1. Put the `<link>` reference tag between the `<head>` tags of your website. Previous versions will continue to be stored on the content delivery network(CDN).

```
// Copy below
<link rel="stylesheet" href="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/css/ucla-lib.min.css">
```
Place code in between your site’s `<head>` tags.

```
<head>
// After the opening head tag.
  <link rel="stylesheet" href="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/css/ucla-lib.min.css">
// Before the closing head tag.
</head>
```

2. Put the `<script>` reference tag between the `<footer>` tags of your website.

```
// Copy below
<script type="text/javascript" src="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/js/ucla-lib-scripts.min.js"></script>
```

Place code in between your site’s `<footer>` tags.
```
<footer>
  // After the  opening footer tag.
  <script type="text/javascript" src="https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/js/ucla-lib-scripts.min.js"></script>
  // Before the closing footer tag.
</footer>
```

### Install with Zip Download

For those who do not want to or cannot add a CND to their project, a [zip download file](https://cdn.webcomponents.ucla.edu/%!CurrentVersion%!/ucla-components.zip) is available.