// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btnmenu').on('tap',function(){
	navigator.vibrate(1000);	
	
});
	
	$('.ui-btn').on('tap', function (){
		flash ($(this));
		audio.play($(this).attr('id'));
	});
	
		
	audio = window.plugins.LowLatencyAudio;
	audio.preloadFX ('btnmenu','music/Illuminati_Confirmed.mp3',function(){}, function(msg){ alert ("Error " + msg);
	});
	audio.preloadFX ('btnjugadores','music/Smoke_Weed_Everyday.mp3',function(){}, function(msg){ alert ("Error " + msg);
	});
	audio.preloadFX ('btntrofeos','music/GET_NOSCOPED.mp3',function(){}, function(msg){ alert ("Error " + msg);
	});
	audio.preloadFX ('btnchamp','music/DAMN_SON.mp3',function(){}, function(msg){ alert ("Error " + msg);
	});
	audio.preloadFX ('btnmas','music/.mp3',function(){}, function(msg){ alert ("Error " + msg);	    
	});




	function quien (q)
 {
	 audio.play(q);
	 return q.substring(1);
 }

	});

});

