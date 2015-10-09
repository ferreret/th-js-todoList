// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

/*
VARIABLES
*/

var taskInput            = document.getElementById('new-task');
var addButton            = taskInput.nextSibling; //var addButton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTaskHolder  = document.getElementById('completed-tasks');

/*
FUNCTIONS
*/

// New Task List Item
var createNewTaskElement = function (taskString) {
	var listItem     = document.createElement('li');
	// input (checkbox)
	var checkBox     = document.createElement('input'); //checkbox
	// label
	var label        = document.createElement('label');
	// input (text)
	var editInput    = document.createElement('input'); // text
	// button.edit
	var editButton   = document.createElement('button');
	// button.delete
	var deleteButton = document.createElement('button');
	// Each element needs modified
	checkBox.type = 'checkbox';
	editInput.type = 'text';
	editButton.innerText = 'Edit';
	editButton.className = 'edit';
	deleteButton.innerText = 'Delete';
	deleteButton.className = 'delete';
	label.innerText = taskString;

	// Each element needs appended	
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
	return listItem;
}

// Add a new task
var addTask = function () {
	console.log('Add task....');	
	// If 
	if (taskInput.value.trim().length === 0) { return; }

	// Create a new list item with the text from new task
	var listItem = createNewTaskElement(taskInput.value);
	// Append listItem to incompleteTasksHolder
	incompleteTaskHolder.appendChild(listItem);
	// Bind events
	bindTaskEvents(listItem, taskCompleted);
	// Reset input task
	taskInput.value = '';
}

// Edit an existing task
var editTask = function () {
	console.log('Edit task....');

	var listItem = this.parentNode;
	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector('label');
	var editButton = listItem.querySelector('button.edit');
	// When the Edit button is pressed
	// if the class of the parent is  .edtMode
	if (listItem.classList.contains('editMode')) {
		// Switch from .editMode
		// label text become the input's value
		label.innerText = editInput.value;		
		editButton.innerText = 'Edit';
	} else {	
		// else
		// Switch to .editMode
		// Input value becomes the label's text
		editInput.value = label.innerText;
		editButton.innerText = 'Save';
	}
	// Toggle .editMode on the parent
	listItem.classList.toggle('editMode');
};

// Delete an existing task
var deleteTask = function () {
	console.log('Delete task....');
	// When the Delete button is pressed
	// Remove the parent list item from the ul
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

// Mark a task as complete
var taskCompleted = function () {
	console.log('Task complete....');
	// When the Checkbox is checked
	// Append the task list item to the completed-tasks
	var listItem = this.parentNode;
	completedTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
var taskIncomplete = function () {	
	console.log('Task uncomplete....');
	// When the checkbox is unchecked
	// Append the task list item to the umcompleted-tasks
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	console.log("Binding events...");
	// Select takslistItem's children
	var checkBox     = taskListItem.querySelector("input[type=checkbox]");
	var editButton   = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
	// Bind the editTask to edit button
	editButton.onclick   = editTask;
	// Bind deleteTask to delete button
	deleteButton.onclick = deleteTask;
	// Bind checkBoxEventHandler to checkbox
	checkBox.onchange    = checkBoxEventHandler;
} 

/*
EVENTS
*/
//Set the click handler to the addTask function
addButton.addEventListener('click', addTask);

// Cycle over incompleteTaskHolder ul list items
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
	// For each list item
	// Bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

// Cycle over completeTaskHolder ul list items
for (var i = 0; i < completedTaskHolder.children.length; i++) {
 	// For each list item
	// Bind events to list item's children (taskIncompleted)}
	bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}

