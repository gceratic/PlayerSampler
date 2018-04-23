var playerParam = {
  'pcode':'Jvd2wyOrkZVDS3BJWpnvUwEidYIO',
  'playerBrandingId':'f1f3a6490d6f480b91d0d152a863d3c5',
  'autoplay':true,
  'loop':true,
  'skin': {
          'config': '../scripts/p3.json'
        }

};
OO.ready(function() {window.pp = OO.Player.create('container_1524368776', 'V3MDM0ZjE6VFHuScVibWmSCXWU37sTY4', playerParam);
});

function patch() {
  var title = document.getElementById('vidTitle').value;
  var myform = document.createElement("form");
  document.body.appendChild(myform);
  myform.action = "https://api.ooyala.com/v2/assets/V3MDM0ZjE6VFHuScVibWmSCXWU37sTY4{'name':"+title+"};?expires=1527087594&signature=HDr_FTTd7d928GhZzCW_rijL4qzOZOAHppjOnxtG&api_key=Jvd2wyOrkZVDS3BJWpnvUwEidYIO.BWS2E";
  myform.method = "PATCH";
  myform.submit();
}
