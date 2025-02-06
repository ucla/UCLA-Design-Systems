<p align="center">
  <a href="https://designsystem.brand.ucla.edu/">
    <img src="http://dev.patternlab.it.ucla.edu/images/university-logo.svg" alt="UCLA logo" width="119" height="56">
  </a>
</p>

<h3 align="center">Design System</h3>

<p align="center">
  A UCLA-branded front-end user interface styles and components. It provides designers and developers with tools and support to create on-brand, accessible, and usable digital products.
  <br>
  <a href="https://designsystem.brand.ucla.edu/"><strong>Explore the UCLA Design System Documentation</strong></a>
  <br>
  <br>
  <a href="https://github.com/ucla/UCLA-Design-Systems/issues/new?assignees=&labels=enhancement&projects=&template=feature-request.md">Request feature</a>
  ·
  <a href="https://github.com/ucla/UCLA-Design-Systems/issues/new?assignees=&labels=bug&projects=&template=report-bug.md">Report Bug/Issue</a>
</p>

## Installation

There are several ways to install the UCLA Design System into your project.

- [Download the latest version](https://cdn.designsystem.brand.ucla.edu/build/v2.2.0/dist.zip)
- [Add the CDN into your project](https://designsystem.brand.ucla.edu/build/v2.2.0/docs/developers/installation.html)
- Install with [npm](https://www.npmjs.com/): `npm install ucla-design-systems`
- Install with [yarn](https://yarnpkg.com/): `yarn add ucla-design-systems`

## What's Included

In this package, you'll find a compiled CSS and JavaScript in the `/build` folder. There are the uncompiled/unminified SCSS and JavaScript files in the root directory if you prefer to compile them yourself.

**JavaScript files are not ready for Single-page Applications.**

```text
ucla-design-systems
├── build
│   ├── css
│   │   ├── ucla-lib.css
│   │   ├── ucla-lib.css.map
│   │   ├── ucla-lib.min.css
│   │   └── ucla-lib.min.css.map
│   ├── js
│   │   ├── ucla-lib-scripts.js
│   │   ├── ucla-lib-scripts.min.js
│   │   ├── ucla-lib-scripts.min.js.map
│   │   ├── ucla-lib-scripts.esm.js
│   │   └── ucla-lib-scripts.cjs.js
│   └── icons
├── scss
│   ├── components
│   ├── layout
│   └── utilities
├── js
│   └── vendors
└── icons
```