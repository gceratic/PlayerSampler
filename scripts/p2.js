/* Using the player bus message to show on the user interface when the player buffers and when 
   the user clicks on play, pause and replay */
function onCreate(myplayer) {
	myplayer.mb.subscribe("*" , 'subscriber', function(eventName) { 
    	if (eventName != OO.EVENTS.DOWNLOADING && 
        	eventName != OO.EVENTS.PLAYHEAD_TIME_CHANGED)
            console.log(eventName);
 	    });
    
	myplayer.mb.subscribe("buffering", 'subscriber', function(eventName) { 
		alert("Buffering"); 	    
		console.log(eventName);
	});

	myplayer.mb.subscribe("replay", 'subscriber', function(eventName) { 
		alert("Replay Video"); 	    
		console.log(eventName);
	});

	myplayer.mb.subscribe("paused", 'subscriber', function(eventName) { 
		alert("Video Paused"); 	    
		console.log(eventName);
	});

	myplayer.mb.subscribe("play", 'subscriber', function(eventName) { 
		alert("Play video"); 	    
		console.log(eventName);
	});

	myplayer.mb.subscribe("ChangeVolume", 'subscriber', function(eventName) { 
		alert("Volume state changed"); 	    
		console.log(eventName);
	});

	myplayer.mb.subscribe("muteStateChanged", 'subscriber', function(eventName) { 
		alert("Volume state changed"); 	    
		console.log(eventName);
	});

	myplayer.mb.subscribe("videoPlayed", 'subscriber', function(eventName) { 
		alert("End of the video"); 	    
			var r = confirm("Dou you want to keep current player?");
					if (r != true) {
   						myplayer.destroy();
   					}
		console.log(eventName);
	});
}

/* Using getDescription(), getEmbedCode(), getTitle() and getDuration() functions*/
function Info()
{
  	var vDescription = "Description: " + myplayer.getDescription();
  		document.getElementById("vDescription").innerHTML = vDescription;
	var vEmbed = "Asset ID: " + myplayer.getEmbedCode();
		document.getElementById("vEmbed").innerHTML = vEmbed;
	var vTitle = "Title: " + myplayer.getTitle();
		document.getElementById("vTitle").innerHTML = vTitle;
	var vDuration = "Duration: " + myplayer.getDuration();
		document.getElementById("vDuration").innerHTML = vDuration;
}

/* Using destroy() function*/
function destroy()
{
	myplayer.destroy();
}

var playerParam = {
  'pcode':'Jvd2wyOrkZVDS3BJWpnvUwEidYIO',
  'playerBrandingId':'f1f3a6490d6f480b91d0d152a863d3c5',
  'autoplay':false,
  'loop':false,
  'skin': {
          'config': '../scripts/p2.json'
        },
   onCreate: window.onCreate
};

OO.ready(function() {
  myplayer = OO.Player.create('container_1524368775', 'V3MDM0ZjE6VFHuScVibWmSCXWU37sTY4', playerParam);
});



 

