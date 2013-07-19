javascript: (
function () {
  alert('test1');
  var ytframe = document.getElementById('yt-frame').contentDocument;
  var yto = ytframe.getElementById('ytp');
  alert('test2');
  var ytPlugAdd = yto.getAttribut('data').split('?')[0];
  alert(ytPlugAdd);
  alert('test3');
})();

