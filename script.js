/*==================================================
Portfolio Script
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
    Loader
    ==============================================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 600);

    });



    /*==============================================
    Typing Effect
    ==============================================*/

    const typing = document.getElementById("typing-text");

    const words = [

        "Software Developer",

        "Full Stack Developer",

        "Web Developer",

        "UI / UX Designer"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function type() {

        const current = words[wordIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;

            }

        } else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type, deleting ? 45 : 90);

    }

    if (typing) {

        type();

    }



    /*==============================================
    Scroll Animation
    ==============================================*/

    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    fadeElements.forEach(item => {

        observer.observe(item);

    });



    /*==============================================
    Progress Bar
    ==============================================*/

    const progress = document.getElementById("progress-bar");

    window.addEventListener("scroll", () => {

        const scroll = document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight -

            document.documentElement.clientHeight;

        const percent = (scroll / height) * 100;

        progress.style.width = percent + "%";

    });



    /*==============================================
    Back To Top
    ==============================================*/

    const topBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /*==============================================
    Dark Mode
    ==============================================*/

    const themeBtn = document.getElementById("theme-btn");

    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {

        body.classList.add("dark");

        if (themeBtn) {

            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        }

    }

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {

                localStorage.setItem("theme", "dark");

                themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

            } else {

                localStorage.setItem("theme", "light");

                themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

            }

        });

    }



    /*==============================================
    Active Menu
    ==============================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });



    /*==============================================
    Smooth Scroll
    ==============================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });




const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("galleryImage");
const modalTitle = document.getElementById("galleryTitle");
const modalDesc = document.getElementById("galleryDescription");

const closeBtn = document.querySelector(".gallery-close");
const prevBtn = document.querySelector(".gallery-prev");
const nextBtn = document.querySelector(".gallery-next");

let images = [];
let current = 0;

function showImage(index){

    const figure = images[index];

    const img = figure.querySelector("img");

    const caption = figure.querySelector("figcaption");

    const strong = caption.querySelector("strong");

    modalImg.src = img.src;

    modalTitle.textContent = strong ? strong.textContent : "";

    modalDesc.textContent = caption.textContent.replace(modalTitle.textContent,"").trim();

}

document.querySelectorAll(".project-card").forEach(card=>{

    card.style.cursor="pointer";

    card.addEventListener("click",(e)=>{

        if(e.target.closest("a") || e.target.closest("iframe")) return;

        const gallery = card.querySelector(".project-gallery");

        if(!gallery) return;

        images = [...gallery.querySelectorAll("figure")];

        const clickedFigure = e.target.closest("figure");

        current = clickedFigure
            ? images.indexOf(clickedFigure)
            : 0;

        showImage(current);

        modal.classList.add("active");

    });

});

nextBtn.onclick=()=>{

    current++;

    if(current>=images.length) current=0;

    showImage(current);

}

prevBtn.onclick=()=>{

    current--;

    if(current<0) current=images.length-1;

    showImage(current);

}

closeBtn.onclick=()=>{

    modal.classList.remove("active");

}

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

}

document.addEventListener("keydown",(e)=>{

    if(!modal.classList.contains("active")) return;

    if(e.key==="ArrowRight") nextBtn.click();

    if(e.key==="ArrowLeft") prevBtn.click();

    if(e.key==="Escape") closeBtn.click();

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

    /*==============================================
    Gallery Hover
    ==============================================*/

   document.querySelectorAll('a[href]').forEach(link => {

    if(link.hostname !== window.location.hostname){

        link.target = "_blank";

        link.rel = "noopener noreferrer";

    }

});

});