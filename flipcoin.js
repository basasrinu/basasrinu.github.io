var ie=document.all, others=document.getElementById&&!document.all, isdrag=false, x,y, dobj, w=0, wartosc=0, wart=0, px=15, fr=24, t, wyswietlony=1;						

						function obrot() {
									wartosc++;
									document.getElementById('frame'+wyswietlony).style.display="none";
									if (wartosc%fr<0) {nb=(fr+(wartosc%fr))+1;} else {nb=(wartosc%fr)+1;}
									document.getElementById('frame'+nb).style.display="block";
									//document.getElementById('sf').value=wartosc;
									wyswietlony=nb;
						}		
						
$(document).ready(function() {
	 
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', './coinsound.mp3');
		
        audioElement.load()
	 
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);




        $('.play').click(function() {
        audioElement.play();
		
        });


        $('.pause').click(function() {
        audioElement.pause();
        });



});
	
		t=window.setInterval(function(){obrot()},50);

		