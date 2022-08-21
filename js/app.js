const scrollUp = document.getElementById("scroll-up");
//scroll screen up
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

const checkbox = document.querySelector("#checkbox");
//switch page themes
checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
});

/* const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("ul");

function openMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
} */