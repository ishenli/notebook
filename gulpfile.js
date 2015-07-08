'use strict';

var gulp = require('gulp');
var rider = require('rider');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');

gulp.task('stylus', function(){
    var processors = [
        require('autoprefixer')('last 1 version'),
        require('css-mqpacker')
    ];
    gulp.src('src/css/main.styl')
        .pipe(stylus({ use: rider(), compress: false }))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./src/'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/**.styl', ['stylus']);
});