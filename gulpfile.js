const { src, dest, series } = require('gulp');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const serveSass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');

exports.default = () => (
	gulp.src('src/app.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('dist'))
);


function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(dest("./css"))
        .pipe(browseSync.stream());
};

exports.serve = serveSass;