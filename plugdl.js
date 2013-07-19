javascript: (
function () {
  //var ytframe = document.getElementById('yt-frame').contentDocument;
  //var yto = ytframe.getElementById('ytp');
  //var ytPlugAdd = yto.getAttribut('data').split('?')[0];
  //alert(ytPlugAdd);
  var vidUrl = '';
  alert('test');
  if ('1' === Playback.media.format) { // youtube
        vidURL = 'http://www.youtube.com/watch?v=' + Playback.media.cid;
  }
  alert(vidURL);
})();

