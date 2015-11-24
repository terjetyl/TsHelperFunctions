var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sass = require('gulp-sass');

gulp.task('scripts', function() {
  var tsResult = gulp.src('*.ts')
    .pipe(ts({
        declarationFiles: true,
        noExternalResolve: true,
        noImplicitAny: false,
        out: 'app.js'
      }));
 
  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});

gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.ts', ['scripts']);
});