"use strict";

// modal

const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');

function openModal() {
    modal.style.display = 'block';   
}

function closeModal() {
    modal.style.display = 'none';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
});

function showModalByScroll() {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
}
window.addEventListener('scroll', showModalByScroll);




