const visitedPlaces = [
    { id: 1, name: "Sajek Valley", district: "Rangamati", description: "Valley of clouds and pristine green hills.", date: "2025", image: "https://via.placeholder.com/600x400", lat: 23.3817, lng: 92.2938 },
    { id: 2, name: "Cox's Bazar", district: "Cox's Bazar", description: "Longest natural sea beach.", date: "2025", image: "https://via.placeholder.com/600x400", lat: 21.4272, lng: 92.0058 },
    { id: 3, name: "Ratargul Swamp Forest", district: "Sylhet", description: "Freshwater swamp trail.", date: "2024", image: "https://via.placeholder.com/600x400", lat: 25.0134, lng: 91.9379 }
];

const galleryItems = [
    { src: "https://via.placeholder.com/800x600", title: "Sajek Cloud Point" },
    { src: "https://via.placeholder.com/800x600", title: "Camping at Bandarban" },
    { src: "https://via.placeholder.com/800x600", title: "Cox's Bazar Sunset" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderVisitedPlaces();
    renderGallery();
    initMap();
    initNavigation();
    initLightbox();
});

function initNavigation() {
    const toggleBtn = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    toggleBtn.addEventListener("click", () => navMenu.classList.toggle("active"));
}

function renderVisitedPlaces() {
    const container = document.getElementById("places-container");
    container.innerHTML = visitedPlaces.map(place => `
        <div class="card">
            <div class="card-img-wrapper"><img src="${place.image}" alt="${place.name}"></div>
            <div class="card-body">
                <h3>${place.name}</h3>
                <p style="color:#0284c7;">${place.district} | ${place.date}</p>
                <p>${place.description}</p>
            </div>
        </div>
    `).join('');
}

function renderGallery() {
    const container = document.getElementById("gallery-container");
    container.innerHTML = galleryItems.map(item => `
        <div class="gallery-item" onclick="openLightbox('${item.src}', '${item.title}')">
            <img src="${item.src}" alt="${item.title}">
        </div>
    `).join('');
}

function initMap() {
    const map = L.map('map').setView([23.6850, 90.3563], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    visitedPlaces.forEach(place => {
        L.marker([place.lat, place.lng]).addTo(map)
         .bindPopup(`<b>${place.name}</b><br>${place.district}`);
    });
}

function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    document.getElementById("lightbox-close").onclick = () => lightbox.style.display = "none";
}

function openLightbox(src, title) {
    const lightbox = document.getElementById("lightbox");
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-caption").innerText = title;
    lightbox.style.display = "flex";
}
