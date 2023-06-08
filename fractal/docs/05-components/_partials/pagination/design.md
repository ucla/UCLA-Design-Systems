---
handle: pagination-design
---
Pagination is navigation for paginated content.

Paginated content is any content split into multiple pages determined only by a specific amount of content per page, not split by any meaningful attribute, like feature or subject or step. Search results and article collections are often paginated. Readers use the pagination component to move from page to page in paginated content, or directly to the first or last page of the paginated set.

#### When to use

**Search results.** Pagination is most commonly used with paginated search results. Our Pagination component is designed to work both with results that have a discrete number of results pages (bounded) and those with an uncalculated number of results pages (unbounded). See Using the Pagination component, below, for more on bounded and unbounded sets.

**Multi-page collections of related items.** Splitting a large collection of related items into individual pages can improve browsability and scannability. Common examples of multi-page collections include articles related to a category or tag, content archives, and history or activity.

#### Anatomy

![Pagination Anatomy](/theme-assets/img/docs/components/pagination/anatomy.svg)

**1. Double Arrow Previous Button (required)**

Links to the first page in the sequence

**2. Single Arrow Previous Button (required)**

Links to the page previous to the page user is currently on.

**3. Current Page Number Button (required)**

Page user is currently on has a hover-style state permenantly applied.

**4. Page Number Button (required)**

Default page number links. Initially, 1-10 is displayed. Upon moving to page 11 or higher, the next set of 10 are displayed (11-20), and so on. On mobile, 1-5 is displayed (or whatever fits on smallest viewport). If there are less than 10 pages, only the number of pages are displayed. 

**5. Single Arrow Next Button (required)**

Links to the page after the page user is currently on.

**6. Double Arrow Next Button (required)**

Links to the last known page in the sequence.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@button--pagination'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/button--pagination.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/button--pagination"
  }
</script>

#### Best Practices

**Highlight the current page.** Pagination shows the current page the user is on in relation to the entire collection of pages.

**Always include the first, previous, and next pages.** Users should always be able to navigate to each of these pages from any page in the set.

**Show navigation items in a single line.** Pagination can be hard to understand — and individual items can be more difficult to select — when the items break over one line. Don’t split the navigation items over multiple lines. Avoid using Pagination in any context where it would be more than one line long.

**Use as few navigation items as possible.** Showing more pages than necessary tends to add complexity and use more space without proportional increases to the component’s functionality. Focus on the essential actions and avoid adding more items to Pagination just to fill space.

**Use generous touch targets.** Use touch targets that are big enough to select with any finger and have enough separation to avoid mistakes.

**Optimize the number of entries per page.** Consider page load, performance, and the user’s scrolling preferences when determining how many items are displayed on each page. Some paginated content benefits from user control over the number of elements to show on each page.