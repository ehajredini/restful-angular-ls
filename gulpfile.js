var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        port: 3000
    });
});

gulp.task('default', ['connect']);