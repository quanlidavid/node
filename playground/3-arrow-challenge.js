const tasks = {
	tasks: [
		{
			text: 'Grocery shopping',
			complete: true
		},
		{
			text: 'Clean yard',
			complete: false
		},
		{
			text: 'Film courses',
			complete: false
		}
	],
	// getTasksToDo: function() {
	// 	return this.tasks.filter((task) => task.complete === false);
	// }
	getTasksToDo() {
		return this.tasks.filter((task) => task.complete === false);
	}
};

console.log(tasks.getTasksToDo());
