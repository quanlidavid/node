const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

const value = getNotes();

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
		console.log('Title: ', argv.title);
		console.log('Body: ', argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function() {
		console.log('Removing a note!');
	}
});

yargs.command({
	command: 'list',
	describe: 'List notes',
	handler: function() {
		console.log('List all notes!');
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
