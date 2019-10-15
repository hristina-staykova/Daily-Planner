var submitButtonEl = document.querySelector(".submitButton");
var hourLabelEl = document.querySelector(".hourLabel");
var taskTextEl = document.querySelector(".taskText");
var dispTaskEl = Array();

//display current day
document.querySelector("#currentDay").textContent = moment().format(
  "MMM Do YY"
);

// displaying the whole page

// for saving in the local Storage, key = hour, value = "task text":
var toDoTask = { hourLabelEl: taskTextEl };

// on click submit a new element to the localStorage
submitButtonEl.addEventListener("click", saveTask);

// how to create a new element in the localStorage; we need to display the task in the text field, too...
function saveTask(params) {
  localStorage.setItem(hourLabelEl, taskTextEl);
}

// how to change the rows depending on the time - past, current, future
function timeColors(params) {}
