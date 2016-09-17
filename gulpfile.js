/**
 * gulp watch
 * Created by zhaobao on 9/16/16.
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const image = require('gulp-imagemin');
const css = require('gulp-minify-css');
const uglify = require('gulp-uglify');

gulp.task('fonts', function() {
    return gulp.src("./app/source/fonts/*")
        .pipe(gulp.dest('../themes/admin/source/fonts/'));
});

gulp.task('static', function() {
    return gulp.src("./*.yml")
        .pipe(gulp.dest('../themes/admin/'));
});

gulp.task('language', function() {
    return gulp.src("./languages/*.yml")
        .pipe(gulp.dest('../themes/admin/languages/'));
});

gulp.task('js', function() {
    return gulp.src("./app/source/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('../themes/admin/source/js/'));
});

gulp.task('image', function() {
    return gulp.src("./app/source/img/*")
        .pipe(image({optimizationLevel: 5}))
        .pipe(gulp.dest('../themes/admin/source/images/'));
});

gulp.task('sass', function () {
    return gulp.src('./app/source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(css())
        .pipe(gulp.dest('../themes/admin/source/css'));
});

gulp.task('css', function () {
    return gulp.src('./source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(css())
        .pipe(gulp.dest('./source/css'));
});

gulp.task('jade', function() {
    gulp.src('./app/layout/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('../themes/admin/layout'))
});

gulp.task('do', ['sass', 'jade', 'image', 'js', 'language', 'static', 'fonts']);

gulp.task('watch', function() {
    gulp.watch("./_app/source/scss/**/*.scss", ['sass']);
    gulp.watch("./_app/layout/*.jade", ["jade"]);
});
gulp.task('default', ['css']);


