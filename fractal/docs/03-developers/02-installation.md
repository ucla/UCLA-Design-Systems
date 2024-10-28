<div class="ucla-prose">

The quickest way to get the UCLA Design System into your project is using the CDN-hosted assets.

#### CSS

Copy and paste this in the `<head>` of your document before any other stylesheet

```html

<link rel="stylesheet" crossorigin="anonymous" integrity="sha384-%!CSSHash%!" href="https://cdn.designsystem.brand.ucla.edu/build/%!CurrentVersion%!/css/ucla-lib.min.css" />

```

#### JavaScript

Copy and paste this before the closing `</body>` tag. Please refer to our [JavaScript Documentation]({{path '/docs/developers/javascript'}}) for more details.

```html

<script type="text/javascript" crossorigin="anonymous" integrity="sha384-%!JSHash%!" src="https://cdn.designsystem.brand.ucla.edu/build/%!CurrentVersion%!/js/ucla-lib-scripts.min.js" />

```

#### Package Managers
Make your you have the latest Node.js installed and your current working directory is where you want to install the UCLA Design System. Run the following command in your command line:

##### Install with npm

`npm install ucla-design-systems`

##### Install with yarn

`yarn add ucla-design-systems`

#### Download source

If you would like to host the assets yourself, you can download the compiled version here.

<a class="ucla-btn ucla-btn--primary" href="https://cdn.designsystem.brand.ucla.edu/build/%!CurrentVersion%!/dist.zip">Download</a>


</div>