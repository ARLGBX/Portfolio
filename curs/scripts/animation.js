
// прокрутка скидок
let tl = gsap.timeline({ defaults: { duration: 1,  } })
tl.from(
    '.nav__links',
    { opacity: 0, rotateX: 0, rotateY: 0},
    { opacity: 1, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
)
tl.from(
    '.nav__search-icon',
    { opacity: 0, rotateX: 0, rotateY: 0},
    { opacity: 1, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
)
const dl = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ease: "power1.inOut", duration: 0.5} });
dl.fromTo(
    '.nav__discounts-content',
    { opacity: 0, x: -2000, y: 0, },
    { opacity: 1, x: 0, y: 0, ease: "back.out(1.7)", duration: 2}
)
dl.to({}, { duration: 2});
dl.fromTo(
    '.nav__discounts-content',
    {x: 0, y: 0, },
    { opacity: 1, x: 2000, y: 0, ease: "power1.inOut",duration: 1}
)

// приветственная страница

let rt = gsap.timeline({ defaults: { duration: 0.5,} })
rt.fromTo(
    '.resume__stury-h1',
    { opacity: 0, x: -100, delay: 2},
    { opacity: 1, x: 0, ease: "power1.inOut"}
)
rt.fromTo(
    '.resume__paragraph-one',
    { opacity: 0, x: -100},
    { opacity: 1, x: 0, ease: "power1.inOut"}
)
rt.fromTo(
    '.resume__paragraph-two',
    { opacity: 0, x: -100},
    { opacity: 1, x: 0, ease: "power1.inOut"}
)
rt.fromTo(
    '.resume__paragraph-three',
    { opacity: 0, x: -100},
    { opacity: 1, x: 0, ease: "power1.inOut"}
)

// при прокрутке главная страница
gsap.from(".welcome__pictur-two", {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".welcome__pictur-two",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true
    }
});
gsap.from(".welcome__pictur-four", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".welcome__pictur-four",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true
    }
});
gsap.from(".welcome__hello", {
    x: -100,
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".welcome__pictur-four",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true
    }
});

gsap.from(".welcome__pictur-one", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".welcome__pictur-one",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true
    }
});
gsap.from(".welcome__name-studio", {
    opacity: 0,
    duration: 3,
    delay: 1,
    scrollTrigger: {
        trigger: ".welcome__pictur-one",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true
    }
});

gsap.from(".welcome__pictur-three", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".welcome__pictur-three",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true
    }
});
gsap.from(".welcome__name", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".welcome__name",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true
    }
});






// окно выбора языка

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.querySelector('.search-icon__choice');
//     const drop = document.querySelector('.search-icon__drop');
//     const dropdown = document.querySelector('.language__menu-language-two');
//
//     toggleButton.addEventListener('click', function (e) {
//         e.stopPropagation();
//
//         const isHidden = window.getComputedStyle(dropdown).display === 'none';
//         let lt = gsap.timeline({ defaults: { duration: 1,} })
//         if (isHidden === true) {
//             dropdown.style.display = 'block';
//             lt.fromTo(
//                 '.search-icon__drop',
//                 { opacity: 0, rotateX: 0, rotateY: 0},
//                 { opacity: 100, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
//             )
//             lt.from(
//                 '.language__menu-language',
//                 { opacity: 0, rotateX: 0, rotateY: 0, display: 'block'},
//                 { opacity: 100, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
//             )
//             lt.from(
//                 '.language__menu-language-two',
//                 { opacity: 0, rotateX: 0, rotateY: 0, display: 'block'},
//                 { opacity: 100, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
//             )
//         }
//         if (isHidden === false) {
//             dropdown.style.display = 'none';
//             lt.fromTo(
//                 '.search-icon__drop',
//                 { opacity: 0, rotateX: 0, rotateY: 0},
//                 { opacity: 100, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
//             )
//             lt.from(
//                 '.language__menu-language',
//                 { opacity: 0, rotateX: 0, rotateY: 0, display: 'block'},
//                 { opacity: 100, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
//             )
//             lt.from(
//                 '.language__menu-language-two',
//                 { opacity: 0, rotateX: 0, rotateY: 0, display: 'block'},
//                 { opacity: 100, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
//             )
//         }
//
//
//         dropdown.style.display = isHidden ? 'block' : 'none';
//         drop.style.paddingTop = isHidden ? '30px' : '0';
//     });
//
//     document.addEventListener('click', function () {
//         dropdown.style.display = 'none';
//         drop.style.paddingTop = '0';
//     });
// });




// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".nav__function", {
//     rotationAngle: 100,
//     opacity: 0,           // элемент изначально прозрачный
//     duration: 1,          // продолжительность анимации 1 секунда
//     scrollTrigger: {
//         trigger: ".box",    // следим за этим элементом
//         start: "top 80%",   // когда верх элемента на 80% окна
//         toggleActions: "play none none none",
//         markers: true       // покажет маркеры для отладки
//     }
// });
// gsap.