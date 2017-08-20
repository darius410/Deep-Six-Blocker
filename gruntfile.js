module.exports = function(grunt) {
    
    grunt.initConfig({
 
   sass: {
        dist: {
            files: {
                'css/small.css': 'css/small.scss',
                'css/medium.css':'css/medium.scss',
                'css/large.css':'css/large.scss'
                  }
            },
               options: {                       // Target options
                sourcemap: 'none',
//                noCache:'true'
              },
         },
    watch: {
      
          css: {
            files: ['css/*.scss'],
            tasks: ['sass','concat'],
              },
        }, concat: {
                dist: {
                  src: ['css/small.css', 'css/medium.css', 'css/large.css'],
                  dest: 'css/app.css',
                },
          },  
cssmin: {
      target: {
        files: {
            'css/app.css': ['css/small.css','css/medium.css','large.css']
                },
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      },
    },
     browserSync: {
            default_options: {
                    bsFiles: {
                            src: [
                                     "css/*.css",
                                     "css/*.scss",
                                     "*.html"
                                
                                    ]
                    },
    options: {
      watchTask: true,
      server: {
        baseDir: "./"
      }
    }
  }
}
});
    
    grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-compress');
     grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['browserSync','watch','sass','concat','cssmin']);
  // Do grunt-related things in here
};