var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var importCss = require('gulp-import-css');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('default', function() {
  console.log('Para minify do CSS: gulp minify-css')
});

gulp.task('minify-css', function() {
  return gulp.src('css/meliodas.css')
    .pipe(importCss())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});
