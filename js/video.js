var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; 
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause(); 
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.remove("oldSchool");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95; 
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.95; 
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("changing volume");
	console.log(this.value);
	video.volume = this.value / 100; 
	document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#mute").addEventListener("click", function() {
	//mute video
	if (video.muted === false){
		console.log("mute video");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else{
		console.log("unmute video");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.ended === false){
		console.log("original location " + video.currentTime);
		video.currentTime += 15;
		console.log("new location " + video.currentTime);
		video.loop = true;
	}
	else{
		video.play(); 
		video.currentTime = 0;
		console.log(video.currentTime);
	}
	
});
