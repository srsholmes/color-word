var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var lrload = require('livereactload');
var envify = require("envify");
var isProd = process.env.NODE_ENV === "production";
var colors = require('colors');
require('dotenv').config();

const LOCAL_STORAGE_KEY =  process.env.LOCAL_STORAGE_KEY;
const APP_ID =  process.env.APP_ID;
const APP_KEY =  process.env.APP_KEY;
const GOOGLE_API_KEY =  process.env.GOOGLE_API_KEY;

function createBundler() {
  return browserify({
    entries: ['./app/js/app.js'],
    transform: [
      [babelify, {}],
      [envify, {
        LOCAL_STORAGE_KEY: LOCAL_STORAGE_KEY,
        APP_ID: APP_ID,
        APP_KEY: APP_KEY,
        GOOGLE_API_KEY: GOOGLE_API_KEY
      }]
    ],
    plugin: [watchify, lrload],
    debug: !isProd,
    cache: {},
    packageCache: {},
    fullPaths: !isProd
  })
}

var bundler = createBundler()
bundler.on('update', function (ids) {
  console.log('Update file...', ids)
  bundle()
})

bundler.on('log', (msg) => console.log('log...', msg))
bundle()

function bundle() {
  const start = new Date();
  console.log(`[${colors.blue(start)}] Starting '${colors.green('bundleJS')}'...`);
  bundler.bundle()
    .on('error', function(err) {
      console.log(`[${colors.blue(new Date())}] Error '${colors.red('bundleJS')}' ${err}`);
    })
    .pipe(fs.createWriteStream('./public/js/app.js')).on('finish', function() {
      const end = new Date();
      const time = end.getTime() - start.getTime();
      const timeStr = time < 1000 ? `${time} ms` : `${Math.floor(time / 1000)} seconds`;
      console.log(`[${colors.blue(end)}] Finished '${colors.magenta('bundleJS')}' after ${colors.magenta.underline(timeStr)}`);
    });
}
