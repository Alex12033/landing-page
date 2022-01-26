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
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const obj = JSON.stringify(Object.fromEntries(formData.entries()));
    
    postData('http://localhost:3000/requests', obj)
        .then(data => {
            console.log(data);
        }).catch(() => {
            console.log('ERROR');
        }).finally(() => {
            form.reset();
        });
});