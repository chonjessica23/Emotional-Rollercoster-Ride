function change1(){
	document.getElementById("stressedout").style.opacity = "0.1";
	document.getElementById("title1").style.display = "block";
	document.getElementById("button1").play();
}
function quit1() {
	document.getElementById("stressedout").style.opacity = "1";
	document.getElementById("title1").style.display = "none";
	document.getElementById("button1").pause();
}

function change2(){
	document.getElementById("happy").style.opacity = "0.1";
	document.getElementById("title2").style.display = "block";
	document.getElementById("button2").play();	
}
function quit2() {
	document.getElementById("happy").style.opacity = "1";
	document.getElementById("title2").style.display = "none";	
	document.getElementById("button2").pause();
}

function change3(){
	document.getElementById("anger").style.opacity = "0.1";
	document.getElementById("title3").style.display = "block";
	document.getElementById("button3").play();
}
function quit3() {
	document.getElementById("anger").style.opacity = "1";
	document.getElementById("title3").style.display = "none";
	document.getElementById("button3").pause();	
}

function change4(){
	document.getElementById("fear").style.opacity = "0.1";
	document.getElementById("title4").style.display = "block";
	document.getElementById("button4").play();
}
function quit4() {
	document.getElementById("fear").style.opacity = "1";
	document.getElementById("title4").style.display = "none";
	document.getElementById("button4").pause();	
}

function change5(){
	document.getElementById("sad").style.opacity = "0.1";
	document.getElementById("title5").style.display = "block";
	document.getElementById("button5").play();
}
function quit5() {
	document.getElementById("sad").style.opacity = "1";
	document.getElementById("title5").style.display = "none";
	document.getElementById("button5").pause();	
}

function emotion1(){
	window.open("stressed.html");

}

function emotion2(){
	window.open("happy.html");

}

function emotion3(){
	window.open("angry.html");

}

function emotion4(){
	window.open("fear.html");

}
function emotion5(){
	window.open("sad.html");

}

function clickFunction() {
	window.open("citation.html");

}

