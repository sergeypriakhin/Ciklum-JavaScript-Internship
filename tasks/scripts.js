import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import connect from 'gulp-connect';

gulp.task('scripts', () => {
  return gulp.src('app/blocks/**/*.js')
    .pipe(babel())
    // .pipe(browserify({debug: true}))
    .pipe(uglify()) 
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist/assets/scripts')) 
    .pipe(connect.reload());
});