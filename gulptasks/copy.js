module.exports = function(gulp) {
    gulp.task('copyfiles', function() {
        gulp.src(['bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('./public/js/libs/'));

        gulp.src(['bower_components/aos/dist/aos.css'])
        .pipe(gulp.dest('./public/css/libs/'));

        gulp.src(['bower_components/aos/dist/aos.js'])
        .pipe(gulp.dest('./public/js/libs/'));
    });
};