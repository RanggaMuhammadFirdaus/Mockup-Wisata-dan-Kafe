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
    alert("Booking berhasil! Tim kami akan segera menghubungi Anda.");
}

document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Ambil data wisata dari localStorage jika di halaman detail-wisata.html
    if (window.location.href.includes("detail-wisata.html")) {
        let wisata = JSON.parse(localStorage.getItem("selectedWisata"));

        // 🔹 Validasi data sebelum menampilkan
        if (!wisata || !wisata.title || !wisata.description || !Array.isArray(wisata.images) || wisata.images.length === 0) {
            console.warn("Data wisata tidak ditemukan atau tidak lengkap. Kembali ke index.html dalam 1 detik...");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
            return;
        }

        console.log("Data wisata yang ditemukan:", wisata);

        // 🔹 Set data wisata ke elemen HTML
        document.getElementById("wisata-title").textContent = wisata.title;
        document.getElementById("wisata-description").textContent = wisata.description;

        // 🔹 Menampilkan gambar di slider
        let imageContainer = document.getElementById("wisata-images");
        imageContainer.innerHTML = "";

        wisata.images.forEach(img => {
            let slide = document.createElement("div");
            slide.className = "swiper-slide";
            slide.innerHTML = `<img src="${img}" alt="Gambar Wisata">`;
            imageContainer.appendChild(slide);
        });

        // 🔹 Inisialisasi Swiper.js jika ada lebih dari 1 gambar
        if (wisata.images.length > 1) {
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: { delay: 3000, disableOnInteraction: false },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                pagination: { el: '.swiper-pagination', clickable: true }
            });
        }

        // 🔹 Event listener untuk tombol booking
        const bookingButton = document.getElementById("booking-button");
        if (bookingButton) {
            bookingButton.addEventListener("click", function () {
                alert(`Anda telah memilih untuk booking wisata: ${wisata.title}`);
            });
        }
    }
});

/// 🔹 Fungsi untuk menyimpan data wisata dan pindah ke halaman detail
function navigateToDetail(title, description, images) {
    const wisataData = {
        title: title,
        description: description,
        images: images
    };
    localStorage.setItem("selectedWisata", JSON.stringify(wisataData));
    window.location.href = "detail-wisata.html";
}