import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import cached from 'gulp-cached';
import connect from 'gulp-connect'; 

gulp.task('images', () => {
	return gulp.src('app/public/images/*')
	.pipe(cached(imagemin({optimizationLevel: 3, progressive: true, interlaced: true })))
	.pipe(gulp.dest('dist/assets/images/'))
	.pipe(connect.reload()); // перезагрузка сервера
})