// Gulpfile.js 
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , ts = require('gulp-typescript')
  , del = require('del');
 

gulp.task('clean', function(cb) {
    del(['server/public'], cb);
})

gulp.task('copyHTML', function () {
    'use strict';    
    del(['server/public/index.html'], function() {
      return gulp.src('src/index.html').pipe(gulp.dest('server/public/'));
    });    
});

gulp.task('copyASSETS', function () {
    'use strict';
    del(['server/public/assets/**/*.*'], function() {
      return gulp.src('src/assets/**/*.*').pipe(gulp.dest('server/public/assets/'));
    });
});

gulp.task('copyJAVASCRIPT', function () {
    'use strict';
    del(['server/public/js/**/*.js'], function() {
      return gulp.src('src/js/**/*.js').pipe(gulp.dest('server/public/js/'));
    });
});

gulp.task('generateTYPESCRIPT', function () {
  var tsResult = gulp.src('src/js/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'app.js'
      }));
  return tsResult.js.pipe(gulp.dest('server/public/js'));
});

gulp.task('build', ['copyHTML', 'copyASSETS', 'copyJAVASCRIPT', 'generateTYPESCRIPT']);
gulp.task('watch', ['build'], function () {
    'use strict';    
    gulp.watch('src/index.html', ['copyHTML']);
    gulp.watch('src/assets/**/*.*', ['copyASSETS']);
    gulp.watch('src/js/**/*.js', ['copyJAVASCRIPT']);
    gulp.watch('src/js/**/*.ts', ['generateTYPESCRIPT']);
});

gulp.task('serve', ['watch'], function () {
  nodemon({ ext: 'js'
          , ignore: ['node_modules/**/*', 'public/**/*'] })
    .on('restart', function () {
      console.log('restarted');
    });
});

gulp.task('default', ['serve']);