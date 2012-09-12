#!/usr/bin/env node

/**
 * Usage:
 *
 *   - ./browser ext &
 *      Enables watching the extension/js/index.js file for changes
 *      and re-browserify + uglify extension/remoteprez.js
 *
 *   - ./browser prez &
 *      Enables watching the public/assets/js/prez/index.js file for
 *      changes and re-browserify + uglify public/assets/js/remoteprez.js
 *
 *   - ./browser ext debug & || ./browser prez debug &
 *      Enables watching the file but doesn't uglify the browserified
 *      file, and enables the source mapping for debugging by adding
 *      comments
 */

'use strict';

// Browserify part
var fs = require( 'fs' ),
    browserify = require( 'browserify' ),
    entry,
    output,
    debug,
    uglify;

if ( process.argv[ 3 ] === 'debug' ) {
    debug = true;
    uglify = false;
}
else {
    debug = false;
    uglify = true;
}

var b = browserify( {
    watch: true,
    debug: debug
});

switch( process.argv[ 2 ] ) {
case 'prez':
    entry = 'public/assets/js/prez/index.js';
    output = 'public/assets/js/prez.js';
    break;
case 'ext':
    entry = 'extension/js/index.js';
    output = 'extension/remoteprez.js';
    break;
}

b.addEntry( entry );

fs.writeFileSync( output, b.bundle() );

// Uglify part
if ( uglify ) {
    var exec = require( 'child_process' ).exec,
        command = 'uglifyjs ' +
            output + ' > tmp.js && mv tmp.js ' + output;

    exec( command );

    b.on( 'bundle', function() {
        exec( command );
    });
}

