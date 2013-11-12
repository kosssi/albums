module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        lesslint: {
            src: ['src/**/*.less']
        },
        clean: {
            dist: ['css']
        },
        recess: {
            options: {
                compile: true
            },
            sscank: {
                src: ['src/less/website.less'],
                dest: 'dist/css/website.css'
            }
        },
        jekyll: {
            doc: {}
        },
        "imagemagick-resize":{
            xs:{
                from:'src/pictures/',
                to:'dist/pictures/xs/',
                files:'*.JPG',
                props:{
                    quality: 1,
                    width:300
                }
            },
            s:{
                from:'src/pictures/',
                to:'dist/pictures/s/',
                files:'*.JPG',
                props:{
                    quality: 1,
                    width:480
                }
            },
            m:{
                from:'src/pictures/',
                to:'dist/pictures/m/',
                files:'*.JPG',
                props:{
                    quality: 1,
                    width:768
                }
            },
            l:{
                from:'src/pictures/',
                to:'dist/pictures/l/',
                files:'*.JPG',
                props:{
                    quality: 1,
                    width:992
                }
            },
            xl:{
                from:'src/pictures/',
                to:'dist/pictures/xl/',
                files:'*.JPG',
                props:{
                    quality: 1,
                    width:1382
                }
            },
            xxl:{
                from:'src/pictures/',
                to:'dist/pictures/xxl/',
                files:'*.JPG',
                props:{
                    quality: 1,
                    width:1600
                }
            }
        },
        fileregexrename: {
            dist: {
                files: {
                    "src/pictures/": "src/pictures/*" // includes files in dir
                },
                options: {
                    replacements: [{
                        pattern: "PACS TIB&ANNIA Pages_OK",
                        replacement: "picture"
                    }]
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-imagemagick');
    grunt.loadNpmTasks('grunt-file-regex-rename');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'recess', 'jekyll']);
};
