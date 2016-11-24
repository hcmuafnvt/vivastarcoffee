var minifyCss = require('gulp-minify-css'),    
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');


module.exports = function(gulp) {    
    gulp.task('minifycss', function() {
        gulp.src(['./reskin/public/css/built/*.css', './reskin/public/css/style.css'])
            .pipe(sourcemaps.init())
            .pipe(minifyCss())
            .pipe(concat('style.min.css'))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./reskin/public/css'));
    });
};