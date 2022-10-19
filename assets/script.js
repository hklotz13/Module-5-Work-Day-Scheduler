//Show current day in the header
var currentDate = $("#currentDay");
currentDate.text (moment().format("dddd, MMMM Do YYYY"));
//Current hour of the day
var currentHour = moment().format("HH");
//Comparing hour to time block displayed
function colorCode() {
    if (currentHour > 9) {
      $("#nineAM").addClass("past");
    } else if (currentHour >= 9 && currentHour < 10) {
      $("#nineAM").addClass("present");
    } else if (currentHour < 9) {
      $("#nineAM").addClass("future");
    }
    if (currentHour > 10) {
      $("#tenAM").addClass("past");
    } else if (currentHour >= 10 && currentHour < 11) {
      $("#tenAM").addClass("present");
    } else if (currentHour < 10) {
      $("#tenAM").addClass("future");
    }
    if (currentHour > 11) {
      $("#elevenAM").addClass("past");
    } else if (currentHour >= 11 && currentHour < 12) {
      $("#elevenAM").addClass("present");
    } else if (currentHour < 11) {
      $("#elevenAM").addClass("future");
    }
    if (currentHour > 12) {
      $("#twelvePM").addClass("past");
    } else if (currentHour >= 12 && currentHour < 13) {
      $("#twelvePM").addClass("present");
    } else if (currentHour< 12) {
      $("#twelvePM").addClass("future");
    }
    if (currentHour > 13) {
      $("#onePM").addClass("past");
    } else if (currentHour>= 13 && currentHour < 14) {
      $("#onePM").addClass("present");
    } else if (currentHour < 13) {
      $("#onePM").addClass("future");
    }
    if (currentHour > 14) {
      $("#twoPM").addClass("past");
    } else if (currentHour >= 14 && currentHour < 15) {
      $("#twoPM").addClass("present");
    } else if (currentHour < 14) {
      $("#twoPM").addClass("future");
    }
    if (currentHour > 15) {
      $("#threePM").addClass("past");
    } else if (currentHour >= 15 && currentHour < 16) {
      $("#threePM").addClass("present");
    } else if (currentHour < 15) {
      $("#threePM").addClass("future");
    }
    if (currentHour > 16) {
      $("#fourPM").addClass("past");
    } else if (currentHour >= 16 && currentHour < 17) {
      $("#fourPM").addClass("present");
    } else if (currentHour < 16) {
      $("#fourPM").addClass("future");
    }
    if (currentHour > 17) {
      $("#fivePM").addClass("past");
    } else if (currentHour >= 17 && currentHour < 18) {
      $("#fivePM").addClass("present");
    } else if (currentHour < 17) {
      $("#fivePM").addClass("future");
    }
  };
//Saves values to local storage
$(document).ready(function (){
    $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});
//Displays values in text area
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
});
