gulp = require('gulp')
coffeelint = require('gulp-coffeelint')
stylus = require('gulp-stylus')
uglify = require('gulp-uglify')
browserify = require('browserify')
coffeeify = require('coffeeify')
del = require('del')
buffer = require('vinyl-buffer')
vinyl = require('vinyl-source-stream')
watch = require('gulp-watch')
coffee  = require 'gulp-coffee'
concat  = require 'gulp-concat'
gutil   = require 'gulp-util'

paths =
  assets: [
    './src/assets/**/*.*'
    './src/index.html'
  ]
  app: './src'
  dist: './dist'
  css: './src/css/main.styl'
  server: './src/server.coffee'
  js: './src/js/app.coffee'
  lint: './src/js/*.coffee'

gulp.task 'lint', ->
  gulp.src(paths.lint).pipe(coffeelint()).pipe(coffeelint.reporter()).pipe coffeelint.reporter('failOnWarning')

gulp.task 'clean', (cb) ->
  del paths.dist, cb
  return

gulp.task 'copy-assets', ->
  gulp.src(paths.assets, base: paths.app).pipe gulp.dest(paths.dist)

gulp.task 'compile-css', ->
  gulp.src(paths.css).pipe(stylus(compress: true)).pipe gulp.dest(paths.dist)

gulp.task 'compile-js', ->
  browserify(paths.js).transform(coffeeify).bundle().pipe(vinyl('main.js')).pipe(buffer()).pipe(uglify()).pipe gulp.dest(paths.dist)

gulp.task 'compile-server', ->
  gulp.src paths.server
  .pipe coffee bare: true
  .pipe gulp.dest paths.dist
  .on 'error', gutil.log

gulp.task 'default', [ 'clean' ], ->
  gulp.start 'copy-assets', 'compile-css', 'compile-js', 'compile-server', 'watch'
  return

gulp.task 'watch', ->
  gulp.watch 'src/js/*.coffee', [
    'compile-js'
  ]
  gulp.watch 'src/server.coffee', [
    'compile-server'
  ]
  gulp.watch 'src/assets/*.json', [
    'copy-assets'
  ]
  return
