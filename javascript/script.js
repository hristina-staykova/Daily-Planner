var currentHour = moment().hour();

//display current day
var today = moment().format("MMM Do YY");
$("#currentDay").text(today);

// displaying the whole page
for (i = 9; i < 18; i++) {
  // rowHour - every row
  var rowHour = $("<div>");
  rowHour.addClass("row");
  rowHour.attr("value-timeslot", i);

  //   append the row to the container
  $(".container").append(rowHour);

  //   hourLabel - left column of the row with the time slot
  var hourLabel = $("<div>");
  hourLabel.addClass("col-form-label col-1 row");
  hourLabel.text(i + ":00");

  //append the left col to the row
  rowHour.append(hourLabel);

  // middle column with the task text
  var mCol = $("<div>");
  mCol.addClass("col-10 row");
  var taskText = $("<textarea>");
  taskText.addClass("form-control");

  // on refresh/opening the app - check if we have a task in the localStorage and displaying it in "taskText" field & if it's a new day - delete all tasks
  var displayTask = JSON.parse(localStorage.getItem(i));

  if (displayTask != null) {
    taskText.text(displayTask.text);
    if (displayTask.date != today) {
      console.log("expired todo line");
      localStorage.removeItem(i);
      taskText.text(null);
    }
  }

  //append the middle col to the row
  rowHour.append(mCol);
  mCol.append(taskText);

  //right column - save button
  var rCol = $("<div>");
  rCol.addClass("col-1 row");
  var saveButton = $("<button>");
  saveButton.addClass("btn-block saveBtn");
  saveButton.attr("type", "submit");
  saveButton.attr("type", "button");
  saveButton.attr("value-timeslot", i);
  saveButton.text("Save");

  //append to the row
  rowHour.append(rCol);
  rCol.append(saveButton);

  //check the current time and color the rows accordingly - past, present, future
  timeColors(i);
}

// on click submit a new element to the localStorage and update the text field
var submitButtonEl = $(".saveBtn");
submitButtonEl.on("click", saveTask);

function saveTask(event) {
  var timeSlot = $(this).attr("value-timeslot");

  //get to the element "rowHour", go to the textarea and get the value (user input), store it in the localStorage
  var taskText = $(event.target.parentNode.parentNode) //event.target.parentNode.parentNode is actually the element "rowHour"
    .find("textarea")
    .val();
  taskText = { date: today, text: taskText };
  localStorage.setItem(timeSlot, JSON.stringify(taskText));
}

// how to change the rows depending on the time - past, current, future - comparing the value-timeslot with the current time
function timeColors(t) {
  if (t < currentHour) {
    taskText.addClass("past");
  }

  if (t > currentHour) {
    taskText.addClass("future");
  }

  if (t === currentHour) {
    taskText.addClass("present");
  }
}
