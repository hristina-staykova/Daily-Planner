var submitButtonEl = document.querySelector(".svnBtn");
var hourEl = document.querySelector(".hour");
var newTask = document.querySelector(".form-control");
var dispTaskEl = Array();
var keyName = "hourSlot";
var currentHour = moment().hour();

//display current day
$("#currentDay").text(moment().format("MMM Do YY"));

// displaying the whole page
var i = 9;
for (i = 9; i < 18; i++) {
  // rowHour - every row
  var rowHour = $("<div>");
  rowHour.addClass("flex-row d-flex");
  rowHour.attr("value-timeslot", i);

  //   append the row to the container
  $(".container").append(rowHour);

  //   hourLabel - left column of the row with the time slot
  var hourLabel = $("<div>");
  hourLabel.addClass("col-form-label col-1");
  hourLabel.text(i + ":00");

  //append the left col to the row
  rowHour.append(hourLabel);

  // middle column with the task text & colouring depending on the time
  var mCol = $("<div>");
  mCol.addClass("col-10");
  var taskText = $("<textarea>");
  taskText.addClass("form-control");
  taskText.attr("rows", 1);
  if (i < currentHour) {
    taskText.addClass("past");
  }

  if (i > currentHour) {
    taskText.addClass("future");
  }

  if (i === currentHour) {
    taskText.addClass("present");
  }

  //append the middle col to the row
  rowHour.append(mCol);
  mCol.append(taskText);

  //right column - save button
  var rCol = $("<div>");
  rCol.addClass("col-1");
  var saveButton = $("<button>");
  saveButton.addClass("btn btn-success btn-block");
  saveButton.attr("type", "submit");
  saveButton.attr("type", "button");
  saveButton.text("Save");

  //append to the row
  rowHour.append(rCol);
  rCol.append(saveButton);
}

// for saving in the local Storage, key = hour slot, value = "task text":
// var toDoTask = { hourEl: newTask.textContent };

// on click submit a new element to the localStorage and update the text field
// submitButtonEl.addEventListener("click", saveTask);

//create a new element in the localStorage; display the task in the text field, too...
function saveTask() {}

// how to change the rows depending on the time - past, current, future - comparing the value-timeslot with the current time
function timeColors(params) {}
