var currentDate = moment().format('ddd MMMM DD' + ', ' + 'YYYY' + ', ' + 'LT');

$(document).ready(function () {
  // Display today's date
  $('#currentDay').text(currentDate);

  // For loop to structure and append elements in the planner
  for (i = 0; i < 9; i++) {
    // schedule elements
    var row = $('<div>').addClass('row');
    var time = $('<div>')
      .addClass('hour col-1')
      .text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    // data attribute
    time.attr(
      'data-time',
      moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('kA')
    );
    var task = $('<textarea>').addClass('col-9');
    var saveBtn = $('<button>')
      .attr('aria-label', 'save')
      .addClass('saveBtn col-1')
      .html('<i class="fas fa-save"></i>');

    $('.container').append(row);
    $(row).append(time);
    $(time).after(task);
    $(task).after(saveBtn);
  }

  // aray for hours
  hourArray = $('.hour').toArray();
  console.log(hourArray);
  for (i = 0; i < hourArray.length; i++) {
    $(hourArray[i])
      .siblings('textarea')
      .text(localStorage.getItem($(hourArray[i]).attr('data-time')));

    var currentHour = moment().format('kA');
    var currentHourInt = parseInt(currentHour);
    // console.log(currentHourInt);
    // console.log(currentHour);
    var dataTime = $(hourArray[i]).attr('data-time');
    var dataTimeInt = parseInt(dataTime);
    // console.log(dataTime);
    // console.log(dataTimeInt);

    if (currentHourInt === dataTimeInt) {
      $(hourArray[i]).siblings('textarea').addClass('present');
    } else if (currentHourInt > dataTimeInt) {
      $(hourArray[i]).siblings('textarea').addClass('past');
    } else if (currentHourInt < dataTimeInt) {
      $(hourArray[i]).siblings('textarea').addClass('future');
    }
  }

  $('.saveBtn').on('click', function () {
    // console.log("save");
    localStorage.setItem(
      $(this).siblings('div.hour').attr('data-time'),
      $(this).siblings('textarea').val()
    );
  });
});
