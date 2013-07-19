javascript: (
function () {
  alert('test1');
  var ytframe = document.getElementById('yt-frame');
  ytframe = ytframe.contentDocument || ytframe.document;
  var yto = ytframe.getElementById('ytp');
  
  var ytPlugAdd = yto.getAttribut('data').split('?')[0];
  alert(ytPlugAdd);
  alert('test2');
})();

