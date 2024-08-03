// Animation when clicked
document.addEventListener("DOMContentLoaded", () => {
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
    });
    });
});
});
