---
handle: grid-design
---
The layout grid has three main parts: columns, gutters and margins.

Columns contain the content. They act as invisible guides while setting typography and aligning elements to establish a visual rhythm. Content can span into multiple columns.

Gutters are the spaces between columns. They provide breathing room around elements so your content can be easily consumed.

Margins are the spaces between the:
1. content area and
2. the left and right edges of the screen.

(We do not use top and bottom margins for our grids.) Margins define the content area from within the viewable area.

<img alt="Grid Anatomy" src="/theme-assets/img/docs/layout/grid/anatomy.svg" class="ucla-break-container" />

#### Best Practices

A grid is a guide that helps us set the base while designing. Here's a list of a few things to keep in mind while designing with your grid.

- All your content should always wrap inside a container. These containers can be visible with clear borders (cards and modals) or be invisible for layouts with only text and icons.
- The containers should always span from the outer edges of the columns they sit on, and should not bleed into the gutter.
- The elements inside the containers don't necessarily have to abide by the grid. These can be aligned as per the padding of their parent containers.
- Images, illustrations, and hero images can bleed out of the grid and scale regardless of whether the grid is fixed or fluid.

#### Breakpoints

A breakpoint is the screen size threshold determined by specific layout requirements. At a given breakpoint range, the layout adjusts to suit the screen size and orientation.

UCLA provides responsive layouts based on 4-column, 8-column, and 12-column grids, available for use across different screens, devices, and orientations.

Each breakpoint range determines the number of columns, and recommended margins and gutters for each display size.

| Viewport | Columns | Margins | Navigation |
| --- | --- | --- | --- |
| **SM (Phones)**<br />320px - 767px | 4 | 24 | Collapsed |
| **MD (Tablets)**<br />768px - 1223px | 8 | 24 | Collapsed |
| **LG (Desktops)**<br />1224+ | 12 | 24 | Visible |

#### Desktop

<img alt="Desktop Grid" src="/theme-assets/img/docs/layout/grid/desktop.svg" class="ucla-break-container" />
<ul class="ucla-list__plain">
<li>12 columns</li>
<li>1224px viewport or larger</li>
<li>1176px content (max)</li>
<li>76px columns (max)</li>
<li>24px gutters (12px) each side</li>
<li>24px margins</li>
</ul>

#### Tablet

<img alt="Tablet Grid" src="/theme-assets/img/docs/layout/grid/tablet.svg" class="ucla-break-container" />
<ul class="ucla-list__plain">
<li>8 columns</li>
<li>768px - 1223px viewport</li>
<li>720px - 1175px content</li>
<li>69px - 126px columns</li>
<li>24px gutters (12px) each side</li>
<li>24px margins</li>
</ul>

#### Mobile

<img alt="Mobile Grid" src="/theme-assets/img/docs/layout/grid/mobile.svg" class="ucla-break-container" />
<ul class="ucla-list__plain">
<li>4 columns</li>
<li>320px - 767px viewport</li>
<li>272px - 719px content</li>
<li>50px - 162px columns</li>
<li>24px gutters (12px) each side</li>
<li>24px margins</li>
</ul>