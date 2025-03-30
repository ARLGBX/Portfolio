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



let DivAccount = false;

const account = document.querySelector('.header__account-window');

const clickers = document.getElementsByClassName("column__trans-account");

function information() {
    if (DivAccount === false) {
        account.style.display = "block";
        DivAccount = true;
    } else if (DivAccount === true) {
        account.style.display = "none";
        DivAccount = false;
    }
}
for (let i = 0; i < clickers.length; i++) {
    if (i === 0) {
        clickers[i].onclick = information;
    }
}
