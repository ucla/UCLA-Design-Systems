const fs = require('fs');
const path = require('path');
const frctl = require("@frctl/fractal");

// Adjust path to where the outlined icons live

const iconsDir = path.resolve(__dirname, (frctl.env === "static") ? 'icons/material' : '../../../../public/icons/material');
const icons = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg'))
  .map(file => path.basename(file, '.svg')); // strip ".svg"

module.exports = {
  context: {
    icons
  }
};