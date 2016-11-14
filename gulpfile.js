var gulp = require('gulp');

require('load-gulp-tasks')(gulp, {
    pattern: ['gulptasks/**/*.js']
});

gulp.task('default', ['minifycss']);
