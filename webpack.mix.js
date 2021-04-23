let mix = require('laravel-mix');

// mix.sass('src/scss/master.scss', 'assets/');

mix.js('src/app.js', 'js')
.sass('src/scss/master.scss', 'css')
.setPublicPath('dist')
.options({
    processCssUrls: false
});


// let mix = require('laravel-mix');
//  mix.js('src/js/main.js', 'js')
//  .sass('src/master.scss','css')
//  .setPublicPath('assets')
//  .options({
//     processCssUrls: false
// });