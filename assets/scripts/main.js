function getYear() {
    const date = new Date();
    return date.getFullYear();
}

function insertYear() {
    const spanYear = document.querySelector('#year');
    const year = getYear();
    spanYear.innerHTML = year;
}

insertYear();