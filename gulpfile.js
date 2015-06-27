'use strict';

var gulp = require('gulp');
var rider = require('rider');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');

/*var tpl2js = require('gulp-tpl2js');

gulp.task('html2js', function () {
    return gulp.src('src/!**!/!*.tpl', {base: 'src'})
        .pipe(tpl2js({
            type: 'amd'
        }))
        .pipe(gulp.dest('src'));
});*/

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
    gulp.watch('src/**/*.tpl', ['html2js']);
    gulp.watch('src/**/**.styl', ['stylus']);
});