// Open New Window

$(function(){
	var newWindow;
	var
	w       = 500,
	h       = 500,
	l       = (screen.availWidth - w) / 2,
	t       = (screen.availHeight - h) / 2,
	popPage = '#starlink';

	// Load Audio
	var audio = new Audio("/sounds/star.mp3");
	audio.value=11.1;
	audio._startTime=0;
	audio.currentTime = 0;  

	$(popPage).on('click',function(event){
		audio.play();
		newWindow = window.open("#","window","width= "+ w + ",height=" + h + ",left=" + l + ",top=" + t + ", scrollbars = yes, location = no, toolbar = no, menubar = no, status = no");
		if (audio.currentTime - audio._startTime >= audio.value){    
			audio.currentTime = 0;
	   } 
		return false;
	});

	$(audio).on('timeupdate', function() {
		if (audio.currentTime - audio._startTime >= audio.value){    
			  audio.pause(); 
		 };
	});

});