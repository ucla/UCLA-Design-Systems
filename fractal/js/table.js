"use strict";

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("th").forEach((el) => {
        el.addEventListener("click", function () {
            let table = this.closest("table");

            // Check if column is sortable
            if (
                this.classList.contains("ucla-sortable") &&
                this.querySelector("svg")
            ) {
                let sortIcon = this.querySelector("svg");
                let order = sortIcon.classList;
                let separator = "-----";
                let value_list = {}; // <tr> Object
                let obj_key = []; // Values of selected column
                let string_count = 0;
                let number_count = 0;

                let getSiblings = (n) =>
                    [...n.parentElement.children].filter((c) => c != n);
                let siblings = getSiblings(this);
                // Get <tbody> rows
                table
                    .querySelectorAll("tbody tr")
                    .forEach((line, index_line) => {
                        // Value of each field
                        let key =
                            line.children[
                                el.cellIndex
                            ].textContent.toUpperCase();

                        // Check if value is date, numeric, or string
                        if (
                            line.children[el.cellIndex].hasAttribute(
                                "date-timestamp"
                            )
                        ) {
                            key =
                                line.children[el.cellIndex].getAttribute(
                                    "date-timestamp"
                                );
                        } else if (key.replace("-", "").match(/^[0-9,.]*$/g)) {
                            number_count++;
                        } else {
                            string_count++;
                        }

                        value_list[key + separator + index_line] =
                            line.outerHTML.replace(/(\t)|(\n)/g, ""); // Adding <tr> to object
                        obj_key.push(key + separator + index_line);
                    });
                if (string_count === 0) {
                    // If all values are numeric
                    obj_key.sort(function (a, b) {
                        return a.split(separator)[0] - b.split(separator)[0];
                    });
                } else {
                    obj_key.sort();
                }
                siblings.forEach((e) => {
                    if (
                        e.querySelector("svg.asc") ||
                        e.querySelector("svg.desc")
                    ) {
                        e.querySelector("svg").classList.replace(
                            "asc",
                            "sort-default"
                        );
                        e.querySelector("svg").classList.replace(
                            "desc",
                            "sort-default"
                        );
                    }
                });
                if (order.contains("sort-default")) {
                    order.replace("sort-default", "desc");
                } else if (order.contains("desc")) {
                    obj_key.reverse();
                    order.replace("desc", "asc");
                } else {
                    order.replace("asc", "desc");
                }

                let html = "";
                obj_key.forEach(function (chave) {
                    html += value_list[chave];
                });
                table.getElementsByTagName("tbody")[0].innerHTML = html;
            }
        });
    });
});
