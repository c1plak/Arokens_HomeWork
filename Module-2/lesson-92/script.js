const openBtn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeModal = () => {
    modal.classList.remove('modal--opened');
}

openBtn.addEventListener('click', () => {
    modal.classList.add('modal--opened');
})

modal.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal();
    }
    
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal--opened')) {
        closeModal();
    }
})