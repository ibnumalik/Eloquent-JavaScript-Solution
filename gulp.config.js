module.exports = function () {
    var sass = './src/sass/**/*.scss';
    var public = './public/';

    var config = {
        sass: sass,
        vendorCss: [
            './node_modules/materialize-css/sass/materialize.scss',
            './node_modules/prism-themes/themes/prism-duotone-light.css'
        ],
        vendorJs: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/materialize-css/dist/js/materialize.js',
            './node_modules/prismjs/prism.js'
        ],
        public: public,
        publicStyle: public + 'style/',
        publicJs: public + 'js/',
    };

    return config;
}