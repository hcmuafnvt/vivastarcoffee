var gulp = require('gulp');

require('load-gulp-tasks')(gulp, {
    pattern: ['gulptasks/**/*.js']
});

// copy files
gulp.task('copy', ['copyfiles']);

// default
gulp.task('default', ['less', 'minifycss']);
