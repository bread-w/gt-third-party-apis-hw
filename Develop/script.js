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

  var currentTime = moment().format("h A");

  for (var i = 0; i < scheduler.length; i++) {
    console.log(scheduler[i]);
    var agendaEl = scheduler[i];
    var dailyScheduleEl = $("<div class='row form-group'>");
    var timeBlockEl = $("<div class='col-sm-1'>");
    var inputEl = $(
      "<textarea class='col-sm-10 form-control todo-storage'>"
    );
    var submitEl = $(
      "<button type='button' class='col-sm-1 btn btn-primary i fas fa-lock store-todo'>"
    );
    timeBlockEl.text(agendaEl);
    dailyScheduleEl.append(timeBlockEl).append(inputEl).append(submitEl);
    $(".container").append(dailyScheduleEl);
  }

  var todaysDate = moment().format("dddd MMMM Do, YYYY");
  console.log(todaysDate);
  $("#currentDay").text(todaysDate);

  $(".btn").on("click", function () {
    console.log("You clicked my button!");
  });

  $(".store-todo").on("click", function (event) {
    var setTodo = $(".todo-storage").val();
    todoList.push(setTodo);
    console.log(todoList[i]);
    event.preventDefault();
    if (todoList.length > 0) {
      console.log("You submitted the form.");

    }
  });
});
