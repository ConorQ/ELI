skrollr.init({
    smoothScrolling: true,
    forceHeight: false
});

var maxWidth = $(window).width();
var maxHeight = $(window).height();

function reSizing() {
  console.log("its yaboi");
	$('#parallax').css({
        width: maxWidth,
        height: maxHeight*6
    });
    $('#parallax .h1').css({
    	height: maxHeight/2,
    });
    $('#parallax p').css({
    	height: maxHeight/2,
    });
}

$(document).ready(function(){
   reSizing();
});

 $( window ).resize(function() {
   var maxWidth = $(window).width();
   var maxHeight = $(window).height();
   reSizing();
});