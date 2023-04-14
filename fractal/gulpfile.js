'use strict';

const { src, series, dest, parallel, watch, task } = require('gulp');
const concat = require('gulp-concat');
const gulpStylelint = require('gulp-stylelint');
const del = require('del');
const fractal = require('./fractal.config');
const eslint = require('gulp-eslint');
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const image = require('gulp-image');

// Test if Gulp is installed.
function defaultTask (cb) {
  cb();
}

// UCLA Web Component Library CSS stylesheet

function watchStyles (done) {
  watch('scss/**/*.scss', series(generateCompLibStyles, lintSassWatch));
  watch('theme/assets/scss/**/*.scss', series(generateDocStyles, docLintSassWatch));
  done();
}

function generateCompLibStyles () {
  return src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(concat('ucla-lib.css'))
    .pipe(sourcemaps.write(''))
    .pipe(dest('build/css'));
}

function compressCompLibStyles () {
  return src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('ucla-lib.min.css'))
    .pipe(sourcemaps.write(''))
    .pipe(dest('build/css'));
}

function lintSassWatch () {
  return src('scss/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

// Fractal Docs CSS stylesheet

function generateDocStyles () {
  return src('theme/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('ucla-fractal-theme.css'))
    .pipe(sourcemaps.write(''))
    .pipe(dest('build/theme-assets/css'));
}

function docLintSassWatch () {
  return src('theme/assets/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

// ES Lint Notes
// eslint() attaches output to the "eslint" property to be used by other modules.
// eslint.format() outputs the lint results to the console.
// Alternatively use eslint.formatEach() (see Docs).
// To have the process exit with an error code (1) on
// lint error, return the stream and pipe to failAfterError last use:
// .pipe(eslint.failAfterError());

function watchJavascript (done) {
  watch('js/**/*.js', series(generateCompLibScripts, lintJavascriptLib));
  watch('theme/assets/js/**/*.js', series(generateDocScripts, lintJavascriptDoc));
  done();
}

function lintJavascriptLib () {
  return src('js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
}

function lintJavascriptDoc () {
  return src('theme/assets/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
}

// UCLA Web Component Library Scripts

function generateCompLibScripts () {
  return src('js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('ucla-lib-scripts.js'))
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
    }))
    .pipe(sourcemaps.write(''))
    .pipe(dest('public/js'));
}

// Fractal Docs Scripts

function generateDocScripts () {
  return src(['theme/assets/js/**/**.js'])
    .pipe(concat('ucla-fractal-theme.js'))
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
    }))
    .pipe(dest('build/theme-assets/js'));
}


// Clean unnecessary files

function cleanScriptsStyles () {
  return del([
    'build/theme-assets/js/*',
    'build/theme-assets/css/*'
  ]);
}

/*
 * Configure a Fractal instance.
 */

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

/*
 * Fractal tasks

  * Start the Fractal server
  *
  * In this example we are passing the option 'sync: true' which means that it will
  * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
  * Obviously this is completely optional!
  *
  * This task will also log any errors to the console.
  */

function fractalStart () {
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
}

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

function fractalBuild () {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) =>
    logger.update(`Exported ${completed} of ${total} items`, 'info')
  );
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
}



// gulp
exports.default = defaultTask;

// gulp watch
exports.watch = series(
  fractalStart,
  watchJavascript,
  watchStyles,
  cleanScriptsStyles,
  generateCompLibScripts,
  generateDocScripts,
  generateCompLibStyles,
  compressCompLibStyles,
  generateDocStyles
);

// gulp build
exports.build = series(
  cleanScriptsStyles,
  generateCompLibScripts,
  generateDocScripts,
  generateCompLibStyles,
  compressCompLibStyles,
  generateDocStyles,
  fractalBuild
);

