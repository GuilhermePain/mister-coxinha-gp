function showModal() {
    const btnPedirCongelado = document.querySelectorAll('#btn-pedir-congelado');
    const fadeBackground = document.querySelector('#fade');
    const modal = document.querySelector('#modal');
    const btnCancel = document.querySelector('#btn-cancel');

    const showModal = () => {
        fadeBackground.style.display = 'block';
        modal.style.display = 'flex';
    }

    const closeModal = () => {
        fadeBackground.style.display = 'none';
        modal.style.display = 'none';
    }

    btnPedirCongelado.forEach(buttons => {
        buttons.addEventListener('click', showModal);
    })
    
    btnCancel.addEventListener('click', closeModal)
    fadeBackground.addEventListener('click', closeModal);
}

showModal();