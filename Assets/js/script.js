var currentDate = moment().format("ddd MMMM DD" + ", " + "YYYY");




$(document).ready(function() {
// Display today's date
$("#currentDay").text(currentDate);

// For loop to structure and append elements in the planner
for (i = 0; i < 9; i++) {
    // schedule elements
    var row = $("<div>").addClass("row");
    var time = $("<div>").addClass("hour col-md-2").text(moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
    // adding data attribute to time here to take on the index number. Will need to track the time for color coding later
    // time.attr("data-time", moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
    var task = $("<textarea>").addClass("col-md-8");
    var saveBtn = $("<button>").addClass("saveBtn col-md-2").html('<i class="fas fa-save"></i>');


    $(".container").append(row);
    $(row).append(time);
    $(time).after(task);
    $(task).after(saveBtn);
}

// aray for hours
hourArray = $(".hour").toArray();
// console.log(hourArray);
});