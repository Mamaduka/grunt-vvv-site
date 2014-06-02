/**
 * vvv-site
 * https://github.com/Mamaduka/grunt-vvv-site
 */

'use strict';

// Basic template description
exports.description = 'Create a VVV site setup.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after the question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
	init.process( {}, [
		// Prompt for these values.
		init.prompt( 'domain', 'example.loc' ),
		init.prompt( 'site_name', 'WordPress Local' ),
		init.prompt( 'database' ),
		init.prompt( 'admin_user', 'admin' ),
		init.prompt( 'admin_pass', 'password' ),
		init.prompt( 'admin_email', 'admin@example.com' )
	], function( err, props ) {

		// Files to copy and process
		var files = init.filesToCopy( props );
		
		// Actually copy and process files
		init.copyAndProcess( files, props );
		
		// Done!
		done();
	});
};