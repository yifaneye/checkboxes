const {src, dest, series} = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const SOURCE = 'src/';
const DESTINATION = 'dist/css/';

async function clean(cb) {
    await del(`${DESTINATION}`);
    cb();
}

function css(cb) {
    src(`${SOURCE}/scss/*.scss`)
		.pipe(sass())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest(`${DESTINATION}`));
    cb();
}

exports.clean = clean;
exports.css = css;

exports.default = series(clean, css);
