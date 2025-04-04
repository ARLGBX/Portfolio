let registation = false;
let NAME;
let Surname;
let Email;
let Password;

document.getElementById("help__name").addEventListener("submit", function (event) {
    NAME = event.target.value;
})
document.getElementById("help__telephone").addEventListener("submit", function (event) {
    Surname = event.target.value;
})
document.getElementById("help__email").addEventListener("submit", function (event) {
    Email = event.target.value;
})
document.getElementById("help__comment").addEventListener("submit", function (event) {
    Password = event.target.value;
})

const inputs = document.querySelectorAll("#help__info input");
const label = document.querySelectorAll("#help__info label");

for (let i = 0; i < inputs.length; i++) {
    if (inputs.value.trim === "") {
        label.textContent = "DQWDQWDQ"
    }
}

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