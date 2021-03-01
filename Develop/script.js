var currentDate = moment().format("ddd MMMM DD" + ", " + "YYYY");



$(document).ready(function() {
// Display today's date
$("#currentDay").text(currentDate);

// For loop to structure and append elements in the planner
for (i = 0; i < 9; i++) {
    var row = $("<div>").addClass("row");


    $(".container").append(row);
}
});