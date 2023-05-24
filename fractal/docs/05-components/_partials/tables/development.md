---
handle: tables-development
---
To build a table, simply add the `.ucla-table` class to the table.

- `<table class="ucla-table">`
  - `thead`
  - `tfoot`
  - `tbody`
    - `tr`
      - `th`
      - `td`

<table class="ucla-table">
  <thead>
    <tr>
      <th>College/School</th>
      <th>Undergraduate</th>
      <th>Graduate</th>
      <th>Total</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <th>Humanities</th>
      <td>2,184</td>
      <td>448</td>
      <td>2,632</td>
    </tr>
    <tr>
      <th>Life Sciences</th>
      <td>9,248</td>
      <td>607</td>
      <td>9,855</td>
    </tr>
    <tr>
      <th>Physical Sciences</th>
      <td>4,315</td>
      <td>951</td>
      <td>5,266</td>
    </tr>
  </tbody>
</table>

```html
<table class="ucla-table">
  <thead>
    <tr>
      <th>College/School</th>
      <th>Undergraduate</th>
      <th>Graduate</th>
      <th>Total</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <th>Humanities</th>
      <td>2,184</td>
      <td>448</td>
      <td>2,632</td>
    </tr>
    <tr>
      <th>Life Sciences</th>
      <td>9,248</td>
      <td>607</td>
      <td>9,855</td>
    </tr>
    <tr>
      <th>Physical Sciences</th>
      <td>4,315</td>
      <td>951</td>
      <td>5,266</td>
    </tr>
  </tbody>
</table>
```

#### Bordered Table

If you want your table to be bordered, simply add the class `.ucla-table__border` to the `<table>`

<table class="ucla-table ucla-table__border mt-5">
  <thead>
    <tr>
      <th>Header</th>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tbody>
</table>

```html
<table class="ucla-table ucla-table__border">
  <!-- ... -->
</table>
```

#### Colored rows

You can emphasize a row with two additional colors. Just add the class `.ucla-is-gold` or `.ucla-is-blue` to a `<tr>`

<table class="ucla-table mt-5">
  <thead>
    <tr>
      <th>Header</th>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="ucla-is-gold">
      <td>Data</td>
      <td>Data</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Data</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Data</td>
    </tr>
    <tr class="ucla-is-blue">
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tbody>
</table>

```html
<!-- ... -->
<tbody>
    <tr class="ucla-is-gold">
      <!-- ... -->
    </tr>
    <tr class="ucla-is-blue">
      <!-- ... -->
    </tr>
</tbody>
<!-- ... -->
```

#### Responsive

To add responsiveness to a table, you will need to wrap the entire table in a `<div class="ucla-table__responsive">`.

<div style="width: 320px">
  <div class="ucla-table__responsive">
    <table class="ucla-table">
      <thead>
        <tr>
          <th>College/School</th>
          <th>Undergraduate</th>
          <th>Graduate</th>
          <th>Total</th>
        </tr>
      <thead>
      <tbody>
        <tr>
          <th>Humanities</th>
          <td>2,184</td>
          <td>448</td>
          <td>2,632</td>
        </tr>
        <tr>
          <th>Life Sciences</th>
          <td>9,248</td>
          <td>607</td>
          <td>9,855</td>
        </tr>
        <tr>
          <th>Physical Sciences</th>
          <td>4,315</td>
          <td>951</td>
          <td>5,266</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="ucla-table__responsive">
    <table class="ucla-table">
      <!-- ... -->
    </table>
</div>
```

#### Sticky First Column

The sticky first column must be used in conjunction with the Responsive Table. When scrolling, the first column of the table will be fixed. To implement, add the `.ucla-table__sticky-column` to your `<table>`.

<div style="width: 320px" class="mb-5">
  <div class="ucla-table__responsive">
    <table class="ucla-table ucla-table__sticky-column">
      <thead>
        <tr>
          <th>College/School</th>
          <th>Undergraduate</th>
          <th>Graduate</th>
          <th>Total</th>
        </tr>
      <thead>
      <tbody>
        <tr>
          <th>Humanities</th>
          <td>2,184</td>
          <td>448</td>
          <td>2,632</td>
        </tr>
        <tr>
          <th>Life Sciences</th>
          <td>9,248</td>
          <td>607</td>
          <td>9,855</td>
        </tr>
        <tr>
          <th>Physical Sciences</th>
          <td>4,315</td>
          <td>951</td>
          <td>5,266</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="ucla-table__responsive">
    <table class="ucla-table ucla-table__sticky-column">
      <!-- ... -->
    </table>
</div>
```


#### Sort

If you need to sort a column, there are several you'll need to add several classes since JavaScript is involved.

1. You'll need to add `.ucla-table__sort` to your `<table>`
2. `.ucla-sortable` needs to be added to the `<th>` of the column that you want to sort (it can be all the `<th>`)
3. An `<svg class="sort-default">` icon needs to be added after the `<th>` text. _See example below for the `<svg>` icon_

<table class="ucla-table ucla-table__sort">
  <thead>
    <tr>
        <th class="ucla-sortable">
            Title
            <svg class="sort-default" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.42857 4.14287L4 0.714294L0.571427 4.14287L7.42857 4.14287Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.571426 5.85715L4 9.28572L7.42857 5.85715L0.571426 5.85715Z" />
            </svg>
        </th>
        <th class="ucla-sortable">
            Title
            <svg class="sort-default" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.42857 4.14287L4 0.714294L0.571427 4.14287L7.42857 4.14287Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.571426 5.85715L4 9.28572L7.42857 5.85715L0.571426 5.85715Z" />
            </svg>
        </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Z</td>
      <td>1</td>
    </tr>
    <tr>
      <td>A</td>
      <td>10</td>
    </tr>
  </tbody>
</table>

```html
<table class="ucla-table ucla-table__sort">
  <thead>
    <th class="ucla-sortable">
      Title
      <svg class="sort-default" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.42857 4.14287L4 0.714294L0.571427 4.14287L7.42857 4.14287Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.571426 5.85715L4 9.28572L7.42857 5.85715L0.571426 5.85715Z" />
      </svg>
    </th>
  </thead>
</table>
```

_Note: if you want to sort by date, you must add the `data-timestamp` attribute to the `<td>` with the unix timestamp value of every date_

```html
<!-- ... -->
<td data-timestamp="1671840000">12/24/2022</td>
<!-- ... -->
```