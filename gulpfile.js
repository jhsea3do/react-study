var 
    fs   = require('fs'),
  path   = require('path'),
  gulp   = require('gulp'),
  del    = require('del'),
  gls    = require('gulp-live-server');

gulp.task('clean', function() {
  del(['build', 'dist'])
});

gulp.task('serve', function() {
  var server = gls.static('.', 3000);
  server.start();
  gulp.watch(['public/**/*', 'src/**/*'], server.notify);
});

gulp.task('build', function() {
  var dir = path.join(__dirname, 'build');
  if(fs.existsSync(dir)) { return; }
  fs.mkdirSync( dir );
});

gulp.task('dist', function() {
  var dir = path.join(__dirname, 'dist');
  if(fs.existsSync(dir)) { return; }
  fs.mkdirSync( dir );
});

gulp.task('default', ['clean', 'build', 'dist']);
