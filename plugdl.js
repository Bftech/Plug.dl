javascript: (
function () {
  //var ytframe = document.getElementById('yt-frame').contentDocument;
  //var yto = ytframe.getElementById('ytp');
  //var ytPlugAdd = yto.getAttribut('data').split('?')[0];
  //alert(ytPlugAdd);
  alert('test');
  var bodyCode = document.body.innerHTML;
  alert(bodycode);
  var ytUrl = bodycode.split('ytp')[1].substring(7,36);
  alert(ytUrl);
})();

