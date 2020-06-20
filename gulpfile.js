const {src, dest, series} = require('gulp');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const SOURCE = 'src/';
const DESTINATION = 'dist/';

async function clean(cb) {
    await del(`${DESTINATION}`);
    cb();
}

function css(cb) {
    src(`${SOURCE}/**/*.css`)
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest(`${DESTINATION}`));
    cb();
}

exports.clean = clean;
exports.css = css;

exports.default = series(clean, css);
