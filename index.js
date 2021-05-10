const modalContainer = document.querySelector('.modal-container');
const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('label');
const btnContainer = document.querySelector('.btn-container');
const secondClick = false;
const duration = 1000;

btn.addEventListener('click', () => {
    modalContainer.style.display = "flex";
    btnContainer.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = "none";
    btnContainer.style.display = 'flex';
})