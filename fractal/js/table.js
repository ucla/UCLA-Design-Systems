class Table {
  init() {
    this.setup()
  }
  setup() {
    const tableSortable = document.querySelectorAll('.ucla-table.ucla-table__sort');
    for (let i = 0; i < tableSortable.length; i++) {
      let tableHeaders = tableSortable[i].querySelectorAll('.ucla-sortable');
      tableHeaders.forEach(header => {
        header.addEventListener('click', event => {
          this.handleClick(event, header);
        })
      })
    }
  }

  handleClick(event, el) {
    this.sortHandler(event.currentTarget, el);
  }

  sortHandler(tableHeader, el) {
    let table = tableHeader.closest('table');
    let sortIcon = tableHeader.querySelector("svg");
    let order = sortIcon.classList;
    let separator = '-----';
    let value_list = {} // <tr> Object
    let string_count = 0;
    let number_count = 0;
    let obj_key = [];

    let getSiblings = (n) => [...n.parentElement.children].filter((c) => c !== n);
    let siblings = getSiblings(tableHeader);

    table.querySelectorAll('tbody tr').forEach((line, index_line) => {
      let key = line.children[el.cellIndex].textContent.toUpperCase();
      // Check if value is date, numeric, or string
      if (line.children[el.cellIndex].hasAttribute("date-timestamp")) {
        key = line.children[el.cellIndex].getAttribute("date-timestamp");
      } else if (key.replace("-", "").match(/^[0-9,.]*$/g)) {
        number_count++;
      } else {
        string_count++;
      }
      value_list[key + separator + index_line] = line.outerHTML.replace(
        /(\t)|(\n)/g,
        ""
      ); // Adding <tr> to object
      obj_key.push(key + separator + index_line);
    })
    if (string_count === 0) {
      // If all values are numeric
      obj_key.sort(function (a, b) {
        return a.split(separator)[0] - b.split(separator)[0];
      });
    } else {
      obj_key.sort();
    }
    siblings.forEach((e) => {
      if (e.querySelector("svg.asc") || e.querySelector("svg.desc")) {
        e.removeAttribute("aria-sort");
        e.querySelector("svg").classList.replace("asc", "sort-default");
        e.querySelector("svg").classList.replace("desc", "sort-default");
      }
    });
    if (order.contains("sort-default")) {
      order.replace("sort-default", "desc");
      el.setAttribute("aria-sort", "descending");
    } else if (order.contains("desc")) {
      obj_key.reverse();
      order.replace("desc", "asc");
      el.setAttribute("aria-sort", "ascending");
    } else {
      order.replace("asc", "desc");
      el.setAttribute("aria-sort", "descending");
    }

    let html = "";
    obj_key.forEach(function (chave) {
      html += value_list[chave];
    });
    table.getElementsByTagName("tbody")[0].innerHTML = html;
  }

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Table;
} else {
  window.Table = Table;
}