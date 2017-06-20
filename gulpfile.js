var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var csscomb = require('gulp-csscomb');
var cssbeautify = require('gulp-cssbeautify');
var gcmq = require('gulp-group-css-media-queries');



gulp.task('browser-sync',['sass','css'], function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        notify: false
    });
});

gulp.task('css', function() {
    return gulp.src('./app/css/*.css')
        .pipe(cssbeautify({
            indent: ' ',
            openbrace: 'end-of-line',
            autosemicolon: true
        }))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass', function(){
    gulp.src('scss/*.scss')
        .pipe(sass({includePaths: require('bourbon').includePaths})
        .on('error', notify.onError()))
        .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
        .pipe(csscomb())
        .pipe(gcmq())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch('scss/*.scss',['sass']);
    gulp.watch('./app/js/*.js').on('change', browserSync.reload);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
