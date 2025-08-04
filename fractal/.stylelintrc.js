/** @type {import('stylelint').Config} */
module.exports = {
  extends: "stylelint-config-standard-scss",
  plugins: [
    "stylelint-order",
  ],
  rules: {
    "function-calc-no-unspaced-operator": null,
    "shorthand-property-no-redundant-values": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "max-nesting-depth": 4,
    "no-empty-source": null,
    "no-invalid-double-slash-comments": null,
    "no-unknown-animations": true,
    "scss/at-mixin-pattern": [
      "^[a-z][a-zA-Z0-9]+$",
      {
        message: "Expected @mixin name to be lower camel case (myMixinName())"
      }
    ],
    "selector-class-pattern": [
      "^([a-z0-9\\-]|__)+$",
      {
        message: "Selector should be written in lowercase with BEM or hyphens (selector-class-pattern)"
      }
    ],
    "no-descending-specificity": null,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "rule-empty-line-before": null,
    "selector-pseudo-element-colon-notation": null,
    "order/order": [
      "dollar-variables",
      {
        type: "at-rule",
        name: "extend"
      },
      {
        type: "rule",
        selector: "^&$"
      },
      "declarations",
      {
        type: "at-rule",
        name: "include",
        hasBlock: true
      },
      "rules"
    ],
    "order/properties-alphabetical-order": null,
    "order/properties-order": [
      [
        "position", "z-index", "top", "right", "bottom", "left",
        "display", "align-content", "align-items", "align-self", "clear", "clip", "float",
        "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-order", "flex-pack", "flex-shrink", "flex-wrap",
        "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows",
        "justify-content", "justify-items", "justify-self", "order", "overflow", "overflow-x", "overflow-y", "place-content", "place-items", "visibility", "zoom",
        "box-sizing", "width", "min-width", "max-width", "height", "min-height", "max-height", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left",
        "border", "border-color", "border-collapse", "border-style", "border-width", "border-top", "border-top-width", "border-top-style", "border-top-color", "border-right", "border-right-width", "border-right-style", "border-right-color", "border-bottom", "border-bottom-width", "border-bottom-style", "border-bottom-color", "border-left", "border-left-width", "border-left-style", "border-left-color", "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-image", "border-image-source", "border-image-slice", "border-image-width", "border-image-outset", "border-image-repeat", "border-spacing"
      ],
      { unspecified: "bottomAlphabetical" }
    ]
  }
};
