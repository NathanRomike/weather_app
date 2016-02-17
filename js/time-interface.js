function displayTime() {
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('#time').html(time);
  setTimeout(displayTime, 1000);
}
$(document).ready(function() {
  displayTime();
  $('#buttonSetTimer').click(function(){
    $('.timer-info').text("This doesn't work!");
  });
});
