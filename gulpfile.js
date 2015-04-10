/**
 * Created by ron on 4/10/2015.
 */
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

var SRC = 'src/js/main.js';
var OUT = 'build.js';
var DEST = 'dist/js';

gulp.task('build', function() {
    gulp.src(SRC)
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat(OUT))
        .pipe(gulp.dest(DEST));
});

gulp.task('copyIndex', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('copyCSS', function() {
    gulp.src('src/styles.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'copyIndex', 'copyCSS']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});