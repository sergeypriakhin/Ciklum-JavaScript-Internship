import gulp from 'gulp';


gulp.task('watch', ['templates', 'styles', 'copy', 'images', 'scripts'], () => {

  gulp.watch('app/pages/*.jade', ['templates']);
  gulp.watch('app/blocks/**/*.jade', ['templates']);
  gulp.watch('app/partials/*.jade', ['templates']);

  gulp.watch('app/styles/*.scss', ['styles']);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/blocks/**/*.scss', ['styles']);

  gulp.watch('app/blocks/**/*.js', ['scripts']);

  gulp.watch('app/public/**/*', ['copy']);

  gulp.watch('app/public/images/*', ['images']);

});