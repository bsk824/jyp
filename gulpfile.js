const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('html', () => {
	return gulp.src('./**/*.html')
		.pipe(browserSync.reload({ stream: true }));
});
gulp.task('browserSync', () => {
	return browserSync.init({
		port: 4000,
		server: {
			baseDir: './'
		}
	})
});
gulp.task('watch', () => {
	gulp.watch('./**/*.html', gulp.series('html'));
});

gulp.task('default', gulp.parallel('watch', 'browserSync', 'html'));