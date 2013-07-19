javascript: (
function () {
if (windows.name.indexOf('plug.dj') != -1){
  if ('1' === Playback.media.format) { // youtube
        window.open('http://www.youtube-mp3.org/?c#v=' + Playback.media.cid);
  }
}else{
  alert('You are not on plug.dj')
}
})();

