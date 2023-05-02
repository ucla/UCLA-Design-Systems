"use strict";

/*
 * Require the path module
 */
const path = require("path");

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require("@frctl/fractal").create());

/*
 * Give your project a title.
 */
fractal.set("project.title", "UCLA Design Systems");
fractal.set("project.version", "v1.1.0");
fractal.set("project.author", "Strategic Communications");

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set("path", path.join(__dirname, "components"));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set("path", path.join(__dirname, "docs"));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set("static.path", path.join(__dirname, "theme/assets"));

/* Preview template in /src/components/_preview.hbs */
fractal.components.set("default.preview", "@preview");

/*
 * Tell Fractal where to export static HTML files.
 */
fractal.web.set("builder.dest", __dirname + "/build");

/* Setup the Statuses */
fractal.components.set("statuses", {
    //Components
    in_progress: {
        label: "Work In Progress",
        description:
            "Component is a “work in progress.” Component has been reviewed at least once, and there is a branch with notes from the governance team.",
        color: "#812990",
    },
    submitted: {
        label: "Submitted",
        description:
            "Component has never been submitted for review, and no branch with notes exist from the governance team.",
        color: "#E10786",
    },
    in_review: {
        label: "In Review",
        description:
            "Component has a branch that is currently under review by the UCLA governance team.",
        color: "#0077C0",
    },
    ready: {
        label: "Ready",
        description:
            "Component is ready for use in production websites and applications.",
        color: "#007339",
    },
    deprecated: {
        label: "Deprecated",
        description:
            "Component is no longer supported in the library and is not encouraged in production websites and applications.",
        color: "#D60000",
    },
});

fractal.docs.set("statuses", {
    // docs
    ready: {
        label: "Ready",
        description:
            "Documentation for corresponding component is ready for referencing.",
        color: "#007339",
    },
    in_progress: {
        label: "In Progress",
        description: "Documentation for corresponding component is underway.",
        color: "#812990",
    },
});

// require the Mandelbrot theme module
const mandelbrot = require("@frctl/mandelbrot");

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "black",
    // any other theme configuration values here
    nav: ["search", "docs", "components", "information"],
    styles: [
        "default",
        "/css/ucla-lib.min.css",
        "/theme-assets/css/ucla-fractal-style.css",
    ],
    scripts: ["default", "/theme-assets/js/ucla-fractal-script.js"],
    navigation: "default",
    favicon: "/theme-assets/favicon.ico",
    // static: {
    //   mount: 'theme-assets'
    // }
});

// specify a directory to hold the theme override templates
myCustomisedTheme.addLoadPath(__dirname + "/theme");
myCustomisedTheme.addStatic(__dirname + "/theme/assets", "/theme-assets");

fractal.web.theme(myCustomisedTheme);
fractal.web.set("static.path", __dirname + "/public");
//fractal.web.set('static.mount', '/public');
// https://github.com/jwir3/fractal-status-helper
const FractalStatusHelper = require("fractal-status-helper")(fractal);
// fractal.components.set('default.collated', true);
fractal.docs.engine(
    require("@frctl/handlebars")({
        helpers: {
            componentStatuses: FractalStatusHelper.componentStatusTable,
            documentStatuses: FractalStatusHelper.documentStatusTable,
        },
    })
);
