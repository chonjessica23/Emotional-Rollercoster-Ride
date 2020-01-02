
var audioElement = document.getElementById("myAudio");

var playMode = false;



function playAudio(){
	if (playMode) {
		audioElement.pause();
		document.getElementById("button").style.animation = null;
	document.getElementById("body").style.WebkitAnimationPlayState = "pause";

	}else{
	audioElement.play();
	document.getElementById("button").style.animation = "rotate 2s infinite linear";
	document.getElementById("body").style.animation = "change 20s 1 forwards";
}

	// document.getElementById("button").style.animation = "rotate 2s infinite linear";
	// document.getElementById("body").style.animation = "change 20s 1 forwards";
	
}

audioElement.onplaying = function playAudio(){
	playMode = true;
}
audioElement.onpause = function playAudio() {
	playMode = false;
}
function goBack() {
	window.open("homepage.html")
}
