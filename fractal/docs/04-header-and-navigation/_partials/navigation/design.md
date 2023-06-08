---
handle: navigation-design
---
The UCLA header navigation is a robust component offering standardized navigation, search, and accessibility.

#### When to use

Informational sites with a fair amount of subpages can benefit from structured navigation and it is strongly recommended for large or complex sites with deep hierarchies. 

For screen sizes 1040px and greater wide, use the full navigation.

At screen sizes under 1040 wide, the menu reduces to a “hamburger” menu button on the right. When tapped, the menu tray takes up the full width of the screen and scrolls vertically if needed.

#### Anatomy

**Desktop**

![Desktop Navigation Anatomy](/theme-assets/img/docs/navigation/navigation-anatomy.svg)

**1. Tier 1 Navigation/Menu Link (required)**

  - Try to limit menu to 7 list items or less
  - Keep menu names short to avoid taking up too much horizontal space or having to wrap to 2 lines
  - Click goes to menu landing page, hover opens dropdown if applicable
  - Add down arrow only if there is a dropdown menu

**2. Secondary Navigation**
  - Try to limit Secondary Navigation to 5 items and a Call-to-action. This is often used to feature links for secondary audiences.

**3. Call to action**

**4. Dropdown Menu**
  - A dropdown menu is comprised of 2nd tier sub-navigation pages. 3rd-tier and 4th-tier are avaiable on mobile but go into the Side Navigation on desktop (see specs)

**5. Search**
  - Click opens search overlay (see Search specs)

**Mobile**

![Mobile Navigation Anatomy](/theme-assets/img/docs/navigation/navigation-dropdown-mobile-anatomy.svg)

**1. Navigation Menu (or Hamburger Menu)**
  - opens main navigation slide-out menu and toggles to a close icon

**2. Search**
  - Tapping anywhere on the search bar would activiate keyboard/text entry input (See Search specs)

**3. Tier 1 Navigation/Menu Link (required)**
  - Try to limit menu to 7 choices or less
  - Keep menu names short to avoid having to wrap to 2 lines
  - Click goes to menu landing page

**4. Tier 1 Dropdown Item**
  - Add arrow only if there is a dropdown menu
  - Square arrow button link opens menu below
  - Down arrow by default toggles to an up arrow upon opening

**5. Tier 2 Navigation Item**
  - Similar to 3 but note indent and shading

**6. Tier 2 Dropdown Item**
  - Similar to 4 but note indent and shading

**7. Tier 3 Navigation Item**
  - Similar to 3 but note indent and shading

**8. Tier 3 Dropdown Item**
  - Similar to 4 but note shading

**9. Tier 4 Navigation Item**
  - Similar to 3 but note indent and shading

**10. Secondary Navigation Link**
  - Try to limit Secondary Links to 5 and a call-to-action. This is often used to feature links for secondary audiences.

**11. Call to action**

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@navigation--primary-nav'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/navigation--primary-nav.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/navigation--primary-nav"
  }
</script>

#### Best Practices

Navigation in general should have less than 10 items and can include a search button.