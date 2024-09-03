import Component from './component';

/**
 * Tables help logically organize information and group like things together, and they make it easier to understand complex content.
 */
export default class Table extends Component {

  /**
   * Gets the table CSS class
   *
   * @static
   * @returns {string}
   */
  static get selector() {
    return '.ucla-table__sort';
  }

  /**
   * Gets an object containing methods attached to the DOM element.
   *
   * @static
   * @returns {Object}
   */
  static get methods() {
    return {

      /**
       * Initialize table
       */
      init() {
        this._initAttr();
        this._initElements();
      },

      /**
       * Initialize table attributes based on CSS class
       *
       * @private
       */
      _initAttr() {
        this.sortAttr = '.ucla-sortable';
      },

      /**
       * Initialize all sort triggers and row elements
       *
       * @private
       */
      _initElements() {
        this.sortTriggers = Array.from(
          this.element.querySelectorAll(this.sortAttr)
        );
        this.bodyTr = Array.from(this.element.querySelectorAll('tbody tr'));
      },

      /**
       * Handles click event for sorting
       *
       * @param {Event} event - Click event
       */
      onClick(event) {
        if (this.sortTriggers && this.sortTriggers.includes(event.target)) {
          this.sort(event);
        }
      },

      /**
       * Sorts table column
       * 
       * @param {Event} event - Click event
       */
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
