var playerParam = {
  'pcode':'Jvd2wyOrkZVDS3BJWpnvUwEidYIO',
  'playerBrandingId':'f1f3a6490d6f480b91d0d152a863d3c5',
  'autoplay':true,
  'loop':true,
  'skin': {
          'config': '../scripts/p2.json'
        }

};
OO.ready(function() {
  window.pp = OO.Player.create('container_1524368775', 'V3MDM0ZjE6VFHuScVibWmSCXWU37sTY4', playerParam);
  window.pp2 = OO.Player.create('container_1524368775','QyNDgzZjE6kTGgpMbhcn3rlD77TJ9lpQ', playerParam);
});
