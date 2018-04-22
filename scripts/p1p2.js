var playerParam = {
  'pcode':'Jvd2wyOrkZVDS3BJWpnvUwEidYIO',
  'playerBrandingId':'f1f3a6490d6f480b91d0d152a863d3c5',
  'autoplay':false,
  'loop':false,
  'skin': {
          'config': '../scripts/p1p2.json'
        }

};

  OO.ready(function() {

  var pp1 = null;
  pp1 = OO.Player.create('container_1524368774', 'V3MDM0ZjE6VFHuScVibWmSCXWU37sTY4', playerParam);
  var pp2 = document.getElementById("pp2"); //player2 being the <div ID> of the "thumbnail".
  pp2.onclick = play2; //when the thumbnail is clicked, call pla22() function

   });

  function play2() {
  pp1.destroy(); //destroying the existing player
  pp1 = OO.Player.create('container_1524368774', 'QyNDgzZjE6kTGgpMbhcn3rlD77TJ9lpQ', playerParam);
};
