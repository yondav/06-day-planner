var currentDate = moment().format("ddd MMMM DD" + ", " + "YYYY");




$(document).ready(function() {
// Display today's date
$("#currentDay").text(currentDate);

// For loop to structure and append elements in the planner
for (i = 0; i < 9; i++) {
    var row = $("<div>").addClass("row");
    var time = $("<div>").addClass("hour col-md-2").text(moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
    time.attr("data-time", moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));

    $(".container").append(row);
    $(row).append(time);
}
});