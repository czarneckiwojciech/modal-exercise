const modalContainer = document.querySelector('.modal-container');
const btnTruth = document.querySelector('.btn-truth');
const closeBtn = document.querySelector('.modal__animation-container');
const btnContainer = document.querySelector('.btn-container');

btnTruth.addEventListener('click', () => {
    modalContainer.classList.toggle("flex-on");
    btnContainer.classList.toggle("flex-off");
})

closeBtn.addEventListener('click', () => {
    modalContainer.classList.toggle("flex-on");
    btnContainer.classList.toggle("flex-off");
})