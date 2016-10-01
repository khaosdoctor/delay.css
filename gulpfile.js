var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build', function () {

  return gulp.src('./src/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }))
    .pipe(gulp.dest('./dist/'));

});


gulp.task('default', ['build']);

gulp.task('watch', function () {
  gulp.watch('**/*.scss', ['build']);
})