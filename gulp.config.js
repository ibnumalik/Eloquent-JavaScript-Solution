module.exports = function () {
    var sass = [
        './src/sass/**/*.scss',
        '!./src/sass/vendor.scss',
    ];
    var vendorStyle = './src/sass/vendor.scss';
    var public = './public/';

    var config = {
        sass: sass,
        vendorStyle: vendorStyle,
        vendorJs: [
            './node_modules/prismjs/prism.js'
        ],
        public: public,
        publicStyle: public + 'style/',
        publicJs: public + 'js/',
    };

    return config;
}