const buttons = document.querySelectorAll(".category-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Ambil kategori tombol yang diklik
        const filter = button.dataset.filter;
        const instagramLink = document.querySelector("#instagram-link");
        const comingSoon = document.querySelector(".coming-soon");

comingSoon.style.display =
    filter === "visual" || filter === "music" ? "block" : "none";

instagramLink.style.display =
    filter === "digital-art" ? "block" : "none";

        // Atur tombol aktif
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Tampilkan gambar sesuai kategori
        items.forEach(item => {
            const category = item.dataset.category;

            if (filter === "all" || filter === category) {
    item.classList.remove("is-hidden");
} else {
    item.classList.add("is-hidden");
}
        });

    });
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImages = document.querySelectorAll(".gallery-item img");
const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.getElementById("lightbox-prev");
const nextButton = document.getElementById("lightbox-next");

let currentImages = [];
let currentIndex = 0;

// Tampilkan gambar
function showImage(index) {
    currentIndex = (index + currentImages.length) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex].src;
}

// Buka gambar
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        currentImages = Array.from(items)
            .filter(item => item.style.display !== "none")
            .map(item => item.querySelector("img"));

        currentIndex = currentImages.indexOf(img);

        lightbox.style.display = "flex";
        showImage(currentIndex);
    });
});

// Gambar sebelumnya
prevButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
});

// Gambar berikutnya
nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

// Tutup dengan tombol X
closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Tutup dengan klik area gelap
lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

revealElements.forEach(element => {
    observer.observe(element);
});

