( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    
    document.getElementById('button').onclick = function() {
        alert("hello");
   }
    
    var canvas=document.getElementById("draw")
    var x=canvas.getContext("2d");
      x.fillStyle = "#000";
      x.strokeStyle = "#F00";
      x.font = "italic 30pt Arial";
      x.fillText("Tizen", 20, 50);
    var y=canvas.getContext("2d");
     y.fillStyle = "#00F";
      y.strokeStyle = "#F00";
      y.font = "italic 30pt Arial";
      y.fillText("Javascript", 20, 80);
    y.fillText("canvas", 80, 135);
    var z=canvas.getContext("2d");
    z.fillStyle = "#F06";
      z.strokeStyle = "#F00";
      z.font = "italic 30pt Arial";
      z.fillText("HTML5", 20, 125);
    
      $(document).ready(function(){
    	  $("ex_l").css("color", "red");
      });

     
	

      
} () );