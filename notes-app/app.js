const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

//Customize yargs version
yargs.version('1.0.1');

// create add command
yargs.command({
	command: 'add',
	description: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		notes.removeNote(argv.title);
	}
});

yargs.command({
	command: 'list',
	describe: 'List notes',
	handler: function() {
		notes.listNotes();
	}
});

yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler: function() {
		console.log('Reading a note!');
	}
});

yargs.parse();
// console.log(yargs.argv);
