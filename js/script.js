$(document).ready(function(){
    // hide our element on page load
    $('#first-dish').css('opacity', 0);
   
    $('#first-dish').waypoint(function() {
        $('#first-dish').addClass('fadeInLeft');
    }, { offset: '50%' });
   
  });