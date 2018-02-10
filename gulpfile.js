// Code pieced together from 
// https://css-tricks.com/gulp-for-beginners/
// https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development
// https://travismaynard.com/writing/getting-started-with-gulp

// Include gulp
var gulp = require('gulp');

// Include plugin
var browserSync = require('browser-sync').create(); // create a browser sync instance.

// Development Tasks 

// Start BrowserSync server
// To trigger this command, from the terminal run `gulp browserSync`
// BrowserSync monitors the directory defined in baseDir and whenever we run the command, the page reloads.
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'src'
      },
    });
  });

// Watch for files changes and reload   
gulp.task('watch', ['browserSync'], function (){
    // Reloads the browser whenever HTML, CSS, JS files change
    // gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp. watch('src/*.html', browserSync.reload);
    gulp.watch('src/css/*.css', browserSync.reload); 
    gulp.watch('src/js/*.js', browserSync.reload); 
});

// Default Task
gulp.task('default', ['watch']);