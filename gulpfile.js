
var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('default', function() {
    console.log('Hello Gulp!');
});
gulp.task('testLess', function () {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});