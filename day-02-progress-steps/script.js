const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currenActive = 1;


prev.addEventListener('click', () => {
    currenActive--;

    if (currenActive < 1) {
        currenActive = 1;
    }
    update();
})

next.addEventListener('click', () => {
    currenActive++;

    if (currenActive > circles.length) {
        currenActive = circles.length;
    }
    update();
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currenActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (--actives.length / --circles.length) * 100 + '%';

    if (currenActive === 1) {
        prev.disabled = true;
    } else if (currenActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}