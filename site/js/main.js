$(document).ready(function(){

  
 $('#header-content').velocity("fadeIn", { duration: 1500 });


 function loop(){
  $('#flappy').show();
  $('#flappy').velocity({
      left: "+=3000",
      
    }, 10000, function(){
      $('#flappy').hide();
      $('#flappy').css('left', '0');
      loop();
  });

 }

 loop();

});