const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const containerWrapper = document.querySelector('.container');

openButton.addEventListener('click', () =>
    containerWrapper.classList.add('show-nav')
)
closeButton.addEventListener('click', () =>
    containerWrapper.classList.remove('show-nav')
)