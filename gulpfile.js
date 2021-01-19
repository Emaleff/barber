const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');


gulp.task('less', function () {
    return gulp.src(['./less/main.less', './less/adaptive.less'])
        .pipe(less({
            paths: [path.join('./css', 'less', 'includes')]
        }))
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('concat:css', function () {
    return gulp.src(['./css/animate.min.css', './css/slick.css', './css/slick-theme.css', './node-modules/jquery-ui-dist/jquery-ui.min.css', './node-modules/jquery-ui-dist/jquery-ui.theme.min.css', './css/main.min.css'])
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./css'));
})

gulp.task('less:watch', function () {
    gulp.watch(['./less/main.less', './less/adaptive.less'], gulp.series('less'));
});