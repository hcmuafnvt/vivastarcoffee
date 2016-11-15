module.exports = function(gulp) {
    gulp.task('copyfiles', function() {
        gulp.src(['bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('reskin/public/js/libs/'))
    });
};