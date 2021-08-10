const audioCtx = new AudioContext();
const audio = new Audio("/sounds/coinsound.mp3");

const source = audioCtx.createMediaElementSource(audio);
source.connect(audioCtx.destination);