var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('build', function() {

gulp.src('./src/*.scss')
.pipe(plumber())
.pipe(sass())
.pipe(uglify())
.pipe(gulp.dest('./dist/');

});


gulp.task('default', ['sass']);

gulp.watch('**/*.scss', ['sass']);
