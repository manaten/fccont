'use strict';

const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const {argv} = require('yargs');
const path = require('path');

const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const envify = require('envify/custom');
const uglifyify = require('uglifyify');
const collapse = require('bundle-collapser/plugin');


const ENVIRONMENT = argv.env || process.env.NODE_ENV || 'production';
const DEBUG = argv.debug === true;
gulpUtil.log(`env: ${ENVIRONMENT}`);
gulpUtil.log(`debug: ${DEBUG}`);

const SRC_DIR = path.join(__dirname, 'src/client');
const BUILD_DIR = path.join(__dirname, 'build/client');
const TMP_DIR = path.join(__dirname, 'tmp');

function onError(err) {
  gulpUtil.log(err.message);
  this.emit('end');
}

// build js
// https://gist.github.com/Sigmus/9253068 を参考
function buildScript(file, watch) {
  const bundler = browserify({
    cache       : {},
    packageCache: {},
    entries     : [`${SRC_DIR}/js/${file}`],
    debug       : DEBUG
  });
  if (watch) {
    bundler.plugin(watchify, {poll: true});
  }
  bundler.transform(babelify, {
    presets: ['es2015', 'react'],
    'plugins': [
      'syntax-async-functions',
      'transform-async-to-generator'
    ]
  });
  bundler.transform(envify({
    NODE_ENV   : ENVIRONMENT,
    RAIDEN_ROOM: process.env.RAIDEN_ROOM
  }), {global: true});
  if (ENVIRONMENT === 'production') {
    bundler.transform(uglifyify, {global: true});
    bundler.plugin(collapse);
  }

  function rebundle() {
    return bundler.bundle()
      .on('error', onError)
      .pipe(source(file))
      .pipe(gulp.dest(`${BUILD_DIR}/js`));
  }
  bundler.on('update', () => {
    gulpUtil.log('Rebundling...');
    rebundle();
  });
  bundler.on('log', msg => gulpUtil.log(msg));
  return rebundle();
}
gulp.task('build:js', () => buildScript('app.js', false));
gulp.task('watch:js', () => buildScript('app.js', true));

gulp.task('copy:assets', () =>
  gulp.src(`${SRC_DIR}/{index.html,manifest.json,image/**}`)
    .pipe(gulp.dest(BUILD_DIR))
);

gulp.task('watch:assets', ['copy:assets'], () => {
  gulp.watch([`${SRC_DIR}/{index.html,manifest.json,image/**}`], ['copy:assets']);
});


gulp.task('build', ['copy:assets', 'build:js']);
gulp.task('watch', ['watch:assets', 'watch:js']);
