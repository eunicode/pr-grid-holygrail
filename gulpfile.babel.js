// Code pieced together from

// https://css-tricks.com/gulp-for-beginners/
// https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development
// https://travismaynard.com/writing/getting-started-with-gulp
// https://github.com/hdngr/treehouse-gulp-basics/blob/master/gulpfile.js

// https://github.com/gulpjs/gulp
// https://gulpjs.com/docs/en/getting-started/quick-start
// https://browsersync.io/docs/gulp

// https://www.liquidlight.co.uk/blog/article/how-do-i-update-to-gulp-4/
// https://goede.site/setting-up-gulp-4-for-automatic-sass-compilation-and-css-injection

// https://github.com/babel/gulp-babel
// https://babeljs.io/setup.html#installation
// https://babeljs.io/docs/en/next/babel-preset-env
// https://babeljs.io/docs/en/env

// https://github.com/gulpjs/gulp/blob/master/docs/API.md
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md

// gulp.task([name,] fn)
// https://gulpjs.org/API.html#gulp-task-name-fn

// https://github.com/gulp-sourcemaps/gulp-sourcemaps

// Copy files
// https://gulpjs.com/docs/en/api/src
// https://coderwall.com/p/9uzttg/simple-gulp-copy-file-task
// https://ilikekillnerds.com/2014/07/copying-files-from-one-folder-to-another-in-gulp-js/

/* 
Build the source script file in src/scripts/, e.g. compiling with babel, minifying, etc.
Put the compiled version in build/scripts for use in index.html
Watch for changes in the source file and rebuild the build package
With each rebuild of the build package, reload the browser
*/

// Include gulp - Pre-ES6 method
// var gulp = require('gulp');

// Include gulp - ES6 method
import gulp from "gulp";

// Include modules
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import del from "del";
import sass from "gulp-sass";
import concat from "gulp-concat";
import uglify from "gulp-uglify";

// Include Browsersync plugin - Pre-ES6 method
// var browserSync = require('browser-sync').create(); // Create a Browsersync instance.

// Include Browsersync plugin - ES6 method
import browserSync from "browser-sync";

const server = browserSync.create(); // Create a Browsersync instance

// Paths object
const paths = {
  styles: {
    src: "src/styles/*.scss",
    dest: "build/styles/"
  },
  scripts: {
    src: "src/scripts/*.js",
    dest: "build/scripts/"
  },
  html: {
    src: "public/*.html",
    dest: "build/"
  }
};

// Wipe out the build directory, call before you build
const clean = () => del(["build"]);

// Copy index.html
function copy() {
  return gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest));
}

// Process styles
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(sourcemaps.write(".")) // leave write() blank if you don't want styles.css.map files
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream()); // CSS injection
}

exports.styles = styles;

// Process scripts
function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("index.min.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.scripts = scripts;

function reload(done) {
  server.reload(); // server = browserSync.create();
  done();
}

// `done`
// Gulp tasks are asynchronous and Gulp uses async-done to wait for the task's completion.
// Tasks are called with a callback parameter to call to signal completion.

function serve(done) {
  server.init({
    server: {
      baseDir: "./build"
    }
  });
  done();
}

// Watch for file changes and reload
const watch = () => {
  gulp.watch(paths.html.src, gulp.series(copy, reload)); // reload fxn defined earlier. Callback fxn can also be gulp.series(reload) or gulp.parallel(reload)
  gulp.watch(paths.styles.src, gulp.series(styles)); // Don't need reload bc of CSS injection
  gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
};

// Default Task
const dev = gulp.series(
  clean,
  copy,
  gulp.parallel(styles, scripts),
  serve,
  watch
);

export default dev;

// TO DO
// Separate `styles` and `scripts` functions into smaller functions?
// Create build task
// Concat CSS files
