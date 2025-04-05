let registation = false;
const inputs = document.querySelectorAll("#help__info input");
const label = document.querySelectorAll("#help__info label");

document.getElementById("modal__button").addEventListener('click', function() {
    const username = document.getElementById('modal__name').value;
    const surname = document.getElementById('modal__surname').value;
    const email = document.getElementById('modal__email').value;
    const Password = document.getElementById('modal__password').value;

    const userData = {
        username: username,
        surname: surname,
        email: email,
        password: Password,
    }
    const userJson = JSON.stringify(userData);
    localStorage.setItem('user', userJson);

    registation = true;
})

new Swiper('.workers__sliders', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
new Swiper('.recent-works-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});


let DivAccount = false;

const account = document.querySelector('.header__account-window');

const clickersAccount = document.getElementsByClassName("column__trans-account");

function information() {
    if (DivAccount === false) {
        account.style.display = "block";
        DivAccount = true;
    } else if (DivAccount === true) {
        account.style.display = "none";
        DivAccount = false;
    }
}
for (let i = 0; i < clickersAccount.length; i++) {
    if (i === 0) {
        clickersAccount[i].onclick = information;
    }
}

// MODAL

const modal = document.querySelector('.modalWindow');
const dark = document.querySelector('.DARK');
const clickersModal = document.getElementsByClassName("nav__discounts");

function modalWin () {
    dark.style.display = "block";
    modal.style.display = "flex";
}
for (let i = 0; i < clickersModal.length; i++) {
    if (i === 0) {
        clickersModal[i].onclick = modalWin;
    }
}

// POPAP HELP

const popap = document.querySelector('.modal-help');
const clickersPopap = document.getElementsByClassName("modal-help");

function PopapWin () {
    popap.style.top = '10%';
}
for (let i = 0; i < clickersPopap.length; i++) {
    if (i === 0) {
        clickersPopap[i].onclick = PopapWin;
    }
}