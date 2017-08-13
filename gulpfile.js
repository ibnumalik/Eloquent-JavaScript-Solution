var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var pump = require('pump');

var config = require('./gulp.config')();

gulp.task('style', ['vendorStyle'], function () {
    return gulp.src(config.sass)
        .pipe(gulpSass())
        .pipe(gulp.dest(config.publicStyle));
});

gulp.task('vendorStyle', function () {
    return gulp.src(config.vendorStyle)
        .pipe(gulpSass())
        .pipe(gulp.dest(config.publicStyle))
});

gulp.task('vendorJs', function () {
    return gulp.src(config.vendorJs)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.publicJs))
});

gulp.task('js:min', function (cb) {
    pump([
        gulp.src(config.vendorJs),
        uglify(),
        concat('vendor.js'),
        gulp.dest(config.publicJs)
    ], cb);
});

gulp.task('style:min', function (cb) {
    pump([
        gulp.src(config.vendorStyle),
        gulpSass(),
        cleanCss(),
        gulp.dest(config.publicStyle)
    ]);
});

gulp.task('build', ['js:min', 'style', 'style:min'] );