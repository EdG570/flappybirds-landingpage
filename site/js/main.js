$(document).ready(function(){
 
 function loop(){
  $('#flappy').show();
  $('#flappy').animate({
      left: "+=3000",
      
    }, 10000, function(){
      $('#flappy').hide();
      $('#flappy').css('left', '0');
      loop();
  });

 }

 loop();

});