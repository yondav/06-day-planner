var currentDate = moment().format('ddd MMMM DD' + ', ' + 'YYYY' + ', ' + 'LT');
console.log(currentDate);
var contrast = $('#contrast');

$(document).ready(function () {
  // display today's date
  $('#currentDay').text(currentDate);

  contrast.on('click', function () {
    var body = $('body');
    if (body.hasClass('dark')) {
      body.removeClass('dark');
      contrast.html('<i class="fas fa-moon">');
    } else {
      body.addClass('dark');
      contrast.html('<i class="fas fa-sun"></i>');
    }
  });

  // array for hours
  hourArray = $('.hour').toArray();
  console.log(hourArray);
  for (i = 0; i < hourArray.length; i++) {
    $(hourArray[i])
      .siblings('textarea')
      .text(localStorage.getItem($(hourArray[i]).attr('data-time')));

    var currentHour = parseInt(moment().format('kA'));
    var dataTime = parseInt($(hourArray[i]).attr('data-time'));

    if (currentHour === dataTime) {
      $(hourArray[i]).siblings('textarea').addClass('present');
    } else if (currentHour > dataTime) {
      $(hourArray[i]).siblings('textarea').addClass('past');
    } else if (currentHour < dataTime) {
      $(hourArray[i]).siblings('textarea').addClass('future');
    }
    $('.saveBtn').on('click', function () {
      localStorage.setItem(
        $(this).siblings('div.hour').attr('data-time'),
        $(this).siblings('textarea').val()
      );
    });
  }
});
