javascript: (
function () {
  var dlUrl = '';
  var media =  API.getMedia();
  if ('1' === media.format) { // youtube
        dlURL = 'http://www.youtube-mp3.org/?c#v=' + media.cid;
        var dlWin = window.open(dlURL);
        alert(dlWin.document.getElementById('dl_link').firstChild);
  }
})();

