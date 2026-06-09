/* ==========================================
   AOS INIT
========================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
               loader.classList.add("hide");
    }, 1200);

});

/* ==========================================
   NAVBAR SCROLL
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* ==========================================
   DARK MODE TOGGLE
========================================== */

const themeToggle = document.querySelector(".theme-toggle");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains("light-mode")
    ) {

        localStorage.setItem(
            "theme",
            "light"
        );

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor =
    document.querySelector(".cursor");

const cursor2 =
    document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {

    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";

    cursor2.style.left =
        e.clientX + "px";

    cursor2.style.top =
        e.clientY + "px";

});

document
.querySelectorAll(
    "a,button,.glass-card"
)
.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            cursor.classList.add(
                "active"
            );

            cursor2.classList.add(
                "active"
            );

        }
    );

    item.addEventListener(
        "mouseleave",
        () => {

            cursor.classList.remove(
                "active"
            );

            cursor2.classList.remove(
                "active"
            );

        }
    );

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(
        ".counter"
    );

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const counter =
                        entry.target;

                    const target =
                        +counter.dataset
                        .target;

                    let count = 0;

                    const updateCounter =
                        () => {

                            const increment =
                                target /
                                80;

                            if (
                                count <
                                target
                            ) {

                                count +=
                                    increment;

                                counter.innerText =
                                    Math.ceil(
                                        count
                                    );

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.innerText =
                                    target;

                            }

                        };

                    updateCounter();

                    counterObserver.unobserve(
                        counter
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );

counters.forEach(counter => {

    counterObserver.observe(
        counter
    );

});

/* ==========================================
   REVEAL ON SCROLL
========================================== */

const reveals =
    document.querySelectorAll(
        ".reveal"
    );

function revealElements() {

    reveals.forEach(item => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            item.getBoundingClientRect()
            .top;

        const revealPoint = 120;

        if (
            revealTop <
            windowHeight -
                revealPoint
        ) {

            item.classList.add(
                "active"
            );

        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();

/* ==========================================
   SKILL BAR ANIMATION
========================================== */

const skillBars =
    document.querySelectorAll(
        ".progress-bar"
    );

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    skillObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});

/* ==========================================
   GSAP ANIMATIONS
========================================== */

gsap.registerPlugin(
    ScrollTrigger
);

gsap.from(
    ".hero-content h1",
    {
        y: 80,
        opacity: 0,
        duration: 1.2
    }
);

gsap.from(
    ".hero-content h2",
    {
        y: 80,
        opacity: 0,
        delay: 0.3,
        duration: 1.2
    }
);

gsap.from(
    ".hero-content p",
    {
        y: 80,
        opacity: 0,
        delay: 0.5,
        duration: 1.2
    }
);

gsap.from(
    ".hero-btns",
    {
        y: 80,
        opacity: 0,
        delay: 0.8,
        duration: 1.2
    }
);

gsap.utils
.toArray(".glass-card")
.forEach(card => {

    gsap.from(card, {

        y: 80,

        opacity: 0,

        duration: 1,

        scrollTrigger: {

            trigger: card,

            start:
                "top 85%"

        }

    });

});

/* ==========================================
   ACTIVE NAV LINKS
========================================== */

const sections =
    document.querySelectorAll(
        "section"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            if (
                pageYOffset >=
                sectionTop - 200
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);

/* ==========================================
   SMOOTH SCROLL
========================================== */

document
.querySelectorAll(
    'a[href^="#"]'
)
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            document
                .querySelector(
                    this.getAttribute(
                        "href"
                    )
                )
                .scrollIntoView({

                    behavior:
                        "smooth"

                });

        }
    );

});

/* ==========================================
   END OF FILE
========================================== */