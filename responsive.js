document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});


let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll ke bawah -> sembunyikan navbar
        navbar.classList.add("nav-hidden");
    } else {
        // Scroll ke atas -> tampilkan navbar
        navbar.classList.remove("nav-hidden");
    }

    lastScrollTop = scrollTop;
});


function openModal(title, text, imageUrl) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-text").innerText = text;
    document.getElementById("modal-image").src = imageUrl;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function booking() {
    alert("Booking berhasil! Tim kami akan segera menghubungi Anda.");
}