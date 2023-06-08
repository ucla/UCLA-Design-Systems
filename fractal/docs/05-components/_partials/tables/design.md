---
handle: tables-design
---
A table shows information in columns and rows.

Tables help logically organize information and group like things together, and they make it easier to understand complex content, as explained on [plainlanguage.gov](https://www.plainlanguage.gov/guidelines/design/use-tables-to-make-complex-material-easier-to-understand/). They’re especially useful for showing long lists of sequential or structured content. Users read tables one row or column at a time, making it easy to digest and compare information.

Tables also help users find specific information within a large data set. For example, if someone is looking for how much their tax is based on their income for a particular year, it’s much easier to find the intersection of that year and income range than to scan or read an entire paragraph of text.

#### When to use

**Displaying tabular data.** When you need to display tabular information, such as statistical data.

**Displaying directories.** When listing locations or resources that have similarly structured content for many items.

#### Anatomy

![Tables Anatomy](/theme-assets/img/docs/components/tables/anatomy.svg)

**1. Table Header (required)**

Describes the information types in the columns below. There should be 2 or more columns to warrant a tabular display.

**2. Table Row (required)**

Alternate between white and gray for readability. There should be 2 or more rows to warrant a tabular display.

**3. Sort**

This interactive element can be next to any column label in the header to indicate the table can be sorted by that type of data. The whole cell is clickable and sorts by the column in descending order on click. Continue to click on the cell to toggle between descending (down arrow) and ascending (up arrow).

**4. Subtotal / Blue Highlight Row**

**5. Total / Yellow Highlight Row**

#### Examples

<select class="ucla-field__select my-5" onChange="changeIframe(value)">
  <option value="table">Default Table</option>
  <option value="table--bordered">Bordered Table</option>
  <option value="table--sort">Sorting Table</option>
  <option value="table--responsive">Responsive Table</option>
</select>
<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

<div id="table" class="design-code-examples">

```html
{{render '@table'}}
```

</div>
<div id="table--bordered" hidden class="design-code-examples">

```html
{{render '@table--bordered'}}
```

</div>
<div id="table--sort" hidden class="design-code-examples">

```html
{{render '@table--sort'}}
```

</div>
<div id="table--responsive" hidden class="design-code-examples">

```html
{{render '@table--responsive'}}
```

</div>

<script>
  if (window.frctl.env === "static") {
    document.getElementById("docIframe").src = "../../components/preview/table.html"
  } else {
    document.getElementById("docIframe").src = "../../components/preview/table"
  }
</script>


#### Best Practices

Left-align table content like text and dates for easy readability.

Right-align complex numerical and financial data for scale of size.

Display headings at the top of each column (required).

Consider whether to define row headings for added emphasis to each line of data (optional).

Alternate every other row with light and dark fill to make the information more readable.

Use blue and gold fill to highlight subtotals and totals.