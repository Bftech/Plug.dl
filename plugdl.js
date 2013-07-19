javascript: (
function () {
  var ytframe = document.getElementById('yt-frame');
  ytframe = ytframe.contentDocument || frame.document;
  var yto = ytframe.getElementById('ytp');
  
  var ytPlugAdd = yto.getAttribut('data').split('?')[0];
  alert(ytPlugAdd);
})();

