var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var concat = require('gulp-concat');

var config = require('./gulp.config')();

gulp.task('style', ['vendorStyle'], function () {
    return gulp.src(config.sass)
        .pipe(gulpSass())
        .pipe(gulp.dest(config.publicStyle));
});

gulp.task('vendorStyle', function () {
    return gulp.src(config.vendorCss)
        .pipe(gulpSass())
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.publicStyle))
});

gulp.task('vendorJs', function () {
    return gulp.src(config.vendorJs)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.publicJs))
});