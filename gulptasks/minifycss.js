var minifyCss = require('gulp-minify-css'),    
    concat = require('gulp-concat');


module.exports = function(gulp) {    
    gulp.task('minifycss', function() {
        gulp.src(['./reskin/public/css/built/*.css'])
            .pipe(minifyCss())
            .pipe(concat('style.min.css'))            
            .pipe(gulp.dest('./reskin/public/css'));
    });
};