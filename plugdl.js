javascript: (
function () {
if ('1' === Playback.media.format) { // youtube
    alert(Playback.media.cid);
    window.open('http://www.youtube-mp3.org/?c#v=' + Playback.media.cid);
}
})();

