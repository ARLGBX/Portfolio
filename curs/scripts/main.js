
// REGISTRATION DATA SAVE

let existingData = JSON.parse(localStorage.getItem('userData'));
if (!existingData) {
    // Если данных нет — создаём их впервые
    existingData = { registered: false };
    localStorage.setItem('userData', JSON.stringify(existingData));
}
if (existingData.registered === true) {

    // ACCOUNT WINDOW
    const account = document.querySelector('.header__account-window');

    document.getElementById("account-window").addEventListener('click', function (event) {
        account.style.display = "block";
    });
    document.addEventListener('click', function (event) {
        const isClickInsideModal = account.contains(event.target);
        const isClickOnOpenButton = event.target.closest("#account-window");
        if (!isClickOnOpenButton && !isClickInsideModal) {
            account.style.display = "none";
        }
    });
} else if (existingData.registered === false) {

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

        let existingData = JSON.parse(localStorage.getItem('userData')) || {};

        existingData.name = name;
        existingData.surname = surname;
        existingData.email = email;
        existingData.password = password;
        existingData.registered = true;

        localStorage.setItem('userData', JSON.stringify(existingData));
    }

    document.getElementById("modal__button").addEventListener('click', saveDate);

    document.getElementById("modal__button").addEventListener('click', function (event) {
        location.reload(true);

    });


}


//выход из аккаунта

document.getElementById("account-window-exit").addEventListener('click', function (event) {
    localStorage.removeItem('userData');
    window.location.reload();
});

//бургер меню

document.getElementById("nav__vector").addEventListener('click', function (event) {
    gsap.fromTo(
        '.burder-menu',
        { opacity: 0, x: 0},
        { opacity: 1, x: 300, duration: 1}
    )
});

document.getElementById("back-burger").addEventListener('click', function (event) {
        gsap.fromTo(
            '.burder-menu',
            { opacity: 0, x: 300},
            { opacity: 1, x: 0, duration: 0.5}
        )
})












// POPAP HELP


// document.getElementById("modal-help").addEventListener('click', function (event) {
//     let click = false
//     if (click === false) {
//         gsap.fromTo(
//             ".modal-help",
//             {y:0},
//             {
//                 y: -300,
//                 duration: 1,
//             }
//         );
//         click = true
//     } else if (click === true) {
//         gsap.fromTo(
//             ".modal-help",
//             {y:300},
//             {
//                 y: 0,
//                 duration: 1,
//             }
//         );
//         click = true
//     }
// });
//
//
// const popap = document.querySelector('.modal-help');
// const clickersPopap = document.getElementsByClassName("modal-help");
//
// function PopapWin () {
//     popap.style.top = '10%';
// }
// for (let i = 0; i < clickersPopap.length; i++) {
//     if (i === 0) {
//         clickersPopap[i].onclick = PopapWin;
//     }
// }