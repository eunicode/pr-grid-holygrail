// Code pieced together from
// https://css-tricks.com/gulp-for-beginners/
// https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development
// https://travismaynard.com/writing/getting-started-with-gulp
// https://github.com/gulpjs/gulp
// https://browsersync.io/docs/gulp
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md

// Include gulp
// var gulp = require('gulp'); // pre-ES6
import gulp from "gulp";

// Include plugin
// var browserSync = require('browser-sync').create(); // create a browser sync instance.
// const browserSync = require("browser-sync").create(); // also works
import browserSync from "browser-sync";

const server = browserSync.create(); // Create a browser sync instance

const paths = {
  styles: {
    src: "src/css/*.css"
  },
  scripts: {
    src: "src/js/*.js"
  }
};

// Development Tasks

// Start BrowserSync server
// To trigger this command, from the terminal run `gulp browserSync`
// BrowserSync monitors the directory defined in baseDir, and whenever we run
// the command, the page reloads.

// gulp.task("browserSync", () => {
//   browserSync.init({
//     server: {
//       baseDir: "src"
//     }
//   });
// });

function reload(done) {
  server.reload(); // const server = browserSync.create();
  done();
}

// `done`
// Gulp tasks are asynchronous and Gulp uses async-done to wait for the task's completion.
// Tasks are called with a callback parameter to call to signal completion.

function serve(done) {
  server.init({
    server: {
      baseDir: "src"
    }
  });
  done();
}

// Watch for file changes and reload
// gulp.task("watch", ["browserSync"], () => {
//   // Reloads the browser whenever HTML, CSS, JS files change
//   // gulp.watch('src/*.html').on('change', browserSync.reload);
//   gulp.watch("src/*.html", browserSync.reload);
//   gulp.watch("src/css/*.css", browserSync.reload);
//   gulp.watch("src/js/*.js", browserSync.reload);
// });

const watch = () => {
  gulp.watch("src/*.html", reload); // reload fxn defined earlier
  gulp.watch(paths.styles.src, reload);
  gulp.watch(paths.scripts.src, reload);
};

// Default Task
// gulp.task("default", ["watchFiles"]);
const dev = gulp.series(serve, watch);
export default dev;

// `gulp` command execution order
// 'default'
// 'serve'
// 'watch'

// Before it was
// 'browserSync' (start server)
// 'watch'
// 'default'
