var less = require('gulp-less');

module.exports = function(gulp) {    
    gulp.task('less', function() {
        gulp.src(['./reskin/less/**/*.less'])            
            .pipe(less())                    
            .pipe(gulp.dest('./reskin/public/css'));
    });
};