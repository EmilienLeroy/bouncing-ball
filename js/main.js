var $bool = $('#bool'), DURATION = 575;

var vp = '92vh';
var vh = 100;
var direction = 0;

function dropBall() {
var position = $bool.position()
var move = position.left + 30
  $bool.animate({ top: vp, left: move }, DURATION, 'easeInQuad', restoreBall);
}
  


function restoreBall() {
var position = $bool.position()
var move = position.left + 30
 $bool.animate({ top: vh, left: move  }, DURATION, 'easeOutQuad', dropBall);
}

function gravity(){
	vh = vh + 10
}


$(document).ready(function(){
  dropBall();
  setInterval(gravity,500);
});