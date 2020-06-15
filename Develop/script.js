$(document).ready(function () {
  var scheduler = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  var todoList = [];

  var currentTime = moment().hour();
  console.log(currentTime);

  for (var i = 0; i < scheduler.length; i++) {
    console.log(scheduler[i]);
    var agendaEl = scheduler[i];
    var dailyScheduleEl = $("<div class='row form-group timeblock-storage'>");
    var timeBlockEl = $("<div class='col-sm-1 hour'>");
    var inputEl = $("<textarea class='col-sm-10 form-control todo-storage'>");
    var submitEl = $(
      "<button type='button' class='col-sm-1 btn btn-primary saveBtn i:hover fas fa-lock store-todo'>"
    );
    // submitEl.val()= i;
    timeBlockEl.text(agendaEl);
    inputEl.attr("id", agendaEl.replace(" ", ""));
    dailyScheduleEl.append(timeBlockEl).append(inputEl).append(submitEl);
    $(".container").append(dailyScheduleEl);

    var timeBlockColor = agendaEl
    if (agendaEl.match(currentTime)) {
      $(inputEl).addClass("present");
    } else if (agendaEl < currentTime) {
      $(inputEl).addClass("past");
    } else {
      $(inputEl).addClass("future");
    }
  }

  var todaysDate = moment().format("dddd MMMM Do, YYYY");
  console.log(todaysDate);
  $("#currentDay").text(todaysDate);

  $(".btn").on("click", function () {
    console.log("You clicked my button!");
  });

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
