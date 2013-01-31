/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}
		},
		less: {
			production: {      
				options: {
					//paths: ["src/less/bootstrap"],
					yuicompress: true
				},
				files: {
					"public/css/bootstrap-responsive.css":"src/less/bootstrap/responsive.less",
					"public/css/app.css":"src/less/app.less"
				}
			}
		},
		lint: {
			files: [
				'grunt.js',
				'src/js/app.js'
			]
		},

		// qunit: {
		//     files: ['test/**/*.html']
		// },

		concat: {
			dist: {
				src: [
					'src/js/modernizr.js',
					'src/js/app.js'
				],
				dest: 'public/js/app.src.js'
			}
		},

		min: {
			dist: {
				src: [
					'<config:concat.dist.dest>'
				],
				dest: 'public/js/app.js'
			}
		},
		watch: {
			less: {
				files: 'src/less/**/*.less',
				tasks: ['less'],
				options: {
					interrupt: true
				}
			},
			js: {
				files: 'src/js/**/*.js',
				tasks: ['js'],
				options: {
					interrupt: true
				}
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true
			},
			globals: {
				'window' : true,
				'setTimeout' : true,
				'clearTimeout' : true
			}
		}  
	});

	// Load the plugin that provides the "uglify" task.
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task(s).
	grunt.registerTask('default', 'less js');
	grunt.registerTask('js', 'lint concat min');

};