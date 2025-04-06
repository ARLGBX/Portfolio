
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
    const modal = document.querySelector('.modalWindow');
    const dark = document.querySelector('.DARK');

    document.getElementById("account-window").addEventListener('click', function (event) {
        modal.style.display = "block";
        dark.style.display = "flex";
    });

    document.addEventListener('click', function (event) {
        const isClickInsideModal = modal.contains(event.target);
        const isClickOnOpenButton = event.target.closest("#account-window");

        if (!isClickOnOpenButton) {
            modal.style.display = "none";
            dark.style.display = "none";
        }
    });



}

// ACCOUNT WINDOW



// REGISTRATION MODAL



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