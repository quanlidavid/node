const fs = require('fs');
const chalk = require('chalk');

const getNotes = (id) => 'your notes...';

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.green.inverse('New note added'));
	} else {
		console.log(chalk.red.inverse('Note title taken!'));
	}
};

const saveNotes = (notes) => {
	const notesStr = JSON.stringify(notes);
	fs.writeFileSync('notes.json', notesStr);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (error) {
		return [];
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);
	if (notesToKeep.length < notes.length) {
		saveNotes(notesToKeep);
		console.log(chalk.green.inverse('Note removed'));
	} else {
		console.log(chalk.red.inverse('No note removed'));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.blue('Your notes:'));
	notes.forEach((note) => {
		console.log(chalk.green(note.title ));
	});
};
module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	listNotes: listNotes,
	removeNote: removeNote
};
