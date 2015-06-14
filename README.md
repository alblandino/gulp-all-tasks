# gulp-all-tasks
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/jblandino/gulp-all-tasks)

[![Gulpjs](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png)](https://gitter.im/jblandino/gulp-all-tasks)


## Installation
    npm install gulp-all-tasks --save-dev

### Features
You can install any plugin and this module you can convert the name to a function within gulp, For example, if you install grunt-uglify you can use it inside grunt as grunt_uglify()

### Example
	- npm install gulp-uglify --save-dev
	- npm install gulp-concat --save-dev

```javascript
var gulp = require('gulp');
require('gulp-all-tasks')();

gulp.task('default', function(){
	gulp.src('src/*.js')
		.pipe(gulp_uglify())
		.pipe(gulp.dest('dest'));
});

gulp.task('concat', function() {
  return gulp.src('./lib/*.js')
    .pipe(gulp_concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
```

## Load all task by other package.json file?
```javascript
var gulp = require('gulp');
require('gulp-all-tasks')({package:'other/package/file'});
```

## Load all task by other prefix?
```javascript
var gulp = require('gulp');
require('gulp-all-tasks')({prefix:['other-*','@*/other-*']});
```

## Load all task by other scope?
```javascript
var gulp = require('gulp');
require('gulp-all-tasks')({dependencies:['dependencies', 'otherScope']});
```

## Want to contribute?

> All help are more than welcome!

#### Pre-requesites

 - [node.js](http://nodejs.org/).
 - [Gulp](http://gulpjs.com/).
 - [Mocha](http://mochajs.org/) it's fun.

#### Development Workflow

 1. **[Fork](https://github.com/jblandino/gulp-all-tasks/fork)** this respository.
 2. **Clone** your fork and create a feature branch from develop.
        git clone git@github.com:<your-username>/grunt-all-tasks.git
        git fetch origin
        git checkout dev
        git checkout -b feature-<new_feature>
 3. **Install** development dependencies.
        npm install
 4. **Code** and be happy!
 5. **Test** your code using Mocha.
 6. Submit a **pull request** and thanks.

Questions? [Hit me](https://github.com/jblandino/).

## Tests

To run all tests:

    npm test

### Credits

**gulp-all-tasks** was created by [Joel A. Jaime](http://github.com/jblandino) for the world.
