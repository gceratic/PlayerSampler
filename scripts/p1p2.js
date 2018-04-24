/* Showing a thumbnail video usinng theme builder user interface */
OO.ready(function() {
  var playerParam = {
    "pcode": "Jvd2wyOrkZVDS3BJWpnvUwEidYIO",
    "playerBrandingId": "f1f3a6490d6f480b91d0d152a863d3c5",
    "autoplay": false,
    "loop": false,
    "playlistsPlugin": {"data":["5f048115febc49ec9056375198fe2e6e"]},
    "useFirstVideoFromPlaylist": true,
    'skin': {
      'config': '../scripts/p1p2.json'
    }
  };
  window.ooPlayer = OO.Player.create("container_1524368774", "QyNDgzZjE6kTGgpMbhcn3rlD77TJ9lpQ", playerParam);
});
