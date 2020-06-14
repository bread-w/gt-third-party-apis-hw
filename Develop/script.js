$(document).ready(function () {
  var arrayOfHours = [
    "0000",
    "0100",
    "0200",
    "0300",
    "0400",
    "0500",
    "0600",
    "0700",
    "0800",
    "0900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700",
    "1800",
    "1900",
    "2000",
    "2100",
    "2200",
    "2300",
    "2400",
  ];

  for (var i = 0; i < arrayOfHours.length; i++) {
    console.log(arrayOfHours[i]);
    var hourList = arrayOfHours[i];
    var timeTableRows = $("<div class='row form-group hour-rows'>");
    var hourEl = $("<div class='col-sm-1'>");
    var textEl = $("<textarea class='col-sm-10 time-sensitive form-control'>");
    var saveEl = $("<button type='button' class='col-sm-1 btn btn-info i fas fa-lock'>");
    hourEl.text(hourList);
    timeTableRows.append(hourEl).append(textEl).append(saveEl);
    $(".container").append(timeTableRows);
  }

});
