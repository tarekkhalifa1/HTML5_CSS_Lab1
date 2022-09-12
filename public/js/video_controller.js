const vid = document.getElementById('vid');
const vidBar = document.getElementById('vidBar');
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');
const full = document.getElementById('full');
const playVid = document.getElementById('play');
const stopVid = document.getElementById('stop');
const startVid = document.getElementById('start');
const decreaseVidDur = document.getElementById('decDur');
const increaseVidDur = document.getElementById('incDur');
const endtVid = document.getElementById('end');
const muteVid = document.getElementById('mute');
const volRangeVid = document.getElementById('volRange');
const speedVid = document.getElementById('speed');


playVid.addEventListener('click', () => {
    var min = parseInt(vid.duration / 60, 10);
    var sec = Math.round(vid.duration % 60);
    endTime.innerHTML = `${min}:${sec}`;
    vid.play();

}); // start video 


stopVid.addEventListener('click', () => {
    vid.pause();

}); // pause video


startVid.addEventListener('click', () => {
    vid.currentTime = 0;

}); // start video from beginning


endtVid.addEventListener('click', () => {
    vid.currentTime = vid.duration;

}); // end video


decreaseVidDur.addEventListener('click', () => {
    vid.currentTime -= 5;

}); // seeking backward

increaseVidDur.addEventListener('click', () => {
    vid.currentTime += 5;

}); // seeking forward


muteVid.addEventListener('click', () => {
    if (vid.muted == true) {
        vid.muted = false;
    } else {
        vid.muted = true;
    }

}); // mute volume



vidBar.addEventListener('input', () => {
    vid.currentTime = vidBar.value;
    
}); // change video by bar


volRangeVid.addEventListener('input', () => {
    vid.volume = volRangeVid.value / 100;

}); // increase and decrease volume


speedVid.addEventListener('input', () => {
    vid.playbackRate = speedVid.value;

}); // change speed video

full.addEventListener('click', () => {
    vid.requestFullscreen();

}); // full screen video


function vidStartTime() {
    var min = parseInt(vid.currentTime / 60, 10);
    var sec = Math.round(vid.currentTime % 60);
    startTime.innerHTML = `${min}:${sec}`;
    vidBar.value = vid.currentTime;
    setInterval(() => {
        vidStartTime();
    }, 1);

} // to display start time of video by minutes and seconds

document.body.addEventListener('load', vidStartTime());



