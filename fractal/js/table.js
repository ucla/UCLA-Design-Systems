import Component from './component';

export default class Table extends Component {
  static get selector() {
    return '.ucla-table__sort';
  }

  static get methods() {
    return {
      init() {
        this._initAttr();
        this._initElements();
      },
      _initAttr() {
        this.sortAttr = '.ucla-sortable';
      },
      _initElements() {
        this.sortTriggers = Array.from(
          this.element.querySelectorAll(this.sortAttr)
        );
        this.bodyTr = Array.from(this.element.querySelectorAll('tbody tr'));
      },
      onClick(event) {
        if (this.sortTriggers && this.sortTriggers.includes(event.target)) {
          this.sort(event);
        }
      },
      sort(event) {
        const tableHeader = event.target;
        const sortIcon = event.target.querySelector('svg');
        const order = sortIcon.classList;
        const separator = '-----';
        const value_list = {}; // <tr> Object
        let string_count = 0;
        let number_count = 0;
        const obj_key = [];

        const _getSiblings = (n) =>
          [...n.parentElement.children].filter((c) => c !== n);
        const siblings = _getSiblings(event.target);

        this.bodyTr.forEach((line, index_line) => {
          let key =
            line.children[tableHeader.cellIndex].textContent.toUpperCase();

          // Check if value is date, numeric, or string
          if (
            line.children[tableHeader.cellIndex].hasAttribute('date-timestamp')
          ) {
            key =
              line.children[tableHeader.cellIndex].getAttribute(
                'date-timestamp'
              );
          } else if (key.replace('-', '').match(/^[0-9,.]*$/g)) {
            number_count++;
          } else {
            string_count++;
          }

          value_list[key + separator + index_line] = line.outerHTML.replace(
            /(\t)|(\n)/g,
            ''
          ); // Adding <tr> to object

          obj_key.push(key + separator + index_line);
        });

        if (string_count === 0) {
          // If all values are numeric
          obj_key.sort((a, b) => a.split(separator)[0] - b.split(separator)[0]);
        } else {
          obj_key.sort();
        }

        siblings.forEach((e) => {
          if (e.querySelector('svg.asc') || e.querySelector('svg.desc')) {
            e.setAttribute('aria-sort', 'none');
            e.querySelector('svg').classList.replace('asc', 'sort-default');
            e.querySelector('svg').classList.replace('desc', 'sort-default');
          }
        });

        if (order.contains('sort-default')) {
          order.replace('sort-default', 'asc');
          tableHeader.setAttribute('aria-sort', 'ascending');
        } else if (order.contains('desc')) {
          order.replace('desc', 'asc');
          tableHeader.setAttribute('aria-sort', 'ascending');
        } else {
          obj_key.reverse();
          order.replace('asc', 'desc');
          tableHeader.setAttribute('aria-sort', 'descending');
        }
        let html = '';
        obj_key.forEach((chave) => {
          html += value_list[chave];
        });
        this.element.getElementsByTagName('tbody')[0].innerHTML = html;
      },
    };
  }
}
