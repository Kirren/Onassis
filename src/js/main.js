// Third Party

//= ../../bower_components/tether/dist/js/tether.min.js
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.min.js


// Custom JS

$( document ).ready( function(){
  $( '#menuopener, #menucloser').on('click', function() {
      $('#menuopener').toggleClass('active');
      $('body').toggleClass('body-push-toleft');
      $('#navmenu').toggleClass('menu-open');
  });



  let rand1 = function() {
    $('#javascript').attr('data-progress', Math.floor(Math.random() * 100));
  };
  setTimeout(rand1, 200);
  $('#javascript').click(rand1);

  let rand2 = function() {
    $('#bootstrap').attr('data-progress', Math.floor(Math.random() * 100));
  };
  setTimeout(rand2, 200);
  $('#bootstrap').click(rand2);

  let rand3 = function() {
    $('#wordpress').attr('data-progress', Math.floor(Math.random() * 100));
  };
  setTimeout(rand3, 200);
  $('#wordpress').click(rand3);

});

