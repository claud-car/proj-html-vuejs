let mix = require('laravel-mix');

// mix.sass('src/scss/master.scss', 'assets/');

mix.sass('src/scss/master.scss', 'assets').options({
    processCssUrls: false
});