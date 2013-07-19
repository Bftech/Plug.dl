javascript: (
function () {
  //var ytframe = document.getElementById('yt-frame').contentDocument;
  //var yto = ytframe.getElementById('ytp');
  //var ytPlugAdd = yto.getAttribut('data').split('?')[0];
  //alert(ytPlugAdd);
  
  var bodyCode = document.body.innerHTML;
  var ytUrl = bodycode.split('ytp')[1].substring(7,36);
  alert(ytUrl);
})();

