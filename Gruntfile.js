module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      target: {
        files: {
          'dist/index.html': './index.html'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/index.css': './*.css'
        }
      }
    },
    uglify: {
      release:{
        files:{
          'dist/index.js': './index.js'
        }
      }
    },
    copy: {
      images: {
        src: '*.jpg',
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('min', ['uglify', 'cssmin', 'htmlmin', 'copy']);
};
