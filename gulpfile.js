var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
  browserSync.init({
    server: "www"
  });
  gulp.watch("www/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);