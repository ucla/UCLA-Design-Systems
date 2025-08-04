export default {
  plugins: [
    {
      name: "removeAttrs",
      params: {
        attrs: [
          "svg:width",
          "svg:height"
        ],
        preserveCurrentColor: false
      }
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          { 
            width: 24,
            height: 24
          }
        ]
      }
    }
  ]
}