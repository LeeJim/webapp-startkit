let gulp = require('gulp')
let { src, dest, parallel, watch } = gulp
let minifyCSS = require('gulp-csso')
let WebServer = require('gulp-webserver')
let postcss = require('gulp-postcss')
let autoprefixer = require('autoprefixer')
var pxtoviewport = require('postcss-px-to-viewport')

function css() {
  var processors = [
    pxtoviewport({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    })
  ];
  return src('styles/*.css')
    .pipe(postcss([ autoprefixer() ]))
    .pipe(postcss(processors))
    .pipe(minifyCSS())
    .pipe(dest('styles/build'))
}

function server() {
  gulp.src('./').pipe(WebServer({
    port: 8080,
    host: 'localhost',
    livereload: true,
    open: 'http://localhost:8080/index.html'
  }));
}

exports.css = css;
exports.default = parallel(css, server, () => {
  watch('./styles/*.css', css)
});