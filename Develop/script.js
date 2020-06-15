$(document).ready(function () {
  // Hour Block Array
  var scheduler = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  // Empty array to store hourly toDos
  var todoList = [];

// Current time as shown below ex. 9AM
  var currentTime = moment().format("hA");
  // Look into the scheduler and match current time to the value within the array
  var currentTimeIndex = scheduler.indexOf(currentTime);
  console.log(currentTimeIndex);
// for loop to populate buttons, and assign ids to use in current storage later on.
  for (var i = 0; i < scheduler.length; i++) {
    console.log(scheduler[i]);
    var agendaEl = scheduler[i];
    var dailyScheduleEl = $("<div class='row form-group timeblock-storage'>");
    var timeBlockEl = $("<div class='col-sm-1 hour'>");
    var inputEl = $("<textarea class='col-sm-10 form-control description time-block todo-storage'>");
    var submitEl = $(
      "<button type='button' class='col-sm-1 btn btn-primary saveBtn i:hover fas fa-lock store-todo'>"
    );

    console.log(i);

    timeBlockEl.text(agendaEl);
    inputEl.attr("id", agendaEl);
    dailyScheduleEl.append(timeBlockEl).append(inputEl).append(submitEl);
    $(".container").append(dailyScheduleEl);

    // conditional so that if current time matches the index item it shows as present
    // if the current time is greater than i, show past (also put in if equal to -1)
    // otherwise show as future

    if (i === currentTimeIndex) {
      $(inputEl).addClass("present");
    } else if (i < currentTimeIndex || currentTimeIndex === -1) {
      $(inputEl).addClass("past");
    } else {
      $(inputEl).addClass("future");
    }
  }

  // shows todays date
  var todaysDate = moment().format("dddd MMMM Do, YYYY");
  console.log(todaysDate);
  $("#currentDay").text(todaysDate);

  $(".btn").on("click", function () {
    console.log("You clicked my button!");
  });

  // on button push, store the input

  $(".store-todo").on("click", function (event) {
    event.preventDefault();
    var setTodo = $(this).siblings(".todo-storage").val();
    var key = $(this).siblings(".todo-storage").attr("id");
    localStorage.setItem(key, setTodo);
    todoList.push(setTodo);
    console.log(todoList);
    if (todoList.length > 0) {
      console.log("You submitted the form.");
    }
  });
  $("#9AM").val(localStorage.getItem("9AM"));
  $("#10AM").val(localStorage.getItem("10AM"));
  $("#11AM").val(localStorage.getItem("11AM"));
  $("#12PM").val(localStorage.getItem("12PM"));
  $("#1PM").val(localStorage.getItem("1PM"));
  $("#2PM").val(localStorage.getItem("2PM"));
  $("#3PM").val(localStorage.getItem("3PM"));
  $("#4PM").val(localStorage.getItem("4PM"));
  $("#5PM").val(localStorage.getItem("5PM"));
});
