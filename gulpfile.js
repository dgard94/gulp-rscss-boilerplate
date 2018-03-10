var gulp = require("gulp"),
    sass = require("gulp-sass"),
    imagemin = require("gulp-imagemin"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync"),
    webpack = require("webpack-stream");

// Style
gulp.task("sass", () => {
  return gulp.src("./src/sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest("./dist/css"));
})

// Javascript
gulp.task("script", () => {
  return gulp.src("./src/js/app.js")
      .pipe(webpack(require("./webpack.config.js")))
      .pipe(gulp.dest("./dist/js"));
})

// Imagemin
gulp.task("imagemin", () => {
  return gulp.src("./src/images/*")
      .pipe(imagemin({
        progressive: true
      }))
      .pipe(gulp.dest("./dist/images"))
})

// Browser sync And Watch
gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });

  gulp.watch("./src/sass/**/*.scss", ['sass']);
  gulp.watch("./src/js/**/*.js", ['script']);

  gulp.watch("./dist/css/**/*.css").on("change", browserSync.reload);
  gulp.watch("./dist/js/app.js").on("change", browserSync.reload);
  gulp.watch("./dist/*.html").on("change", browserSync.reload);
})
