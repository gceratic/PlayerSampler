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
  myform.action = "https://api.ooyala.com/v2/assets/V3MDM0ZjE6VFHuScVibWmSCXWU37sTY4%7B%22name%22:%22My%20Awesome%20Video%22%7D?expires=1527097787&signature=fSCbbBWMiHQQB1xvYd0PkReEon3EpMBhFRQpTRMozOU&api_key=Jvd2wyOrkZVDS3BJWpnvUwEidYIO.BWS2E";
  myform.method = "PATCH";
  myform.submit();
}
