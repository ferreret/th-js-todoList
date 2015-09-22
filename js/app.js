// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

/*
VARIABLES
*/

var taskInput            = document.getElementById('new-task');
var addButton            = taskInput.nextSibling;
//var addButton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTaskHolder  = document.getElementById('completed-tasks');


/*
FUNCTIONS
*/

// Add a new task
var addTask = function () {
	console.log('Add task....');
	// When the the button is pressed	

	// Create a new list item with the text from new task
		// input (checkbox)
		// label
		// input (text)
		// button.edit
		// button.delete
		// Each elements, needs modified and appended
}

// Edit an existing task
var editTask = function () {
	console.log('Edit task....');
	// When the Edit button is pressed
		// if the class of the parent is  .edtMode
			// Switch from .editMode
			// label text become the input's value
		// else
			// Switch to .editMode
			// Input value becomes the label's text

		// Toggle .editMode on the parent
};

// Delete an existing task
var deleteTask = function () {
	console.log('Delete task....');
	// When the Delete button is pressed
		// Remove the parent list item from the ul
}

// Mark a task as complete
var taskCompleted = function () {
	console.log('Task complete....');
	// When the Checkbox is checked
			// Append the task list item to the completed-tasks
}

// Mark a task as incomplete
var taskIncomplete = function () {	
	console.log('Task uncomplete....');
	// When the checkbox is unchecked
		// Append the task list item to the umcompleted-tasks
}


/*
EVENTS
*/
//Set the click handler to the addTask function
addButton.onclick = addTask;

