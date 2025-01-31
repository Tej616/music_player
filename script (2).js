const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
    isPlaying = false;
});

prevBtn.addEventListener('click', () => {
    // Add logic to play the previous track
    alert('Previous track functionality not implemented yet.');
});

nextBtn.addEventListener('click', () => {
    // Add logic to play the next track
    alert('Next track functionality not implemented yet.');
});
