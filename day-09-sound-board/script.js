const sounds = ['applause', 'boo', 'gasp'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.addEventListener('click', () => {
        stopAudios();
        document.getElementById(sound).play();
    })
    btn.innerText = sound;
    document.getElementById('buttons').appendChild(btn);
})

function stopAudios() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
    })
}