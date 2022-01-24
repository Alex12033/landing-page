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

//send data from modal input form with ajax

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const req = new XMLHttpRequest();
    req.open('POST', 'server.php');

    req.setRequestHeader('Content-type', 'aplication/json');
    const formData = new FormData(form);

    const obj = {};
    formData.forEach(function (key, value) {
        obj[key] = value;
    });

    const json = JSON.stringify(obj);

    req.send(json);

    req.addEventListener('load', () => {
        if (req.status === 200) {
            console.log(req.response);
            form.reset();
            closeModal();
        } else {
            console.log("bad");
        }
    });
});