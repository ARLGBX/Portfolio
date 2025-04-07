
// SLIDER

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

// REGISTRATION DATA SAVE

let DivAccount = false;
let registation = false;


if (registation === true) {

    // ACCOUNT WINDOW

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
} else if (registation === false) {

    // REGISTRATION MODAL

    const modal = document.querySelector('.modalWindow');
    const dark = document.querySelector('.DARK');

    document.getElementById("account-window").addEventListener('click', function (event) {
        modal.style.display = "block";
        dark.style.display = "flex";
    });

    document.addEventListener('click', function (event) {
        const isClickInsideModal = modal.contains(event.target);
        const isClickOnOpenButton = event.target.closest("#account-window");

        if (!isClickOnOpenButton && !isClickInsideModal) {
            modal.style.display = "none";
            dark.style.display = "none";
        }
    });

    function saveDate() {
        const name = document.getElementById("modal__name").value;
        const surname = document.getElementById("modal__surname").value;
        const email = document.getElementById("modal__email").value;
        const password = document.getElementById("modal__password").value;

        const userData = {
            name: name,
            surname: surname,
            email: email,
            password: password
        };

        const normalDate = JSON.stringify(userData);
        localStorage.setItem('userData', normalDate);

        registation = true;
    }

    document.getElementById("modal__button").addEventListener('click', saveDate);


}





// POPAP HELP

const popap = document.querySelector('.modal-help');
const clickersPopap = document.getElementsByClassName("modal-help");

function PopapWin () {
    popap.style.top = '100%';
}
for (let i = 0; i < clickersPopap.length; i++) {
    if (i === 0) {
        clickersPopap[i].onclick = PopapWin;
    }
}