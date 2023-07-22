const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const scssSrc = "assets/styles/main.scss"; // Update the path to the correct location
const cssDest = "dist/css";

function buildStyles() {
  return src(scssSrc).pipe(sass()).pipe(dest(cssDest));
}

function watchTask() {
  watch("assets/styles/**/*.scss", buildStyles); // Update the path to watch the correct location
}

exports.default = series(buildStyles, watchTask);
