var audio = new Audio("/sounds/star.mp3");

audio.value = 11.1;
audio._startTime = 0;
audio.currentTime = 0;  

audio.play();


 
audio.addEventListener("timeupdate", function() {
    if (audio.currentTime - audio._startTime >= audio.value){    
        audio.pause(); 
    };

});