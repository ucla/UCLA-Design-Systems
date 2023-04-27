---
title: Icons
---
{{render '@support'}}

Icons in our library are provided as an extension. If you are using our UCLA WordPress theme, the icons are conveniently installed on your site. We have also supplied the icons for download via zip file.

### Download Icons 
<a class="create-button" href="{{path '/icons/ucla-web-icons.zip'}}">Download Icons Zip File</a>

## Usage 

### Accessibility Requirements
The supplied icons have been created and reviewed according to the known needs of the university. These icons are ADA compliant and have been reviewed by the DCP. Strategic Communications strongly encourages the use of lightweight SVGs for UCLA websites and application. All icons are available in SVG format and can be used as raw SVG code or by linking to the image files.

1. IDs have been removed to prevent duplicate IDs per page in case icon is used more than once per page.
2. Exported as SVG version1.1 to convert SVG to inline styles.
4. Classes updated to BEM naming convention.
5. Inline title tags added to the SVG.
6. DCP has reviewed the icons with a screen reader.

### Please Note
1. Extra styling with or without divs are added to better depict white icons.
1. SVG Icons: Extra div with background and display styling IS NOT REQUIRED for usage.
1. IMG Icons: Extra styling attribute IS NOT REQUIRED for usage.

## Denotive Icons 
{{render '@denotive-icons'}}

## Weather Icons 
{{render '@weather-icons'}}

## Social Icons 
{{render '@social-icons'}}

# Code 

### Use as an Image

<img alt="download" src="{{path '/icons/denotive/download--black.svg'}}">
<img alt="download" src="{{path '/icons/denotive/download--white.svg'}}" style="background: #2774AE">
<img alt="download" src="{{path '/icons/denotive/download--blue.svg'}}">

```
<!-- Download -->
<img alt="download" src="{{path '/icons/denotive/download-black.svg'}}">
<img alt="download" src="{{path '/icons/denotive/download-white.svg'}}" style="background: #2774AE">
<img alt="download" src="{{path '/icons/denotive/download-defaultblue.svg'}}">
```

### Use as Inline SVG

Inline SVGs do not require a <?xml> doctype declaration. A <!DOCTYPE> should already be declared at the very top of your page.

```

<!-- Download Blue -->
<svg width="48px" height="48px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
   <title>Download</title>
<style type="text/css">
  .download--blue{fill-rule:evenodd;clip-rule:evenodd;fill:#00598C;}
</style>
<path class="download--blue" d="M24,4c11,0,20,9,20,20s-9,20-20,20S4,35,4,24S13,4,24,4z M24,7C14.6,7,7,14.6,7,24s7.6,17,17,17s17-7.6,17-17
  S33.4,7,24,7z M25.7,10.7V31l9.3-9.3l2.3,2.4L24,37.3L10.7,24l2.4-2.4l9.3,9.3V10.7H25.7z"/>
</svg>
```