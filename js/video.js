var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

 function playVid() { 
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("Play Video");
 } 

 function pauseVid() { 
	video.pause();
 	console.log("Pause Video");
 } 

 function decreaseSpeed() { 
	video.playbackRate = video.playbackRate*0.8;
   	console.log("Speed is "+ video.playbackRate);
 } 

 function increaseSpeed() {
	video.playbackRate = video.playbackRate*1.25;
 	console.log("Speed is "+ video.playbackRate);
 } 

 function skipAhead() {
	if (video.currentTime+60 > video.duration) {
		video.currentTime = 0
		video.playbackRate = 1
		video.pause()
	} else {
		video.currentTime = video.currentTime+60
	}
	console.log("Current location is "+ video.currentTime + " seconds");
 } 

 function mute() { 

  	if (video.muted) {
		console.log("Changing to Unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
	  } else {
		console.log("Changing to Muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
	  }
  	
 }

 function changeVolume() {
	var vol = document.querySelector("#volumeSlider").value;
	video.volume = vol/100;
	document.querySelector("#volume").innerHTML=vol+"%";
	console.log("Volume is " + vol);
 }
       

 function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
 }

 function color() {
	video.classList.remove("grayscale");
 	console.log("In color");
 }
