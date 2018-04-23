var volume = .5;
var volumenRange = .1;  
function ClickPlay() {
    window.pp.play();
  }
  function ClickPause() {
    window.pp.pause();
  }
function setVolume(var isUp)


{
	if(isUp)
	{
		window.pp.setVolumen(window.pp.getVolumen()+volumenRange);
	}
	else
	{
		
		window.pp.setVolumen(window.pp.getVolumen()-volumenRange);
	}
}
  var playerParam = {
    'pcode':'Jvd2wyOrkZVDS3BJWpnvUwEidYIO',
    'playerBrandingId':'f1f3a6490d6f480b91d0d152a863d3c5',
    'autoplay':true,
    'loop':true,
    'skin': {
            'config': '../scripts/p1p1.json'
          }

  };
  OO.ready(function() {window.pp = OO.Player.create('container_1524368773', 'V3MDM0ZjE6VFHuScVibWmSCXWU37sTY4', playerParam);
  var startplay = document.getElementById('btnPlay');
  startplay.disabled = false;
  startplay.onclick = ClickPlay;
  var startpause = document.getElementById('btnPause');
  startpause.disabled = false;
  startpause.onclick = ClickPause;
var btnVolUp = document.getElementById('btnvolh');
btnVolUp.onClick = setVolumen(true);


var btnVolUp = document.getElementById('btnvoll');
btnVolUp.onClick = setVolumen(false);  });
