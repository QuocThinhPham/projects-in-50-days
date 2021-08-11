const toggleButtonss = document.querySelectorAll('.faq-toggle');

toggleButtonss.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    })
})