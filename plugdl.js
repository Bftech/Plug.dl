javascript: (
function () {
  var vidUrl = '';
  if ('1' === Playback.media.format) { // youtube
        vidURL = 'http://www.youtube-mp3.org/?c#v=' + Playback.media.cid;
        //var append = '<p><a href="' + vidURL + '" target="_blank" id="plugdl-btn-dl" style="color:#FFF">Download</a></p>';
        //document.getElementById('meta-frame').appendChild(append);
        alert(vidURL);
        window.open(vidUrl);
  }
})();

