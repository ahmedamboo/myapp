$(document).ready(function(){
    
  
   
			$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
        
        
 
    




 $(window).load(function() {  /*da el code el ms2ol 3n el load*/
     
 $("body").css({"overflow-y": "scroll", "overflow-x": "hidden"});/*hena 3mlna lel overflow :auto 3shn el scroll ely kona shyeleno fel css be hidden nrg3o*/
     
     $(".loading-overlay .sk-circle").fadeOut(2000,
                                              
 function()
    {    
      $(this).parent().fadeOut(1000);  
                                    
     }); 
     
 });
          });  























