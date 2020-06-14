$(document).ready(function () {
  var schedulerEl = [
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

  var currentTime = moment().format("h A");

  for (var i = 0; i < schedulerEl.length; i++) {
    console.log(schedulerEl[i]);
    var agenda = schedulerEl[i];
    var timeTableRows = $("<div class='row form-group hour-rows'>");
    var timeBlockEl = $("<div class='col-sm-1'>");
    var inputEl = $("<textarea class='col-sm-10 time-sensitive form-control'>");
    var lockEl = $(
      "<button type='button' class='col-sm-1 btn btn-info i fas fa-lock'>"
    );
    timeBlockEl.text(agenda);
    timeTableRows.append(timeBlockEl).append(inputEl).append(lockEl);
    $(".container").append(timeTableRows);
  }

  var todaysDate = moment().format("dddd MMMM Do, YYYY");
  console.log(todaysDate);
  $("#currentDay").text(todaysDate);

  $(".btn").on("click", function () {
    console.log("You clicked my button!");
  });
});
