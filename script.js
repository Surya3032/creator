const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const audioElements = document.querySelectorAll('audio');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Add event listeners to all audio elements
audioElements.forEach(audio => {
    audio.addEventListener('play', function() {
        // Pause all other audio elements
        audioElements.forEach(a => {
            if (a !== audio) {
                a.pause();
            }
        });
    });
});
