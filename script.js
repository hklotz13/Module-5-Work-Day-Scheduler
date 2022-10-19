//Show current day in the header
var currentDate = $("#currentDay");
currentDate.text (moment().format("dddd, MMMM Do YYYY"));
//Current hour of the day
var currentHour = moment().format("HH");
//Comparing hour to time block displayed
$(".time-block").each(function() {
    var timeBlock = $(this).attr("id").split("-")[1];
    if (currentHour == timeBlock) {
        $(this).addClass("now"); 
        $(this).children('.description').addClass("black-text");
    } else if (currentHour < timeBlock) {
        $(this).removeClass("now");
        $(this).addClass("later");
    } else if (currentHour > timeBlock) {
        $(this).removeClass("now");
        $(this).addClass("earlier");
    }
});
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
