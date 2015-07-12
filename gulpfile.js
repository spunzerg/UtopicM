// Gulpfile.js 
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon');
 
gulp.task('serve', function () {
  nodemon({ ext: 'js'
          , ignore: ['node_modules/**/*', 'public/**/*'] })
    .on('restart', function () {
      console.log('restarted');
    });
});

gulp.task('default', ['serve']);