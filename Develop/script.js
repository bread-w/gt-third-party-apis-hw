$(document).ready(function () {
  var arrayOfHours = [
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

  for (var i = 0; i < arrayOfHours.length; i++) {
    console.log(arrayOfHours[i]);
    var hourList = arrayOfHours[i];
    var timeTableRows = $("<div class='row form-group hour-rows'>");
    var hourEl = $("<div class='col-sm-1'>");
    var textEl = $("<textarea class='col-sm-10 time-sensitive form-control'>");
    var saveEl = $(
      "<button type='button' class='col-sm-1 btn btn-info i fas fa-lock'>"
    );
    hourEl.text(hourList);
    timeTableRows.append(hourEl).append(textEl).append(saveEl);
    $(".container").append(timeTableRows);

    // if (moment(arrayOfHours[i]).isSame(currentTime) === true) {
    //     $(".time-sensitive").attr("style", "background-color: red");
    //   }
    // var blockTime = arrayOfHours[i];
    // if (blockTime.match(currentTime)) {
    //   $(".time-sensitive").attr("style", "background-color: red");
    // }
  }

  var todaysDate = moment().format("dddd MMMM Do, YYYY");
  console.log(todaysDate);
  $("#currentDay").text(todaysDate);

  $(".btn").on("click", function () {
    console.log("You clicked my button!");
  });
});
