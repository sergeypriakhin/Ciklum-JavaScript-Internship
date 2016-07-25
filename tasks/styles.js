'use strict';

import gulp from 'gulp';
import gulpIf from 'gulp-if';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import globImporter from 'sass-glob-importer';
import autoprefixer from 'gulp-autoprefixer';
import sassLint from 'gulp-sass-lint';
import plumber from 'gulp-plumber';
import errorHandler from 'gulp-plumber-error-handler';
import csscomb from 'gulp-csscomb';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import connect from 'gulp-connect';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('styles', () => {
  return gulp.src('app/blocks/app.scss')
    .pipe(plumber({errorHandler: errorHandler(`Error in \'styles\' task`)}))
    .pipe(gulpIf(isDebug, sourcemaps.init()))
    .pipe(sass({ importer: globImporter() }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // .pipe(sassLint())
    .pipe(sass().on('error', sass.logError))
    .pipe(csscomb())
    .pipe(gulpIf(isDebug, sourcemaps.write()))
    .pipe(gulp.dest('./dist/assets/styles/'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulpIf(isDebug, sourcemaps.write()))
    .pipe(gulp.dest('./dist/assets/styles/'))
    .pipe(connect.reload()); // перезагрузка сервера
});