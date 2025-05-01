if (window.innerWidth > 1020) {

// прокрутка скидок
    let tl = gsap.timeline({ defaults: { duration: 1,  } })
    tl.from(
        '.nav__links',
        { opacity: 0, rotateX: 0, rotateY: 0, },
        { opacity: 1, x: 0, y: 0, rotateY: 215, ease: "power1.inOut"}
    )
    const dl = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ease: "power1.inOut", duration: 0.5, } });
    dl.fromTo(
        '.nav__discounts-content',
        { opacity: 0, x: -2000, y: 0, },
        { opacity: 1, x: 0, y: 0, ease: "back.out(1.7)", duration: 2}
    )
    dl.to({}, { duration: 2});
    dl.fromTo(
        '.nav__discounts-content',
        {x: 0, y: 0,  },
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
    rt.fromTo(
        '.resume__image',
        { opacity: 0, x: 100, zIndex: -1},
        { opacity: 1, x: 0,zIndex: -1, ease: "power1.inOut"}
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
            markers: false
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
            markers: false
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
            markers: false
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
            markers: false
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
            markers: false
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
            markers: false
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
            markers: false
        }
    });

// изображения выдвигаются

    gsap.from(".block__border-one", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".block__border-one",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });
    gsap.from(".block__border-two", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".block__border-two",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });
    gsap.from(".block__border-three", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".block__border-three",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });
    gsap.from(".block__image-four", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".block__image-four",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });
// странца сервиса



    gsap.from("#services__pictur-one", {
        x: 100,
        opacity: 0,
        duration: 3,
        delay: 0.5,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: "#services__pictur-one",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });
    gsap.from("#services__title-one", {
        x: -100,
        opacity: 0,
        duration: 3,
        delay: 0.5,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: "#services__title-one",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });
    gsap.from("#services__paragraph-one", {
        y: 100,
        opacity: 0,
        duration: 3,
        delay: 0.5,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: "#services__paragraph-one",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });

    gsap.fromTo(
        '.services__block-one',
        { opacity: 0, x: -100, y: -100, rotate: -30 },
        { opacity: 100, x: 0, y: 0, rotate: 0, duration: 2,
            scrollTrigger: {
                trigger: ".services__block-one",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '.services__block-two',
        { opacity: 0, y: -100 },
        { opacity: 100, x: 0, y: 0, duration: 2,
            scrollTrigger: {
                trigger: ".services__block-two",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '.services__block-three',
        { opacity: 0, x: 100, y: -100, rotate: 30 },
        { opacity: 100, x: 0, y: 0, rotate: 0, duration: 2,
            scrollTrigger: {
                trigger: ".services__block-three",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '.services__block-four',
        { opacity: 0, x: -100 },
        { opacity: 100, x: 0, y: 0, duration: 1,
            scrollTrigger: {
                trigger: ".services__block-four",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.from(
        '.services__block-five',
        {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".services__block-five",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );

    gsap.fromTo(
        '.services__block-six',
        { opacity: 0, x: 100, y: 100 },
        { opacity: 100, x: 0, y: 0, duration: 1,
            scrollTrigger: {
                trigger: ".services__block-six",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '.services__block-seven',
        { opacity: 0, y: -100 },
        { opacity: 100, y: 0, duration: 1, ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".services__block-seven",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )

//секция о нас

    gsap.fromTo(
        '#description__tagline',
        { opacity: 0, x: -200 },
        { opacity: 100, x: 0, delay: 1.5,
            scrollTrigger: {
                trigger: "#description__tagline",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#description__paragraph',
        { opacity: 0, x: -200 },
        { opacity: 100, x: 0, delay: 1.5,
            scrollTrigger: {
                trigger: "#description__paragraph",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.from(
        '.description__button',
        {
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: ".description__button",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );
    gsap.from(
        '.description__line',
        {
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: ".description__line",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );
    gsap.fromTo(
        '#statistics__photo-one',
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, delay: 1,
            scrollTrigger: {
                trigger: "#statistics__photo-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#statistics__photo-two',
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, delay: 1.3,
            scrollTrigger: {
                trigger: "#statistics__photo-two",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#statistics__photo-three',
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, delay: 1.5,
            scrollTrigger: {
                trigger: "#statistics__photo-three",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )



    gsap.fromTo(
        '#block-organization__quantity',
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 1,
            scrollTrigger: {
                trigger: "#block-organization__quantity",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#block-organization__space',
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 1.2,
            scrollTrigger: {
                trigger: "#block-organization__space",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#block-organization__years',
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 1.4,
            scrollTrigger: {
                trigger: "#block-organization__years",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#block-organization__orders',
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 1.6,
            scrollTrigger: {
                trigger: "#block-organization__orders",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )

//секция кто мы

    gsap.fromTo(
        '#details__header-one',
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1,
            scrollTrigger: {
                trigger: "#details__header-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#details__paragraph-one',
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1.5,
            scrollTrigger: {
                trigger: "#details__paragraph-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.from(
        '#details__block-one',
        {
            opacity: 0,
            duration: 7,
            scrollTrigger: {
                trigger: "#details__block-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );


    gsap.fromTo(
        '#details__header-two',
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, duration: 1,
            scrollTrigger: {
                trigger: "#details__header-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#details__paragraph-two',
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, duration: 1.5,
            scrollTrigger: {
                trigger: "#details__paragraph-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.from(
        '#details__block-two',
        {
            opacity: 0,
            duration: 7,
            scrollTrigger: {
                trigger: "#details__block-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );

    gsap.fromTo(
        '#details__header-three',
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1,
            scrollTrigger: {
                trigger: "#details__header-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#details__paragraph-three',
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1.5,
            scrollTrigger: {
                trigger: "#details__paragraph-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.from(
        '#details__block-three',
        {
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: "#details__block-one",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );
//секции с свипером
    gsap.fromTo(
        '.workers__tagline',
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, duration: 1,
            scrollTrigger: {
                trigger: ".workers__tagline",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.from(
        '.discounts__tagline',
        {
            opacity: 0,
            duration: 4,
            scrollTrigger: {
                trigger: ".discounts__tagline",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );

    gsap.fromTo(
        '.new__tagline',
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1,
            scrollTrigger: {
                trigger: ".new__tagline",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
//инстаграм
    gsap.fromTo(
        '.instagram__tagline',
        { opacity: 0, x: -200 },
        { opacity: 100, x: 0, duration: 1,
            scrollTrigger: {
                trigger: ".instagram__tagline",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__header',
        { opacity: 0, x: -200 },
        { opacity: 100, x: 0, duration: 1,
            scrollTrigger: {
                trigger: "#instagram__header",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__paragraph',
        { opacity: 0, x: -200 },
        { opacity: 100, x: 0, duration: 1,
            scrollTrigger: {
                trigger: "#instagram__paragraph",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.from(
        '.instagram__button',
        {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".instagram__button",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );

// скидка за покупку

    gsap.fromTo(
        '#discounts__line-one',
        { opacity: 0, x: -200 },
        { opacity: 100, x: 0, duration: 3,
            scrollTrigger: {
                trigger: "#discounts__line-one",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#discounts__line-two',
        { opacity: 0, x: 200 },
        { opacity: 100, x: 0, duration: 3,
            scrollTrigger: {
                trigger: "#discounts__line-two",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '.discounts__form-button',
        { opacity: 0, y: -200 },
        { opacity: 100, y: 0, duration: 1,
            scrollTrigger: {
                trigger: ".discounts__form-button",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#discounts__information',
        { opacity: 0, y: 200 },
        { opacity: 100, y: 0, duration: 1,
            scrollTrigger: {
                trigger: "#discounts__information",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )


    gsap.fromTo(
        '#instagram__block-one',
        { opacity: 0, y: 340,  x: 340},
        { opacity: 100, y: 0, x:0, duration: 0.5,
            scrollTrigger: {
                trigger: "#instagram__block-one",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__block-two',
        { opacity: 0, y: 340,},
        { opacity: 100, y: 0, duration: 0.5,
            scrollTrigger: {
                trigger: "#instagram__block-two",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__block-three',
        { opacity: 0, y: 340,  x: -340},
        { opacity: 100, y: 0, x:0, duration: 0.5,
            scrollTrigger: {
                trigger: "#instagram__block-three",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__block-four',
        { opacity: 0, x: 340,},
        { opacity: 100, x: 0, duration: 0.5,
            scrollTrigger: {
                trigger: "#instagram__block-four",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__block-six',
        { opacity: 0, x: -340,},
        { opacity: 100, x: 0, duration: 0.5,
            scrollTrigger: {
                trigger: "#instagram__block-six",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__block-seven',
        { opacity: 0, x: 340, y: -340},
        { opacity: 100, x: 0, y: 0, duration: 0.5,
            scrollTrigger: {
                trigger: "#instagram__block-seven",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__block-eight',
        { opacity: 0, y: -340},
        { opacity: 100, y: 0, duration: 0.5,
            scrollTrigger: {
                trigger: "#instagram__block-eight",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#instagram__block-nine',
        { opacity: 0, y: -340, x: -340},
        { opacity: 100, y: 0, x: 0, duration: 0.5,
            scrollTrigger: {
                trigger: "#instagram__block-nine",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )


// вопросы

    gsap.fromTo(
        '.questions__tagline',
        { opacity: 0, x: 200 },
        { opacity: 100, x: 0, duration: 2, ease: "bounce.out",
            scrollTrigger: {
                trigger: ".questions__tagline",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#questions__paragraph',
        { opacity: 0, x: 200 },
        { opacity: 100, x: 0, duration: 1.2, ease: "bounce.out",
            scrollTrigger: {
                trigger: "#questions__paragraph",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#name',
        { opacity: 0, x: 200 },
        { opacity: 100, x: 0, duration: 1.4, ease: "bounce.out",
            scrollTrigger: {
                trigger: "#name",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#phone',
        { opacity: 0, x: 200 },
        { opacity: 100, x: 0, duration: 1.2, ease: "bounce.out",
            scrollTrigger: {
                trigger: "#phone",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#email-2',
        { opacity: 0, x: 200 },
        { opacity: 100, x: 0, duration: 1, ease: "bounce.out",
            scrollTrigger: {
                trigger: "#email-2",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '.questions__button-block',
        { opacity: 0, x: -500 },
        { opacity: 100, x: 0, duration: 1, ease: "bounce.out",
            scrollTrigger: {
                trigger: ".questions__button-block",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )

    gsap.from(
        '.questions__inspiration',
        {
            opacity: 0,
            duration: 4,
            scrollTrigger: {
                trigger: ".questions__inspiration",
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
            }
        }
    );

//пакеты услуг

    gsap.from("#services__pictur-two", {
        x: 100,
        opacity: 0,
        duration: 3,
        delay: 0.5,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: "#services__pictur-two",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });
    gsap.from("#services__title-two", {
        x: -100,
        opacity: 0,
        duration: 3,
        delay: 0.5,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: "#services__title-two",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });
    gsap.from("#services__paragraph-two", {
        y: 100,
        opacity: 0,
        duration: 3,
        delay: 0.5,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: "#services__paragraph-two",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });

    gsap.fromTo(
        '#block__set-one',
        { opacity: 0, x: -500 },
        { opacity: 100, x: 0, duration: 2, delay: 1.5, ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#block__set-one",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#block__set-two',
        { opacity: 0, x: -500 },
        { opacity: 100, x: 0, duration: 2, delay: 1, ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#block__set-two",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )
    gsap.fromTo(
        '#block__set-three',
        { opacity: 0, x: -500 },
        { opacity: 100, x: 0, duration: 2, ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#block__set-three",
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
            }}
    )

//кнопка
    gsap.from(".start", {
        opacity: 0,
        duration: 10,
        delay: 2,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: ".start",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
        }
    });

//footer

// gsap.fromTo(
//     '#footer__block-one',
//     { opacity: 0, x: -500 },
//     { opacity: 100, x: 0, duration: 4, ease: "back.out(1.7)",
//         scrollTrigger: {
//             trigger: "#footer__block-one",
//             start: "top 90%",
//             toggleActions: "play none none none",
//             markers: false
//         }}
// )
// gsap.fromTo(
//     '#footer__block-three',
//     { opacity: 0, x: 500 },
//     { opacity: 100, x: 0, duration: 4, ease: "back.out(1.7)",
//         scrollTrigger: {
//             trigger: "#footer__block-three",
//             start: "top 90%",
//             toggleActions: "play none none none",
//             markers: false
//         }}
// )
// gsap.fromTo(
//     '#footer__block-two',
//     { opacity: 0, y: 300 },
//     { opacity: 100, y: 0, duration: 4, delay: 3, ease: "back.out(1.5)",
//         scrollTrigger: {
//             trigger: "#footer__block-two",
//             start: "top 90%",
//             toggleActions: "play none none none",
//             markers: false
//         }}
// )




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
//         markers: false       // покажет маркеры для отладки
//     }
// });
// gsap.
}