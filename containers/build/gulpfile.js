var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

/********** Jobs ***********/

gulp.task('sass', function() {

    return gulp.src('src/assets/sass/main.scss')
        .pipe(plumber({
            errorHandler: (e) => console.error(e)
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({ errLogToConsole: true, outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('src/public/assets/css'));
});

gulp.task('browserify', function () {

    return browserify({
        basedir: '.',
        debug: false,
        entries: [ 'src/assets/ts/index.tsx' ],
    }).
    plugin(tsify).
    transform(babelify, { presets: ["es2015"], extensions: [ '.ts' ] }).
    bundle().
    on("error", e => console.error(e)).
    pipe(source('index.js')).
    pipe(gulp.dest('src/public/js/'));
});

gulp.task('webpack', function () {

  var myConfig = Object.create(webpackConfig);

  webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			colors: true
		}));
		//callback();
	});
});



/********** Entry Points ***********/

gulp.task('build', ['sass', 'webpack']);
gulp.task('watch', ['sass', 'webpack'], function() {

    gulp.watch('src/assets/sass/**/*.scss', ['sass']);
    gulp.watch('src/assets/ts/**/*.ts*', ['webpack']);
});

gulp.task('default', ['build']);
