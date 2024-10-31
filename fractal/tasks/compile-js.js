const del = require('del');
const esbuild = require('esbuild');

function compile() {
  del(['public/js/*']);
  
  esbuild.build({
    entryPoints: ['js/ucla-lib-scripts.js'],
    bundle: true,
    outfile: './public/js/ucla-lib-scripts.js',
    allowOverwrite: true,
    format: 'iife',
    globalName: 'Bruin'
  });
  esbuild.build({
    entryPoints: ['js/ucla-lib-scripts.js'],
    bundle: true,
    outfile: './public/js/ucla-lib-scripts.esm.js',
    allowOverwrite: true,
    format: 'esm',
    globalName: 'Bruin'
  });
  esbuild.build({
    entryPoints: ['js/ucla-lib-scripts.js'],
    bundle: true,
    outfile: './public/js/ucla-lib-scripts.cjs.js',
    allowOverwrite: true,
    format: 'cjs',
    globalName: 'Bruin'
  });
}

compile();