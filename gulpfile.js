var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var cleanCSS = require('gulp-clean-css');



gulp.task('browser-sync',['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        notify: false
    });
});

gulp.task('sass', function(){
    gulp.src('scss/*.scss')
        .pipe(sass({includePaths: require('bourbon').includePaths})
        .on('error', notify.onError()))
        .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch('scss/*.scss',['sass']);
    gulp.watch('./app/js/*.js').on('change', browserSync.reload);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
